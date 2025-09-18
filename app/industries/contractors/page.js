'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useMobileDetection } from '../../utils/mobileOptimization';

const ContractorsPage = () => {
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
					className="relative pt-16 overflow-hidden min-h-[80vh] flex items-center"
				>
					{/* Background Image - starts below navbar */}
					<div className="absolute inset-0 top-16">
						<Image
							src="/contractors.png"
							alt="Contractor working with tools"
							fill
							className="object-cover"
							priority
						/>
						{/* Gradient overlay for text readability */}
						<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
					</div>
					{/* Content */}
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isHeroInView ? 'visible' : 'hidden'}
							className="text-center"
						>
							{/* Glass Badge */}
							<motion.div className="mb-8">
								<div className="inline-flex items-center px-6 py-3 glass-plaque rounded-full text-sm font-semibold text-white border border-white/20">
									Built for Contractors
								</div>
							</motion.div>

							{/* Main Headline */}
							<motion.h1
								variants={headerVariants}
								className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
							>
								Your Business,
								<br />
								<span className="text-5xl sm:text-7xl">
									Streamlined
								</span>
							</motion.h1>

							<motion.p
								variants={headerVariants}
								className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
							>
								AI receptionist that books estimates, handles
								customer inquiries, and manages your schedule—so
								you can focus on what you do best: building and
								fixing.
							</motion.p>

							<motion.div>
								<motion.a
									href="#"
									className="inline-flex items-center px-7 py-3.5 bg-[#FF5633] text-white text-md font-medium rounded-lg shadow-lg"
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
									Transform My Business
								</motion.a>
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
							{/* Problem Section */}
							<motion.div
								variants={sectionVariants}
								className="mb-16"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
									What&apos;s Holding Back Your Business
								</h2>

								<div className="grid md:grid-cols-3 gap-8">
									<div
										className="rounded-2xl p-8 border text-center"
										style={{
											background:
												'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)',
											border: '1px solid rgba(239, 68, 68, 0.1)',
										}}
									>
										<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg
												className="w-8 h-8 text-red-600"
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
											Missed Calls = Lost Jobs
										</h3>
										<p className="text-gray-700 text-sm">
											When customers can&apos;t reach you,
											they call your competition. You
											can&apos;t answer the phone while on
											a job site.
										</p>
									</div>

									<div
										className="rounded-2xl p-8 border text-center"
										style={{
											background:
												'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(245, 158, 11, 0.02) 100%)',
											border: '1px solid rgba(245, 158, 11, 0.1)',
										}}
									>
										<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg
												className="w-8 h-8 text-yellow-600"
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
											No-Shows = Lost Revenue
										</h3>
										<p className="text-gray-700 text-sm">
											Empty appointment slots mean lost
											income. You need automated reminders
											and easy rescheduling to keep your
											schedule full.
										</p>
									</div>

									<div
										className="rounded-2xl p-8 border text-center"
										style={{
											background:
												'linear-gradient(135deg, rgba(107, 114, 128, 0.05) 0%, rgba(107, 114, 128, 0.02) 100%)',
											border: '1px solid rgba(107, 114, 128, 0.1)',
										}}
									>
										<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
											<svg
												className="w-8 h-8 text-gray-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
												/>
											</svg>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-3">
											Admin Overload = Burnout
										</h3>
										<p className="text-gray-700 text-sm">
											Managing estimates, scheduling, and
											follow-ups manually steals time from
											what you do best—delivering quality
											work.
										</p>
									</div>
								</div>
							</motion.div>

							{/* Solutions Section */}
							<motion.div
								variants={sectionVariants}
								className="mb-16"
								id="solutions"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
									The Contractor Revolution Starts Here
								</h2>

								<div className="space-y-12">
									{/* AI Receptionist Solution */}
									<div className="grid lg:grid-cols-2 gap-12 items-center">
										<div>
											<div className="flex items-center mb-6">
												<div className="w-12 h-12 bg-[#FF5633] rounded-lg flex items-center justify-center mr-4">
													<div className="text-white font-bold text-lg">
														AI
													</div>
												</div>
												<h3 className="text-2xl font-bold text-gray-900">
													AI Receptionist
												</h3>
											</div>

											<p className="text-gray-700 mb-6 text-lg">
												Our intelligent AI assistant
												never sleeps, never gets
												overwhelmed, and never misses a
												customer call. It understands
												your trade and handles your
												business&apos;s unique needs.
											</p>

											<div className="space-y-4">
												<div className="flex items-start">
													<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
													<div>
														<strong className="text-gray-900">
															24/7 Customer
															Support:
														</strong>
														<span className="text-gray-700">
															{' '}
															Handles calls even
															during off-hours and
															emergencies
														</span>
													</div>
												</div>
												<div className="flex items-start">
													<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
													<div>
														<strong className="text-gray-900">
															Smart Scheduling:
														</strong>
														<span className="text-gray-700">
															{' '}
															Manages your
															calendar and
															optimizes job
															scheduling
															automatically
														</span>
													</div>
												</div>
												<div className="flex items-start">
													<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
													<div>
														<strong className="text-gray-900">
															Estimate Booking:
														</strong>
														<span className="text-gray-700">
															{' '}
															Handles initial
															consultations,
															project details, and
															estimate scheduling
														</span>
													</div>
												</div>
												<div className="flex items-start">
													<div className="w-2 h-2 bg-[#FF5633] rounded-full mt-2 mr-3 flex-shrink-0"></div>
													<div>
														<strong className="text-gray-900">
															Customer Follow-up:
														</strong>
														<span className="text-gray-700">
															{' '}
															Automated project
															updates, completion
															confirmations, and
															satisfaction surveys
														</span>
													</div>
												</div>
											</div>
										</div>

										<div
											className="rounded-2xl p-8 border"
											style={{
												background:
													'linear-gradient(135deg, rgba(255, 86, 51, 0.1) 0%, rgba(255, 86, 51, 0.05) 100%)',
												border: '1px solid rgba(255, 86, 51, 0.2)',
											}}
										>
											<div className="text-center">
												<div className="text-4xl font-bold text-[#FF5633] mb-2">
													89%
												</div>
												<div className="text-gray-700 mb-4">
													Customer Satisfaction Rate
												</div>
												<div className="text-sm text-gray-600">
													Average increase in customer
													retention
												</div>
											</div>
										</div>
									</div>

									{/* Other Solutions */}
									<div className="grid md:grid-cols-2 gap-8">
										<motion.div
											variants={cardVariants}
											className="rounded-2xl p-8 border"
											style={{
												background:
													'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
												border: '1px solid rgba(59, 130, 246, 0.1)',
											}}
										>
											<div className="flex items-center mb-4">
												<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
													<svg
														className="w-5 h-5 text-blue-600"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														/>
													</svg>
												</div>
												<h3 className="text-xl font-semibold text-gray-900">
													Website Development
												</h3>
											</div>
											<p className="text-gray-700 text-sm">
												Professional contractor websites
												with online booking, project
												galleries, and customer reviews
												that build trust and generate
												leads.
											</p>
										</motion.div>

										<motion.div
											variants={cardVariants}
											className="rounded-2xl p-8 border"
											style={{
												background:
													'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%)',
												border: '1px solid rgba(16, 185, 129, 0.1)',
											}}
										>
											<div className="flex items-center mb-4">
												<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
													<svg
														className="w-5 h-5 text-green-600"
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
												<h3 className="text-xl font-semibold text-gray-900">
													Customer Retention
												</h3>
											</div>
											<p className="text-gray-700 text-sm">
												Automated follow-up sequences,
												maintenance reminders, and
												referral programs that keep
												customers coming back for more
												projects.
											</p>
										</motion.div>
									</div>
								</div>
							</motion.div>

							{/* Workflow Integration */}
							<motion.div
								variants={sectionVariants}
								className="mb-16"
							>
								<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
									From Chaos to Control in 3 Steps
								</h2>

								<div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
									<div className="grid md:grid-cols-3 gap-8">
										<div className="text-center">
											<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
												<span className="text-white font-bold text-xl">
													1
												</span>
											</div>
											<h3 className="font-semibold text-gray-900 mb-2">
												Setup
											</h3>
											<p className="text-gray-700 text-sm">
												We integrate with your existing
												scheduling system, phone lines,
												and business tools. Zero
												disruption to your current
												workflow.
											</p>
										</div>
										<div className="text-center">
											<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
												<span className="text-white font-bold text-xl">
													2
												</span>
											</div>
											<h3 className="font-semibold text-gray-900 mb-2">
												Train
											</h3>
											<p className="text-gray-700 text-sm">
												Our AI learns your services,
												pricing, and business style. It
												becomes your perfect customer
												service representative.
											</p>
										</div>
										<div className="text-center">
											<div className="w-16 h-16 bg-[#FF5633] rounded-full flex items-center justify-center mx-auto mb-4">
												<span className="text-white font-bold text-xl">
													3
												</span>
											</div>
											<h3 className="font-semibold text-gray-900 mb-2">
												Grow
											</h3>
											<p className="text-gray-700 text-sm">
												Watch your bookings increase and
												your customer satisfaction soar
												while you focus on what you do
												best—delivering quality work.
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							{/* CTA Section */}
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
										Ready to Transform Your Business?
									</h2>
									<p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
										Join the contractors already using our
										AI to streamline their business and grow
										their customer base.
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
											Start Your Transformation
										</motion.a>
										<motion.a
											href="#"
											className="inline-flex items-center px-8 py-4 border-2 border-[#FF5633] text-[#FF5633] text-lg font-semibold rounded-lg hover:bg-[#FF5633] hover:text-white transition-colors duration-200"
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											Learn More
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

export default ContractorsPage;
