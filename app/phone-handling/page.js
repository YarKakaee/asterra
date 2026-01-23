'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
					className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isHeroInView ? 'visible' : 'hidden'}
							className="text-center"
						>
							{/* Eyebrow */}
							<motion.div
								variants={itemVariants}
								className="mb-4 sm:mb-6"
							>
								<p className="text-xs sm:text-sm text-gray-500 tracking-[0.2em] uppercase font-medium">
									PHONE HANDLING
								</p>
							</motion.div>

							{/* Headline */}
							<motion.h1
								variants={itemVariants}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d1d1f] mb-4 sm:mb-6 leading-tight"
							>
								Every call answered.
								<br />
								Every time.
							</motion.h1>

							{/* Subheadline */}
							<motion.p
								variants={itemVariants}
								className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed font-normal"
							>
								An automated phone line that handles calls,
								bookings, and questions — so nothing falls
								through.
							</motion.p>

							{/* Optional trust line */}
							<motion.p
								variants={itemVariants}
								className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12"
							>
								Live demo available below.
							</motion.p>

							{/* Image with overlaid CTA */}
							<motion.div
								variants={itemVariants}
								className="relative max-w-md mx-auto"
							>
								{/* Phone Image */}
								<div className="relative">
									{mounted && (
										<Image
											src="/heroiphone.png"
											alt="Automated phone line interface showing Enzo's Pizza"
											width={400}
											height={800}
											className="w-full h-auto mx-auto"
											priority
										/>
									)}

									{/* CTA Button Overlaid - positioned in lower third, centered, with breathing room */}
									<motion.div
										variants={buttonVariants}
										className="absolute left-1/2 transform -translate-x-1/2 w-full px-8 sm:px-12"
										style={{
											bottom: '20%', // Slightly overlapping lower third
										}}
									>
										<motion.a
											href="tel:+1234567890"
											className="inline-flex flex-col items-center gap-2 w-full"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.98 }}
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 20,
											}}
										>
											<button className="w-full sm:w-auto px-8 py-4 bg-[#FF5633] text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap">
												Call the demo line
											</button>
											<p className="text-xs text-gray-400 text-center">
												No signup required
											</p>
										</motion.a>
									</motion.div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Additional sections can be added here */}
			</main>

			<Footer />
		</>
	);
};

export default PhoneHandlingPage;
