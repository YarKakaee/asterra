'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import VideoWord from './VideoWord';

const PROBLEMS = [
	{ text: 'Missed Calls.', src: '/calls.mp4' },
	{ text: 'Overwhelmed Inbox.', src: '/inbox.mp4' },
	{ text: 'Forgotten Follow-Ups.', src: '/forgotten.mp4' },
	{ text: 'Lost Leads.', src: '/leads.mp4' },
	{ text: 'Slow Responses.', src: '/responses.mp4' },
	{ text: 'Everything Else.', src: '/everything.mp4' },
];

const Reclaim = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto-cycle (respects reduced motion)
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReduced) return;
		const id = setInterval(() => {
			setActiveIndex((i) => (i + 1) % PROBLEMS.length);
		}, 2400);
		return () => clearInterval(id);
	}, []);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.08,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section className="py-20 lg:py-32 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="text-left max-w-4xl"
				>
					{/* Section Title */}
					<motion.h3
						variants={itemVariants}
						className="text-lg font-medium text-gray-600 mb-6"
					>
						Reclaim Your Time
					</motion.h3>

					{/* Problems List */}
					{/* Fixed gaps ensure consistent vertical spacing even when active is larger */}
					<div className="mb-12 flex flex-col gap-3 sm:gap-4">
						{PROBLEMS.map((p, i) => (
							<div key={p.text}>
								<VideoWord
									text={p.text}
									src={p.src}
									active={i === activeIndex}
									activeSize="text-6xl sm:text-7xl lg:text-8xl"
									inactiveSize="text-4xl sm:text-5xl lg:text-6xl"
								/>
							</div>
						))}
					</div>

					{/* CTA Button */}
					<motion.div variants={itemVariants}>
						<motion.a
							href="#"
							className="inline-flex items-center px-8 py-4 bg-[#FF5633] text-white text-lg font-semibold rounded-lg hover:bg-[#E04A2B] transition-colors duration-200 shadow-lg"
							whileHover={{
								scale: 1.05,
								boxShadow: '0 20px 40px rgba(255, 86, 51, 0.3)',
							}}
							whileTap={{ scale: 0.98 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 20,
							}}
						>
							Diagnose My Business Problems
						</motion.a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Reclaim;
