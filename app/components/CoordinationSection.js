'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const POINTS = [
	{
		title: 'Every location, one place.',
		description:
			'Call volumes, order counts, and status across every store in one place. No blind spots.',
		image: '/coordination/card1.png',
	},
	{
		title: 'Managers see their store. You see everything.',
		description:
			'Each manager has their own scoped view. Franchise owners see across all locations. The right information reaches the right person.',
		image: '/coordination/card2.png',
	},
	{
		title: 'Full control, always within reach.',
		description:
			'Turn phone handling on or off per location. Flip any store to info-only during a rush. Every switch is instant.',
		image: '/coordination/card3.png',
	},
	{
		title: 'Know exactly what\u2019s happening, everywhere.',
		description:
			'Call volumes, peak times, and order counts broken down by location. Spot what\u2019s working and catch what isn\u2019t.',
		image: '/coordination/card4.png',
	},
];

const CYCLE_DURATION = 5000;

export default function CoordinationSection() {
	const [active, setActive] = useState(0);
	const [progress, setProgress] = useState(0);
	const timerRef = useRef(null);
	const startRef = useRef(Date.now());

	const startCycle = useCallback((index) => {
		setActive(index);
		setProgress(0);
		startRef.current = Date.now();

		if (timerRef.current) clearInterval(timerRef.current);

		timerRef.current = setInterval(() => {
			const elapsed = Date.now() - startRef.current;
			const p = Math.min(elapsed / CYCLE_DURATION, 1);
			setProgress(p);

			if (p >= 1) {
				clearInterval(timerRef.current);
				const next = (index + 1) % POINTS.length;
				startCycle(next);
			}
		}, 30);
	}, []);

	useEffect(() => {
		startCycle(0);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [startCycle]);

	const handleClick = (i) => {
		if (i === active) return;
		startCycle(i);
	};

	return (
		<section id="coordination" className="relative py-28 sm:py-36">
			<div className="w-full max-w-6xl mx-auto px-5 sm:px-8">
				{/* Header — centered */}
				<div className="mb-16 sm:mb-20 text-center">
					<ScrollReveal>
						<h2
							className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-black leading-[1.1] mb-5"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
								letterSpacing: '-0.03em',
							}}
						>
							Coordination across locations.
						</h2>
					</ScrollReveal>
					<ScrollReveal delay={0.1}>
						<p
							className="text-[#6B7280] text-sm sm:text-[15px] md:text-[16px] max-w-[520px] mx-auto"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
								fontWeight: 400,
								lineHeight: 1.6,
							}}
						>
							Every location gets its own trained agent.
							<br />
							One dashboard to oversee all of them.
						</p>
					</ScrollReveal>
				</div>

				{/* Content grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* Image — shows first on mobile, second on desktop */}
					<ScrollReveal
						delay={0.1}
						duration={0.7}
						className="order-first lg:order-last"
					>
						<div
							className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[#111]"
							style={{
								boxShadow:
									'0 20px 50px -12px rgba(0, 0, 0, 0.25)',
							}}
						>
							{POINTS.map((point, i) => (
								<div
									key={i}
									className="absolute inset-0"
									style={{
										opacity: i === active ? 1 : 0,
										scale: i === active ? '1' : '1.04',
										transition:
											'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), scale 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
									}}
								>
									<Image
										src={point.image}
										alt={point.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
										priority={i === 0}
									/>
								</div>
							))}
						</div>
					</ScrollReveal>

					{/* Points — shows second on mobile, first on desktop */}
					<ScrollReveal
						delay={0.15}
						className="order-last lg:order-first"
					>
						<div className="flex flex-col">
						<div className="relative flex">
							{/* One continuous bar */}
							<div className="relative w-[3px] shrink-0 mr-5 rounded-full overflow-hidden bg-[#E5E7EB]">
								<div
									className="absolute left-0 w-full bg-black rounded-full"
									style={{
										top: `${(active / POINTS.length) * 100}%`,
										height: `${(1 / POINTS.length) * 100}%`,
										transition:
											'top 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
									}}
								/>
							</div>

							{/* Points */}
							<div className="flex flex-col">
								{POINTS.map((point, i) => {
									const isActive = i === active;
									return (
										<button
											key={i}
											onClick={() => handleClick(i)}
											className="text-left py-4 cursor-pointer"
										>
											<h3
												className="text-[15px] sm:text-[16px] font-semibold leading-snug mb-1.5"
												style={{
													fontFamily:
														'var(--font-inter), system-ui, sans-serif',
													letterSpacing: '-0.01em',
													color: isActive
														? '#000'
														: '#6B7280',
													transition:
														'color 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
												}}
											>
												{point.title}
											</h3>
											<p
												className="text-[13px] sm:text-[14px] leading-relaxed"
												style={{
													fontFamily:
														'var(--font-inter), system-ui, sans-serif',
													fontWeight: 400,
													color: isActive
														? '#6B7280'
														: '#9CA3AF',
													transition:
														'color 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
												}}
											>
												{point.description}
											</p>
										</button>
									);
								})}
							</div>
						</div>

						{/* CTA button — same hover as CallNow */}
						<a
							href="/contact"
							className="group relative inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-2xl text-[14px] font-semibold transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.15)] w-fit overflow-hidden"
							style={{
								background: '#0a0a0a',
								border: '1px solid rgba(255,255,255,0.1)',
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
							}}
						>
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent" />
							</div>
							<div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[800ms] ease-out group-hover:translate-x-[150%] pointer-events-none" />
							<span className="relative z-10 text-white tracking-wide transition-transform duration-500 group-hover:scale-[1.03]">
								Get in contact
							</span>
						</a>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
