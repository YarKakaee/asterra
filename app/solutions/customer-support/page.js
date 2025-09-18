'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useMobileDetection } from '../../utils/mobileOptimization';

const CustomerSupportPage = () => {
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

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
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
					className="relative py-20 lg:py-36 overflow-hidden"
					style={{
						background:
							'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 30%, rgba(241, 245, 249, 0.6) 70%, rgba(243, 247, 250, 1) 100%)',
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
									AI-Powered Solutions
								</div>
							</motion.div>

							{/* Main Headline */}
							<motion.h1
								variants={headerVariants}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
							>
								AI Customer Support
								<br />
								<span className="text-5xl sm:text-7xl">
									That Delights
								</span>
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								Transform your customer experience with AI that
								understands context, resolves issues instantly,
								and provides personalized support that feels
								genuinely human.
							</motion.p>

							<motion.div
								variants={headerVariants}
								className="flex flex-col sm:flex-row gap-4 justify-center"
							>
								<motion.a
									href="#how-it-works"
									className="inline-flex items-center px-8 py-4 bg-[#FF5633] text-white text-lg font-semibold rounded-lg shadow-lg"
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
								</motion.a>
								<motion.a
									href="#contact"
									className="inline-flex items-center px-8 py-4 border-2 border-[#FF5633] text-[#FF5633] text-lg font-semibold rounded-lg hover:bg-[#FF5633] hover:text-white transition-colors duration-200"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									Get Started Today
								</motion.a>
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
								How Our AI Customer Support Works
							</h2>

							<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
								<div>
									<h3 className="text-2xl font-bold text-gray-900 mb-6">
										Intelligent Issue Resolution
									</h3>
									<p className="text-gray-700 mb-6 text-lg">
										Our AI doesn&apos;t just provide canned
										responses—it understands complex
										customer issues, analyzes context, and
										provides personalized solutions that
										actually solve problems.
									</p>
									<div className="space-y-4">
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Context Understanding:
												</strong>
												<span className="text-gray-700">
													{' '}
													Analyzes customer history,
													preferences, and current
													situation
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Multi-Channel Support:
												</strong>
												<span className="text-gray-700">
													{' '}
													Handles email, chat, social
													media, and phone inquiries
													seamlessly
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Proactive Assistance:
												</strong>
												<span className="text-gray-700">
													{' '}
													Anticipates customer needs
													and offers relevant
													solutions
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Emotional Intelligence:
												</strong>
												<span className="text-gray-700">
													{' '}
													Recognizes frustration,
													urgency, and satisfaction to
													respond appropriately
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
									<div className="text-center">
										<div className="text-4xl font-bold text-[#FF5633] mb-2">
											95%
										</div>
										<div className="text-gray-700 mb-4">
											First-Contact Resolution
										</div>
										<div className="text-sm text-gray-600">
											Most issues resolved without
											escalation
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
												d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Instant Responses
									</h3>
									<p className="text-gray-700 text-sm">
										Customers get immediate answers to their
										questions, 24/7, without waiting in
										queues or for business hours.
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
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Consistent Quality
									</h3>
									<p className="text-gray-700 text-sm">
										Every customer interaction maintains the
										same high standard, regardless of time,
										volume, or complexity.
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
										Scalable Support
									</h3>
									<p className="text-gray-700 text-sm">
										Handles unlimited customer inquiries
										simultaneously without any drop in
										response quality or speed.
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
										Customer Issues
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
								AI customer support works — understanding
								context, resolving issues, and providing
								personalized solutions automatically.
							</motion.p>
						</motion.div>

						<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
							<div>
								<h3 className="text-2xl font-bold text-white mb-6">
									Intelligent Problem Solving
								</h3>
								<p className="text-white/80 mb-6 text-lg">
									Our AI customer support uses advanced
									natural language understanding, machine
									learning, and real-time knowledge retrieval
									to provide accurate, helpful responses.
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
												Intent Recognition
											</h4>
											<p className="text-white/70 text-sm">
												Instantly understands what the
												customer is asking for, even
												with unclear or complex
												requests.
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
												Knowledge Base Search
											</h4>
											<p className="text-white/70 text-sm">
												Searches through your product
												information, policies, and FAQs
												to find the most relevant
												solution.
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
												Solution Generation
											</h4>
											<p className="text-white/70 text-sm">
												Creates personalized,
												step-by-step solutions tailored
												to the customer&apos;s specific
												situation.
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
												Continuous Learning
											</h4>
											<p className="text-white/70 text-sm">
												Learns from every interaction to
												improve responses and better
												serve your customers over time.
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
									Response Performance
								</h4>
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Intent Analysis
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											&lt; 100ms
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Knowledge Search
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											&lt; 200ms
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Solution Generation
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											&lt; 300ms
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-white/70">
											Response Delivery
										</span>
										<span className="text-yellow-300 font-mono text-sm">
											&lt; 50ms
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
										Total Response Time
									</div>
									<div className="text-2xl font-bold text-yellow-300">
										&lt; 650ms
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
							<motion.button
								className="inline-flex items-center px-4 sm:px-8 py-4 rounded-2xl sm:font-semibold text-sm sm:text-lg text-white cursor-pointer"
								style={{
									background:
										'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.15) 100%)',
									backdropFilter: 'blur(16px) saturate(180%)',
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
								<span>Get Your Custom Support Solution </span>
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

				{/* Benefits Section */}
				<section className="relative py-16 lg:py-24 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isContentInView ? 'visible' : 'hidden'}
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
								Why Choose Our AI Customer Support
							</h2>

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
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Customer Satisfaction
									</h3>
									<p className="text-gray-700 text-sm">
										Deliver exceptional customer experiences
										that build loyalty and drive repeat
										business.
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
										Cost Reduction
									</h3>
									<p className="text-gray-700 text-sm">
										Reduce support costs by up to 70% while
										improving response times and customer
										satisfaction.
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
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Instant Resolution
									</h3>
									<p className="text-gray-700 text-sm">
										Resolve 95% of customer issues on first
										contact, eliminating the need for
										follow-up tickets.
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
										24/7 Availability
									</h3>
									<p className="text-gray-700 text-sm">
										Provide round-the-clock support to
										customers in any timezone without
										additional staffing costs.
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
										Track customer satisfaction, response
										times, and common issues to continuously
										improve your support.
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
										privacy regulations.
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
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isCtaInView ? 'visible' : 'hidden'}
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Ready to Transform Your Customer Support?
							</h2>
							<p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
								Join thousands of businesses already using our
								AI customer support to deliver exceptional
								experiences and reduce costs.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<motion.a
									href="#contact"
									className="inline-flex items-center px-8 py-4 bg-[#FF5633] text-white text-lg font-semibold rounded-lg shadow-lg"
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
									Get Started Today
								</motion.a>
								<motion.a
									href="#how-it-works"
									className="inline-flex items-center px-8 py-4 border-2 border-[#FF5633] text-[#FF5633] text-lg font-semibold rounded-lg hover:bg-[#FF5633] hover:text-white transition-colors duration-200"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									Learn More
								</motion.a>
							</div>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default CustomerSupportPage;
