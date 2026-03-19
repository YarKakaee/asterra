'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProblemSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

	const stats = [
		{ value: '62%', label: 'of restaurant calls go unanswered during peak hours' },
		{ value: '$1,200', label: 'average weekly revenue lost to missed phone orders' },
		{ value: '4.2s', label: 'average patience before a caller hangs up' },
	];

	const problems = [
		{
			num: '01',
			headline: 'Phones ring during the dinner rush.',
			detail: 'Nobody can answer.',
		},
		{
			num: '02',
			headline: 'Customers hang up.',
			detail: 'Orders disappear.',
		},
		{
			num: '03',
			headline: 'Staff get pulled from the line.',
			detail: 'Service slows for everyone.',
		},
		{
			num: '04',
			headline: 'Hold times pile up.',
			detail: 'Hungry customers become lost revenue.',
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
		hidden: { opacity: 0, y: 28 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section ref={ref} className="relative overflow-hidden" style={{ padding: 'var(--section-gap) 0' }}>
			{/* Background media direction */}
			{/*
			 ╔══════════════════════════════════════════════════════════════╗
			 ║  MEDIA PLACEHOLDER — BACKGROUND ATMOSPHERE                 ║
			 ║                                                             ║
			 ║  Type: Image (background, heavily overlaid)                 ║
			 ║  Size: 1920x1080px minimum                                  ║
			 ║                                                             ║
			 ║  Content: Atmospheric restaurant kitchen during rush.        ║
			 ║  Blurred motion, warm lighting, controlled chaos.           ║
			 ║  Overlaid at ~5-8% opacity as texture behind cards.         ║
			 ║                                                             ║
			 ║  Art direction: Behind the line — hands plating, tickets    ║
			 ║  hanging, steam rising. Warm tones, motion blur for energy. ║
			 ║  NOT a stock photo of people smiling — operational & real.  ║
			 ╚══════════════════════════════════════════════════════════════╝
			*/}

			{/* Subtle dot grid */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: 'radial-gradient(circle, var(--text-faint) 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Section Header */}
					<motion.div variants={item} className="max-w-3xl mb-16 sm:mb-20">
						<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] leading-[1] tracking-[-0.03em] text-[var(--text)]">
							The rush doesn&apos;t wait.
							<br />
							<span className="font-serif italic text-[var(--text-muted)]">Neither do your callers.</span>
						</h2>
					</motion.div>

					{/* Stats row */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
						{stats.map((stat) => (
							<motion.div
								key={stat.value}
								variants={item}
								className="glass-card rounded-[var(--r-lg)] p-7 sm:p-8"
							>
								<p className="font-display text-[2.5rem] sm:text-[3rem] font-bold tracking-[-0.03em] text-[var(--terracotta)] leading-none mb-3">
									{stat.value}
								</p>
								<p className="font-body text-sm text-[var(--text-muted)] leading-relaxed">
									{stat.label}
								</p>
							</motion.div>
						))}
					</div>

					{/* Problem cards — asymmetric 2x2 */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-14 sm:mb-16">
						{problems.map((problem) => (
							<motion.div
								key={problem.num}
								variants={item}
								className="relative glass-card rounded-[var(--r-lg)] p-7 sm:p-8 group"
							>
								{/* Big faded number */}
								<span className="absolute top-4 right-5 font-display text-[4rem] sm:text-[5rem] font-bold text-[var(--text)] opacity-[0.04] leading-none select-none">
									{problem.num}
								</span>

								<div className="relative z-10">
									<p className="font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--terracotta)] mb-3">
										{problem.num}
									</p>
									<p className="font-display text-lg sm:text-xl font-semibold text-[var(--text)] leading-snug mb-2">
										{problem.headline}
									</p>
									<p className="font-body text-sm text-[var(--text-muted)]">
										{problem.detail}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Closing statement */}
					<motion.div variants={item} className="text-center">
						<p className="font-serif italic text-xl sm:text-2xl text-[var(--text-muted)]">
							Every missed call is a missed order.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProblemSection;
