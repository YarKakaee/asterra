'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMobileDetection } from '../utils/mobileOptimization';

const TermsAndConditionsPage = () => {
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
									Legal Terms. Clear Expectations.
								</div>
							</motion.div>

							{/* Main Headline */}
							<motion.h1
								variants={headerVariants}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
							>
								Terms & Conditions
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								Clear terms and conditions that govern our
								business relationship and ensure mutual success
								in your AI automation journey.
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
							{/* Agreement to Terms */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									1. Agreement to Terms
								</h2>
								<div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100">
									<p className="text-gray-700 leading-relaxed mb-0">
										By accessing our website at asterra.ca,
										engaging our services, or entering into
										a service agreement with Asterra
										(&quot;Company,&quot; &quot;we,&quot;
										&quot;us,&quot; or &quot;our&quot;), you
										(&quot;Client,&quot; &quot;you,&quot; or
										&quot;your&quot;) agree to be bound by
										these Terms and Conditions. If you do
										not agree to these terms, you may not
										use our services or website.
									</p>
								</div>
							</motion.div>

							{/* Description of Services */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									2. Description of Services
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
												Automation Services
											</h3>
											<p className="text-gray-700 mb-4">
												We provide business automation
												solutions including but not
												limited to:
											</p>
											<ul className="space-y-3 text-gray-700">
												<li>
													<strong>
														AI receptionist systems:
													</strong>{' '}
													Call handling and customer
													interaction automation
												</li>
												<li>
													<strong>
														Lead nurturing:
													</strong>{' '}
													Customer relationship
													management automation
												</li>
												<li>
													<strong>
														Website development:
													</strong>{' '}
													Custom websites and
													optimization
												</li>
												<li>
													<strong>
														Process automation:
													</strong>{' '}
													Custom business workflow
													solutions
												</li>
												<li>
													<strong>
														System integration:
													</strong>{' '}
													Connecting your existing
													tools and platforms
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
												Service Customization
											</h3>
											<p className="text-gray-700">
												All services are customized to
												meet specific client
												requirements as outlined in
												individual service agreements or
												statements of work.
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Pricing and Payment */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									3. Pricing and Payment Terms
								</h2>

								<div className="grid md:grid-cols-3 gap-6">
									<div
										className="rounded-2xl p-6 border"
										style={{
											background:
												'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(34, 197, 94, 0.02) 100%)',
											border: '1px solid rgba(34, 197, 94, 0.1)',
										}}
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Fees & Pricing
										</h3>
										<ul className="space-y-2 text-gray-700 text-sm">
											<li>
												• Service fees as specified in
												agreements
											</li>
											<li>
												• All prices in Canadian dollars
											</li>
											<li>
												• May include setup and
												recurring fees
											</li>
											<li>
												• Usage-based charges where
												applicable
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
											Payment Terms
										</h3>
										<ul className="space-y-2 text-gray-700 text-sm">
											<li>• Net 30 days payment terms</li>
											<li>
												• 1.5% monthly interest on late
												payments
											</li>
											<li>
												• Service suspension for overdue
												accounts
											</li>
											<li>
												• All fees are non-refundable
											</li>
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
											Taxes & Compliance
										</h3>
										<ul className="space-y-2 text-gray-700 text-sm">
											<li>
												• Fees exclusive of applicable
												taxes
											</li>
											<li>
												• Taxes added as required by law
											</li>
											<li>
												• Client responsible for
												compliance
											</li>
											<li>
												• All applicable regulations
												apply
											</li>
										</ul>
									</div>
								</div>
							</motion.div>

							{/* Client Responsibilities */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									4. Client Responsibilities
								</h2>
								<div className="bg-gradient-to-r from-orange-50 to-red-50/30 rounded-2xl p-6 border border-orange-100 mb-6">
									<p className="text-gray-700 font-medium mb-0">
										<strong>
											Your success depends on
											collaboration.
										</strong>{' '}
										Here&apos;s what we need from you to
										deliver exceptional results:
									</p>
								</div>

								<div className="space-y-6">
									<div className="border-l-4 border-[#FF5633] pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Information and Access
										</h3>
										<p className="text-gray-700">
											Provide accurate information, grant
											reasonable system access, respond
											promptly to requests, and maintain
											security of login credentials.
										</p>
									</div>

									<div className="border-l-4 border-blue-500 pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											System Requirements
										</h3>
										<p className="text-gray-700">
											Ensure systems meet minimum
											requirements, maintain reliable
											internet connectivity, and keep
											software updated as recommended.
										</p>
									</div>

									<div className="border-l-4 border-purple-500 pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Legal Compliance
										</h3>
										<p className="text-gray-700">
											Ensure your use of our services
											complies with all applicable laws,
											regulations, and industry standards
											in your jurisdiction.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Intellectual Property */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									5. Intellectual Property Rights
								</h2>
								<div
									className="rounded-2xl p-8 border"
									style={{
										background:
											'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
										border: '1px solid rgba(34, 197, 94, 0.2)',
									}}
								>
									<div className="grid md:grid-cols-3 gap-6">
										<div className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Our IP:
												</strong>
												<span className="text-gray-700">
													{' '}
													All proprietary technology,
													software, and methodologies
													remain our exclusive
													property
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Your Content:
												</strong>
												<span className="text-gray-700">
													{' '}
													You retain ownership of your
													business data and
													pre-existing IP
												</span>
											</div>
										</div>
										<div className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<div>
												<strong className="text-gray-900">
													Custom Work:
												</strong>
												<span className="text-gray-700">
													{' '}
													Custom solutions become your
													property upon full payment
												</span>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Service Level Commitments */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									6. Service Level Commitments
								</h2>

								<div className="space-y-4">
									{[
										{
											title: 'Uptime and Availability',
											desc: '99.5% uptime target for hosted services with advance notice of scheduled maintenance',
										},
										{
											title: 'Support Services',
											desc: 'Business hours support Monday-Friday 9 AM to 5 PM EST with emergency support available',
										},
										{
											title: 'Response Times',
											desc: 'Response times vary by support tier as specified in individual service agreements',
										},
										{
											title: 'Service Credits',
											desc: 'Service credits may be available for significant downtime as outlined in agreements',
										},
									].map((commitment, index) => (
										<div
											key={index}
											className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50/50"
										>
											<div className="w-8 h-8 bg-[#FF5633] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
												{index + 1}
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													{commitment.title}
												</h3>
												<p className="text-gray-700 text-sm">
													{commitment.desc}
												</p>
											</div>
										</div>
									))}
								</div>
							</motion.div>

							{/* Limitations of Liability */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									7. Limitations of Liability
								</h2>
								<div className="bg-gradient-to-r from-red-50 to-orange-50/30 rounded-2xl p-6 border border-red-100 mb-6">
									<p className="text-gray-700 font-medium mb-4">
										<strong>
											Important Legal Disclaimers:
										</strong>
									</p>
									<div className="space-y-3 text-sm text-gray-700">
										<p>
											<strong>
												Warranty Disclaimer:
											</strong>{' '}
											Our services are provided &quot;AS
											IS&quot; without warranties of any
											kind, either express or implied,
											including warranties of
											merchantability, fitness for a
											particular purpose, or
											non-infringement.
										</p>
										<p>
											<strong>
												Limitation of Damages:
											</strong>{' '}
											Our total liability shall not exceed
											the amount paid by you for services
											in the twelve (12) months preceding
											the claim.
										</p>
										<p>
											<strong>Excluded Damages:</strong>{' '}
											We shall not be liable for indirect,
											incidental, special, consequential,
											or punitive damages, including lost
											profits or business interruption.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Termination */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									8. Termination
								</h2>

								<div className="grid md:grid-cols-2 gap-6">
									<div
										className="rounded-2xl p-6 border"
										style={{
											background:
												'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
											border: '1px solid rgba(59, 130, 246, 0.1)',
										}}
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">
											Termination for Convenience
										</h3>
										<p className="text-gray-700 text-sm">
											Either party may terminate ongoing
											services with 30 days written
											notice, subject to any minimum
											commitment periods in service
											agreements.
										</p>
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
											Termination for Cause
										</h3>
										<p className="text-gray-700 text-sm">
											Either party may terminate
											immediately for material breach,
											insolvency, or violation of
											applicable laws, with 15 days cure
											period for breaches.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Dispute Resolution */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									9. Dispute Resolution
								</h2>
								<div
									className="rounded-2xl p-8 border"
									style={{
										background:
											'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
										border: '1px solid rgba(59, 130, 246, 0.2)',
									}}
								>
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<h3 className="font-semibold text-gray-900 mb-3">
												Governing Law
											</h3>
											<p className="text-gray-700 text-sm">
												These terms are governed by the
												laws of the Province of Ontario
												and Canada.
											</p>
										</div>

										<div>
											<h3 className="font-semibold text-gray-900 mb-3">
												Resolution Process
											</h3>
											<p className="text-gray-700 text-sm">
												Disputes should first be
												addressed through good faith
												negotiations, with binding
												arbitration available if
												unresolved.
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Contact Information */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									10. Contact Information
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
										For questions about these Terms and
										Conditions, please contact us at{' '}
										<strong>legal@asterra.ca</strong>
									</p>
								</div>
							</motion.div>

							{/* Footer */}
							<motion.div
								variants={sectionVariants}
								className="text-center py-8 border-t border-gray-200"
							>
								<p className="text-gray-500 text-sm mb-4">
									These Terms and Conditions are effective as
									of {currentDate} and supersede all previous
									versions.
								</p>
								<p className="text-gray-700 font-medium">
									<strong>
										By using our services or website, you
										acknowledge that you have read,
										understood, and agree to be bound by
										these Terms and Conditions.
									</strong>
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

export default TermsAndConditionsPage;
