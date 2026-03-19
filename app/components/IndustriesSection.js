'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const IndustriesSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

	const industries = [
		{
			name: 'Barbershops & Salons',
			description: 'Book appointments, confirm availability, and answer service questions automatically.',
		},
		{
			name: 'Clinics & Medical Offices',
			description: 'Manage appointment requests, answer common questions, and route urgent calls.',
		},
		{
			name: 'Service Businesses',
			description: 'Capture inbound calls, qualify requests, and follow up so leads don\'t fall through.',
		},
	];

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, staggerChildren: 0.1 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section id="restaurants" ref={ref} className="relative bg-white overflow-hidden scroll-mt-24" style={{ padding: 'var(--section-gap-sm) 0' }}>
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Header */}
					<motion.div variants={item} className="text-center mb-12 sm:mb-14">
						<h2 className="font-display text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.05] tracking-[-0.03em] text-[var(--text)]">
							Built for restaurants.{' '}
							<span className="font-serif italic text-[var(--text-muted)]">Ready for service.</span>
						</h2>
						<p className="font-body text-base text-[var(--text-muted)] mt-4 max-w-lg mx-auto leading-relaxed">
							Asterra works for any business that gets calls — but restaurants are where we live.
						</p>
					</motion.div>

					{/* Industry Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
						{industries.map((industry) => (
							<motion.div
								key={industry.name}
								variants={item}
								className="glass-card rounded-[var(--r-lg)] p-7 text-center"
							>
								<p className="font-body text-sm font-semibold text-[var(--text)] mb-2">
									{industry.name}
								</p>
								<p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
									{industry.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default IndustriesSection;
