'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMobileDetection } from '../utils/mobileOptimization';

const GuaranteePage = () => {
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
									Your Success. Our Promise.
								</div>
							</motion.div>

							{/* Main Headline */}
							<motion.h1
								variants={headerVariants}
								className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-inset"
							>
								30-Day ROI Guarantee
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								We&apos;re so confident in our automation
								solutions that we guarantee break-even ROI
								within 30 days, or we&apos;ll keep working for
								free until you do.
							</motion.p>

							<motion.div
								variants={headerVariants}
								className="text-sm text-gray-500"
							>
								Effective Date: {currentDate}
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
							{/* Plain-English Summary */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Plain-English Summary
								</h2>
								<div className="bg-gradient-to-r from-green-50 to-blue-50/30 rounded-2xl p-6 border border-green-100">
									<p className="text-gray-700 leading-relaxed mb-4">
										If we agree you&apos;re losing money to
										fixable problems (missed calls, slow
										follow-ups, manual work) and you hire us
										to implement automation, we aim for
										break-even ROI within 30 days of
										go-live. If we miss that mark, you
										choose:
									</p>
									<ul className="text-gray-700 space-y-2">
										<li>
											<strong>(a)</strong> we keep working
											at no additional service fee until
											you break even, or
										</li>
										<li>
											<strong>(b)</strong> we refund the
											service fees you paid for the
											guarantee period (see the cap
											below).
										</li>
									</ul>
									<p className="text-gray-700 mt-4 mb-0">
										<strong>
											Website design/development projects
											are excluded.
										</strong>
									</p>
								</div>
							</motion.div>

							{/* Definitions */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									1. Definitions
								</h2>
								<div className="space-y-6">
									<div className="border-l-4 border-[#FF5633] pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Asterra
										</h3>
										<p className="text-gray-700">
											Asterra Solutions Inc.
										</p>
									</div>
									<div className="border-l-4 border-blue-500 pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Client / you
										</h3>
										<p className="text-gray-700">
											The customer named on the Order
											Form/SOW.
										</p>
									</div>
									<div className="border-l-4 border-green-500 pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Eligible Services
										</h3>
										<p className="text-gray-700">
											Automation solutions we implement
											that can be reasonably measured for
											short-term financial impact (e.g.,
											AI Receptionist & phone automation,
											AI support/chat, lead nurturing &
											follow-ups, document/data processing
											automations).
										</p>
									</div>
									<div className="border-l-4 border-purple-500 pl-6">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Excluded Services
										</h3>
										<p className="text-gray-700">
											Website design/development,
											brand/creative, SEO, analytics-only
											work, custom R&D, consulting with no
											measurable activation.
										</p>
									</div>
								</div>
							</motion.div>

							{/* What's Guaranteed */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									2. What&apos;s Guaranteed
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
										This Guarantee applies only if your
										Order Form/SOW explicitly states
										&quot;30-Day ROI Guarantee&quot; and
										lists Eligible Services.
									</p>
									<div className="bg-white rounded-xl p-6 border border-green-200">
										<h3 className="text-xl font-semibold text-gray-900 mb-4">
											During the Guarantee Period, Asterra
											guarantees Break-Even ROI:
										</h3>
										<div className="bg-gray-50 rounded-lg p-4 font-mono text-lg text-center">
											Attributable Revenue – (Impact Fee +
											Monthly Service Fee during the
											Guarantee Period) ≥ 0
										</div>
										<p className="text-gray-700 mt-4 mb-0">
											If not achieved, you may choose one
											remedy (see §5).
										</p>
									</div>
								</div>
							</motion.div>

							{/* Eligibility & Client Obligations */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									3. Eligibility & Client Obligations
								</h2>
								<div className="bg-gradient-to-r from-orange-50 to-red-50/30 rounded-2xl p-6 border border-orange-100 mb-6">
									<p className="text-gray-700 font-medium mb-0">
										<strong>
											The Guarantee applies only if all of
											the following are met:
										</strong>
									</p>
								</div>

								<div className="space-y-4">
									{[
										{
											title: 'ROI Assessment',
											desc: 'Before signing, we complete a joint ROI Assessment estimating achievable recoveries and feasibility; projected 30-day break-even is ≥ your fees.',
										},
										{
											title: 'Access',
											desc: 'You grant timely admin access to required systems (telephony, CRM, calendars, website, inboxes, analytics, payment data) and keep them active.',
										},
										{
											title: 'Implementation',
											desc: 'You implement reasonable operational steps we specify (forward numbers, DNS, scripts/snippets, routing rules, IVR, escalation paths).',
										},
										{
											title: 'Continuity',
											desc: 'You keep the Eligible Services live for the full 30 days (no pauses) and do not materially change pricing, hours, or offers without our written consent.',
										},
										{
											title: 'Single Owner',
											desc: 'You appoint a decision-maker to respond within 2 business days to questions/approvals.',
										},
										{
											title: 'Payment Standing',
											desc: 'Impact Fee and the first Monthly Service Fee are paid when due; your account is in good standing.',
										},
										{
											title: 'No Conflicting Systems',
											desc: "You don't deploy competing automations or agencies during the Guarantee Period unless we approve in writing.",
										},
										{
											title: 'Lawful Use',
											desc: 'You comply with applicable laws (telemarketing, privacy, CASL, PIPEDA/PHIPA where applicable).',
										},
									].map((obligation, index) => (
										<div
											key={index}
											className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50/50"
										>
											<div className="w-8 h-8 bg-[#FF5633] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
												{index + 1}
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													{obligation.title}
												</h3>
												<p className="text-gray-700 text-sm">
													{obligation.desc}
												</p>
											</div>
										</div>
									))}
								</div>
							</motion.div>

							{/* How ROI is Measured */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									4. How ROI is Measured
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
												Formula
											</h3>
											<div className="space-y-4">
												<div className="bg-gray-50 rounded-lg p-4 font-mono text-center">
													Net ROI = Attributable
													Revenue – (Impact Fee +
													Monthly Service Fee in the
													Period)
												</div>
												<p className="text-gray-700 text-sm">
													Third-party spend (e.g., ad
													budget, Twilio/telephony
													minutes, meta/Google ads,
													booking or email tools) is
													excluded from
													&quot;fees&quot; and is not
													refundable.
												</p>
											</div>
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
												What Counts as Attributable
												Revenue
											</h3>
											<ul className="space-y-3 text-gray-700">
												<li>
													<strong>
														Calls answered/handled
														by the AI Receptionist
													</strong>{' '}
													that convert to booked
													appointments or paid
													invoices.
												</li>
												<li>
													<strong>
														Chat/support flows
													</strong>{' '}
													that resolve to upsells,
													paid renewals, or prevented
													cancellations where
													prevention is documented.
												</li>
												<li>
													<strong>
														Lead nurturing sequences
													</strong>{' '}
													that reach accepted meetings
													or sales-qualified leads
													based on your historical
													close rate.
												</li>
												<li>
													<strong>
														Document/data
														automations
													</strong>{' '}
													that enable billable
													throughput (e.g., form →
													invoice) where revenue can
													be tied to the workflow.
												</li>
											</ul>
											<p className="text-gray-700 text-sm mt-4">
												Evidence may include call logs,
												transcripts, calendars, CRM
												pipeline timestamps, payment
												exports, and booking system
												logs.
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Remedies */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									5. Remedies if Break-Even ROI is Not Reached
								</h2>
								<div className="bg-gradient-to-r from-red-50 to-orange-50/30 rounded-2xl p-6 border border-red-100 mb-6">
									<p className="text-gray-700 font-medium mb-0">
										<strong>
											If §2 isn&apos;t met for the
											Guarantee Period, and you complied
											with §3, choose one of the following
											within 5 business days of our review
											meeting:
										</strong>
									</p>
								</div>

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
											A. &quot;Free-until-Break-Even&quot;
										</h3>
										<p className="text-gray-700 text-sm">
											Asterra will continue providing the
											Eligible Services at no additional
											Asterra service fee until cumulative
											Attributable Revenue since T0 equals
											the Impact Fee + Monthly Service Fee
											paid to date, or for up to 90
											additional days, whichever occurs
											first. (&quot;Free&quot; excludes
											third-party pass-through costs.)
										</p>
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
											B. Refund
										</h3>
										<p className="text-gray-700 text-sm">
											Asterra will refund the lesser of:
											(i) the shortfall to break-even for
											the Guarantee Period, or (ii) the
											Asterra service fees you paid for
											the Guarantee Period (Impact Fee +
											first Monthly Service Fee). Refunds
											are issued within 15 business days
											to the original payment method.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Exclusions */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									6. Exclusions
								</h2>
								<div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100">
									<p className="text-gray-700 mb-4">
										The Guarantee does not apply where any
										of the following occur during the
										Guarantee Period:
									</p>
									<ul className="space-y-2 text-gray-700">
										<li>
											• Excluded Services (e.g., website
											design/development, SEO,
											brand/creative, analytics-only work)
										</li>
										<li>
											• Force majeure or events outside
											our control (platform outages/bans,
											carrier blocking, payment processor
											issues, strikes, natural disasters)
										</li>
										<li>
											• Material business changes you make
											without our consent (pricing, hours,
											canceling phone lines, removing
											booking/payment options, staff
											changes affecting fulfillment)
										</li>
										<li>
											• Data access failures (permission
											revoked, missing credentials, broken
											integrations not fixed promptly)
										</li>
										<li>
											• Compliance issues (illegal or
											non-compliant scripts, CASL or
											privacy violations, refusal to use
											required consent language)
										</li>
										<li>
											• Non-cooperation (missed
											deadlines/approvals, &gt;5 business
											days inactivity on your side)
										</li>
										<li>
											• High-risk or restricted industries
											we decline in writing
										</li>
										<li>
											• Fraudulent or duplicate data (spam
											calls, test transactions, fake
											leads)
										</li>
									</ul>
								</div>
							</motion.div>

							{/* Process & Timeline */}
							<motion.div
								variants={sectionVariants}
								className="mb-12"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									7. Process & Timeline
								</h2>
								<div className="space-y-4">
									{[
										{
											day: 'Day 0 (Go-Live)',
											desc: 'Asterra confirms activation in writing.',
										},
										{
											day: 'Day 7 & Day 14',
											desc: 'Quick check-ins; adjustments if needed.',
										},
										{
											day: 'Day 30–35',
											desc: 'Joint review; Asterra provides ROI calculation. If break-even not reached, you select Remedy A or B within 5 business days.',
										},
										{
											day: 'Disputes',
											desc: "If there's a dispute on numbers, both parties will review underlying logs; Asterra's determination, acting reasonably and in good faith, will be final for the Guarantee.",
										},
									].map((step, index) => (
										<div
											key={index}
											className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50/50"
										>
											<div className="w-8 h-8 bg-[#FF5633] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
												{index + 1}
											</div>
											<div>
												<h3 className="font-semibold text-gray-900 mb-1">
													{step.day}
												</h3>
												<p className="text-gray-700 text-sm">
													{step.desc}
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
									15. Questions
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
										Contact:{' '}
										<strong>legal@asterra.ca</strong> (or
										your account manager).
									</p>
									<p className="text-gray-700 mt-2">
										Effective date: {currentDate}.
									</p>
								</div>
							</motion.div>

							{/* Footer */}
							<motion.div
								variants={sectionVariants}
								className="text-center py-8 border-t border-gray-200"
							>
								<p className="text-gray-500 text-sm">
									This 30-Day ROI Guarantee is effective as of{' '}
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

export default GuaranteePage;
