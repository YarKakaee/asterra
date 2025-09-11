'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingGuaranteePlaque = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		// Show after a delay to not interfere with initial page load
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	// Auto-pulse animation every 8 seconds
	const pulseVariants = {
		initial: { scale: 1 },
		pulse: {
			scale: [1, 1.02, 1],
			transition: {
				duration: 2,
				repeat: Infinity,
				repeatDelay: 6,
				ease: 'easeInOut',
			},
		},
	};

	const expandedVariants = {
		collapsed: {
			width: '200px',
			height: '80px',
		},
		expanded: {
			width: '280px',
			height: '160px',
			transition: {
				duration: 0.4,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed bottom-8 right-8 z-50"
					initial={{ opacity: 0, y: 100, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 100, scale: 0.8 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<motion.div
						variants={pulseVariants}
						initial="initial"
						animate="pulse"
						className="relative cursor-pointer"
						onClick={() => setIsExpanded(!isExpanded)}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
					>
						<motion.div
							variants={expandedVariants}
							animate={isExpanded ? 'expanded' : 'collapsed'}
							className="rounded-2xl p-4 overflow-hidden"
							style={{
								background:
									'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.3) 100%)',
								backdropFilter: 'blur(20px) saturate(180%)',
								border: '1px solid rgba(255, 255, 255, 0.4)',
								borderTop: '2px solid rgba(255, 255, 255, 0.7)',
								borderBottom:
									'1px solid rgba(255, 255, 255, 0.1)',
								boxShadow: `
									0 12px 48px rgba(0, 0, 0, 0.15),
									0 4px 16px rgba(0, 0, 0, 0.1),
									inset 0 1px 0 rgba(255, 255, 255, 0.8),
									inset 0 0 25px rgba(255, 255, 255, 0.1)
								`,
							}}
						>
							{/* Shimmer Effect */}
							<motion.div
								className="absolute inset-0 opacity-40"
								style={{
									background:
										'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
								}}
								animate={{
									x: ['-100%', '100%'],
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>

							{/* Content */}
							<div className="relative z-10 flex items-center">
								{/* Shield Icon */}
								<motion.div
									className="flex-shrink-0 mr-3"
									animate={{
										rotate: [0, 2, -2, 0],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<div
										className="w-12 h-12 rounded-full flex items-center justify-center"
										style={{
											background:
												'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
											border: '1px solid rgba(34, 197, 94, 0.3)',
										}}
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											className="text-green-600"
										>
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
											<path d="M9 12l2 2 4-4" />
										</svg>
									</div>
								</motion.div>

								{/* Text Content */}
								<div className="flex-1 min-w-0">
									<motion.h3
										className="font-bold text-sm text-gray-800 leading-tight"
										style={{
											textShadow:
												'0 1px 0 rgba(255, 255, 255, 0.5)',
										}}
									>
										30-Day ROI
									</motion.h3>
									<motion.p
										className="text-xs text-gray-600 font-medium"
										style={{
											textShadow:
												'0 1px 0 rgba(255, 255, 255, 0.3)',
										}}
									>
										Guarantee
									</motion.p>

									{/* Expanded Content */}
									<AnimatePresence>
										{isExpanded && (
											<motion.div
												initial={{
													opacity: 0,
													height: 0,
												}}
												animate={{
													opacity: 1,
													height: 'auto',
												}}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												className="mt-3 pt-3 border-t border-white/30"
											>
												<p className="text-xs text-gray-700 leading-relaxed mb-2">
													We guarantee measurable ROI
													within 30 days, or we will
													work for free until you see
													results.
												</p>
												<motion.div
													className="inline-flex items-center text-xs font-semibold text-green-600"
													animate={{
														x: [0, 2, 0],
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
													}}
												>
													Learn more →
												</motion.div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>

							{/* Expand Indicator */}
							{!isExpanded && (
								<motion.div
									className="absolute bottom-2 right-2 text-gray-400"
									animate={{
										y: [0, -2, 0],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
									}}
								>
									<svg
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M7 10l5 5 5-5z" />
									</svg>
								</motion.div>
							)}
						</motion.div>
					</motion.div>

					{/* Floating Animation */}
					<motion.div
						className="absolute inset-0 pointer-events-none"
						animate={{
							y: [0, -8, 0],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default FloatingGuaranteePlaque;
