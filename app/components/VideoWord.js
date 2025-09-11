'use client';
import { useEffect, useRef } from 'react';

export default function VideoWord({
	text,
	src,
	active = true,
	className = '',
	activeSize = 'text-6xl sm:text-7xl lg:text-8xl',
	inactiveSize = 'text-4xl sm:text-5xl lg:text-6xl',
	poster,
}) {
	const videoRef = useRef(null);
	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;
		active ? v.play().catch(() => {}) : v.pause();
	}, [active]);

	const id = hash(text);

	// Fast fixed box; widen for longer phrases so the right edge never clips.
	const BASE_W = text.length > 16 ? 2400 : 1800;
	const BASE_H = 260;

	// Padding lives OUTSIDE the viewBox so size remains correct.
	const PAD_X = 80;
	const PAD_Y = 70;

	// Overscan to kill 1px “seam” at the top edge on some zoom levels.
	const SEAM = 2;

	// Baseline for fontSize=220 in a 260-high box (same as your original).
	const baselineY = 200;

	return (
		<span
			className={[
				'inline-block align-baseline',
				active ? activeSize : inactiveSize,
				'font-extrabold leading-[0.95] tracking-tight',
				className,
			].join(' ')}
		>
			<svg
				viewBox={`0 0 ${BASE_W} ${BASE_H}`}
				className="h-[1em] w-auto"
				aria-label={text}
				role="img"
				style={{ overflow: 'visible' }}
				preserveAspectRatio="xMinYMid meet"
			>
				<defs>
					{/* clipPath is optional but adds a second guard against seams */}
					<clipPath id={`clip-${id}`}>
						<rect
							x={-PAD_X - SEAM}
							y={-PAD_Y - SEAM}
							width={BASE_W + (PAD_X + SEAM) * 2}
							height={BASE_H + (PAD_Y + SEAM) * 2}
						/>
					</clipPath>

					{/* Mask extends beyond the viewBox so blur/ascenders never hit edges */}
					<mask
						id={`mask-${id}`}
						maskUnits="userSpaceOnUse"
						x={-PAD_X - SEAM}
						y={-PAD_Y - SEAM}
						width={BASE_W + (PAD_X + SEAM) * 2}
						height={BASE_H + (PAD_Y + SEAM) * 2}
					>
						<rect
							x={-PAD_X - SEAM}
							y={-PAD_Y - SEAM}
							width={BASE_W + (PAD_X + SEAM) * 2}
							height={BASE_H + (PAD_Y + SEAM) * 2}
							fill="black"
							shapeRendering="crispEdges"
						/>
						<text
							x={0}
							y={baselineY}
							fontFamily='Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
							fontWeight="800"
							fontSize="220"
							letterSpacing="-0.02em"
							fill="white"
						>
							{text}
						</text>
					</mask>

					{/* Subtle inner bevel */}
					<filter
						id={`bevel-${id}`}
						x="-50%"
						y="-50%"
						width="200%"
						height="200%"
					>
						<feOffset
							in="SourceAlpha"
							dx="0"
							dy="6"
							result="off1"
						/>
						<feGaussianBlur
							in="off1"
							stdDeviation="6"
							result="blur1"
						/>
						<feColorMatrix
							in="blur1"
							type="matrix"
							values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.28 0"
							result="innerDark"
						/>
						<feComposite
							in="innerDark"
							in2="SourceAlpha"
							operator="in"
							result="innerDarkCut"
						/>
						<feOffset
							in="SourceAlpha"
							dx="0"
							dy="-4"
							result="off2"
						/>
						<feGaussianBlur
							in="off2"
							stdDeviation="4"
							result="blur2"
						/>
						<feColorMatrix
							in="blur2"
							type="matrix"
							values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0.55 0"
							result="innerLight"
						/>
						<feComposite
							in="innerLight"
							in2="SourceAlpha"
							operator="in"
							result="innerLightCut"
						/>
						<feMerge>
							<feMergeNode in="innerDarkCut" />
							<feMergeNode in="innerLightCut" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Video inside the text, with overscan + optional clip to avoid seams */}
				<g mask={`url(#mask-${id})`} filter={`url(#bevel-${id})`}>
					<foreignObject
						x={-PAD_X - SEAM}
						y={-PAD_Y - SEAM}
						width={BASE_W + (PAD_X + SEAM) * 2}
						height={BASE_H + (PAD_Y + SEAM) * 2}
						clipPath={`url(#clip-${id})`}
					>
						<div
							xmlns="http://www.w3.org/1999/xhtml"
							className="h-full w-full"
						>
							<video
								ref={videoRef}
								src={src}
								autoPlay
								loop
								muted
								playsInline
								preload={active ? 'auto' : 'metadata'}
								poster={poster}
								className={`h-full w-full object-cover transition-opacity duration-300 ${
									active ? 'opacity-100' : 'opacity-40'
								}`}
							/>
						</div>
					</foreignObject>
				</g>

				{/* Inactive state uses the *same* metrics so there’s zero shift */}
				{!active && (
					<text
						x={0}
						y={baselineY}
						fontFamily='Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
						fontWeight="800"
						fontSize="220"
						letterSpacing="-0.02em"
						className="fill-gray-300"
					>
						{text}
					</text>
				)}
			</svg>
		</span>
	);
}

function hash(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
	return Math.abs(h).toString(36);
}
