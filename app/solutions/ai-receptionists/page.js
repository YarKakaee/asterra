'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useMobileDetection } from '../../utils/mobileOptimization';
import TechnologyTransparencySection from '../../components/TechnologyTransparencySection';

const AIReceptionistPage = () => {
	const heroRef = useRef(null);
	const contentRef = useRef(null);
	const transparencyRef = useRef(null);
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
								AI Receptionist
								<br />
								<span className="text-5xl sm:text-7xl">
									That Actually Works
								</span>
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								Never miss another call. Our AI receptionist
								handles every customer inquiry with human-like
								intelligence, 24/7 availability, and seamless
								integration with your existing systems.
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
								How Our AI Receptionist Works
							</h2>

							<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
								<div>
									<h3 className="text-2xl font-bold text-gray-900 mb-6">
										Intelligent Call Handling
									</h3>
									<p className="text-gray-700 mb-6 text-lg">
										Our AI doesn&apos;t just answer calls—it
										understands context, remembers previous
										conversations, and provides personalized
										service that feels genuinely human.
									</p>
									<div className="space-y-4">
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Natural Conversation:
												</strong>
												<span className="text-gray-700">
													{' '}
													Understands context, tone,
													and intent like a human
													receptionist
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Memory & Context:
												</strong>
												<span className="text-gray-700">
													{' '}
													Remembers previous calls and
													customer preferences
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Multi-Language Support:
												</strong>
												<span className="text-gray-700">
													{' '}
													Communicates fluently in
													multiple languages
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
													Recognizes and responds
													appropriately to customer
													emotions
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
									<div className="text-center">
										<div className="text-4xl font-bold text-[#FF5633] mb-2">
											99.9%
										</div>
										<div className="text-gray-700 mb-4">
											Uptime Guarantee
										</div>
										<div className="text-sm text-gray-600">
											Never miss a call, day or night
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
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										24/7 Availability
									</h3>
									<p className="text-gray-700 text-sm">
										Never miss a call, even during holidays,
										weekends, or after hours. Your AI
										receptionist is always ready.
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
										Instant Setup
									</h3>
									<p className="text-gray-700 text-sm">
										Get up and running in minutes, not
										weeks. No complex integrations or
										lengthy training required.
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
										Lightning Fast
									</h3>
									<p className="text-gray-700 text-sm">
										Responds to calls in milliseconds, not
										seconds. Your customers get instant,
										professional service every time.
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Technology Transparency Section */}
				<TechnologyTransparencySection />

				{/* Benefits Section */}
				<section className="relative py-16 lg:py-24 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isContentInView ? 'visible' : 'hidden'}
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
								Why Choose Our AI Receptionist
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
												d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Cost Effective
									</h3>
									<p className="text-gray-700 text-sm">
										Save up to 80% compared to hiring a
										full-time receptionist while getting
										24/7 coverage.
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
										Lightning Fast
									</h3>
									<p className="text-gray-700 text-sm">
										Responds to calls in milliseconds,
										providing instant professional service
										to every caller.
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
										Reliable
									</h3>
									<p className="text-gray-700 text-sm">
										99.9% uptime guarantee means your
										customers can always reach you when they
										need you.
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
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										Scalable
									</h3>
									<p className="text-gray-700 text-sm">
										Handles unlimited calls simultaneously
										without any drop in performance or
										quality.
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
										Secure
									</h3>
									<p className="text-gray-700 text-sm">
										Enterprise-grade security with
										end-to-end encryption and compliance
										with industry standards.
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
										Analytics
									</h3>
									<p className="text-gray-700 text-sm">
										Detailed insights into call patterns,
										customer satisfaction, and business
										performance metrics.
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isContentInView ? 'visible' : 'hidden'}
						>
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Ready to Never Miss Another Call?
							</h2>
							<p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
								Join thousands of businesses already using our
								AI receptionist to provide 24/7 professional
								customer service.
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
										Get Started Today
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

export default AIReceptionistPage;
