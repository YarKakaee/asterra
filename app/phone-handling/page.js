'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechnologyTransparencySection from '../components/TechnologyTransparencySection';
import WhatItHandlesSection from '../components/WhatItHandlesSection';

const PhoneHandlingPage = () => {
	const heroRef = useRef(null);
	const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Animation variants
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

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	const buttonVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.175, 0.885, 0.32, 1.275],
				delay: 0.4,
			},
		},
	};

	return (
		<>
			<Navbar />

			<main>
				{/* Hero Section */}
				<section
					ref={heroRef}
					className="relative pt-32 sm:pt-48 sm:pb-0 overflow-hidden"
				>
					{/* Subtle off-white texture background */}
					<div
						className="absolute inset-0"
						style={{
							background: '#F9F4F2',
						}}
					>
						{/* Soft dot texture (visible but subtle) */}
						<div
							className="absolute inset-0 opacity-40"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.14) 1.4px, transparent 0)',
								backgroundSize: '22px 22px',
								backgroundPosition: '0 0',
							}}
						/>
						{/* Secondary finer dot layer for depth */}
						<div
							className="absolute inset-0 opacity-20"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 0.9px, transparent 0)',
								backgroundSize: '11px 11px',
								backgroundPosition: '6px 6px',
							}}
						/>
						{/* Gentle “paper” blobs (very soft) */}
						<div
							className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
							style={{
								background: 'rgba(21, 23, 25, 0.05)',
							}}
						/>
						<div
							className="absolute -bottom-28 -right-28 h-[28rem] w-[28rem] rounded-full blur-3xl"
							style={{
								background: 'rgba(21, 23, 25, 0.035)',
							}}
						/>
						{/* Gentle gradient wash */}
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.7) 100%)',
							}}
						/>
					</div>

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isHeroInView ? 'visible' : 'hidden'}
							className="text-center relative z-10"
						>
							{/* Eyebrow */}
							<motion.div
								variants={itemVariants}
								className="mb-4"
							>
								<p className="text-xs sm:text-sm text-gray-500 tracking-[0.2em] uppercase font-medium">
									PHONE HANDLING
								</p>
							</motion.div>

							{/* Headline */}
							<motion.h1
								variants={itemVariants}
								className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1d1d1f] mb-4 sm:mb-6 leading-tight"
							>
								Every call answered. Every time.
							</motion.h1>

							{/* Subheadline */}
							<motion.p
								variants={itemVariants}
								className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed font-light"
							>
								An automated phone line that handles calls,
								bookings, and questions
							</motion.p>

							{/* Image with overlaid CTA */}
							<motion.div
								variants={itemVariants}
								className="relative max-w-md mx-auto"
							>
								{/* Phone Image */}
								<div className="relative">
									{/* Soft shadow behind the phone */}
									<div className="pointer-events-none absolute left-1/2 bottom-4 -translate-x-1/2 w-[92%] sm:w-[88%] h-14 sm:h-16 bg-black/25 blur-3xl rounded-full" />
									<div className="pointer-events-none absolute left-1/2 bottom-6 -translate-x-1/2 w-[70%] sm:w-[64%] h-10 sm:h-12 bg-black/35 blur-2xl rounded-full" />

									{mounted && (
										<Image
											src="/heroiphone.png"
											alt="Automated phone line interface showing Enzo's Pizza"
											width={400}
											height={800}
											className="w-full h-auto mx-auto"
											style={{
												filter: 'drop-shadow(0 60px 110px rgba(0,0,0,0.38)) drop-shadow(0 22px 45px rgba(0,0,0,0.22))',
											}}
											priority
										/>
									)}

									{/* CTA Button Overlaid - positioned in lower third, centered, with breathing room */}
									<motion.div
										variants={buttonVariants}
										className="absolute w-full px-8 sm:px-12"
										style={{
											bottom: '13%', // Slightly overlapping lower third
										}}
									>
										<motion.a
											href="tel:+14374944696"
											className="inline-flex flex-col items-center gap-4 w-full"
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 20,
											}}
										>
											<button className="w-auto px-8 py-3.5 bg-white/95 backdrop-blur-sm text-[#1d1d1f] text-base sm:text-lg font-medium rounded-3xl border border-gray-200/50 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200 whitespace-nowrap cursor-pointer">
												Call the live demo
											</button>
											<p className="text-xs text-gray-400/80 text-center">
												(437) 494-4696
											</p>
										</motion.a>
									</motion.div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* What it handles */}
				<WhatItHandlesSection />
			</main>

			<Footer />
		</>
	);
};

export default PhoneHandlingPage;
