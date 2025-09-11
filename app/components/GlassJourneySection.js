'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useMemo, useCallback } from 'react';

const GlassJourneySection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
	const [activeStep, setActiveStep] = useState(0);
	const [expandedCard, setExpandedCard] = useState(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const progressWidth = useTransform(
		scrollYProgress,
		[0.2, 0.8],
		['0%', '100%']
	);

	const processSteps = useMemo(
		() => [
			{
				id: 'diagnose',
				number: '01',
				title: 'DIAGNOSE',
				icon: '🔍',
				duration: 'Week 1',
				theme: 'blue',
				position: 'above',
				shortDesc:
					'We audit your current processes and identify revenue leaks',
				deliverables: [
					'Complete business process audit',
					'Revenue leak identification',
					'Efficiency bottleneck analysis',
					'Custom improvement roadmap',
				],
				details:
					'Our expert team conducts a comprehensive analysis of your current workflows, identifying exactly where time and money are being lost.',
			},
			{
				id: 'design',
				number: '02',
				title: 'DESIGN',
				icon: '⚡',
				duration: 'Week 2',
				theme: 'purple',
				position: 'below',
				shortDesc:
					'Custom automation solutions tailored to your business',
				deliverables: [
					'Custom workflow design',
					'AI integration planning',
					'System architecture blueprint',
					'Implementation timeline',
				],
				details:
					'We create bespoke automation solutions that integrate seamlessly with your existing systems and processes.',
			},
			{
				id: 'deploy',
				number: '03',
				title: 'DEPLOY',
				icon: '🚀',
				duration: 'Week 3',
				theme: 'orange',
				position: 'above',
				shortDesc: 'Seamless implementation with full team training',
				deliverables: [
					'Complete system deployment',
					'Team training sessions',
					'Quality assurance testing',
					'Go-live support',
				],
				details:
					'Our deployment process ensures zero disruption to your business while your team gets fully trained on the new systems.',
			},
			{
				id: 'deliver',
				number: '04',
				title: 'DELIVER',
				icon: '📈',
				duration: 'Week 4',
				theme: 'green',
				position: 'below',
				shortDesc: 'Measurable results with guaranteed ROI',
				deliverables: [
					'Optimization recommendations',
					'Ongoing support plan',
					'Workflow efficiency tracking',
					'Cost-savings analysis',
				],
				details:
					"We deliver measurable results with detailed analytics showing exactly how much time and money you're saving.",
			},
		],
		[]
	);

	const toggleCard = useCallback(
		(stepId) => {
			setExpandedCard(expandedCard === stepId ? null : stepId);
		},
		[expandedCard]
	);

	// Animation variants following your established patterns
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.15,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: 'easeOut',
			},
		},
	};

	const wordVariants = {
		hidden: {
			opacity: 0,
			y: 20,
			filter: 'blur(8px)',
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const cardVariants = {
		inactive: {
			scale: 1,
			rotateX: 0,
			y: 0,
			transition: { duration: 0.4, ease: 'easeOut' },
		},
		hover: {
			scale: 1.02,
			rotateX: 2,
			y: -4,
			transition: { duration: 0.4, ease: 'easeOut' },
		},
	};

	const getThemeColors = (theme) => {
		const themes = {
			blue: {
				bg: 'from-blue-50 to-cyan-50',
				border: 'border-blue-200',
				text: 'text-blue-600',
				glow: 'shadow-blue-500/20',
			},
			purple: {
				bg: 'from-purple-50 to-indigo-50',
				border: 'border-purple-200',
				text: 'text-purple-600',
				glow: 'shadow-purple-500/20',
			},
			orange: {
				bg: 'from-orange-50 to-red-50',
				border: 'border-orange-200',
				text: 'text-orange-600',
				glow: 'shadow-orange-500/20',
			},
			green: {
				bg: 'from-green-50 to-emerald-50',
				border: 'border-green-200',
				text: 'text-green-600',
				glow: 'shadow-green-500/20',
			},
		};
		return themes[theme] || themes.blue;
	};

	return (
		<section
			ref={sectionRef}
			className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
			style={{
				background:
					'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 30%, rgba(241, 245, 249, 0.6) 70%, rgba(255, 255, 255, 1) 100%)',
			}}
		>
			{/* Subtle texture overlay */}
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 3px, transparent 0)',
						backgroundSize: '20px 20px',
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Glass Header */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="text-center mb-20"
				>
					{/* Glass Badge */}
					<motion.div
						variants={headerVariants}
						className="inline-flex items-center px-6 py-3 rounded-full mb-8"
						style={{
							background:
								'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.3) 100%)',
							backdropFilter: 'blur(12px) saturate(180%)',
							border: '1px solid rgba(255, 255, 255, 0.3)',
							borderTop: '1px solid rgba(255, 255, 255, 0.6)',
							borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
							boxShadow: `
								0 4px 24px rgba(0, 0, 0, 0.06),
								0 1px 0 rgba(255, 255, 255, 0.8) inset,
								0 0 20px rgba(255, 255, 255, 0.1)
							`,
						}}
					>
						<span className="text-sm font-semibold text-[#FF6B47] tracking-wide">
							OUR PROVEN METHOD
						</span>
					</motion.div>

					{/* Main Headline with word-by-word animation */}
					<motion.h2
						variants={headerVariants}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
					>
						{[
							'From',
							'Problem',
							'to',
							'Profit',
							'in',
							'30',
							'Days',
						].map((word, index) => (
							<motion.span
								key={index}
								variants={wordVariants}
								className="inline-block mr-3 text-inset"
								custom={index}
							>
								{word}
							</motion.span>
						))}
					</motion.h2>

					{/* Subtext */}
					<motion.p
						variants={headerVariants}
						className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
					>
						The exact system we use to transform businesses like
						yours
					</motion.p>
				</motion.div>

				{/* Glass Timeline System */}
				<div className="relative">
					{/* Connecting Lines - Hidden on mobile, visible on desktop */}
					<div className="hidden lg:block absolute left-12 top-12 bottom-12 w-0.5 z-0">
						<motion.div
							className="w-full h-full rounded-full"
							style={{
								background:
									'linear-gradient(180deg, rgba(255, 107, 71, 0.3) 0%, rgba(255, 107, 71, 0.1) 50%, rgba(255, 107, 71, 0.3) 100%)',
								backdropFilter: 'blur(4px)',
							}}
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							transition={{
								duration: 2,
								ease: 'easeOut',
								delay: 1,
							}}
						/>

						{/* Animated pulse along the line */}
						<motion.div
							className="absolute top-0 w-2 h-2 bg-orange-400 rounded-full -left-0.5"
							style={{
								boxShadow: '0 0 10px rgba(255, 107, 71, 0.6)',
							}}
							animate={{
								y: ['0%', '100%'],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								ease: 'linear',
							}}
						/>
					</div>

					{/* Process Steps */}
					<div className="relative z-10 space-y-8 lg:space-y-32">
						{processSteps.map((step, index) => {
							const isExpanded = expandedCard === step.id;
							const themeColors = getThemeColors(step.theme);

							return (
								<div
									key={step.id}
									className={`flex flex-col lg:flex-row items-start lg:items-center ${
										step.position === 'below'
											? 'lg:flex-row-reverse'
											: ''
									}`}
								>
									{/* Glass Node */}
									<div className="flex-shrink-0 relative mb-4 lg:mb-0">
										{/* Outer glow ring */}
										<motion.div
											className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full"
											style={{
												background: `linear-gradient(135deg, ${themeColors.bg})`,
												opacity: 0.3,
											}}
											animate={{
												scale: [1, 1.1, 1],
												opacity: [0.3, 0.5, 0.3],
											}}
											transition={{
												duration: 4,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
										/>

										<motion.div
											className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center cursor-pointer group"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)',
												backdropFilter:
													'blur(20px) saturate(180%)',
												border: '2px solid rgba(255, 255, 255, 0.7)',
												borderTop:
													'3px solid rgba(255, 255, 255, 0.9)',
												boxShadow: `
													0 12px 40px rgba(0, 0, 0, 0.15),
													0 4px 16px rgba(0, 0, 0, 0.08),
													inset 0 2px 0 rgba(255, 255, 255, 0.9),
													inset 0 0 30px rgba(255, 255, 255, 0.1)
												`,
											}}
											whileHover={{
												scale: 1.08,
												rotateY: 10,
												boxShadow: `
													0 16px 50px rgba(0, 0, 0, 0.2),
													0 6px 20px rgba(0, 0, 0, 0.1),
													inset 0 2px 0 rgba(255, 255, 255, 1),
													inset 0 0 40px rgba(255, 255, 255, 0.15)
												`,
											}}
											animate={{
												scale: [1, 1.02, 1],
												rotateZ: [0, 2, -2, 0],
											}}
											transition={{
												duration: 6,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
										>
											{/* Inner shimmer effect */}
											<motion.div
												className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
												style={{
													background:
														'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%)',
												}}
												animate={{
													rotate: [0, 360],
												}}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: 'linear',
												}}
											/>

											<motion.span
												className="text-xl sm:text-2xl lg:text-3xl relative z-10"
												animate={{
													scale: [1, 1.1, 1],
												}}
												transition={{
													duration: 4,
													repeat: Infinity,
													ease: 'easeInOut',
													delay: index * 0.5,
												}}
											>
												{step.icon}
											</motion.span>
										</motion.div>

										{/* Step number badge */}
										<motion.div
											className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 107, 71, 0.9) 0%, rgba(255, 107, 71, 0.7) 100%)',
												backdropFilter: 'blur(8px)',
												border: '2px solid rgba(255, 255, 255, 0.8)',
												color: 'white',
												boxShadow:
													'0 4px 12px rgba(255, 107, 71, 0.3)',
											}}
											initial={{ scale: 0, rotate: -180 }}
											animate={{ scale: 1, rotate: 0 }}
											transition={{
												delay: index * 0.2 + 0.5,
												duration: 0.6,
												type: 'spring',
												stiffness: 200,
											}}
										>
											{step.number}
										</motion.div>
									</div>

									{/* Glass Card */}
									<motion.div
										className={`flex-1 w-full ${
											step.position === 'below'
												? 'lg:mr-12'
												: 'lg:ml-12'
										}`}
										variants={cardVariants}
										initial="inactive"
										whileHover="hover"
										onClick={() => toggleCard(step.id)}
									>
										<motion.div
											className="cursor-pointer rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.6) 100%)',
												backdropFilter:
													'blur(24px) saturate(180%)',
												border: '1px solid rgba(255, 255, 255, 0.6)',
												borderTop:
													'2px solid rgba(255, 255, 255, 0.8)',
												boxShadow: isExpanded
													? `
														0 20px 60px rgba(0, 0, 0, 0.12),
														0 8px 32px rgba(0, 0, 0, 0.08),
														inset 0 2px 0 rgba(255, 255, 255, 0.9),
														inset 0 0 40px rgba(255, 255, 255, 0.1)
													`
													: `
														0 8px 32px rgba(0, 0, 0, 0.08),
														0 4px 16px rgba(0, 0, 0, 0.04),
														inset 0 1px 0 rgba(255, 255, 255, 0.8),
														inset 0 0 20px rgba(255, 255, 255, 0.05)
													`,
												minHeight: isExpanded
													? '280px'
													: '120px',
												transformStyle: 'preserve-3d',
											}}
											animate={{
												minHeight: isExpanded
													? '280px'
													: '120px',
											}}
											transition={{
												duration: 0.4,
												ease: 'easeOut',
											}}
										>
											{/* Header */}
											<div className="flex items-start justify-between mb-4 relative z-10">
												<div className="flex-1">
													<div className="flex items-center gap-3 mb-2">
														<span className="text-xs sm:text-sm text-gray-500 font-medium">
															{step.duration}
														</span>
													</div>
													<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
														{step.title}
													</h3>
													<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
														{step.shortDesc}
													</p>
												</div>
												{/* Expand indicator - moved to always be visible */}
												<motion.div
													className="ml-4 text-gray-400 text-lg cursor-pointer"
													animate={{
														rotate: isExpanded
															? 180
															: 0,
													}}
													transition={{
														duration: 0.3,
													}}
												>
													↓
												</motion.div>
											</div>

											{/* Expanded Content */}
											<motion.div
												initial={false}
												animate={{
													opacity: isExpanded ? 1 : 0,
													height: isExpanded
														? 'auto'
														: 0,
												}}
												transition={{
													duration: 0.3,
													ease: 'easeOut',
												}}
												className="overflow-hidden"
											>
												<div className="pt-4 border-t border-white/30">
													<p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
														{step.details}
													</p>
													<div className="grid grid-cols-1 gap-3">
														{step.deliverables.map(
															(item, idx) => (
																<motion.div
																	key={idx}
																	className="flex items-center gap-2 p-2 rounded-lg"
																	style={{
																		background:
																			'rgba(255, 255, 255, 0.3)',
																		backdropFilter:
																			'blur(8px)',
																	}}
																	initial={{
																		opacity: 0,
																		x: -10,
																	}}
																	animate={
																		isExpanded
																			? {
																					opacity: 1,
																					x: 0,
																			  }
																			: {
																					opacity: 0,
																					x: -10,
																			  }
																	}
																	transition={{
																		delay:
																			idx *
																			0.1,
																		duration: 0.3,
																	}}
																>
																	<span className="text-green-500 font-bold text-sm">
																		✓
																	</span>
																	<span className="text-xs sm:text-sm text-gray-700">
																		{item}
																	</span>
																</motion.div>
															)
														)}
													</div>
												</div>
											</motion.div>
										</motion.div>
									</motion.div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default GlassJourneySection;
