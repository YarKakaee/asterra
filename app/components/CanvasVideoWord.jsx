'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function CanvasVideoWord({
	text,
	src,
	active = true,
	className = '',
	activeSize = 'text-6xl sm:text-7xl lg:text-8xl',
	inactiveSize = 'text-4xl sm:text-5xl lg:text-6xl',
	poster,
}) {
	const wrapRef = useRef(null);
	const canvasRef = useRef(null);
	const ghostRef = useRef(null);
	const videoRef = useRef(null);
	const rafRef = useRef(null);
	const [ready, setReady] = useState(false);

	// 🔧 overscan guard to kill the right-edge cut at some DPR/zoom levels
	const OVERSCAN_PX = 8; // you can try 2–4px

	// create a hidden <video> for the active word only
	useLayoutEffect(() => {
		if (!active) return;

		const v = document.createElement('video');
		v.src = src;
		v.loop = true;
		v.muted = true;
		v.playsInline = true;
		v.preload = 'auto';
		if (poster) v.poster = poster;
		videoRef.current = v;

		const onCanPlay = () => setReady(true);
		v.addEventListener('canplay', onCanPlay, { once: true });

		return () => {
			v.pause();
			v.removeEventListener('canplay', onCanPlay);
			videoRef.current = null;
			setReady(false);
		};
	}, [src, poster, active]);

	// play/pause when active changes
	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;
		if (active) v.play().catch(() => {});
		else v.pause();
	}, [active]);

	// Optimized render loop with throttling
	useEffect(() => {
		if (!active) return;
		if (!wrapRef.current || !ghostRef.current || !canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let lastFrameTime = 0;
		const targetFPS = 30; // Reduce from 60fps to 30fps for better performance
		const frameInterval = 1000 / targetFPS;

		function layout() {
			const rect = ghostRef.current.getBoundingClientRect();
			const cssW = Math.max(2, Math.ceil(rect.width)) + OVERSCAN_PX;
			const cssH = Math.max(2, Math.ceil(rect.height));
			const dpr = Math.max(
				1,
				Math.min(2, Math.floor(window.devicePixelRatio || 1))
			); // Cap DPR at 2

			canvas.style.width = cssW + 'px';
			canvas.style.height = cssH + 'px';
			canvas.width = cssW * dpr;
			canvas.height = cssH * dpr;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.imageSmoothingEnabled = true;
			ctx.imageSmoothingQuality = 'medium'; // Reduced from 'high'
		}

		function draw() {
			const now = performance.now();
			if (now - lastFrameTime < frameInterval) {
				rafRef.current = requestAnimationFrame(draw);
				return;
			}
			lastFrameTime = now;

			const v = videoRef.current;
			if (!v) return;

			const W = canvas.clientWidth;
			const H = canvas.clientHeight;

			// clear
			ctx.clearRect(0, 0, W, H);

			// cover-fit video
			const vw = v.videoWidth || 1;
			const vh = v.videoHeight || 1;
			const scale = Math.max(W / vw, H / vh);
			const dw = vw * scale;
			const dh = vh * scale;
			const dx = (W - dw) / 2;
			const dy = (H - dh) / 2;
			ctx.drawImage(v, dx, dy, dw, dh);

			// mask text
			ctx.save();
			ctx.globalCompositeOperation = 'destination-in';
			const cs = window.getComputedStyle(ghostRef.current);
			const fontSize = parseFloat(cs.fontSize);
			const fontFamily = cs.fontFamily;
			const fontWeight = cs.fontWeight;
			ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
			ctx.textBaseline = 'alphabetic';
			const m = ctx.measureText(text);
			const ascent = m.actualBoundingBoxAscent || fontSize * 0.8;
			const baselineY = Math.max(ascent, H * 0.8);
			ctx.fillStyle = '#000';
			ctx.fillText(text, 0, baselineY);
			ctx.restore();

			rafRef.current = requestAnimationFrame(draw);
		}

		layout();
		const ro = new ResizeObserver(() => {
			layout();
		});
		ro.observe(ghostRef.current);

		const tick = () => {
			if (!ready) {
				rafRef.current = requestAnimationFrame(tick);
				return;
			}
			draw();
		};
		tick();

		return () => {
			ro.disconnect();
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [text, active, ready]);

	return (
		<span
			ref={wrapRef}
			className={[
				'relative inline-block align-baseline',
				active ? activeSize : inactiveSize,
				'font-extrabold leading-[0.95] tracking-tight',
				className,
			].join(' ')}
		>
			{/* Ghost text defines size; add tiny right padding so layout matches overscan */}
			<span
				ref={ghostRef}
				className="invisible select-none"
				style={{ paddingRight: OVERSCAN_PX }} // ➜ reserves space on the right
			>
				{text}
			</span>

			{/* Canvas drawn only when active; extend slightly to right to avoid crop */}
			{active && (
				<canvas
					ref={canvasRef}
					className="pointer-events-none absolute inset-0 block"
					style={{
						transform: 'translateZ(0)',
						right: -OVERSCAN_PX, // ➜ nudge canvas out to the right
					}}
				/>
			)}

			{/* Static gray fallback if inactive (match the ghost’s padding) */}
			{!active && (
				<span
					className="absolute inset-0 block text-gray-300 select-none"
					style={{ paddingRight: OVERSCAN_PX }} // ➜ keep alignment perfect
				>
					{text}
				</span>
			)}
		</span>
	);
}
