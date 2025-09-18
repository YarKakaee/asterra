'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMobileDetection } from '../utils/mobileOptimization';

export default function ContactSalesPage() {
	const isMobile = useMobileDetection();
	const [state, handleSubmit] = useForm('xrbanbqz');
	const formRef = useRef(null);

	const heroRef = useRef(null);
	const benefitsRef = useRef(null);
	const contactFormRef = useRef(null);

	const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
	const isBenefitsInView = useInView(benefitsRef, {
		once: true,
		margin: '-100px',
	});
	const isFormInView = useInView(formRef, { once: true, margin: '-100px' });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const fadeInUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	// Clear form after successful submission
	useEffect(() => {
		if (state.succeeded && contactFormRef.current) {
			contactFormRef.current.reset();
		}
	}, [state.succeeded]);

	if (state.succeeded) {
		return (
			<>
				<Navbar />
				<main className="min-h-screen flex flex-col">
					<section className="relative py-20 lg:py-36 overflow-hidden flex-1 flex items-center">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="text-center"
							>
								<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg
										className="w-10 h-10 text-green-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h1 className="text-4xl font-bold text-gray-900 mb-4">
									Thank You!
								</h1>
								<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
									We&apos;ve received your message and will
									get back to you within 24 hours. Our team is
									excited to help you transform your business
									with automation.
								</p>
								<motion.a
									href="/"
									className="inline-flex items-center px-8 py-4 bg-[#FF5633] text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
									whileHover={{
										scale: 1.05,
										boxShadow:
											'0 20px 40px rgba(255, 86, 51, 0.3)',
									}}
									whileTap={{ scale: 0.98 }}
								>
									Return Home
								</motion.a>
							</motion.div>
						</div>
					</section>
					<Footer />
				</main>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main className="relative">
				{/* Hero Section */}
				<section
					ref={heroRef}
					className="relative py-42 lg:py-64 bg-white"
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isHeroInView ? 'visible' : 'hidden'}
							className="text-center"
						>
							<motion.div
								variants={itemVariants}
								className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FF5633] to-[#FF8A65] text-white text-sm font-medium mb-8"
							>
								Connect with Our Team
							</motion.div>

							<motion.h1
								variants={itemVariants}
								className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
							>
								Let&apos;s Build Something{' '}
								<span className="bg-gradient-to-r from-[#FF5633] to-[#FF8A65] bg-clip-text text-transparent">
									Great Together
								</span>
							</motion.h1>

							<motion.p
								variants={itemVariants}
								className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
							>
								Ready to transform your business with AI? Get in
								touch with our team for a personalized
								consultation and custom solution.
							</motion.p>
						</motion.div>
					</div>
				</section>

				{/* Why Choose Asterra Section */}
				<section className="relative py-16 lg:py-24 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							ref={benefitsRef}
							variants={containerVariants}
							initial="hidden"
							animate={isBenefitsInView ? 'visible' : 'hidden'}
						>
							<div className="text-center mb-16">
								<motion.h2
									variants={itemVariants}
									className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
								>
									Why Choose Asterra?
								</motion.h2>
								<motion.p
									variants={itemVariants}
									className="text-xl text-gray-600 max-w-3xl mx-auto"
								>
									We&apos;re not just another AI company.
									We&apos;re your partners in transformation,
									delivering results that matter.
								</motion.p>
							</div>

							<div className="grid md:grid-cols-3 gap-8">
								<motion.div
									variants={itemVariants}
									className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-6">
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
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										30-Day ROI Guarantee
									</h3>
									<p className="text-gray-600">
										We&apos;re so confident in our solutions
										that we guarantee measurable ROI within
										30 days or your money back.
									</p>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-6">
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
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										Fast Setup
									</h3>
									<p className="text-gray-600">
										Get up and running in days, not months.
										Our streamlined implementation process
										gets you results quickly.
									</p>
								</motion.div>

								<motion.div
									variants={itemVariants}
									className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
								>
									<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-6">
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
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										Enterprise Security
									</h3>
									<p className="text-gray-600">
										Bank-level security and compliance with
										industry standards. Your data is safe
										with us.
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Contact Form Section */}
				<section
					ref={formRef}
					className="relative py-16 lg:py-24 bg-gradient-to-b from-white to gray-50"
				>
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isFormInView ? 'visible' : 'hidden'}
						>
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-gray-900 mb-4">
									Get in Touch
								</h2>
								<p className="text-gray-600 text-lg mb-4">
									Tell us about your business and we&apos;ll
									create a custom solution just for you.
								</p>
								<p className="text-gray-500 text-sm">
									You can also reach us directly at{' '}
									<a
										href="mailto:sales@asterra.ca"
										className="text-[#FF5633] hover:text-[#E04A2B] transition-colors duration-200 font-medium"
									>
										sales@asterra.ca
									</a>
								</p>
							</div>
						</motion.div>

						<div className="max-w-2xl mx-auto">
							{/* Contact Form */}
							<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
								<form
									ref={contactFormRef}
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="firstName"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												First Name *
											</label>
											<input
												type="text"
												id="firstName"
												name="firstName"
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
											/>
										</div>
										<div>
											<label
												htmlFor="lastName"
												className="block text-sm font-medium text-gray-700 mb-2"
											>
												Last Name *
											</label>
											<input
												type="text"
												id="lastName"
												name="lastName"
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Email Address *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
										/>
									</div>

									<div>
										<label
											htmlFor="company"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Company Name *
										</label>
										<input
											type="text"
											id="company"
											name="company"
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
										/>
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Phone Number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
										/>
									</div>

									<div>
										<label
											htmlFor="industry"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Industry
										</label>
										<select
											id="industry"
											name="industry"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
										>
											<option value="">
												Select your industry
											</option>
											<option value="healthcare">
												Healthcare
											</option>
											<option value="restaurant">
												Restaurant
											</option>
											<option value="salon">
												Salon & Beauty
											</option>
											<option value="contractor">
												Contractor
											</option>
											<option value="real-estate">
												Real Estate
											</option>
											<option value="small-business">
												Small Business
											</option>
											<option value="other">Other</option>
										</select>
									</div>

									<div>
										<label
											htmlFor="businessNeeds"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Business Needs
										</label>
										<textarea
											id="businessNeeds"
											name="businessNeeds"
											rows={4}
											placeholder="Tell us about your business needs and challenges..."
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors resize-none"
										/>
									</div>

									{state.succeeded && (
										<div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
											<div className="flex items-center">
												<svg
													className="w-5 h-5 text-green-400 mr-3"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												<p className="text-green-800 font-medium">
													Thank you! We&apos;ll get
													back to you within 24 hours.
												</p>
											</div>
										</div>
									)}

									{state.errors &&
										state.errors.length > 0 && (
											<div className="text-red-600 text-sm">
												{state.errors.map((error) => (
													<p key={error.code}>
														{error.message}
													</p>
												))}
											</div>
										)}

									<button
										type="submit"
										disabled={state.submitting}
										className="cursor-pointer w-full bg-gradient-to-r from-[#FF5633] to-[#FF8A65] text-white font-semibold py-4 px-8 rounded-lg hover:from-[#E04A2B] hover:to-[#FF6B47] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
									>
										{state.submitting ? (
											<>
												<svg
													className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
												Sending Message...
											</>
										) : (
											<>
												Send Message
												<svg
													className="ml-2 w-5 h-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 8l4 4m0 0l-4 4m4-4H3"
													/>
												</svg>
											</>
										)}
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
