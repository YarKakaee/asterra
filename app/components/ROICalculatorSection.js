'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';

const ROICalculatorSection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
	const [isMobile, setIsMobile] = useState(false);
	const [activeTooltip, setActiveTooltip] = useState(null);

	// Calculator state
	const [inputs, setInputs] = useState({
		businessSize: 25,
		missedCalls: 15,
		manualHours: 3,
	});

	// Animation state for numbers
	const [animatedResults, setAnimatedResults] = useState({
		monthlyLoss: 0,
		annualLoss: 0,
		missedCallRevenue: 0,
		manualLaborCosts: 0,
		efficiencyLosses: 0,
	});

	// Mobile detection
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(
				window.innerWidth < 768 ||
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					)
			);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Calculator logic with tooltip explanations
	const calculatorConfig = useMemo(
		() => ({
			businessSize: {
				label: 'Business Size (Employees)',
				min: 1,
				max: 500,
				default: 25,
				multiplier: 150,
				unit: 'employees',
				tooltip: {
					title: 'Business Inefficiency Cost',
					explanation:
						'Each employee loses ~$150/month due to inefficient processes, poor communication, and manual tasks that could be automated.',
					calculation: 'Employees × $150 × 12 months',
				},
			},
			missedCalls: {
				label: 'Missed Calls per Week',
				min: 0,
				max: 100,
				default: 15,
				multiplier: 75,
				unit: 'calls/week',
				tooltip: {
					title: 'Missed Call Revenue Loss',
					explanation:
						'Average missed call represents $75 in lost revenue opportunity. This includes potential sales, bookings, and customer inquiries.',
					calculation: 'Missed calls/week × 52 weeks × $75',
				},
			},
			manualHours: {
				label: 'Manual Admin Hours per Day',
				min: 0,
				max: 12,
				default: 3,
				multiplier: 35,
				unit: 'hours/day',
				tooltip: {
					title: 'Manual Labor Cost',
					explanation:
						'Time spent on repetitive admin tasks costs $35/hour including wages, benefits, and opportunity cost of higher-value work.',
					calculation: 'Hours/day × 260 work days × $35/hour',
				},
			},
		}),
		[]
	);

	// Calculate results
	const results = useMemo(() => {
		const missedCallRevenue =
			inputs.missedCalls * 52 * calculatorConfig.missedCalls.multiplier;
		const manualLaborCosts =
			inputs.manualHours * 260 * calculatorConfig.manualHours.multiplier;
		const efficiencyLosses =
			inputs.businessSize * calculatorConfig.businessSize.multiplier;

		const monthlyLoss = Math.round(
			(missedCallRevenue + manualLaborCosts + efficiencyLosses) / 12
		);
		const annualLoss =
			missedCallRevenue + manualLaborCosts + efficiencyLosses;

		return {
			monthlyLoss,
			annualLoss,
			missedCallRevenue: Math.round(missedCallRevenue),
			manualLaborCosts: Math.round(manualLaborCosts),
			efficiencyLosses: Math.round(efficiencyLosses),
		};
	}, [inputs, calculatorConfig]);

	// Animated number counter
	const animateNumber = useCallback(
		(startValue, endValue, duration = 2000) => {
			return new Promise((resolve) => {
				const startTime = Date.now();
				const difference = endValue - startValue;

				const updateNumber = () => {
					const elapsed = Date.now() - startTime;
					const progress = Math.min(elapsed / duration, 1);

					// Easing function (easeOutExpo)
					const easedProgress =
						progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
					const currentValue = Math.round(
						startValue + difference * easedProgress
					);

					if (progress < 1) {
						requestAnimationFrame(updateNumber);
					} else {
						resolve();
					}

					return currentValue;
				};

				updateNumber();
			});
		},
		[]
	);

	// Update animated results when calculations change
	useEffect(() => {
		if (!isInView) return;

		const updateAnimatedResults = () => {
			// On mobile, skip animations for better performance
			if (isMobile) {
				setAnimatedResults(results);
				return;
			}

			// Animate each result with staggered timing (desktop only)
			const animations = Object.keys(results).map(
				(key, index) =>
					new Promise((resolve) => {
						const delay = index * 50; // Reduced delay for faster completion
						setTimeout(() => {
							const startTime = Date.now();
							const startValue = animatedResults[key];
							const endValue = results[key];
							const duration = 800; // Reduced duration

							let animationId;
							const updateValue = () => {
								const elapsed = Date.now() - startTime;
								const progress = Math.min(
									elapsed / duration,
									1
								);
								const easedProgress =
									progress === 1
										? 1
										: 1 - Math.pow(2, -10 * progress);
								const currentValue = Math.round(
									startValue +
										(endValue - startValue) * easedProgress
								);

								setAnimatedResults((prev) => ({
									...prev,
									[key]: currentValue,
								}));

								if (progress < 1) {
									animationId =
										requestAnimationFrame(updateValue);
								} else {
									resolve();
								}
							};

							updateValue();

							// Cleanup function
							return () => {
								if (animationId) {
									cancelAnimationFrame(animationId);
								}
							};
						}, delay);
					})
			);

			return Promise.all(animations);
		};

		const debounceTimer = setTimeout(updateAnimatedResults, 100); // Reduced debounce
		return () => clearTimeout(debounceTimer);
	}, [results, isInView, isMobile, animatedResults]);

	// Handle input changes with throttling for better performance
	const handleInputChange = useCallback((key, value) => {
		const parsedValue = parseInt(value, 10);

		// Update inputs immediately for responsive UI
		setInputs((prev) => ({
			...prev,
			[key]: parsedValue,
		}));
	}, []);

	// Close tooltip when clicking outside (mobile)
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isMobile &&
				activeTooltip &&
				!event.target.closest('.tooltip-container')
			) {
				setActiveTooltip(null);
			}
		};

		document.addEventListener('touchstart', handleClickOutside);
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('touchstart', handleClickOutside);
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isMobile, activeTooltip]);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: isMobile ? 0.4 : 0.8,
				staggerChildren: isMobile ? 0.1 : 0.2,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: isMobile ? 20 : 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: isMobile ? 0.4 : 0.7,
				ease: 'easeOut',
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: isMobile ? 0.4 : 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	// Format currency
	const formatCurrency = (amount) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	};

	return (
		<section
			ref={sectionRef}
			className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
		>
			{/* Subtle texture overlay */}
			<div className="absolute inset-0 opacity-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 1px 1px, rgba(255, 107, 71, 0.2) 1px, transparent 0)',
						backgroundSize: '32px 32px',
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="text-center mb-16 lg:mb-20"
				>
					{/* Glass Badge */}
					<motion.div
						variants={headerVariants}
						className="inline-flex items-center px-6 py-3 rounded-full mb-8"
						style={{
							background:
								'linear-gradient(135deg, rgba(255, 107, 71, 0.15) 0%, rgba(255, 107, 71, 0.08) 50%, rgba(255, 107, 71, 0.12) 100%)',
							backdropFilter: 'blur(12px) saturate(180%)',
							border: '1px solid rgba(255, 107, 71, 0.2)',
							borderTop: '1px solid rgba(255, 107, 71, 0.3)',
							borderBottom: '1px solid rgba(255, 107, 71, 0.1)',
							boxShadow: `
								0 4px 24px rgba(255, 107, 71, 0.1),
								0 1px 0 rgba(255, 255, 255, 0.8) inset,
								0 0 20px rgba(255, 107, 71, 0.05)
							`,
						}}
					>
						<span className="text-sm font-semibold text-[#FF5633] tracking-wide">
							ROI CALCULATOR
						</span>
					</motion.div>

					{/* Main Headline */}
					<motion.h2
						variants={headerVariants}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
					>
						Calculate What You&apos;re{' '}
						<span className="text-[#FF5633]">Losing</span> Right Now
					</motion.h2>

					<motion.p
						variants={headerVariants}
						className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
					>
						See the real cost of missed calls and manual processes
					</motion.p>
				</motion.div>

				{/* Calculator Container */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-20">
					{/* Interactive Calculator */}
					<motion.div variants={cardVariants} className="relative">
						<div
							className="rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-visible"
							style={{
								background:
									'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.8) 100%)',
								backdropFilter: isMobile
									? 'blur(16px) saturate(150%)'
									: 'blur(24px) saturate(180%)',
								border: '1px solid rgba(255, 255, 255, 0.6)',
								borderTop: '2px solid rgba(255, 255, 255, 0.8)',
								borderBottom:
									'1px solid rgba(255, 255, 255, 0.3)',
								boxShadow: `
									0 8px 32px rgba(0, 0, 0, 0.08),
									0 2px 8px rgba(0, 0, 0, 0.04),
									inset 0 1px 0 rgba(255, 255, 255, 0.9),
									inset 0 0 20px rgba(255, 255, 255, 0.1)
								`,
							}}
						>
							{/* Shimmer effect - disabled on mobile for performance */}
							{!isMobile && (
								<motion.div
									className="absolute inset-0 opacity-0"
									style={{
										background:
											'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
										willChange: 'transform',
									}}
									animate={{
										x: ['-100%', '100%'],
										opacity: [0, 0.2, 0],
									}}
									transition={{
										duration: 6,
										repeat: Infinity,
										ease: 'linear',
									}}
								/>
							)}

							<h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative z-10">
								Your Business Details
							</h3>

							<div className="space-y-5">
								{Object.entries(calculatorConfig).map(
									([key, config]) => (
										<div key={key} className="relative">
											<div className="flex items-center justify-between mb-2">
												<div className="flex items-center gap-2">
													<label className="text-sm font-semibold text-gray-700">
														{config.label}
													</label>
													{/* Info Tooltip */}
													<div className="relative tooltip-container">
														<motion.button
															className="w-4 h-4 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-xs text-gray-600 transition-colors"
															onClick={() =>
																isMobile
																	? setActiveTooltip(
																			activeTooltip ===
																				key
																				? null
																				: key
																	  )
																	: null
															}
															onMouseEnter={() =>
																!isMobile &&
																setActiveTooltip(
																	key
																)
															}
															onMouseLeave={() =>
																!isMobile &&
																setActiveTooltip(
																	null
																)
															}
															whileHover={
																!isMobile
																	? {
																			scale: 1.1,
																	  }
																	: {}
															}
															whileTap={{
																scale: 0.95,
															}}
														>
															<span className="font-bold">
																i
															</span>
														</motion.button>

														{/* Tooltip Popup */}
														<AnimatePresence>
															{activeTooltip ===
																key && (
																<motion.div
																	className="absolute right-0 bottom-full mb-4 w-72 sm:w-80 z-50 translate-x-34 sm:translate-x-38"
																	initial={{
																		opacity: 0,
																		y: 10,
																		scale: 0.9,
																	}}
																	animate={{
																		opacity: 1,
																		y: 0,
																		scale: 1,
																	}}
																	exit={{
																		opacity: 0,
																		y: 10,
																		scale: 0.9,
																	}}
																	transition={{
																		duration: 0.2,
																		ease: 'easeOut',
																	}}
																>
																	<div
																		className="p-4 rounded-xl shadow-lg relative"
																		style={{
																			background:
																				'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
																			backdropFilter:
																				'blur(20px) saturate(180%)',
																			border: '1px solid rgba(255, 255, 255, 0.6)',
																			borderTop:
																				'2px solid rgba(255, 255, 255, 0.8)',
																			boxShadow: `
																				0 8px 32px rgba(0, 0, 0, 0.15),
																				0 4px 16px rgba(0, 0, 0, 0.1),
																				inset 0 1px 0 rgba(255, 255, 255, 0.9)
																			`,
																		}}
																	>
																		{/* Arrow pointing down */}
																		<div
																			className="absolute top-full w-0 h-0"
																			style={{
																				left: '50%',
																				transform:
																					'translateX(-50%)',
																				borderLeft:
																					'8px solid transparent',
																				borderRight:
																					'8px solid transparent',
																				borderTop:
																					'8px solid rgba(255, 255, 255, 0.9)',
																			}}
																		/>

																		<h4 className="font-bold text-gray-900 mb-2 text-sm">
																			{
																				config
																					.tooltip
																					.title
																			}
																		</h4>
																		<p className="text-xs text-gray-700 mb-3 leading-relaxed">
																			{
																				config
																					.tooltip
																					.explanation
																			}
																		</p>
																		<div className="bg-gray-50 rounded-lg p-2">
																			<p className="text-xs font-mono text-gray-800">
																				<span className="font-semibold">
																					Formula:{' '}
																				</span>
																				{
																					config
																						.tooltip
																						.calculation
																				}
																			</p>
																		</div>
																	</div>
																</motion.div>
															)}
														</AnimatePresence>
													</div>
												</div>
												<div className="flex items-center gap-2">
													<span className="text-lg font-bold text-[#FF5633]">
														{inputs[key]}
													</span>
													<span className="text-xs text-gray-500">
														{config.unit}
													</span>
												</div>
											</div>

											{/* Custom Glass Slider */}
											<div className="relative">
												<input
													type="range"
													min={config.min}
													max={config.max}
													value={inputs[key]}
													onChange={(e) =>
														handleInputChange(
															key,
															e.target.value
														)
													}
													className="w-full h-2 bg-transparent appearance-none cursor-pointer slider-custom"
													style={{
														background: `linear-gradient(to right, 
														#FF5633 0%, 
														#FF5633 ${((inputs[key] - config.min) / (config.max - config.min)) * 100}%, 
														rgba(255, 255, 255, 0.3) ${
															((inputs[key] -
																config.min) /
																(config.max -
																	config.min)) *
															100
														}%, 
														rgba(255, 255, 255, 0.3) 100%)`,
														borderRadius: '6px',
														backdropFilter:
															'blur(8px)',
														border: '1px solid rgba(255, 255, 255, 0.4)',
													}}
												/>
											</div>

											<div className="flex justify-between text-xs text-gray-500 mt-2">
												<span>{config.min}</span>
												<span>{config.max}</span>
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</motion.div>

					{/* Results Display */}
					<motion.div variants={cardVariants} className="relative">
						<div
							className="rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
							style={{
								background:
									'linear-gradient(135deg, rgba(255, 107, 71, 0.08) 0%, rgba(255, 107, 71, 0.04) 50%, rgba(255, 107, 71, 0.06) 100%)',
								backdropFilter: isMobile
									? 'blur(16px) saturate(150%)'
									: 'blur(24px) saturate(180%)',
								border: '1px solid rgba(255, 107, 71, 0.2)',
								borderTop: '2px solid rgba(255, 107, 71, 0.3)',
								borderBottom:
									'1px solid rgba(255, 107, 71, 0.1)',
								boxShadow: `
									0 8px 32px rgba(255, 107, 71, 0.15),
									0 2px 8px rgba(255, 107, 71, 0.08),
									inset 0 1px 0 rgba(255, 255, 255, 0.6),
									inset 0 0 20px rgba(255, 107, 71, 0.05)
								`,
							}}
						>
							{/* Pulsing effect - optimized for performance */}
							{!isMobile && (
								<motion.div
									className="absolute inset-0 rounded-2xl opacity-10"
									style={{
										background:
											'radial-gradient(circle at center, rgba(255, 107, 71, 0.2) 0%, transparent 70%)',
										willChange: 'opacity',
									}}
									animate={{
										opacity: [0.05, 0.15, 0.05],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								/>
							)}

							<div className="relative z-10">
								<h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
									Your business is losing approximately
								</h3>

								{/* Main Loss Amount */}
								<div className="text-center mb-8">
									<motion.div
										className="text-5xl sm:text-6xl font-bold text-[#FF5633] mb-2"
										animate={
											!isMobile
												? {
														scale: [1, 1.01, 1],
												  }
												: {}
										}
										transition={{
											duration: 3,
											repeat: isMobile ? 0 : Infinity,
											ease: 'easeInOut',
										}}
										style={{
											willChange: isMobile
												? 'auto'
												: 'transform',
										}}
									>
										{formatCurrency(
											animatedResults.monthlyLoss
										)}
									</motion.div>
									<div className="text-lg text-gray-600 font-medium">
										per month
									</div>
									<div className="text-sm text-gray-500 mt-2">
										That&apos;s{' '}
										<span className="font-bold text-gray-700">
											{formatCurrency(
												animatedResults.annualLoss
											)}
										</span>{' '}
										annually
									</div>
								</div>

								{/* Breakdown */}
								<div className="space-y-2">
									<div className="flex items-center justify-between p-3 rounded-lg bg-white/30 backdrop-blur-sm">
										<span className="text-sm font-medium text-gray-700">
											Missed Call Revenue
										</span>
										<span className="font-bold text-gray-900">
											{formatCurrency(
												animatedResults.missedCallRevenue
											)}
										</span>
									</div>
									<div className="flex items-center justify-between p-3 rounded-lg bg-white/30 backdrop-blur-sm">
										<span className="text-sm font-medium text-gray-700">
											Manual Labor Costs
										</span>
										<span className="font-bold text-gray-900">
											{formatCurrency(
												animatedResults.manualLaborCosts
											)}
										</span>
									</div>
									<div className="flex items-center justify-between p-3 rounded-lg bg-white/30 backdrop-blur-sm">
										<span className="text-sm font-medium text-gray-700">
											Efficiency Losses
										</span>
										<span className="font-bold text-gray-900">
											{formatCurrency(
												animatedResults.efficiencyLosses
											)}
										</span>
									</div>
								</div>

								{/* CTA Button */}
								<motion.button
									className="w-full mt-8 px-8 py-4 rounded-xl font-semibold text-white relative overflow-hidden"
									style={{
										background:
											'linear-gradient(135deg, #FF5633 0%, #E04A2B 100%)',
										boxShadow:
											'0 4px 16px rgba(255, 86, 51, 0.3)',
										willChange: isMobile
											? 'auto'
											: 'transform, box-shadow',
									}}
									whileHover={
										!isMobile
											? {
													scale: 1.02,
													boxShadow:
														'0 8px 24px rgba(255, 86, 51, 0.4)',
											  }
											: {
													scale: 1.01,
											  }
									}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									<span className="relative z-10">
										Get My Custom ROI Report
									</span>
									{/* Shimmer effect - disabled on mobile */}
									{!isMobile && (
										<motion.div
											className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
											animate={{
												x: ['-100%', '100%'],
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: 'linear',
											}}
										/>
									)}
								</motion.button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<style jsx>{`
				.slider-custom::-webkit-slider-thumb {
					appearance: none;
					height: 20px;
					width: 20px;
					border-radius: 50%;
					background: linear-gradient(
						135deg,
						#ff5633 0%,
						#e04a2b 100%
					);
					border: 2px solid rgba(255, 255, 255, 0.8);
					box-shadow: 0 2px 8px rgba(255, 86, 51, 0.3),
						inset 0 1px 0 rgba(255, 255, 255, 0.4);
					cursor: pointer;
					transition: all 0.2s ease;
				}

				.slider-custom::-webkit-slider-thumb:hover {
					transform: scale(1.1);
					box-shadow: 0 4px 12px rgba(255, 86, 51, 0.4),
						inset 0 1px 0 rgba(255, 255, 255, 0.4);
				}

				.slider-custom::-moz-range-thumb {
					height: 20px;
					width: 20px;
					border-radius: 50%;
					background: linear-gradient(
						135deg,
						#ff5633 0%,
						#e04a2b 100%
					);
					border: 2px solid rgba(255, 255, 255, 0.8);
					box-shadow: 0 2px 8px rgba(255, 86, 51, 0.3),
						inset 0 1px 0 rgba(255, 255, 255, 0.4);
					cursor: pointer;
					transition: all 0.2s ease;
				}

				.slider-custom::-moz-range-thumb:hover {
					transform: scale(1.1);
					box-shadow: 0 4px 12px rgba(255, 86, 51, 0.4),
						inset 0 1px 0 rgba(255, 255, 255, 0.4);
				}
			`}</style>
		</section>
	);
};

export default ROICalculatorSection;
