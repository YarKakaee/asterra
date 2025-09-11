'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ProblemValidationSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const [hoveredCard, setHoveredCard] = useState(null);

	const problemCards = [
		{
			id: 'revenue-leaks',
			emoji: '💸',
			title: 'Revenue Leaks',
			problems: [
				'"We lose 3-4 potential customers daily to missed calls"',
				'"Follow-ups get forgotten and deals go cold"',
				'"Our response time is killing our conversion rate"',
			],
			gradient: 'from-red-50 to-orange-50',
			borderColor: 'border-red-100',
			accentColor: 'border-l-red-400',
		},
		{
			id: 'time-drains',
			emoji: '⏰',
			title: 'Time Drains',
			problems: [
				'"I spend 3 hours daily on repetitive admin tasks"',
				'"Manual data entry is consuming my entire day"',
				'"Scheduling back-and-forth emails waste so much time"',
			],
			gradient: 'from-amber-50 to-yellow-50',
			borderColor: 'border-amber-100',
			accentColor: 'border-l-amber-400',
		},
		{
			id: 'stress-multipliers',
			emoji: '🤯',
			title: 'Stress Multipliers',
			problems: [
				'"I constantly worry about missing important calls"',
				'"Juggling multiple systems is overwhelming"',
				'"We are always one step behind"',
			],
			gradient: 'from-purple-50 to-indigo-50',
			borderColor: 'border-purple-100',
			accentColor: 'border-l-purple-400',
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.15,
			},
		},
	};

	const headerVariants = {
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

	const cardVariants = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	const problemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				delay: i * 0.1,
				ease: 'easeOut',
			},
		}),
	};

	return (
		<section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-30">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`,
						backgroundSize: '32px 32px',
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
						className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6"
					>
						<span className="text-sm font-semibold text-[#FF6B47] tracking-wide">
							THE REALITY CHECK
						</span>
					</motion.div>

					{/* Main Headline with word animation */}
					<motion.h2
						variants={headerVariants}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
					>
						Does This Sound{' '}
						<span className="relative">
							<span className="bg-gradient-to-r from-[#FF6B47] to-[#FF8A65] bg-clip-text text-transparent">
								Familiar?
							</span>
							<motion.div
								className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B47] to-transparent rounded-full"
								initial={{ scaleX: 0 }}
								animate={
									isInView ? { scaleX: 1 } : { scaleX: 0 }
								}
								transition={{ delay: 0.8, duration: 0.6 }}
							/>
						</span>
					</motion.h2>

					{/* Subtext */}
					<motion.p
						variants={headerVariants}
						className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
					>
						If you nodded to any of these, you are not alone.
					</motion.p>
				</motion.div>

				{/* Problem Cards Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
				>
					{problemCards.map((card, index) => (
						<motion.div
							key={card.id}
							variants={cardVariants}
							whileHover={{
								y: -8,
								scale: 1.02,
								rotateY: hoveredCard === card.id ? 2 : 0,
								transition: { duration: 0.3, ease: 'easeOut' },
							}}
							onHoverStart={() => setHoveredCard(card.id)}
							onHoverEnd={() => setHoveredCard(null)}
							className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${card.borderColor} border-2`}
							style={{
								background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
								backdropFilter: 'blur(10px)',
								willChange: 'transform',
							}}
						>
							{/* Hover glow effect */}
							<motion.div
								className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
								style={{
									background: `linear-gradient(135deg, ${card.gradient
										.replace('from-', 'rgba(')
										.replace('to-', 'rgba(')
										.replace('-50', '-500, 0.1)')
										.replace('-50', '-500, 0.05)')})`,
								}}
								animate={{
									opacity: hoveredCard === card.id ? 1 : 0,
								}}
							/>

							{/* Card Content */}
							<div className="relative z-10">
								{/* Icon */}
								<motion.div
									className="text-5xl mb-4"
									animate={{
										scale:
											hoveredCard === card.id ? 1.1 : 1,
										rotate:
											hoveredCard === card.id
												? [0, -5, 5, 0]
												: 0,
									}}
									transition={{ duration: 0.3 }}
								>
									{card.emoji}
								</motion.div>

								{/* Title */}
								<h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
									{card.title}
								</h3>

								{/* Gradient divider */}
								<motion.div
									className="h-1 w-12 bg-gradient-to-r from-[#FF6B47] to-transparent rounded-full mb-6"
									initial={{ scaleX: 0 }}
									animate={
										isInView ? { scaleX: 1 } : { scaleX: 0 }
									}
									transition={{
										delay: 0.3 + index * 0.1,
										duration: 0.5,
									}}
								/>

								{/* Problems List */}
								<div className="space-y-4">
									{card.problems.map(
										(problem, problemIndex) => (
											<motion.div
												key={problemIndex}
												custom={problemIndex}
												variants={problemVariants}
												initial="hidden"
												animate={
													isInView
														? 'visible'
														: 'hidden'
												}
												className={`relative p-4 rounded-lg border-l-4 ${card.accentColor} transition-all duration-200 hover:shadow-md`}
												style={{
													background: `linear-gradient(135deg, ${card.gradient
														.replace(
															'from-',
															'rgba('
														)
														.replace('to-', 'rgba(')
														.replace(
															'-50',
															'-500, 0.08)'
														)
														.replace(
															'-50',
															'-500, 0.03)'
														)})`,
												}}
											>
												<p className="text-gray-700 leading-relaxed italic">
													{problem}
												</p>
											</motion.div>
										)
									)}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* CTA Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ delay: 1.2, duration: 0.6 }}
					className="text-center"
				>
					<motion.button
						className="cursor-pointer inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF5633] to-[#ff755a] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
						whileHover={{
							scale: 1.05,
							boxShadow: '0 20px 40px rgba(255, 107, 71, 0.3)',
						}}
						whileTap={{ scale: 0.98 }}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 20,
						}}
					>
						Stop the Bleeding
						<motion.span
							className="ml-2"
							animate={{ x: [0, 5, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
						>
							→
						</motion.span>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default ProblemValidationSection;
