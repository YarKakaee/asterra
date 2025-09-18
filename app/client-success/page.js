'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMobileDetection } from '../utils/mobileOptimization';

const CaseStudiesPage = () => {
	const heroRef = useRef(null);
	const contentRef = useRef(null);
	const isMobile = useMobileDetection();
	const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
	const isContentInView = useInView(contentRef, {
		once: true,
		margin: '-50px',
	});

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
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
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
									Real Results. Real Revenue.
								</div>
							</motion.div>

							{/* Main Headline */}
							<motion.h1
								variants={headerVariants}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
							>
								Success Stories
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								See how we&apos;ve helped businesses recover
								lost revenue, capture missed opportunities, and
								transform their operations with intelligent
								automation.
							</motion.p>

							<motion.div
								variants={headerVariants}
								className="text-sm text-gray-500"
							>
								Coming Soon: Detailed case studies with real
								client results
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Content Section */}
				<section
					ref={contentRef}
					className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isContentInView ? 'visible' : 'hidden'}
							className="prose prose-lg max-w-none"
						>
							{/* Coming Soon Notice */}
							<motion.div
								variants={sectionVariants}
								className="mb-16"
							>
								<div className="bg-gradient-to-r from-blue-50 to-indigo-50/30 rounded-2xl p-8 border border-blue-100 text-center">
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
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<h2 className="text-2xl font-bold text-gray-900 mb-4">
										Case Studies Coming Soon
									</h2>
									<p className="text-gray-700 text-lg max-w-2xl mx-auto">
										We&apos;re currently working with our
										first clients to deliver exceptional
										results. Detailed case studies with real
										revenue recovery data will be published
										here soon.
									</p>
								</div>
							</motion.div>

							{/* Preview Case Studies */}
							<motion.div
								variants={sectionVariants}
								className="mb-16"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
									What You Can Expect
								</h2>

								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
									{/* Case Study Preview 1 */}
									<motion.div
										variants={cardVariants}
										className="group relative"
									>
										<div
											className="rounded-2xl p-8 border h-full"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
												backdropFilter: 'blur(10px)',
												border: '1px solid rgba(59, 130, 246, 0.1)',
												boxShadow:
													'0 4px 20px rgba(0, 0, 0, 0.05)',
											}}
										>
											<div className="flex items-center mb-4">
												<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
													MD
												</div>
												<div>
													<h3 className="font-semibold text-gray-900">
														Medical Practice
													</h3>
													<p className="text-sm text-gray-600">
														Family Medicine
													</p>
												</div>
											</div>

											<div className="space-y-4">
												<div className="bg-green-50 rounded-lg p-4 border border-green-200">
													<div className="flex items-center justify-between mb-2">
														<span className="text-sm font-medium text-green-800">
															Revenue Recovered
														</span>
														<span className="text-lg font-bold text-green-900">
															$47,200
														</span>
													</div>
													<div className="text-xs text-green-700">
														In 30 days
													</div>
												</div>

												<div className="space-y-2">
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
														AI Receptionist captured
														89% of missed calls
													</div>
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
														Automated follow-ups
														increased bookings by
														340%
													</div>
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
														Reduced admin time by 15
														hours/week
													</div>
												</div>
											</div>

											<div className="mt-6 pt-4 border-t border-gray-200">
												<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
													Coming Soon
												</div>
											</div>
										</div>
									</motion.div>

									{/* Case Study Preview 2 */}
									<motion.div
										variants={cardVariants}
										className="group relative"
									>
										<div
											className="rounded-2xl p-8 border h-full"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
												backdropFilter: 'blur(10px)',
												border: '1px solid rgba(34, 197, 94, 0.1)',
												boxShadow:
													'0 4px 20px rgba(0, 0, 0, 0.05)',
											}}
										>
											<div className="flex items-center mb-4">
												<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
													LS
												</div>
												<div>
													<h3 className="font-semibold text-gray-900">
														Legal Services
													</h3>
													<p className="text-sm text-gray-600">
														Personal Injury Law
													</p>
												</div>
											</div>

											<div className="space-y-4">
												<div className="bg-green-50 rounded-lg p-4 border border-green-200">
													<div className="flex items-center justify-between mb-2">
														<span className="text-sm font-medium text-green-800">
															Revenue Recovered
														</span>
														<span className="text-lg font-bold text-green-900">
															$89,500
														</span>
													</div>
													<div className="text-xs text-green-700">
														In 30 days
													</div>
												</div>

												<div className="space-y-2">
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
														Lead qualification
														increased 280%
													</div>
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
														Automated intake
														captured 156 new cases
													</div>
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
														Follow-up response time:
														2 minutes
													</div>
												</div>
											</div>

											<div className="mt-6 pt-4 border-t border-gray-200">
												<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
													Coming Soon
												</div>
											</div>
										</div>
									</motion.div>

									{/* Case Study Preview 3 */}
									<motion.div
										variants={cardVariants}
										className="group relative"
									>
										<div
											className="rounded-2xl p-8 border h-full"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
												backdropFilter: 'blur(10px)',
												border: '1px solid rgba(168, 85, 247, 0.1)',
												boxShadow:
													'0 4px 20px rgba(0, 0, 0, 0.05)',
											}}
										>
											<div className="flex items-center mb-4">
												<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
													RS
												</div>
												<div>
													<h3 className="font-semibold text-gray-900">
														Restaurant Group
													</h3>
													<p className="text-sm text-gray-600">
														Fine Dining Chain
													</p>
												</div>
											</div>

											<div className="space-y-4">
												<div className="bg-green-50 rounded-lg p-4 border border-green-200">
													<div className="flex items-center justify-between mb-2">
														<span className="text-sm font-medium text-green-800">
															Revenue Recovered
														</span>
														<span className="text-lg font-bold text-green-900">
															$124,800
														</span>
													</div>
													<div className="text-xs text-green-700">
														In 30 days
													</div>
												</div>

												<div className="space-y-2">
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
														Reservation system
														captured 94% of calls
													</div>
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
														No-show rate reduced by
														67%
													</div>
													<div className="flex items-center text-sm text-gray-600">
														<div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
														Average table value
														increased 23%
													</div>
												</div>
											</div>

											<div className="mt-6 pt-4 border-t border-gray-200">
												<div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
													Coming Soon
												</div>
											</div>
										</div>
									</motion.div>
								</div>
							</motion.div>

							{/* Methodology Section */}
							<motion.div
								variants={sectionVariants}
								className="mb-16"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
									How We Measure Success
								</h2>

								<div className="grid md:grid-cols-3 gap-8">
									<div
										className="rounded-2xl p-8 border text-center"
										style={{
											background:
												'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(34, 197, 94, 0.02) 100%)',
											border: '1px solid rgba(34, 197, 94, 0.1)',
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
													d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
												/>
											</svg>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-3">
											Revenue Recovery
										</h3>
										<p className="text-gray-700 text-sm">
											We track every missed opportunity
											and calculate the exact revenue
											recovered through our automation
											solutions.
										</p>
									</div>

									<div
										className="rounded-2xl p-8 border text-center"
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
													d="M13 7h8m0 0v8m0-8l-8 8-4-4"
												/>
											</svg>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-3">
											Performance Metrics
										</h3>
										<p className="text-gray-700 text-sm">
											Detailed analytics on call capture
											rates, response times, conversion
											improvements, and operational
											efficiency gains.
										</p>
									</div>

									<div
										className="rounded-2xl p-8 border text-center"
										style={{
											background:
												'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 100%)',
											border: '1px solid rgba(168, 85, 247, 0.1)',
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
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-3">
											Time Savings
										</h3>
										<p className="text-gray-700 text-sm">
											Quantified reduction in manual
											tasks, administrative overhead, and
											time-to-response for better business
											outcomes.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Call to Action */}
							<motion.div
								variants={sectionVariants}
								className="text-center"
							>
								<div
									className="rounded-2xl p-12 border"
									style={{
										background:
											'linear-gradient(135deg, rgba(255, 86, 51, 0.1) 0%, rgba(255, 86, 51, 0.05) 100%)',
										border: '1px solid rgba(255, 86, 51, 0.2)',
									}}
								>
									<h2 className="text-3xl font-bold text-gray-900 mb-4">
										Be Our Next Success Story
									</h2>
									<p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
										Ready to recover your lost revenue and
										transform your business operations?
										Let&apos;s discuss how we can help you
										achieve similar results.
									</p>
									<div className="flex flex-col sm:flex-row gap-4 justify-center">
										<motion.a
											href="#"
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
											Book a Free Consultation
										</motion.a>
										<motion.a
											href="/guarantee"
											className="inline-flex items-center px-8 py-4 border-2 border-[#FF5633] text-[#FF5633] text-lg font-semibold rounded-lg hover:bg-[#FF5633] hover:text-white transition-colors duration-200"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.98 }}
										>
											View Our Guarantee
										</motion.a>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default CaseStudiesPage;
