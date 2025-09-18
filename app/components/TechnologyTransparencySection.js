'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const TechnologyTransparencySection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
	const [isMobile, setIsMobile] = useState(false);

	// Mobile detection
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 40, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	// Node type styling
	const getNodeStyle = (type) => {
		const baseStyle = {
			backdropFilter: 'blur(20px) saturate(180%)',
			border: '2px solid rgba(255, 255, 255, 0.2)',
			borderRadius: '12px',
			boxShadow:
				'0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
			transition: 'all 0.3s ease',
			color: 'white',
		};

		switch (type) {
			case 'trigger':
				return {
					...baseStyle,
					background:
						'linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(22, 163, 74, 0.9))',
					border: '2px solid rgba(34, 197, 94, 0.4)',
				};
			case 'decision':
				return {
					...baseStyle,
					background:
						'linear-gradient(135deg, rgba(251, 191, 36, 0.8), rgba(245, 158, 11, 0.9))',
					border: '2px solid rgba(251, 191, 36, 0.4)',
				};
			case 'ai':
				return {
					...baseStyle,
					background:
						'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.9))',
					border: '2px solid rgba(59, 130, 246, 0.4)',
				};
			case 'action':
				return {
					...baseStyle,
					background:
						'linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(147, 51, 234, 0.9))',
					border: '2px solid rgba(168, 85, 247, 0.4)',
				};
			case 'escalation':
				return {
					...baseStyle,
					background:
						'linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(220, 38, 38, 0.9))',
					border: '2px solid rgba(239, 68, 68, 0.4)',
				};
			case 'integration':
			case 'notification':
			case 'feedback':
			case 'completion':
				return {
					...baseStyle,
					background:
						'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.9))',
					border: '2px solid rgba(16, 185, 129, 0.4)',
				};
			default:
				return {
					...baseStyle,
					background:
						'linear-gradient(135deg, rgba(107, 114, 128, 0.8), rgba(75, 85, 99, 0.9))',
					border: '2px solid rgba(107, 114, 128, 0.4)',
				};
		}
	};

	return (
		<section
			ref={sectionRef}
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
					{/* Glass Badge */}
					<motion.div
						variants={headerVariants}
						className="inline-flex items-center px-6 py-3 rounded-full mb-8"
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
						{!isMobile && (
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
						)}
						<span className="text-sm font-semibold text-white tracking-wide relative z-10">
							FULL TRANSPARENCY
						</span>
					</motion.div>

					<motion.h2
						variants={headerVariants}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
					>
						See Exactly How We Solve{' '}
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
								Your Problems
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

					<motion.p
						variants={headerVariants}
						className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
					>
						Here&apos;s a behind-the-scenes look at how one of our
						barbershop AI receptionists works — answering calls,
						checking availability, and booking appointments
						automatically.
					</motion.p>
				</motion.div>

				{/* Full Width Workflow Display */}
				<motion.div variants={cardVariants} className="w-full mb-12">
					{/* Workflow Canvas - Full Width Black Container */}
					<div
						className="w-full rounded-2xl relative overflow-hidden"
						style={{
							background: '#0f0f0f',
							border: '1px solid rgba(75, 85, 99, 0.3)',
							boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
						}}
					>
						<div className="relative z-10">
							<div className="justify-center">
								<motion.img
									src={
										isMobile
											? '/mobileworkflow.png'
											: '/workflow.png'
									}
									alt="Barbershop AI Receptionist Workflow"
									className="max-w-full h-auto rounded-lg"
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.5,
										ease: 'easeOut',
									}}
								/>
							</div>
						</div>
					</div>
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
						<span>Get Your Custom Workflow </span>
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

export default TechnologyTransparencySection;
