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
		document.documentElement.classList.add('loaded');
	}, []);

	useEffect(() => {
		if (state.succeeded && formRef.current) {
			formRef.current.reset();
		}
	}, [state.succeeded]);

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, staggerChildren: 0.1 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
		},
	};

	const inputClasses = 'w-full rounded-[var(--r-sm)] px-4 py-3 bg-white border border-[var(--glass-border-faint)] text-[var(--text)] placeholder:text-[var(--text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]/15 focus:border-[var(--terracotta)]/25 transition-colors font-body text-sm';

	return (
		<>
			<Navbar />

			<main className="relative">
				<section className="relative pt-32 pb-16 sm:pt-44 sm:pb-20 overflow-hidden">
					{/* Background */}
					<div className="absolute inset-0 mesh-warm" />
					<div
						className="absolute inset-0 opacity-[0.04]"
						style={{
							backgroundImage: 'radial-gradient(circle, var(--text-faint) 1px, transparent 1px)',
							backgroundSize: '32px 32px',
						}}
					/>

					<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
						<motion.div
							variants={container}
							initial="hidden"
							animate="visible"
						>
							{/* Header */}
							<motion.div variants={item} className="text-center mb-10 sm:mb-12">
								<span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-5">
									<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
									Get Started
								</span>
								<h1 className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] leading-[0.95] tracking-[-0.03em] text-[var(--text)] mb-4">
									Book a <span className="font-serif italic text-[var(--terracotta)]">demo.</span>
								</h1>
								<p className="font-body text-base sm:text-lg text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
									Tell us about your restaurant and we&apos;ll show you how Asterra handles your calls.
								</p>
							</motion.div>

							{/* Form */}
							<motion.div variants={item} className="max-w-2xl mx-auto">
								<div className="glass-card rounded-[var(--r-xl)] overflow-hidden">
									<form ref={formRef} onSubmit={handleSubmit} className="p-7 sm:p-10">
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
											<div>
												<label className="block font-body text-sm text-[var(--text-muted)] mb-2">
													First name
												</label>
												<input
													name="firstName"
													type="text"
													required
													autoComplete="given-name"
													className={inputClasses}
												/>
											</div>
											<div>
												<label className="block font-body text-sm text-[var(--text-muted)] mb-2">
													Last name
												</label>
												<input
													name="lastName"
													type="text"
													required
													autoComplete="family-name"
													className={inputClasses}
												/>
											</div>
										</div>

										<div className="mt-5">
											<label className="block font-body text-sm text-[var(--text-muted)] mb-2">
												Email
											</label>
											<input
												name="email"
												type="email"
												required
												autoComplete="email"
												className={inputClasses}
											/>
										</div>

										<div className="mt-5">
											<label className="block font-body text-sm text-[var(--text-muted)] mb-2">
												Restaurant / business name
											</label>
											<input
												name="company"
												type="text"
												required
												autoComplete="organization"
												className={inputClasses}
											/>
										</div>

										<div className="mt-5">
											<label className="block font-body text-sm text-[var(--text-muted)] mb-2">
												Phone number
											</label>
											<input
												name="phone"
												type="tel"
												required
												autoComplete="tel"
												className={inputClasses}
											/>
										</div>

										<div className="mt-5">
											<label className="block font-body text-sm text-[var(--text-muted)] mb-2">
												How many locations?
											</label>
											<select
												name="locations"
												className={inputClasses}
											>
												<option value="1">1 location</option>
												<option value="2-5">2-5 locations</option>
												<option value="6-20">6-20 locations</option>
												<option value="20+">20+ locations</option>
											</select>
										</div>

										<div className="mt-5">
											<label className="block font-body text-sm text-[var(--text-muted)] mb-2">
												Anything else we should know?
											</label>
											<textarea
												name="message"
												rows={4}
												className={`${inputClasses} resize-none`}
											/>
										</div>

										<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
											<p className="font-body text-xs text-[var(--text-faint)] text-center sm:text-left">
												We&apos;ll only use this to reach out about your demo.
											</p>

											<motion.button
												type="submit"
												disabled={state.submitting}
												whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(200, 67, 43, 0.25)' }}
												whileTap={{ scale: 0.97 }}
												transition={{ type: 'spring', stiffness: 400, damping: 25 }}
												className="btn-primary w-full sm:w-auto text-[15px] px-7 py-3.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
											>
												{state.submitting
													? 'Sending...'
													: state.succeeded
														? 'Sent'
														: 'Book a Demo'}
											</motion.button>
										</div>

										{state.succeeded && (
											<div className="mt-6 glass-card rounded-[var(--r-sm)] px-5 py-4">
												<p className="font-body text-sm text-[var(--text-muted)]">
													Thanks! We&apos;ll reach out within one business day to schedule your demo.
												</p>
											</div>
										)}

										{state.errors && state.errors.length > 0 && (
											<div className="mt-6 rounded-[var(--r-sm)] bg-red-50 border border-red-100 px-5 py-4">
												{state.errors.map((err) => (
													<p key={err.code} className="font-body text-sm text-red-600">
														{err.message}
													</p>
												))}
											</div>
										)}
									</form>
								</div>

								{/* Alternative CTA */}
								<div className="text-center mt-8">
									<p className="font-body text-sm text-[var(--text-muted)]">
										Prefer to talk now?{' '}
										<a href="tel:+14374944696" className="text-[var(--terracotta)] hover:underline font-medium">
											Call our live demo line
										</a>
									</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
