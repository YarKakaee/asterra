'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <section className="h-[770px]"></section>;
	}
	// Animation variants
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

	const badgeVariants = {
		hidden: { opacity: 0, scale: 0.8, y: -20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.175, 0.885, 0.32, 1.275], // Custom spring easing
			},
		},
	};

	const headingContainerVariants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08, // Fast word-by-word reveal
				delayChildren: 0.1,
			},
		},
	};

	const wordVariants = {
		hidden: {
			opacity: 0,
			y: 15,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
	};

	const subtextVariants = {
		hidden: { opacity: 0, y: 15 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				delay: 0.1,
			},
		},
	};

	const buttonVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.175, 0.885, 0.32, 1.275],
				delay: 0.3,
			},
		},
	};

	return (
		<section className="py-18 lg:py-50 relative mb-26 lg:mb-0">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center"
				>
					{/* ROI Guarantee Badge */}
					{/* <motion.div variants={badgeVariants} className="mb-8">
						<motion.a
							href="/guarantee"
							className="inline-flex items-center px-6 py-3 glass-plaque rounded-full text-sm font-semibold text-gray-800"
							whileHover={{
								scale: 1.05,
								transition: {
									type: 'spring',
									stiffness: 400,
									damping: 25,
								},
							}}
							whileTap={{
								scale: 0.98,
								transition: {
									type: 'spring',
									stiffness: 600,
									damping: 20,
								},
							}}
						>
							Simple Systems, Real Results
						</motion.a>
					</motion.div> */}

					{/* Main Headline */}
					<motion.h1
						variants={headingContainerVariants}
						initial="hidden"
						animate="visible"
						className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-inset leading-tight mt-16 mb-6 max-w-4xl mx-auto"
					>
						{['We', 'scale', 'local', 'businesses.', ,].map(
							(word, index) => (
								<motion.span
									key={index}
									variants={wordVariants}
									className="inline-block mr-2 text-[#1d1d1f]"
								>
									{word}
								</motion.span>
							)
						)}
					</motion.h1>

					{/* Subtext */}
					<motion.p
						variants={subtextVariants}
						className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed"
					>
						Simple systems that help businesses handle calls,
						customers, and operations — without adding complexity.
					</motion.p>

					{/* CTA Button */}
					<motion.div variants={buttonVariants}>
						<motion.a
							href="/book-demo"
							className="inline-flex items-center px-7.5 py-4 bg-[#FF5633] text-white text-lg font-medium rounded-3xl transition-all duration-200 shadow-lg"
							whileHover={{
								scale: 1.05,
								boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
							}}
							whileTap={{ scale: 0.98 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 20,
							}}
						>
							See how it works
						</motion.a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
