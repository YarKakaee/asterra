'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';

const SolutionPreviewSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const [selectedCard, setSelectedCard] = useState(null);
	const [beforeAfterStates, setBeforeAfterStates] = useState({
		'ai-receptionist': 'before',
		'lead-nurturing': 'before',
		'modern-website': 'before',
	});

	const solutionCards = useMemo(
		() => [
			{
				id: 'ai-receptionist',
				icon: '🤖',
				title: 'AI Receptionist',
				before: {
					scenario: 'Phone rings → Voicemail → Lost lead',
					description: 'Missing calls means missing revenue',
					bgColor: 'from-red-50 to-red-100',
					iconColor: 'text-red-500',
					chart: 'declining',
				},
				after: {
					scenario:
						'AI answers → Appointment booked → Revenue captured',
					description: 'Never miss a customer again',
					bgColor: 'from-green-50 to-green-100',
					iconColor: 'text-green-500',
					chart: 'ascending',
				},
				results: '127% increase',
				metric: 'Lead Conversion',
			},
			{
				id: 'lead-nurturing',
				icon: '📈',
				title: 'Lead Nurturing AI',
				before: {
					scenario:
						'Manual follow-ups → Forgotten leads → Cold prospects',
					description: 'Leads slip through the cracks',
					bgColor: 'from-red-50 to-red-100',
					iconColor: 'text-red-500',
					chart: 'declining',
				},
				after: {
					scenario:
						'Automated sequences → Perfect timing → Hot prospects',
					description: 'Every lead gets VIP treatment',
					bgColor: 'from-green-50 to-green-100',
					iconColor: 'text-green-500',
					chart: 'ascending',
				},
				results: '89% increase',
				metric: 'Follow-up Rate',
			},
			{
				id: 'modern-website',
				icon: '🚀',
				title: 'Modern Website',
				before: {
					scenario: 'Outdated design → Poor UX → Visitors leave',
					description: 'Your website is costing you customers',
					bgColor: 'from-red-50 to-red-100',
					iconColor: 'text-red-500',
					chart: 'declining',
				},
				after: {
					scenario: 'Premium design → Smooth UX → Conversions soar',
					description: 'Your website becomes a sales machine',
					bgColor: 'from-green-50 to-green-100',
					iconColor: 'text-green-500',
					chart: 'ascending',
				},
				results: '156% increase',
				metric: 'Conversion Rate',
			},
		],
		[]
	);

	const toggleBeforeAfter = useCallback((cardId) => {
		setBeforeAfterStates((prev) => ({
			...prev,
			[cardId]: prev[cardId] === 'before' ? 'after' : 'before',
		}));
	}, []);

	// Auto-cycle through cards for demonstration
	useEffect(() => {
		if (!isInView) return;

		const interval = setInterval(() => {
			const cardIds = solutionCards.map((card) => card.id);
			const randomCard =
				cardIds[Math.floor(Math.random() * cardIds.length)];
			toggleBeforeAfter(randomCard);
		}, 4000);

		return () => clearInterval(interval);
	}, [isInView, solutionCards, toggleBeforeAfter]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.2,
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

	const cardVariants = {
		hidden: { opacity: 0, y: 60, rotateX: -15 },
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const ChartIcon = ({ type, className }) => (
		<div className={`w-16 h-10 ${className}`}>
			{type === 'declining' ? (
				<svg viewBox="0 0 64 40" className="w-full h-full">
					<motion.path
						d="M8,32 L20,28 L32,30 L44,35 L56,38"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 1.5, ease: 'easeInOut' }}
					/>
				</svg>
			) : (
				<svg viewBox="0 0 64 40" className="w-full h-full">
					<motion.path
						d="M8,35 L20,30 L32,20 L44,12 L56,8"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 1.5, ease: 'easeInOut' }}
					/>
				</svg>
			)}
		</div>
	);

	return (
		<section
			ref={ref}
			className="relative py-20 lg:py-36 overflow-hidden"
			style={{
				background:
					'linear-gradient(180deg, #151719 0%, #151719 20%, #151719 50%, #151719 100%)',
			}}
		>
			{/* Animated background elements */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
					animate={{
						x: [0, 100, 0],
						y: [0, -50, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
				<motion.div
					className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
					animate={{
						x: [0, -80, 0],
						y: [0, 60, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="text-center mb-16"
				>
					{/* Eyebrow */}
					<motion.div
						variants={headerVariants}
						className="inline-flex items-center px-6 py-3 rounded-full mb-8 glass-plaque-dark"
						style={{
							background:
								'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%)',
							backdropFilter: 'blur(16px) saturate(180%)',
							border: '1px solid rgba(255, 255, 255, 0.3)',
							borderTop: '1px solid rgba(255, 255, 255, 0.6)',
							borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
							boxShadow: `
								0 8px 32px rgba(0, 0, 0, 0.3),
								0 2px 8px rgba(0, 0, 0, 0.2),
								inset 0 1px 0 rgba(255, 255, 255, 0.7),
								inset 0 0 20px rgba(255, 255, 255, 0.1)
							`,
							position: 'relative',
							overflow: 'hidden',
						}}
					>
						{/* Shimmer effect */}
						<motion.div
							className="absolute inset-0 opacity-40"
							style={{
								background:
									'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
							}}
							animate={{
								x: ['-100%', '100%'],
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						/>
						<span className="text-sm font-semibold text-white tracking-wide relative z-10">
							THE TRANSFORMATION
						</span>
					</motion.div>

					{/* Main Headline */}
					<motion.h2
						variants={headerVariants}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
					>
						What If These Problems Just...{' '}
						<motion.span
							className="relative inline-block"
							animate={{
								scale: [1, 1.02, 1],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
								Disappeared?
							</span>
							<motion.div
								className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-transparent rounded-full"
								initial={{ scaleX: 0 }}
								animate={
									isInView ? { scaleX: 1 } : { scaleX: 0 }
								}
								transition={{ delay: 1, duration: 0.8 }}
							/>
						</motion.span>
					</motion.h2>

					{/* Subtext */}
					<motion.p
						variants={headerVariants}
						className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
					>
						See how businesses like yours are winning with
						automation
					</motion.p>
				</motion.div>

				{/* Solution Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
				>
					{solutionCards.map((card, index) => {
						const currentState = beforeAfterStates[card.id];
						const stateData = card[currentState];

						return (
							<motion.div
								key={card.id}
								variants={cardVariants}
								whileHover={{
									scale:
										selectedCard === card.id ? 1.05 : 1.02,
									y: -10,
									rotateY: 5,
									transition: { duration: 0.3 },
								}}
								onClick={() =>
									setSelectedCard(
										selectedCard === card.id
											? null
											: card.id
									)
								}
								className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl cursor-pointer group"
								style={{
									transformStyle: 'preserve-3d',
									willChange: 'transform',
								}}
							>
								{/* Before/After Toggle */}
								<div className="absolute top-6 right-6 z-20">
									<motion.button
										onClick={(e) => {
											e.stopPropagation();
											toggleBeforeAfter(card.id);
										}}
										className="relative w-16 h-8 rounded-full p-1 transition-colors duration-300"
										style={{
											background:
												currentState === 'before'
													? 'linear-gradient(135deg, #fee2e2, #fecaca)'
													: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
										}}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<motion.div
											className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
											animate={{
												x:
													currentState === 'before'
														? 0
														: 32,
											}}
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 20,
											}}
										>
											<span className="text-xs">
												{currentState === 'before'
													? '😰'
													: '😊'}
											</span>
										</motion.div>
									</motion.button>
									{/* Toggle Labels */}
									<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-black/80">
										{currentState === 'before'
											? 'Before'
											: 'After'}
									</div>
								</div>

								{/* Results Badge */}
								<motion.div
									className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B47] to-[#FF8A65] text-white font-bold text-sm shadow-lg"
									animate={{
										scale: [1, 1.05, 1],
									}}
									transition={{
										duration: 5,
										repeat: Infinity,
										delay: index * 1.5,
									}}
								>
									{card.results}
								</motion.div>

								{/* Card Content */}
								<div className="pt-16">
									{/* Icon with animation */}
									<motion.div
										className="text-6xl mb-6 text-center"
										animate={{
											rotateY: [0, 10, 0, -10, 0],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: 'easeInOut',
										}}
									>
										{card.icon}
									</motion.div>

									{/* Title */}
									<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
										{card.title}
									</h3>

									{/* Content with state transition */}
									<AnimatePresence mode="wait">
										<motion.div
											key={`${card.id}-${currentState}`}
											initial={{
												opacity: 0,
												y: 20,
												rotateX: -10,
											}}
											animate={{
												opacity: 1,
												y: 0,
												rotateX: 0,
											}}
											exit={{
												opacity: 0,
												y: -20,
												rotateX: 10,
											}}
											transition={{
												duration: 0.4,
												ease: 'easeInOut',
											}}
											className={`p-6 rounded-2xl bg-gradient-to-br ${
												stateData.bgColor
											} border-2 ${
												currentState === 'before'
													? 'border-red-200'
													: 'border-green-200'
											}`}
											style={{ minHeight: '180px' }}
										>
											{/* Scenario */}
											<div className="text-center mb-4 flex flex-col justify-between h-full">
												<div>
													<p className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
														{stateData.scenario}
													</p>
													<p
														className={`text-sm ${stateData.iconColor}`}
													>
														{stateData.description}
													</p>
												</div>

												{/* Chart */}
												<div className="flex justify-center mt-4">
													<ChartIcon
														type={stateData.chart}
														className={
															stateData.iconColor
														}
													/>
												</div>
											</div>
										</motion.div>
									</AnimatePresence>

									{/* Metric Label */}
									<div className="text-center mt-4">
										<span className="text-sm text-gray-600 font-medium">
											{card.metric}
										</span>
									</div>

									{/* Interaction Cue */}
									<motion.div
										className="text-center mt-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										animate={{
											y: [0, -2, 0],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
										}}
									>
										Click to explore →
									</motion.div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* CTA Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ delay: 1.5, duration: 0.8 }}
					className="text-center"
				>
					<motion.button
						className="inline-flex items-center px-4 sm:px-8 py-4 rounded-2xl sm:font-semibold text-sm sm:text-lg text-white cursor-pointer"
						style={{
							background:
								'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.15) 100%)',
							backdropFilter: 'blur(16px) saturate(180%)',
							border: '1px solid rgba(255, 255, 255, 0.3)',
							borderTop: '1px solid rgba(255, 255, 255, 0.5)',
							borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
							boxShadow: `
								0 8px 32px rgba(0, 0, 0, 0.2),
								0 2px 8px rgba(0, 0, 0, 0.1),
								inset 0 1px 0 rgba(255, 255, 255, 0.6),
								inset 0 0 20px rgba(255, 255, 255, 0.05)
							`,
						}}
						whileHover={{
							scale: 1.05,
							boxShadow: `
								0 12px 40px rgba(0, 0, 0, 0.3),
								0 4px 12px rgba(0, 0, 0, 0.15),
								inset 0 1px 0 rgba(255, 255, 255, 0.7),
								inset 0 0 25px rgba(255, 255, 255, 0.1)
							`,
						}}
						whileTap={{ scale: 0.98 }}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 20,
						}}
					>
						<span>
							Join businesses already winning with automation
						</span>
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
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default SolutionPreviewSection;
