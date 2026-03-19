'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProductSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

	const capabilities = [
		{
			title: 'Answers inbound calls',
			description: 'Every call picked up instantly — no hold music, no voicemail, no missed rings.',
		},
		{
			title: 'Handles common questions',
			description: 'Hours, menu items, location, delivery zones — answered accurately every time.',
		},
		{
			title: 'Takes orders by phone',
			description: 'Walks callers through the menu, confirms items, and processes orders naturally.',
		},
		{
			title: 'Sends orders to your POS',
			description: 'Orders land directly in your system — ready on the screen for the kitchen.',
		},
		{
			title: 'Transfers when needed',
			description: 'Complex requests or VIP callers get routed to your staff seamlessly.',
		},
		{
			title: 'Works during peak hours',
			description: 'No delays, no dropped calls, no matter how busy the rush gets.',
		},
	];

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, staggerChildren: 0.07 },
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
		<section ref={ref} className="section-dark relative overflow-hidden" style={{ padding: 'var(--section-gap) 0' }}>
			{/* Terracotta accent line */}
			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
				style={{ background: 'linear-gradient(90deg, transparent, rgba(200, 67, 43, 0.35), transparent)' }}
			/>

			{/* Radial glow */}
			<div
				className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none"
				style={{ background: 'radial-gradient(ellipse at center, rgba(200, 67, 43, 0.06) 0%, transparent 55%)' }}
			/>

			{/* Subtle grid */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
					backgroundSize: '64px 64px',
				}}
			/>

			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Header */}
					<motion.div variants={item} className="max-w-3xl mb-16 sm:mb-20">
						<span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-6 block">
							<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
							What Asterra does
						</span>
						<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] leading-[1] tracking-[-0.03em] text-[var(--text-on-dark)]">
							Every call answered.
							<br />
							<span className="font-serif italic text-[var(--text-on-dark-muted)]">Every order captured.</span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						{/* Left: Capability grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{capabilities.map((cap, i) => (
								<motion.div
									key={cap.title}
									variants={item}
									className="glass-dark rounded-[var(--r-md)] p-6 group"
								>
									<span className="font-display text-[11px] font-bold tracking-[0.15em] text-[var(--terracotta)] opacity-70 mb-4 block">
										0{i + 1}
									</span>
									<p className="font-body text-[15px] font-semibold text-[var(--text-on-dark)] mb-2 leading-snug">
										{cap.title}
									</p>
									<p className="font-body text-[13px] text-[var(--text-on-dark-muted)] leading-relaxed">
										{cap.description}
									</p>
								</motion.div>
							))}
						</div>

						{/* Right: Media Placeholder */}
						<motion.div variants={item} className="relative">
							{/*
							 ╔══════════════════════════════════════════════════════════════╗
							 ║  MEDIA PLACEHOLDER — PRODUCT DEMO                          ║
							 ║                                                             ║
							 ║  Type: Video (looping, 15-20s) or animated mockup           ║
							 ║  Aspect: 9:16 portrait (phone screen recording)             ║
							 ║  Size: 400x720px                                            ║
							 ║                                                             ║
							 ║  Content: A real call being handled by Asterra. Show the    ║
							 ║  caller experience: greeting → question → answer → order →  ║
							 ║  confirmation. Like watching the system work in real time.   ║
							 ║                                                             ║
							 ║  Could reuse/adapt existing /phonevideo.mp4 content.        ║
							 ║                                                             ║
							 ║  Art direction: Dark phone frame on dark background.        ║
							 ║  Subtle glow around the phone. Clean, readable interface.   ║
							 ╚══════════════════════════════════════════════════════════════╝
							*/}
							<div className="relative mx-auto max-w-xs">
								<div
									className="absolute inset-0 -m-8 rounded-[3rem]"
									style={{
										background: 'radial-gradient(ellipse at center, rgba(200, 67, 43, 0.12) 0%, transparent 65%)',
										filter: 'blur(40px)',
									}}
								/>
								<div
									className="relative glass-dark rounded-[var(--r-xl)] overflow-hidden media-slot"
									style={{ aspectRatio: '9/16', minHeight: '500px' }}
								>
									<div className="text-center p-8">
										<div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
											<svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
											</svg>
										</div>
										<p className="font-body text-sm font-medium text-gray-400">Product Demo</p>
										<p className="font-body text-xs text-gray-500 mt-1">Call flow video or animation</p>
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

export default ProductSection;
