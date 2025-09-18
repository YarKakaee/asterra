'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMobileDetection } from '../utils/mobileOptimization';

const PrivacyPolicyPage = () => {
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

	const currentDate = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

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
									Your Data. Your Rights.
								</div>
							</motion.div>

							{/* Main Headline */}
							<motion.h1
								variants={headerVariants}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
							>
								Privacy Policy
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								Your privacy matters to us. Learn how we
								collect, use, and protect your personal
								information when you use our AI automation
								services.
							</motion.p>

							<motion.div
								variants={headerVariants}
								className="text-sm text-gray-500"
							>
								Last Updated: {currentDate}
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Content Section */}
				<section
					ref={contentRef}
					className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
				>
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isContentInView ? 'visible' : 'hidden'}
							className="prose prose-lg max-w-none"
						>
							{/* Introduction */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Introduction
								</h2>
								<div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100">
									<p className="text-gray-700 leading-relaxed mb-0">
										Asterra (&quot;we,&quot; &quot;us,&quot;
										or &quot;our&quot;) is committed to
										protecting your privacy and personal
										information. This Privacy Policy
										explains how we collect, use, disclose,
										and safeguard your information when you
										visit our website asterra.ca, use our
										services, or interact with our business
										automation solutions.
									</p>
								</div>
							</motion.div>

							{/* Information We Collect */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									Information We Collect
								</h2>

								<div className="space-y-8">
									<div className="relative">
										<div
											className="rounded-2xl p-8 border"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
												backdropFilter: 'blur(10px)',
												border: '1px solid rgba(59, 130, 246, 0.1)',
												boxShadow:
													'0 4px 20px rgba(0, 0, 0, 0.05)',
											}}
										>
											<h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
												<div className="w-2 h-2 bg-[#FF5633] rounded-full mr-3"></div>
												Information You Provide Directly
											</h3>
											<ul className="space-y-3 text-gray-700">
												<li>
													<strong>
														Contact Information:
													</strong>{' '}
													Name, email address, phone
													number, business name, and
													mailing address
												</li>
												<li>
													<strong>
														Business Information:
													</strong>{' '}
													Industry type, business
													size, current systems and
													processes, automation needs
												</li>
												<li>
													<strong>
														Communication Records:
													</strong>{' '}
													Messages, inquiries, support
													requests, and consultation
													details
												</li>
												<li>
													<strong>
														Account Information:
													</strong>{' '}
													Login credentials and
													account preferences when you
													create an account
												</li>
											</ul>
										</div>
									</div>

									<div className="relative">
										<div
											className="rounded-2xl p-8 border"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
												backdropFilter: 'blur(10px)',
												border: '1px solid rgba(59, 130, 246, 0.1)',
												boxShadow:
													'0 4px 20px rgba(0, 0, 0, 0.05)',
											}}
										>
											<h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
												<div className="w-2 h-2 bg-[#FF5633] rounded-full mr-3"></div>
												Information We Collect
												Automatically
											</h3>
											<ul className="space-y-3 text-gray-700">
												<li>
													<strong>
														Website Usage Data:
													</strong>{' '}
													IP address, browser type,
													device information, pages
													visited, time spent on pages
												</li>
												<li>
													<strong>
														Analytics Data:
													</strong>{' '}
													Website performance metrics,
													user behavior patterns, and
													interaction data
												</li>
												<li>
													<strong>
														Cookies and Tracking
														Technologies:
													</strong>{' '}
													Session cookies, preference
													cookies, and analytics
													cookies
												</li>
											</ul>
										</div>
									</div>

									<div className="relative">
										<div
											className="rounded-2xl p-8 border"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
												backdropFilter: 'blur(10px)',
												border: '1px solid rgba(59, 130, 246, 0.1)',
												boxShadow:
													'0 4px 20px rgba(0, 0, 0, 0.05)',
											}}
										>
											<h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
												<div className="w-2 h-2 bg-[#FF5633] rounded-full mr-3"></div>
												Information from Third Parties
											</h3>
											<ul className="space-y-3 text-gray-700">
												<li>
													<strong>
														Service Integration
														Data:
													</strong>{' '}
													Information from systems we
													integrate with during our
													automation services
												</li>
												<li>
													<strong>
														Business Intelligence:
													</strong>{' '}
													Publicly available business
													information to better
													understand your needs
												</li>
												<li>
													<strong>
														Referral Information:
													</strong>{' '}
													Contact details when you are
													referred to us by existing
													clients or partners
												</li>
											</ul>
										</div>
									</div>
								</div>
							</motion.div>

							{/* How We Use Your Information */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									How We Use Your Information
								</h2>
								<p className="text-gray-700 mb-8">
									We use your personal information for the
									following purposes:
								</p>

								<div className="grid md:grid-cols-2 gap-6">
									<div
										className="rounded-2xl p-6 border"
										style={{
											background:
												'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(34, 197, 94, 0.02) 100%)',
											border: '1px solid rgba(34, 197, 94, 0.1)',
										}}
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Service Delivery
										</h3>
										<ul className="space-y-2 text-gray-700 text-sm">
											<li>
												• Providing business automation
												consultations
											</li>
											<li>
												• Designing custom automation
												solutions
											</li>
											<li>
												• Operating AI receptionist
												systems
											</li>
											<li>
												• Delivering technical support
											</li>
										</ul>
									</div>

									<div
										className="rounded-2xl p-6 border"
										style={{
											background:
												'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
											border: '1px solid rgba(59, 130, 246, 0.1)',
										}}
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Business Operations
										</h3>
										<ul className="space-y-2 text-gray-700 text-sm">
											<li>
												• Processing payments and
												billing
											</li>
											<li>
												• Communicating about services
											</li>
											<li>
												• Providing customer support
											</li>
											<li>• Scheduling consultations</li>
										</ul>
									</div>

									<div
										className="rounded-2xl p-6 border"
										style={{
											background:
												'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 100%)',
											border: '1px solid rgba(168, 85, 247, 0.1)',
										}}
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Marketing & Improvement
										</h3>
										<ul className="space-y-2 text-gray-700 text-sm">
											<li>
												• Sending marketing
												communications
											</li>
											<li>• Analyzing website usage</li>
											<li>
												• Conducting market research
											</li>
											<li>• Creating case studies</li>
										</ul>
									</div>

									<div
										className="rounded-2xl p-6 border"
										style={{
											background:
												'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)',
											border: '1px solid rgba(239, 68, 68, 0.1)',
										}}
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Legal & Compliance
										</h3>
										<ul className="space-y-2 text-gray-700 text-sm">
											<li>
												• Complying with laws and
												regulations
											</li>
											<li>
												• Protecting our rights and
												interests
											</li>
											<li>
												• Preventing fraud and
												unauthorized access
											</li>
											<li>
												• Responding to legal requests
											</li>
										</ul>
									</div>
								</div>
							</motion.div>

							{/* Information Sharing */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Information Sharing and Disclosure
								</h2>
								<div className="bg-gradient-to-r from-orange-50 to-red-50/30 rounded-2xl p-6 border border-orange-100 mb-6">
									<p className="text-gray-700 font-medium mb-0">
										<strong>
											We do not sell, rent, or trade your
											personal information.
										</strong>{' '}
										We may share your information in the
										following circumstances:
									</p>
								</div>

								<div className="space-y-6">
									<div className="border-l-4 border-[#FF5633] pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Service Providers
										</h3>
										<p className="text-gray-700">
											We work with trusted third-party
											service providers including cloud
											hosting, analytics, CRM platforms,
											and communication tools.
										</p>
									</div>

									<div className="border-l-4 border-blue-500 pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Business Transfers
										</h3>
										<p className="text-gray-700">
											In the event of a merger,
											acquisition, or sale of our
											business, your information may be
											transferred as part of the
											transaction.
										</p>
									</div>

									<div className="border-l-4 border-purple-500 pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Legal Requirements
										</h3>
										<p className="text-gray-700">
											We may disclose information when
											required by law, court order, or to
											protect our rights, property, or
											safety.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Data Security */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Data Security
								</h2>
								<div
									className="rounded-2xl p-8 border"
									style={{
										background:
											'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
										border: '1px solid rgba(34, 197, 94, 0.2)',
									}}
								>
									<p className="text-gray-700 mb-6">
										We implement appropriate technical and
										organizational security measures to
										protect your personal information:
									</p>
									<div className="grid md:grid-cols-2 gap-4">
										<div className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Encryption:
												</strong>
												<span className="text-gray-700">
													{' '}
													Data encrypted in transit
													and at rest using
													industry-standard protocols
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Access Controls:
												</strong>
												<span className="text-gray-700">
													{' '}
													Limited access to personal
													information on need-to-know
													basis
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Regular Audits:
												</strong>
												<span className="text-gray-700">
													{' '}
													Periodic security
													assessments and
													vulnerability testing
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Employee Training:
												</strong>
												<span className="text-gray-700">
													{' '}
													Regular privacy and security
													training for all team
													members
												</span>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Your Rights */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Your Rights and Choices
								</h2>
								<p className="text-gray-700 mb-6">
									Depending on your location, you may have the
									following rights:
								</p>

								<div className="space-y-4">
									{[
										{
											title: 'Access and Portability',
											desc: 'Request access to your personal information and receive a copy in portable format',
										},
										{
											title: 'Correction and Updates',
											desc: 'Update or correct inaccurate personal information in your account',
										},
										{
											title: 'Deletion and Restriction',
											desc: 'Request deletion of your personal information or restrict certain processing',
										},
										{
											title: 'Objection and Withdrawal',
											desc: 'Object to processing for marketing purposes or withdraw consent',
										},
									].map((right, index) => (
										<div
											key={index}
											className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50/50"
										>
											<div className="w-8 h-8 bg-[#FF5633] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
												{index + 1}
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													{right.title}
												</h3>
												<p className="text-gray-700 text-sm">
													{right.desc}
												</p>
											</div>
										</div>
									))}
								</div>
							</motion.div>

							{/* Contact Information */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Contact Information
								</h2>
								<div
									className="rounded-2xl p-8 border"
									style={{
										background:
											'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
										border: '1px solid rgba(59, 130, 246, 0.2)',
									}}
								>
									<p className="text-gray-700">
										If you have questions, concerns, or
										requests regarding this Privacy Policy
										or our data practices, please contact us
										at <strong>legal@asterra.ca</strong>
									</p>
								</div>
							</motion.div>

							{/* Compliance */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Provincial and Federal Compliance
								</h2>
								<div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100">
									<p className="text-gray-700 mb-4">
										This Privacy Policy is designed to
										comply with:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>
											• Personal Information Protection
											and Electronic Documents Act
											(PIPEDA)
										</li>
										<li>
											• Provincial privacy legislation
											where applicable
										</li>
										<li>
											• General Data Protection Regulation
											(GDPR) for EU residents
										</li>
										<li>
											• California Consumer Privacy Act
											(CCPA) for California residents
										</li>
									</ul>
								</div>
							</motion.div>

							{/* Footer */}
							<motion.div
								variants={sectionVariants}
								className="text-center py-8 border-t border-gray-200"
							>
								<p className="text-gray-500 text-sm">
									This Privacy Policy is effective as of{' '}
									{currentDate} and supersedes all previous
									versions.
								</p>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default PrivacyPolicyPage;
