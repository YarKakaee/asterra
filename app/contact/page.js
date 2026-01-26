'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import { useForm } from '@formspree/react';

export default function ContactPage() {
	const [state, handleSubmit] = useForm('xrbanbqz');
	const formRef = useRef(null);

	useEffect(() => {
		if (state.succeeded && formRef.current) {
			formRef.current.reset();
		}
	}, [state.succeeded]);

	return (
		<>
			<Navbar />

			<main className="relative">
				<section className="relative pt-32 pb-16 sm:pt-44 sm:pb-20 overflow-hidden">
					{/* Subtle off-white texture background */}
					<div
						className="absolute inset-0"
						style={{
							background:
								'linear-gradient(180deg, #F9F4F2 0%, #FFFFFF 100%)',
						}}
					>
						<div
							className="absolute inset-0 opacity-35"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.14) 1.4px, transparent 0)',
								backgroundSize: '22px 22px',
								backgroundPosition: '0 0',
							}}
						/>
						<div
							className="absolute inset-0 opacity-18"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 0.9px, transparent 0)',
								backgroundSize: '11px 11px',
								backgroundPosition: '6px 6px',
							}}
						/>
						<div
							className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
							style={{
								background: 'rgba(21, 23, 25, 0.05)',
							}}
						/>
						<div
							className="absolute -bottom-28 -right-28 h-[28rem] w-[28rem] rounded-full blur-3xl"
							style={{
								background: 'rgba(21, 23, 25, 0.035)',
							}}
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.78) 100%)',
							}}
						/>
					</div>

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						<div className="text-center">
							<p className="text-xs sm:text-sm text-gray-500 tracking-[0.2em] uppercase font-medium">
								CONTACT
							</p>
							<h1 className="mt-4 text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1d1d1f] leading-tight">
								Get in touch.
							</h1>
							<p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-light">
								A quick message is enough. We&apos;ll reply
								soon.
							</p>
						</div>

						<div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
							<div
								className="rounded-3xl bg-white/80 border border-white/40"
								style={{
									boxShadow:
										'0 22px 70px rgba(15, 23, 42, 0.08), 0 8px 22px rgba(15, 23, 42, 0.05)',
									backdropFilter: 'blur(10px)',
								}}
							>
								<form
									ref={formRef}
									onSubmit={handleSubmit}
									className="p-7 sm:p-10"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div>
											<label className="block text-sm text-gray-600 mb-2">
												First name
											</label>
											<input
												name="firstName"
												type="text"
												required
												autoComplete="given-name"
												className="w-full rounded-2xl px-4 py-3 bg-white border border-gray-200/80 text-[#151719] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-colors"
											/>
										</div>
										<div>
											<label className="block text-sm text-gray-600 mb-2">
												Last name
											</label>
											<input
												name="lastName"
												type="text"
												required
												autoComplete="family-name"
												className="w-full rounded-2xl px-4 py-3 bg-white border border-gray-200/80 text-[#151719] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-colors"
											/>
										</div>
									</div>

									<div className="mt-5">
										<label className="block text-sm text-gray-600 mb-2">
											Email
										</label>
										<input
											name="email"
											type="email"
											required
											autoComplete="email"
											className="w-full rounded-2xl px-4 py-3 bg-white border border-gray-200/80 text-[#151719] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-colors"
										/>
									</div>

									<div className="mt-5">
										<label className="block text-sm text-gray-600 mb-2">
											Company name
										</label>
										<input
											name="company"
											type="text"
											required
											autoComplete="organization"
											className="w-full rounded-2xl px-4 py-3 bg-white border border-gray-200/80 text-[#151719] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-colors"
										/>
									</div>

									<div className="mt-5">
										<label className="block text-sm text-gray-600 mb-2">
											Phone number
										</label>
										<input
											name="phone"
											type="tel"
											required
											autoComplete="tel"
											className="w-full rounded-2xl px-4 py-3 bg-white border border-gray-200/80 text-[#151719] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-colors"
										/>
									</div>

									<div className="mt-5">
										<label className="block text-sm text-gray-600 mb-2">
											Message
										</label>
										<textarea
											name="message"
											rows={5}
											required
											className="w-full rounded-2xl px-4 py-3 bg-white border border-gray-200/80 text-[#151719] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-colors resize-none"
										/>
									</div>

									<div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
										<p className="text-xs text-gray-500 text-center sm:text-left">
											We&apos;ll only use this to respond.
										</p>

										<motion.button
											type="submit"
											disabled={state.submitting}
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.98 }}
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 20,
											}}
											className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-3xl bg-[#151719] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
										>
											{state.submitting
												? 'Sending…'
												: state.succeeded
													? 'Sent'
													: 'Send'}
										</motion.button>
									</div>

									{state.succeeded && (
										<div className="mt-6 rounded-2xl bg-white/70 border border-black/[0.05] px-4 py-3 text-sm text-gray-600">
											Message received. We&apos;ll get
											back to you shortly.
										</div>
									)}

									{state.errors && state.errors.length > 0 && (
										<div className="mt-6 rounded-2xl bg-white/70 border border-black/[0.05] px-4 py-3 text-sm text-gray-600">
											{state.errors.map((err) => (
												<p key={err.code}>
													{err.message}
												</p>
											))}
										</div>
									)}
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
