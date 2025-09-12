'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useMobileDetection } from '../utils/mobileOptimization';

const FinalUrgencySection = () => {
	const { isMobile } = useMobileDetection();
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const monthlyRecoveredRevenue = 15500;

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
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
		<section
			ref={ref}
			className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
		>
			{/* Background Effects */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
					style={{ animationDelay: '3s' }}
				/>
			</div>

			<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Main Message */}
					<motion.div variants={itemVariants} className="mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
							Every Day You Wait Costs You Money
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
							While you&apos;re deciding, your competitors are
							already capturing the revenue you&apos;re missing.
						</p>
					</motion.div>

					{/* Revenue Showcase */}
					<motion.div
						variants={itemVariants}
						className="mb-12 mx-auto max-w-2xl"
					>
						<div
							className="relative p-12 rounded-3xl overflow-hidden"
							style={{
								background:
									'linear-gradient(135deg, rgba(234, 88, 12, 0.01) 0%, rgba(234, 88, 12, 0.1) 50%, rgba(249, 115, 22, 0.04) 100%)',
								backdropFilter: 'blur(12px) saturate(180%)',
								border: '1px solid rgba(234, 88, 12, 0.2)',
								borderTop: '1px solid rgba(234, 88, 12, 0.3)',
								borderBottom:
									'1px solid rgba(234, 88, 12, 0.1)',
								boxShadow: `
									0 4px 24px rgba(234, 88, 12, 0.1),
									0 1px 0 rgba(255, 255, 255, 0.8) inset,
									0 0 20px rgba(234, 88, 12, 0.05)
								`,
							}}
						>
							{/* Top gradient bar */}
							<div className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
								Revenue Recovered This Month
							</div>

							<motion.div
								className="text-4xl md:text-6xl font-black text-gray-900 mb-3 font-mono"
								initial={{ scale: 0.8 }}
								animate={
									isInView ? { scale: 1 } : { scale: 0.8 }
								}
								transition={{
									delay: 0.5,
									duration: 0.8,
									type: 'spring',
								}}
								style={{
									background:
										'linear-gradient(135deg, #EA580C, #F97316)',
									backgroundClip: 'text',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}
							>
								${monthlyRecoveredRevenue.toLocaleString()}
							</motion.div>

							<div className="text-gray-600 font-medium">
								For businesses just like yours
							</div>
						</div>
					</motion.div>

					{/* Final CTA */}
					<motion.div variants={itemVariants} className="p-10">
						<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
							Ready to Stop the Bleeding?
						</h3>
						<p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
							Get a free analysis of what your business is losing
							to missed opportunities.
						</p>

						<motion.button
							className="cursor-pointer inline-flex items-center px-10 py-5 rounded-2xl font-bold text-white text-lg relative overflow-hidden shadow-2xl mb-4"
							style={{
								background:
									'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
							}}
							whileHover={{
								scale: 1.05,
								y: -3,
								boxShadow: '0 20px 48px rgba(234, 88, 12, 0.4)',
							}}
							whileTap={{ scale: 0.98 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 20,
							}}
						>
							<span>Get My Free Revenue Analysis</span>
							<motion.div
								className="ml-3"
								animate={{
									x: [0, 4, 0],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</motion.div>

							{/* Shimmer effect */}
							{!isMobile && (
								<motion.div
									className="absolute inset-0 opacity-0 rounded-2xl"
									style={{
										background:
											'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
									}}
									animate={{
										x: ['-100%', '100%'],
										opacity: [0, 0.3, 0],
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: 'linear',
									}}
								/>
							)}
						</motion.button>

						<div className="text-gray-500 text-sm font-medium">
							Free 30-minute call • No commitment required
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default FinalUrgencySection;
