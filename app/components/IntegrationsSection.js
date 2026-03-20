'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

// Desktop: scattered around all edges. Mobile: only top & bottom bands.
const LOGOS = [
	{
		src: '/integrations/toast.png',
		alt: 'Toast',
		width: 100,
		rotate: -18,
		floatDuration: 5.5,
		floatDistance: 18,
		floatX: 10,
		desktop: { top: '2%', left: '10%' },
		mobile: { top: '1%', left: '5%' },
	},
	{
		src: '/integrations/square.png',
		alt: 'Square',
		width: 126,
		rotate: 12,
		floatDuration: 4.2,
		floatDistance: 14,
		floatX: 8,
		desktop: { top: '1%', left: '38%' },
		mobile: { top: '0%', left: '55%' },
	},
	{
		src: '/integrations/resy.png',
		alt: 'Resy',
		width: 95,
		rotate: -20,
		floatDuration: 6.0,
		floatDistance: 20,
		floatX: 12,
		desktop: { top: '3%', right: '32%' },
		mobile: { top: '8%', left: '30%' },
	},
	{
		src: '/integrations/clover.png',
		alt: 'Clover',
		width: 110,
		rotate: 28,
		floatDuration: 4.8,
		floatDistance: 16,
		floatX: 9,
		desktop: { top: '1%', right: '0%' },
		mobile: { top: '5%', right: '2%' },
	},
	{
		src: '/integrations/lightspeed.png',
		alt: 'Lightspeed',
		width: 115,
		rotate: 8,
		floatDuration: 5.2,
		floatDistance: 15,
		floatX: 11,
		desktop: { top: '30%', left: '0%' },
		mobile: { top: '14%', left: '2%' },
	},
	{
		src: '/integrations/otter.png',
		alt: 'Otter',
		width: 90,
		rotate: -30,
		floatDuration: 4.5,
		floatDistance: 22,
		floatX: 7,
		desktop: { top: '26%', right: '5%' },
		mobile: { top: '16%', right: '5%' },
	},
	{
		src: '/integrations/touchbistro.png',
		alt: 'TouchBistro',
		width: 105,
		rotate: -15,
		floatDuration: 5.8,
		floatDistance: 17,
		floatX: 13,
		desktop: { top: '58%', left: '0%' },
		mobile: { bottom: '16%', left: '0%' },
	},
	{
		src: '/integrations/fresha.png',
		alt: 'Fresha',
		width: 88,
		rotate: 22,
		floatDuration: 4.0,
		floatDistance: 19,
		floatX: 8,
		desktop: { top: '55%', right: '0%' },
		mobile: { bottom: '14%', right: '3%' },
	},
	{
		src: '/integrations/booksy.png',
		alt: 'Booksy',
		width: 82,
		rotate: 35,
		floatDuration: 5.0,
		floatDistance: 16,
		floatX: 10,
		desktop: { bottom: '2%', left: '1%' },
		mobile: { bottom: '8%', left: '5%' },
	},
	{
		src: '/integrations/mindbody.png',
		alt: 'Mindbody',
		width: 120,
		rotate: -10,
		floatDuration: 4.6,
		floatDistance: 21,
		floatX: 9,
		desktop: { bottom: '10%', left: '18%' },
		mobile: { bottom: '1%', left: '28%' },
	},
	{
		src: '/integrations/mangomint.png',
		alt: 'Mangomint',
		width: 92,
		rotate: 15,
		floatDuration: 5.4,
		floatDistance: 14,
		floatX: 12,
		desktop: { bottom: '0%', left: '40%' },
		mobile: { bottom: '5%', left: '58%' },
	},
	{
		src: '/integrations/setmore.png',
		alt: 'Setmore',
		width: 98,
		rotate: -18,
		floatDuration: 4.3,
		floatDistance: 18,
		floatX: 7,
		desktop: { bottom: '1%', right: '2%' },
		mobile: { bottom: '0%', right: '2%' },
	},
	{
		src: '/integrations/micros.png',
		alt: 'Micros',
		width: 80,
		rotate: -12,
		floatDuration: 5.1,
		floatDistance: 15,
		floatX: 11,
		desktop: { bottom: '4%', right: '28%' },
		mobile: { bottom: '10%', right: '30%' },
	},
];

export default function IntegrationsSection() {
	const sectionRef = useRef(null);
	const logosRef = useRef([]);
	const mouseRef = useRef({ x: -9999, y: -9999 });
	const rafRef = useRef(null);
	const offsetsRef = useRef(LOGOS.map(() => ({ x: 0, y: 0 })));
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 640);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	useEffect(() => {
		const section = sectionRef.current;
		const logoEls = logosRef.current.filter(Boolean);
		if (!section || logoEls.length === 0) return;

		const floatTweens = [];

		// --- Scroll-triggered entrance: pop from center, then float ---
		const ctx = gsap.context(() => {
			// Calculate center offsets and immediately position logos there
			const sectionRect = section.getBoundingClientRect();
			const cx = sectionRect.width / 2;
			const cy = sectionRect.height / 2;

			logoEls.forEach((el) => {
				const logoRect = el.getBoundingClientRect();
				const logoX =
					logoRect.left - sectionRect.left + logoRect.width / 2;
				const logoY =
					logoRect.top - sectionRect.top + logoRect.height / 2;
				// Start at center, hidden
				gsap.set(el, {
					x: cx - logoX,
					y: cy - logoY,
					scale: 0.3,
					opacity: 0,
				});
			});

			ScrollTrigger.create({
				trigger: section,
				start: 'top 75%',
				once: true,
				onEnter: () => {
					let completed = 0;
					logoEls.forEach((el, i) => {
						gsap.to(el, {
							x: 0,
							y: 0,
							scale: 1,
							opacity: 1,
							duration: 1.2,
							delay: 0.05 * i,
							ease: 'back.out(1.2)',
							onComplete: () => {
								completed++;
								// Start floating only after ALL entrance animations are done
								if (completed === logoEls.length) {
									startFloating();
								}
							},
						});
					});
				},
			});
		});

		// --- Continuous floating: starts only after entrance finishes ---
		function startFloating() {
			logoEls.forEach((el, i) => {
				const logo = LOGOS[i];
				floatTweens.push(
					gsap.to(el, {
						y: `+=${logo.floatDistance}`,
						duration: logo.floatDuration,
						repeat: -1,
						yoyo: true,
						ease: 'sine.inOut',
						delay: i * 0.4,
					}),
				);
				floatTweens.push(
					gsap.to(el, {
						x: `+=${logo.floatX}`,
						duration: logo.floatDuration * 1.3,
						repeat: -1,
						yoyo: true,
						ease: 'sine.inOut',
						delay: i * 0.25,
					}),
				);
			});
		}

		// --- Mouse proximity influence — gentle and slow ---
		const INFLUENCE_RADIUS = 250;
		const INFLUENCE_STRENGTH = 15;

		const handleMouseMove = (e) => {
			const rect = section.getBoundingClientRect();
			mouseRef.current.x = e.clientX - rect.left;
			mouseRef.current.y = e.clientY - rect.top;
		};

		const handleMouseLeave = () => {
			mouseRef.current.x = -9999;
			mouseRef.current.y = -9999;
		};

		const tick = () => {
			const mx = mouseRef.current.x;
			const my = mouseRef.current.y;

			logoEls.forEach((el, i) => {
				const rect = el.getBoundingClientRect();
				const sRect = section.getBoundingClientRect();
				const elCx = rect.left - sRect.left + rect.width / 2;
				const elCy = rect.top - sRect.top + rect.height / 2;

				const dx = elCx - mx;
				const dy = elCy - my;
				const dist = Math.sqrt(dx * dx + dy * dy);

				const current = offsetsRef.current[i];

				if (dist < INFLUENCE_RADIUS && dist > 0) {
					const force =
						(1 - dist / INFLUENCE_RADIUS) * INFLUENCE_STRENGTH;
					const targetX = (dx / dist) * force;
					const targetY = (dy / dist) * force;
					current.x += (targetX - current.x) * 0.03;
					current.y += (targetY - current.y) * 0.03;
				} else {
					current.x += (0 - current.x) * 0.02;
					current.y += (0 - current.y) * 0.02;
				}

				el.style.marginLeft = current.x + 'px';
				el.style.marginTop = current.y + 'px';
			});

			rafRef.current = requestAnimationFrame(tick);
		};

		section.addEventListener('mousemove', handleMouseMove);
		section.addEventListener('mouseleave', handleMouseLeave);
		rafRef.current = requestAnimationFrame(tick);

		return () => {
			ctx.revert();
			floatTweens.forEach((t) => t.kill());
			section.removeEventListener('mousemove', handleMouseMove);
			section.removeEventListener('mouseleave', handleMouseLeave);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return (
		<section
			id="integrations"
			ref={sectionRef}
			className="relative py-40 sm:py-52 overflow-hidden"
		>
			<div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8">
				{/* Scattered logos */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{ zIndex: 0 }}
				>
					{LOGOS.map((logo, i) => {
						const posData = isMobile ? logo.mobile : logo.desktop;
						const pos = {};
						if (posData.top) pos.top = posData.top;
						if (posData.bottom) pos.bottom = posData.bottom;
						if (posData.left) pos.left = posData.left;
						if (posData.right) pos.right = posData.right;

						return (
							<img
								key={logo.alt}
								ref={(el) => (logosRef.current[i] = el)}
								src={logo.src}
								alt={logo.alt}
								className="absolute select-none will-change-transform"
								style={{
									...pos,
									width: logo.width + 'px',
									transform: `rotate(${logo.rotate}deg)`,
									opacity: 0,
								}}
								draggable={false}
							/>
						);
					})}
				</div>

				{/* Centered text */}
				<div className="relative z-10 flex flex-col items-center justify-center min-h-[640px] pointer-events-none">
					<ScrollReveal>
						<h2
							className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-black leading-[1.1] mb-5 text-center"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
								letterSpacing: '-0.03em',
							}}
						>
							Works with the tools you already use.
						</h2>
					</ScrollReveal>
					<ScrollReveal delay={0.1}>
						<p
							className="text-[#6B7280] text-sm sm:text-[15px] md:text-[16px] max-w-[480px] md:max-w-[520px] lg:max-w-[600px] mx-auto text-center"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
								fontWeight: 400,
								lineHeight: 1.6,
							}}
						>
							Asterra connects directly to your POS, reservation,
							and booking systems. No switching platforms, no
							double entry, no disruption to how you already
							operate.
						</p>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
