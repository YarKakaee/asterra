'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorksSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

	const steps = [
		{
			num: '01',
			title: 'Customer calls your restaurant',
			description: 'The phone rings. Asterra picks up instantly — before the second ring. No hold music, no delay.',
			/*
			 ╔══════════════════════════════════════════════════════════════╗
			 ║  MEDIA PLACEHOLDER — STEP 1 ICON/ILLUSTRATION              ║
			 ║  Type: Custom icon, illustration, or Lottie animation       ║
			 ║  Size: 80x80px                                              ║
			 ║  Content: A ringing phone — restaurant landline or mobile.  ║
			 ║  Style: Warm line illustration, match brand aesthetic.       ║
			 ╚══════════════════════════════════════════════════════════════╝
			*/
		},
		{
			num: '02',
			title: 'Asterra handles the conversation',
			description: 'Questions answered, orders taken, reservations booked. Natural, accurate, and patient every time.',
			/*
			 ╔══════════════════════════════════════════════════════════════╗
			 ║  MEDIA PLACEHOLDER — STEP 2 ICON/ILLUSTRATION              ║
			 ║  Type: Custom icon, illustration, or Lottie animation       ║
			 ║  Size: 80x80px                                              ║
			 ║  Content: Conversation bubble or dialogue flow visual.      ║
			 ║  Style: Warm line illustration, match brand aesthetic.       ║
			 ╚══════════════════════════════════════════════════════════════╝
			*/
		},
		{
			num: '03',
			title: 'Order lands in your POS',
			description: 'The order appears on your kitchen screen, ready to make. Your staff never touched the phone.',
			/*
			 ╔══════════════════════════════════════════════════════════════╗
			 ║  MEDIA PLACEHOLDER — STEP 3 ICON/ILLUSTRATION              ║
			 ║  Type: Custom icon, illustration, or Lottie animation       ║
			 ║  Size: 80x80px                                              ║
			 ║  Content: POS screen with order ticket + checkmark.         ║
			 ║  Style: Warm line illustration, match brand aesthetic.       ║
			 ╚══════════════════════════════════════════════════════════════╝
			*/
		},
	];

	const icons = [
		<svg key="phone" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
		</svg>,
		<svg key="chat" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
		</svg>,
		<svg key="check" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>,
	];

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, staggerChildren: 0.12 },
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
					<motion.div variants={item} className="text-center mb-16 sm:mb-20">
						<span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-6">
							<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
							How it works
						</span>
						<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] leading-[1] tracking-[-0.03em] text-[var(--text)]">
							Three steps.{' '}
							<span className="font-serif italic text-[var(--text-muted)]">Zero disruption.</span>
						</h2>
					</motion.div>

					{/* Steps */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
						{steps.map((step, index) => (
							<motion.div
								key={step.num}
								variants={item}
								className="relative"
							>
								{/* Connector line (desktop) */}
								{index < steps.length - 1 && (
									<div className="hidden lg:block absolute top-16 -right-4 w-8 h-[1px]" style={{ background: 'linear-gradient(90deg, var(--cream), transparent)' }} />
								)}

								<div className="glass-card rounded-[var(--r-lg)] p-8 sm:p-9 h-full">
									{/* Icon + number row */}
									<div className="flex items-center justify-between mb-6">
										<div className="w-12 h-12 rounded-[var(--r-sm)] bg-[var(--terracotta-soft)] flex items-center justify-center text-[var(--terracotta)]">
											{icons[index]}
										</div>
										<span className="font-display text-[3rem] font-bold text-[var(--text)] opacity-[0.05] leading-none">
											{step.num}
										</span>
									</div>

									<h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--text)] mb-3 leading-snug tracking-[-0.01em]">
										{step.title}
									</h3>
									<p className="font-body text-sm text-[var(--text-muted)] leading-relaxed">
										{step.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Bottom note */}
					<motion.p
						variants={item}
						className="text-center font-body text-sm text-[var(--text-faint)] mt-14 sm:mt-16"
					>
						No new equipment. No workflow changes. No training required.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
