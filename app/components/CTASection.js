'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const CTASection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-60px' });

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, staggerChildren: 0.1 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section ref={ref} className="section-dark relative overflow-hidden" style={{ padding: 'var(--section-gap) 0' }}>
			{/* Gradient accent top line */}
			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px]"
				style={{ background: 'linear-gradient(90deg, transparent, rgba(200, 67, 43, 0.4), transparent)' }}
			/>

			{/* Radial glow */}
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
				style={{ background: 'radial-gradient(ellipse at center, rgba(200, 67, 43, 0.07) 0%, transparent 55%)' }}
			/>

			<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="text-center"
				>
					{/* Headline */}
					<motion.h2
						variants={item}
						className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] xl:text-[4.25rem] text-[var(--text-on-dark)] leading-[1] tracking-[-0.03em] mb-6"
					>
						Ready to stop{' '}
						<span className="font-serif italic text-[var(--terracotta)]">missing calls?</span>
					</motion.h2>

					{/* Subline */}
					<motion.p
						variants={item}
						className="font-body text-base sm:text-lg text-[var(--text-on-dark-muted)] max-w-xl mx-auto leading-relaxed mb-10"
					>
						See how Asterra handles calls for restaurants like yours. Book a 15-minute demo or try the live line now.
					</motion.p>

					{/* CTAs */}
					<motion.div
						variants={item}
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<Link href="/contact">
							<motion.div
								className="btn-primary text-base px-8 py-4 cursor-pointer"
								whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(200, 67, 43, 0.35)' }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: 'spring', stiffness: 400, damping: 25 }}
							>
								Book a Demo
							</motion.div>
						</Link>

						<motion.a
							href="tel:+14374944696"
							className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[var(--r-full)] text-base font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 cursor-pointer font-body"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							transition={{ type: 'spring', stiffness: 400, damping: 25 }}
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
							Call the live demo
						</motion.a>
					</motion.div>

					{/* Trust line */}
					<motion.p
						variants={item}
						className="font-body text-xs text-white/25 mt-10"
					>
						Serving restaurants across Toronto and the GTA
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;
