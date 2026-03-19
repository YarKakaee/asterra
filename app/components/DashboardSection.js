'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DashboardSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

	const features = [
		{
			title: 'Call logs & recordings',
			description: 'Review every conversation. See what callers asked, what was handled, and what needs attention.',
		},
		{
			title: 'Performance at a glance',
			description: 'Calls answered, orders captured, peak hours — clear metrics without the noise.',
		},
		{
			title: 'On/off in one toggle',
			description: 'Turn Asterra on or off for any location, any time. You stay in control.',
		},
		{
			title: 'Per-location settings',
			description: 'Customize menus, hours, greetings, and transfer rules for each store individually.',
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
		<section ref={ref} className="relative bg-[var(--ivory)] overflow-hidden" style={{ padding: 'var(--section-gap) 0' }}>
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Header */}
					<motion.div variants={item} className="text-center mb-14 sm:mb-20">
						<span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-6">
							<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
							Your Dashboard
						</span>
						<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] leading-[1] tracking-[-0.03em] text-[var(--text)]">
							Full visibility.{' '}
							<span className="font-serif italic text-[var(--text-muted)]">Zero complexity.</span>
						</h2>
						<p className="font-body text-base sm:text-lg text-[var(--text-muted)] mt-5 max-w-xl mx-auto leading-relaxed">
							A clean control layer that gives you confidence — not another tool to learn.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
						{/* Left: Media */}
						<motion.div variants={item} className="lg:col-span-3 relative">
							{/*
							 ╔══════════════════════════════════════════════════════════════╗
							 ║  MEDIA PLACEHOLDER — DASHBOARD PREVIEW                     ║
							 ║                                                             ║
							 ║  Type: Screenshot or designed mockup                        ║
							 ║  Aspect: 16:10 landscape                                    ║
							 ║  Size: 900x562px                                            ║
							 ║                                                             ║
							 ║  Content: Clean screenshot of the Asterra dashboard.        ║
							 ║  Show: call log list, simple chart, location selector.      ║
							 ║  UI should look premium and minimal — not a dev tool.       ║
							 ║                                                             ║
							 ║  Art direction: Light mode dashboard. Glass card container. ║
							 ║  Subtle shadow and slight tilt for depth. "Product shot."   ║
							 ╚══════════════════════════════════════════════════════════════╝
							*/}
							<div className="glass-card rounded-[var(--r-xl)] overflow-hidden">
								<div
									className="media-slot rounded-[var(--r-xl)]"
									style={{ aspectRatio: '16/10', minHeight: '300px' }}
								>
									<div className="text-center p-10">
										<div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/60 flex items-center justify-center">
											<svg className="w-7 h-7 text-[var(--text-faint)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
											</svg>
										</div>
										<p className="font-body text-sm font-medium text-[var(--text-muted)]">Dashboard Preview</p>
										<p className="font-body text-xs text-[var(--text-faint)] mt-1">Client control interface</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Right: Feature list */}
						<div className="lg:col-span-2 space-y-4">
							{features.map((feature, i) => (
								<motion.div
									key={feature.title}
									variants={item}
									className="glass-card rounded-[var(--r-md)] p-6"
								>
									<div className="flex items-start gap-3.5">
										<div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[var(--terracotta-soft)] flex items-center justify-center mt-0.5">
											<span className="font-display text-[10px] font-bold text-[var(--terracotta)]">0{i + 1}</span>
										</div>
										<div>
											<p className="font-body text-sm font-semibold text-[var(--text)] mb-1.5">
												{feature.title}
											</p>
											<p className="font-body text-[13px] text-[var(--text-muted)] leading-relaxed">
												{feature.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default DashboardSection;
