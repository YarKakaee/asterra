'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useMobileDetection } from '../../utils/mobileOptimization';

const LeadNurturingPage = () => {
	const heroRef = useRef(null);
	const contentRef = useRef(null);
	const transparencyRef = useRef(null);
	const ctaRef = useRef(null);
	const isMobile = useMobileDetection();

	const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
	const isContentInView = useInView(contentRef, {
		once: true,
		margin: '-50px',
	});
	const isTransparencyInView = useInView(transparencyRef, {
		once: true,
		margin: '-50px',
	});
	const isCtaInView = useInView(ctaRef, { once: true, margin: '-50px' });

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

	const headerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
			},
		},
	};

	const cardVariants = {
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

	const sectionVariants = {
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

	return (
		<>
			<Navbar />

			<main>
				{/* Hero Section */}
				<section
					ref={heroRef}
					className="relative py-20 lg:py-36 overflow-hidden lg:pt-54"
					style={{
						background:
							'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 30%, rgba(241, 245, 249, 0.6) 70%, rgba(255, 255, 255, 1) 100%)',
					}}
				>
					{/* Texture overlay - simplified for mobile performance */}
					{!isMobile ? (
						// Desktop: Full blur flow effect
						<div className="absolute inset-0">
							{/* Base texture pattern */}
							<div
								className="absolute inset-0 opacity-25"
								style={{
									backgroundImage:
										'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 3px, transparent 0)',
									backgroundSize: '20px 20px',
								}}
							/>
							{/* Blurred texture transition layers */}
							<div
								className="absolute inset-0 opacity-20"
								style={{
									backgroundImage:
										'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 2px, transparent 0)',
									backgroundSize: '20px 20px',
									filter: 'blur(1px)',
									maskImage:
										'linear-gradient(180deg, black 0%, black 60%, transparent 85%)',
									WebkitMaskImage:
										'linear-gradient(180deg, black 0%, black 60%, transparent 85%)',
								}}
							/>
							<div
								className="absolute inset-0 opacity-15"
								style={{
									backgroundImage:
										'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)',
									backgroundSize: '20px 20px',
									filter: 'blur(2px)',
									maskImage:
										'linear-gradient(180deg, black 20%, black 70%, transparent 90%)',
									WebkitMaskImage:
										'linear-gradient(180deg, black 20%, black 70%, transparent 90%)',
								}}
							/>
							{/* Final gradient overlay for smooth color transition */}
							<div
								className="absolute inset-0"
								style={{
									background:
										'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.9) 100%)',
								}}
							/>
						</div>
					) : (
						// Mobile: Simple texture with basic gradient
						<div className="absolute inset-0">
							<div
								className="absolute inset-0 opacity-15"
								style={{
									backgroundImage:
										'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 2px, transparent 0)',
									backgroundSize: '24px 24px',
								}}
							/>
							<div
								className="absolute inset-0"
								style={{
									background:
										'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,1) 100%)',
								}}
							/>
						</div>
					)}

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isHeroInView ? 'visible' : 'hidden'}
							className="text-center"
						>
							{/* Glass Badge */}
							<motion.div className="mb-8">
								<div className="inline-flex items-center px-6 py-3 glass-plaque rounded-full text-sm font-semibold text-gray-800">
									Convert More Leads
								</div>
							</motion.div>

							{/* Main Headline */}
							<motion.h1
								variants={headerVariants}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
							>
								AI Lead Nurturing
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								Turn every lead into a customer with intelligent
								automation that nurtures prospects through
								personalized journeys, timely follow-ups, and
								conversion-optimized touchpoints.
							</motion.p>

							<motion.div
								variants={headerVariants}
								className="flex flex-col sm:flex-row gap-4 justify-center items-center"
							>
								<motion.div
									onClick={() =>
										document
											.getElementById('how-it-works')
											?.scrollIntoView({
												behavior: 'smooth',
											})
									}
									className="inline-flex items-center px-8 py-4 bg-[#FF5633] text-white text-lg font-semibold rounded-lg shadow-lg cursor-pointer"
									whileHover={{
										scale: 1.05,
										boxShadow:
											'0 20px 40px rgba(255, 86, 51, 0.3)',
									}}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									See How It Works
								</motion.div>
								<Link href="/book-demo">
									<motion.div
										className="inline-flex items-center px-8 py-4 border-2 border-[#FF5633] text-[#FF5633] text-lg font-semibold rounded-lg hover:bg-[#FF5633] hover:text-white transition-colors duration-200 cursor-pointer"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Get Started Today
									</motion.div>
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* How It Works Section */}
				<section
					ref={contentRef}
					className="relative py-16 lg:py-24 bg-white"
					id="how-it-works"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isContentInView ? 'visible' : 'hidden'}
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
								How Our AI Lead Nurturing Works
							</h2>

							<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
								<div>
									<h3 className="text-2xl font-bold text-gray-900 mb-6">
										Intelligent Lead Scoring & Routing
									</h3>
									<p className="text-gray-700 mb-6 text-lg">
										Our AI analyzes lead behavior,
										engagement patterns, and demographic
										data to score and prioritize leads
										automatically, ensuring your sales team
										focuses on the most promising prospects.
									</p>
									<div className="space-y-4">
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Behavioral Analysis:
												</strong>
												<span className="text-gray-700">
													{' '}
													Tracks website visits, email
													opens, content engagement,
													and interaction patterns
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Lead Scoring:
												</strong>
												<span className="text-gray-700">
													{' '}
													Automatically scores leads
													based on engagement,
													demographics, and buying
													signals
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Smart Routing:
												</strong>
												<span className="text-gray-700">
													{' '}
													Routes high-value leads to
													sales while nurturing others
													through automated sequences
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Predictive Insights:
												</strong>
												<span className="text-gray-700">
													{' '}
													Identifies when leads are
													most likely to convert and
													triggers appropriate actions
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
									<div className="text-center">
										<div className="text-4xl font-bold text-[#FF5633] mb-2">
											3x
										</div>
										<div className="text-gray-700 mb-4">
											Higher Conversion Rate
										</div>
										<div className="text-sm text-gray-600">
											Compared to traditional lead
											nurturing methods
										</div>
									</div>
								</div>
							</div>

							{/* Features Grid */}
							<div className="grid md:grid-cols-3 gap-8 mb-16">
								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border"
									style={{
										background:
											'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
										border: '1px solid rgba(59, 130, 246, 0.1)',
									}}
								>
									<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Personalized Journeys
									</h3>
									<p className="text-gray-700 text-sm">
										Creates unique nurturing paths based on
										lead behavior, interests, and stage in
										the buying process for maximum
										relevance.
									</p>
								</motion.div>

								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border"
									style={{
										background:
											'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%)',
										border: '1px solid rgba(16, 185, 129, 0.1)',
									}}
								>
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-green-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Perfect Timing
									</h3>
									<p className="text-gray-700 text-sm">
										Delivers messages at the optimal moment
										based on lead activity, time zones, and
										engagement patterns for maximum impact.
									</p>
								</motion.div>

								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border"
									style={{
										background:
											'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.02) 100%)',
										border: '1px solid rgba(139, 92, 246, 0.1)',
									}}
								>
									<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-purple-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Multi-Channel Nurturing
									</h3>
									<p className="text-gray-700 text-sm">
										Coordinates email, SMS, social media,
										and retargeting ads for consistent
										messaging across all touchpoints.
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Technology Transparency Section */}
				<section
					ref={transparencyRef}
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
							animate={
								isTransparencyInView ? 'visible' : 'hidden'
							}
							className="text-center mb-16"
						>
							{/* Glass Badge */}
							<motion.div
								className="inline-flex items-center px-6 py-3 rounded-full mb-8"
								style={{
									background:
										'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%)',
									backdropFilter: 'blur(16px) saturate(180%)',
									border: '1px solid rgba(255, 255, 255, 0.3)',
									borderTop:
										'1px solid rgba(255, 255, 255, 0.6)',
									borderBottom:
										'1px solid rgba(255, 255, 255, 0.1)',
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
									BEHIND THE SCENES
								</span>
							</motion.div>

							<motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
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
										Lead Nurturing
									</span>
									<motion.div
										className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-transparent rounded-full"
										initial={{ scaleX: 0 }}
										animate={
											isTransparencyInView
												? { scaleX: 1 }
												: { scaleX: 0 }
										}
										transition={{ delay: 1, duration: 0.8 }}
									/>
								</motion.span>
							</motion.h2>

							<motion.p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
								Here&apos;s a behind-the-scenes look at how our
								AI lead nurturing works — scoring leads,
								creating personalized journeys, and converting
								prospects automatically.
							</motion.p>
						</motion.div>

						<div className="grid lg:grid-cols-2 gap-12 items-start">
							<div>
								<h3 className="text-2xl font-bold text-white mb-6">
									Advanced Lead Intelligence
								</h3>
								<p className="text-white/80 mb-6 text-lg">
									Our AI lead nurturing system uses machine
									learning to understand lead behavior,
									predict conversion likelihood, and deliver
									personalized experiences that drive results.
								</p>
								<div className="space-y-6">
									<div className="flex items-start">
										<div className="w-8 h-8 bg-[#FF5633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
											<span className="text-white font-bold text-sm">
												1
											</span>
										</div>
										<div>
											<h4 className="font-semibold text-white mb-2">
												Behavioral Tracking
											</h4>
											<p className="text-white/70 text-sm">
												Monitors every interaction
												across your website, emails, and
												marketing channels to build
												comprehensive lead profiles.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="w-8 h-8 bg-[#FF5633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
											<span className="text-white font-bold text-sm">
												2
											</span>
										</div>
										<div>
											<h4 className="font-semibold text-white mb-2">
												Predictive Scoring
											</h4>
											<p className="text-white/70 text-sm">
												Uses machine learning to score
												leads based on likelihood to
												convert, prioritizing your sales
												efforts.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="w-8 h-8 bg-[#FF5633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
											<span className="text-white font-bold text-sm">
												3
											</span>
										</div>
										<div>
											<h4 className="font-semibold text-white mb-2">
												Journey Mapping
											</h4>
											<p className="text-white/70 text-sm">
												Creates personalized nurturing
												sequences based on lead
												characteristics and behavior
												patterns.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="w-8 h-8 bg-[#FF5633] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
											<span className="text-white font-bold text-sm">
												4
											</span>
										</div>
										<div>
											<h4 className="font-semibold text-white mb-2">
												Dynamic Optimization
											</h4>
											<p className="text-white/70 text-sm">
												Continuously optimizes
												messaging, timing, and channels
												based on performance data and
												lead responses.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className="rounded-2xl p-8 text-white"
								style={{
									background:
										'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
									backdropFilter: 'blur(16px) saturate(180%)',
									border: '1px solid rgba(255, 255, 255, 0.2)',
									boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
								}}
							>
								<h4 className="text-lg font-semibold mb-4 text-white">
									Lead Nurturing Performance
								</h4>
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Lead Scoring Accuracy
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											94%
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Conversion Rate
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											3.2x
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Response Time
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											&lt; 5min
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Engagement Rate
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											78%
										</span>
									</div>
								</div>
								<div
									className="mt-6 p-4 rounded-lg"
									style={{
										background: 'rgba(0, 0, 0, 0.3)',
										border: '1px solid rgba(255, 255, 255, 0.1)',
									}}
								>
									<div className="text-sm text-white/60 mb-2">
										Average Time to Conversion
									</div>
									<div className="text-2xl font-bold text-yellow-300">
										12 days
									</div>
								</div>
							</div>
						</div>

						{/* CTA Button */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={
								isTransparencyInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 30 }
							}
							transition={{ delay: 1.5, duration: 0.8 }}
							className="text-center mt-12"
						>
							<Link href="/book-demo">
								<motion.div
									className="inline-flex items-center px-4 sm:px-8 py-4 rounded-2xl sm:font-semibold text-sm sm:text-lg text-white cursor-pointer"
									style={{
										background:
											'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.15) 100%)',
										backdropFilter:
											'blur(16px) saturate(180%)',
										border: '1px solid rgba(255, 255, 255, 0.3)',
										borderTop:
											'1px solid rgba(255, 255, 255, 0.5)',
										borderBottom:
											'1px solid rgba(255, 255, 255, 0.1)',
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
										Get Your Custom Lead Nurturing Solution{' '}
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
								</motion.div>
							</Link>
						</motion.div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="relative py-16 lg:py-24 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isContentInView ? 'visible' : 'hidden'}
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
								Why Choose Our AI Lead Nurturing
							</h2>
							<p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto text-center">
								Transform your lead generation into a conversion
								machine with intelligent automation that works
								24/7.
							</p>

							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Higher Conversion Rates
									</h3>
									<p className="text-gray-700 text-sm">
										Increase lead-to-customer conversion by
										up to 300% with personalized nurturing
										that speaks to each lead's specific
										needs and interests.
									</p>
								</motion.div>

								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Reduced Sales Cycle
									</h3>
									<p className="text-gray-700 text-sm">
										Shorten your sales cycle by up to 40%
										with timely, relevant touchpoints that
										keep leads engaged and moving through
										the funnel.
									</p>
								</motion.div>

								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Qualified Leads
									</h3>
									<p className="text-gray-700 text-sm">
										Focus your sales team on the most
										promising prospects with AI-powered lead
										scoring that identifies high-value
										opportunities.
									</p>
								</motion.div>

								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										24/7 Nurturing
									</h3>
									<p className="text-gray-700 text-sm">
										Never miss an opportunity with
										round-the-clock lead nurturing that
										engages prospects at the perfect moment
										regardless of time zone.
									</p>
								</motion.div>

								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Detailed Analytics
									</h3>
									<p className="text-gray-700 text-sm">
										Track lead behavior, conversion metrics,
										and ROI with comprehensive analytics
										that help you optimize your nurturing
										strategy.
									</p>
								</motion.div>

								<motion.div
									variants={cardVariants}
									className="text-center p-8 rounded-2xl border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Secure & Compliant
									</h3>
									<p className="text-gray-700 text-sm">
										Enterprise-grade security with full
										compliance for data protection and
										privacy regulations across all
										jurisdictions.
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* CTA Section */}
				<section
					ref={ctaRef}
					className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isCtaInView ? 'visible' : 'hidden'}
							className="text-center"
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Ready to Transform Your Lead Nurturing?
							</h2>
							<p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
								Join thousands of businesses already using our
								AI lead nurturing to convert more prospects and
								grow faster.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/book-demo">
									<motion.div
										className="inline-flex items-center px-8 py-4 bg-[#FF5633] text-white text-lg font-semibold rounded-lg shadow-lg cursor-pointer"
										whileHover={{
											scale: 1.05,
											boxShadow:
												'0 20px 40px rgba(255, 86, 51, 0.3)',
										}}
										whileTap={{ scale: 0.98 }}
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 20,
										}}
									>
										Start Nurturing Leads Today
									</motion.div>
								</Link>
							</div>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default LeadNurturingPage;
