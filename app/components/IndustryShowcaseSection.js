'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';

const IndustryShowcaseSection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
	const [isMobile, setIsMobile] = useState(false);

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

	// Business types for infinite scroll
	const businessTypes = useMemo(
		() => [
			{ name: 'Medical Clinics', icon: '🏥', color: 'blue' },
			{ name: 'Restaurants', icon: '🍽️', color: 'orange' },
			{ name: 'Barbershops', icon: '✂️', color: 'purple' },
			{ name: 'Hair Salons', icon: '💇‍♀️', color: 'pink' },
			{ name: 'Dental Offices', icon: '🦷', color: 'blue' },
			{ name: 'Law Firms', icon: '⚖️', color: 'gray' },
			{ name: 'Real Estate', icon: '🏠', color: 'green' },
			{ name: 'Auto Repair', icon: '🔧', color: 'red' },
			{ name: 'Gyms & Fitness', icon: '💪', color: 'orange' },
			{ name: 'Pet Grooming', icon: '🐕', color: 'blue' },
			{ name: 'Spas & Wellness', icon: '🧘‍♀️', color: 'purple' },
			{ name: 'HVAC Services', icon: '❄️', color: 'cyan' },
			{ name: 'Plumbing', icon: '🔧', color: 'blue' },
			{ name: 'Electricians', icon: '⚡', color: 'yellow' },
			{ name: 'Cleaning Services', icon: '🧽', color: 'green' },
			{ name: 'Landscaping', icon: '🌱', color: 'green' },
			{ name: 'Photography Studios', icon: '📸', color: 'gray' },
			{ name: 'Tutoring Centers', icon: '📚', color: 'blue' },
			{ name: 'Accounting Firms', icon: '💼', color: 'gray' },
			{ name: 'Insurance Agencies', icon: '🛡️', color: 'blue' },
			{ name: 'Travel Agencies', icon: '✈️', color: 'blue' },
			{ name: 'Florists', icon: '🌸', color: 'pink' },
			{ name: 'Bakeries', icon: '🥖', color: 'orange' },
			{ name: 'Coffee Shops', icon: '☕', color: 'brown' },
			{ name: 'Yoga Studios', icon: '🧘', color: 'purple' },
			{ name: 'Massage Therapy', icon: '💆', color: 'purple' },
			{ name: 'Chiropractors', icon: '🦴', color: 'blue' },
			{ name: 'Optometry', icon: '👓', color: 'blue' },
			{ name: 'Veterinarians', icon: '🐾', color: 'green' },
			{ name: 'Daycare Centers', icon: '🧸', color: 'yellow' },
		],
		[]
	);

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

	// Theme colors for business cards
	const getThemeColors = (color) => {
		const themes = {
			blue: {
				bg: 'rgba(59, 130, 246, 0.1)',
				border: 'rgba(59, 130, 246, 0.3)',
				text: '#3B82F6',
			},
			orange: {
				bg: 'rgba(255, 107, 71, 0.1)',
				border: 'rgba(255, 107, 71, 0.3)',
				text: '#FF6B47',
			},
			purple: {
				bg: 'rgba(147, 51, 234, 0.1)',
				border: 'rgba(147, 51, 234, 0.3)',
				text: '#9333EA',
			},
			green: {
				bg: 'rgba(34, 197, 94, 0.1)',
				border: 'rgba(34, 197, 94, 0.3)',
				text: '#22C55E',
			},
			red: {
				bg: 'rgba(239, 68, 68, 0.1)',
				border: 'rgba(239, 68, 68, 0.3)',
				text: '#EF4444',
			},
			pink: {
				bg: 'rgba(236, 72, 153, 0.1)',
				border: 'rgba(236, 72, 153, 0.3)',
				text: '#EC4899',
			},
			yellow: {
				bg: 'rgba(245, 158, 11, 0.1)',
				border: 'rgba(245, 158, 11, 0.3)',
				text: '#F59E0B',
			},
			cyan: {
				bg: 'rgba(6, 182, 212, 0.1)',
				border: 'rgba(6, 182, 212, 0.3)',
				text: '#06B6D4',
			},
			gray: {
				bg: 'rgba(107, 114, 128, 0.1)',
				border: 'rgba(107, 114, 128, 0.3)',
				text: '#6B7280',
			},
			brown: {
				bg: 'rgba(120, 53, 15, 0.1)',
				border: 'rgba(120, 53, 15, 0.3)',
				text: '#78350F',
			},
		};
		return themes[color] || themes.blue;
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
								'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(59, 130, 246, 0.12) 100%)',
							backdropFilter: 'blur(12px) saturate(180%)',
							border: '1px solid rgba(59, 130, 246, 0.2)',
							borderTop: '1px solid rgba(59, 130, 246, 0.3)',
							borderBottom: '1px solid rgba(59, 130, 246, 0.1)',
							boxShadow: `
								0 4px 24px rgba(59, 130, 246, 0.1),
								0 1px 0 rgba(255, 255, 255, 0.8) inset,
								0 0 20px rgba(59, 130, 246, 0.05)
							`,
						}}
					>
						<span className="text-sm font-semibold text-blue-600 tracking-wide">
							BUILT FOR YOUR INDUSTRY
						</span>
					</motion.div>

					{/* Main Headline */}
					<motion.h2
						variants={headerVariants}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
					>
						Built for Businesses{' '}
						<span className="text-[#FF5633]">Like Yours</span>
					</motion.h2>

					<motion.p
						variants={headerVariants}
						className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
					>
						Industry-specific automation that solves your exact
						problems
					</motion.p>
				</motion.div>

				{/* Infinite Scrolling Business Carousel */}
				<div className="relative mb-16">
					{/* Blur fade overlays - matching section background */}
					<div
						className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
						style={{
							background:
								'linear-gradient(to right, rgba(248, 250, 252, 1) 0%, rgba(248, 250, 252, 0.9) 40%, rgba(248, 250, 252, 0.6) 70%, transparent 100%)',
						}}
					/>
					<div
						className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
						style={{
							background:
								'linear-gradient(to left, rgba(248, 250, 252, 1) 0%, rgba(248, 250, 252, 0.9) 40%, rgba(248, 250, 252, 0.6) 70%, transparent 100%)',
						}}
					/>

					{/* Scrolling container */}
					<div className="overflow-hidden">
						<motion.div
							className="flex gap-6"
							animate={{
								x: [0, -2400], // Adjust based on total width
							}}
							transition={{
								duration: isMobile ? 40 : 60, // Slower on desktop for better readability
								repeat: Infinity,
								ease: 'linear',
							}}
							style={{
								width: 'max-content',
							}}
						>
							{/* Duplicate the array for seamless looping */}
							{[...businessTypes, ...businessTypes].map(
								(business, index) => {
									const themeColors = getThemeColors(
										business.color
									);

									return (
										<motion.div
											key={`${business.name}-${index}`}
											className="flex-shrink-0 cursor-pointer group"
											whileHover={
												!isMobile
													? {
															scale: 1.05,
															y: -4,
													  }
													: {}
											}
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 20,
											}}
										>
											<div
												className="flex items-center gap-3 px-6 py-4 rounded-xl min-w-max"
												style={{
													background: `linear-gradient(135deg, 
													rgba(255, 255, 255, 0.9) 0%, 
													${themeColors.bg} 50%, 
													rgba(255, 255, 255, 0.9) 100%)`,
													backdropFilter:
														'blur(16px) saturate(180%)',
													border: `1px solid ${themeColors.border}`,
													borderTop: `1px solid rgba(255, 255, 255, 0.8)`,
													boxShadow: `
													0 4px 16px rgba(0, 0, 0, 0.06),
													0 2px 8px rgba(0, 0, 0, 0.04),
													inset 0 1px 0 rgba(255, 255, 255, 0.8)
												`,
												}}
											>
												<span className="text-2xl">
													{business.icon}
												</span>
												<span
													className="font-semibold text-sm whitespace-nowrap"
													style={{
														color: themeColors.text,
													}}
												>
													{business.name}
												</span>
											</div>
										</motion.div>
									);
								}
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IndustryShowcaseSection;
