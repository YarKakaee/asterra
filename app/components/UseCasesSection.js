'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const UseCasesSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const useCases = [
		{
			title: 'When your phone rings after hours',
			description: 'Bookings still get handled. Nothing gets lost.',
		},
		{
			title: 'When customers check you out before calling',
			description: 'Your online presence builds trust before the conversation starts.',
		},
		{
			title: 'When your team is busy',
			description: 'The systems keep working without interruptions.',
		},
		{
			title: "When you're ready to grow",
			description: "You don't need to hire first. The systems scale with you.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	return (
		<section
			ref={ref}
			className="relative py-20 lg:py-32 overflow-hidden bg-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="text-center mb-12 lg:mb-16"
				>
					<motion.h2
						variants={cardVariants}
						className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
					>
						Use Cases
					</motion.h2>
				</motion.div>

				{/* Use Cases Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
				>
					{useCases.map((useCase, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{
								y: -2,
								transition: { duration: 0.3, ease: 'easeOut' },
							}}
							className="relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
							style={{
								boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
							}}
						>
							<h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 leading-tight">
								{useCase.title}
							</h3>
							<p className="text-base lg:text-lg text-gray-600 leading-relaxed">
								{useCase.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default UseCasesSection;
