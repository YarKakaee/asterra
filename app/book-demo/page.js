'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMobileDetection } from '../utils/mobileOptimization';

export default function BookDemoPage() {
	const isMobile = useMobileDetection();
	const [state, handleSubmit] = useForm('xvgbegrj');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [lastSubmitTime, setLastSubmitTime] = useState(0);
	const demoFormRef = useRef(null);

	const heroRef = useRef(null);
	const benefitsRef = useRef(null);
	const formRef = useRef(null);

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

	// Custom submit handler to prevent spam
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const now = Date.now();
		const timeSinceLastSubmit = now - lastSubmitTime;

		// Prevent submissions within 5 seconds
		if (timeSinceLastSubmit < 5000) {
			alert('Please wait a moment before submitting again.');
			return;
		}

		// Prevent multiple simultaneous submissions
		if (isSubmitting) {
			return;
		}

		setIsSubmitting(true);
		setLastSubmitTime(now);

		try {
			await handleSubmit(e);
		} finally {
			// Reset submitting state after a delay
			setTimeout(() => {
				setIsSubmitting(false);
			}, 2000);
		}
	};

	// Clear form after successful submission
	useEffect(() => {
		if (state.succeeded && demoFormRef.current) {
			demoFormRef.current.reset();
		}
	}, [state.succeeded]);

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
								Unlock Your Potential
							</motion.div>

							<motion.h1
								variants={itemVariants}
								className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
							>
								Book Your Free{' '}
								<span className="bg-gradient-to-r from-[#FF5633] to-[#FF8A65] bg-clip-text text-transparent">
									30-Minute Demo
								</span>
							</motion.h1>

							<motion.p
								variants={itemVariants}
								className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
							>
								See how our AI solutions can transform your
								business. Get a personalized demo and custom ROI
								analysis.
							</motion.p>
						</motion.div>
					</div>
				</section>

				{/* Demo Benefits Section */}
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
									What You&apos;ll Get in Your Demo
								</motion.h2>
								<motion.p
									variants={itemVariants}
									className="text-xl text-gray-600 max-w-3xl mx-auto"
								>
									Experience the power of our AI solutions
									with a personalized demonstration tailored
									to your business.
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
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										Custom ROI Analysis
									</h3>
									<p className="text-gray-600">
										Get a detailed breakdown of potential
										savings and ROI specifically for your
										business model.
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
												d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										Live Demo
									</h3>
									<p className="text-gray-600">
										See our AI receptionist and solutions in
										action with real scenarios from your
										industry.
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
												d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										Implementation Plan
									</h3>
									<p className="text-gray-600">
										Receive a customized roadmap for
										implementing our solutions in your
										business.
									</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Booking Form Section */}
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
									Book Your Free Demo
								</h2>
								<p className="text-gray-600 text-lg mb-4">
									Fill out the form below and we&apos;ll
									contact you within 2 hours to schedule your
									demo.
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
							{/* Booking Form */}
							<div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
								<form
									ref={demoFormRef}
									onSubmit={handleFormSubmit}
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
											htmlFor="preferredTime"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Preferred Time
										</label>
										<select
											id="preferredTime"
											name="preferredTime"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
										>
											<option value="">
												Select a time
											</option>
											<option value="morning">
												Morning (9 AM - 12 PM)
											</option>
											<option value="afternoon">
												Afternoon (12 PM - 5 PM)
											</option>
											<option value="evening">
												Evening (5 PM - 8 PM)
											</option>
										</select>
									</div>

									<div>
										<label
											htmlFor="businessSize"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Business Size
										</label>
										<select
											id="businessSize"
											name="businessSize"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5633] focus:border-transparent transition-colors"
										>
											<option value="">
												Select business size
											</option>
											<option value="1-10">
												1-10 employees
											</option>
											<option value="11-50">
												11-50 employees
											</option>
											<option value="51-200">
												51-200 employees
											</option>
											<option value="200+">
												200+ employees
											</option>
										</select>
									</div>

									<div>
										<label
											htmlFor="currentChallenges"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Current Challenges
										</label>
										<textarea
											id="currentChallenges"
											name="currentChallenges"
											rows={4}
											placeholder="Tell us about your current business challenges..."
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
													Thank you! We&apos;ll
													contact you within 2 hours
													to schedule your demo.
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
										disabled={
											state.submitting || isSubmitting
										}
										className="cursor-pointer w-full bg-gradient-to-r from-[#FF5633] to-[#FF8A65] text-white font-semibold py-4 px-8 rounded-lg hover:from-[#E04A2B] hover:to-[#FF6B47] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
									>
										{state.submitting || isSubmitting ? (
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
												Scheduling Demo...
											</>
										) : (
											<>
												Book My Free Demo
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
