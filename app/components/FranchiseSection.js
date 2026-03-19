'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FranchiseSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

	const features = [
		{
			title: 'Consistent across every store',
			description: 'Every location answers calls the same way — same quality, same accuracy, same brand voice.',
		},
		{
			title: 'Central dashboard, local control',
			description: 'Manage all locations from one place. Customize menus, hours, and settings per store.',
		},
		{
			title: 'Scale from 2 to 200',
			description: 'Add new locations in minutes. The system grows with you — no per-location setup headaches.',
		},
		{
			title: 'Same experience, every caller',
			description: 'Whether it\'s location one or one hundred — callers get the same premium experience.',
		},
	];

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, staggerChildren: 0.08 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section id="franchise" ref={ref} className="section-dark relative overflow-hidden scroll-mt-24" style={{ padding: 'var(--section-gap) 0' }}>
			{/* Grid texture */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)',
					backgroundSize: '72px 72px',
				}}
			/>

			{/* Radial glow */}
			<div
				className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
				style={{ background: 'radial-gradient(ellipse at center, rgba(200, 67, 43, 0.07) 0%, transparent 60%)' }}
			/>

			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
						{/* Left: Copy + Features */}
						<div>
							<motion.span variants={item} className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-6 block">
								<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
								Multi-Location & Franchise
							</motion.span>

							<motion.h2
								variants={item}
								className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] leading-[1] tracking-[-0.03em] text-[var(--text-on-dark)] mb-6"
							>
								One system.
								<br />
								<span className="font-serif italic text-[var(--text-on-dark-muted)]">Every location.</span>
							</motion.h2>

							<motion.p
								variants={item}
								className="font-body text-base text-[var(--text-on-dark-muted)] leading-relaxed mb-10 max-w-lg"
							>
								Whether you run two locations or two hundred, Asterra keeps phone handling consistent, controllable, and scalable across your entire operation.
							</motion.p>

							{/* Feature list */}
							<div className="space-y-5">
								{features.map((feature, i) => (
									<motion.div
										key={feature.title}
										variants={item}
										className="flex items-start gap-4"
									>
										<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--terracotta)] bg-opacity-10 flex items-center justify-center mt-0.5" style={{ background: 'rgba(200, 67, 43, 0.12)' }}>
											<span className="font-display text-[11px] font-bold text-[var(--terracotta)]">0{i + 1}</span>
										</div>
										<div>
											<p className="font-body text-[15px] font-semibold text-[var(--text-on-dark)] mb-1">{feature.title}</p>
											<p className="font-body text-[13px] text-[var(--text-on-dark-muted)] leading-relaxed">{feature.description}</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>

						{/* Right: Media Placeholder */}
						<motion.div variants={item} className="relative">
							{/*
							 ╔══════════════════════════════════════════════════════════════╗
							 ║  MEDIA PLACEHOLDER — MULTI-LOCATION VISUAL                 ║
							 ║                                                             ║
							 ║  Type: Image or interactive visual                          ║
							 ║  Aspect: 4:3 landscape or square                            ║
							 ║  Size: 700x525px or 600x600px                               ║
							 ║                                                             ║
							 ║  OPTION A (Recommended): Dashboard view showing multiple    ║
							 ║  restaurant locations — map pins, location cards, or a      ║
							 ║  clean grid of stores with status indicators. Should feel   ║
							 ║  like a control center, not a spreadsheet.                  ║
							 ║                                                             ║
							 ║  OPTION B: Visual showing 3-4 restaurant storefronts        ║
							 ║  connected by Asterra — unified phone handling.             ║
							 ║                                                             ║
							 ║  Art direction: Dark-mode aesthetic. Glass morphism cards.   ║
							 ║  "Control at scale" not "complexity."                       ║
							 ╚══════════════════════════════════════════════════════════════╝
							*/}
							<div className="relative">
								<div
									className="absolute inset-0 -m-8 rounded-[3rem]"
									style={{
										background: 'radial-gradient(ellipse at center, rgba(200, 67, 43, 0.1) 0%, transparent 60%)',
										filter: 'blur(40px)',
									}}
								/>
								<div
									className="relative glass-dark rounded-[var(--r-xl)] overflow-hidden media-slot"
									style={{ aspectRatio: '4/3', minHeight: '380px' }}
								>
									<div className="text-center p-10">
										<div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
											<svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
											</svg>
										</div>
										<p className="font-body text-sm font-medium text-gray-400">Multi-Location Visual</p>
										<p className="font-body text-xs text-gray-500 mt-1">Dashboard or connected stores</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FranchiseSection;
