'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const TechnologyTransparencySection = ({ className = '' } = {}) => {
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
			className={`relative py-20 lg:py-36 overflow-hidden ${className}`}
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
					<motion.h2
						variants={headerVariants}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
					>
						How we solve your problems
					</motion.h2>

					<motion.p
						variants={headerVariants}
						className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
					>
						A behind-the-scenes look at how an automated phone line
						handles real calls — from first hello to confirmed
						booking.
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
			</div>
		</section>
	);
};

export default TechnologyTransparencySection;
