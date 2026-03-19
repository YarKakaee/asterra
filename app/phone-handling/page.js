'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function titleFromFilename(filename) {
	const base = filename.replace(/\.[^/.]+$/, '');
	return base.replace(/[-_]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
}

const LogoMarquee = ({ logos, ariaLabel }) => {
	const items = useMemo(() => [...logos, ...logos], [logos]);

	return (
		<div className="relative mx-auto" aria-label={ariaLabel}>
			<div
				className="overflow-hidden py-4"
				style={{
					WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
					maskImage: 'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
				}}
			>
				<div
					className="flex items-center gap-14 sm:gap-20 w-max animate-marquee"
					style={{ '--speed': '55s' }}
				>
					{items.map((logo, idx) => (
						<div key={`${logo.src}-${idx}`} className="flex items-center justify-center flex-shrink-0">
							<Image
								src={logo.src}
								alt={logo.alt}
								width={150}
								height={60}
								className="h-8 sm:h-10 w-auto select-none opacity-50 hover:opacity-90 transition-opacity duration-300"
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const PhoneHandlingPage = () => {
	const heroRef = useRef(null);
	const capRef = useRef(null);
	const flowRef = useRef(null);
	const intRef = useRef(null);
	const isHeroInView = useInView(heroRef, { once: true });
	const isCapInView = useInView(capRef, { once: true, margin: '-80px' });
	const isFlowInView = useInView(flowRef, { once: true, margin: '-80px' });
	const isIntInView = useInView(intRef, { once: true, margin: '-80px' });
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		document.documentElement.classList.add('loaded');
	}, []);

	const posLogos = useMemo(
		() =>
			[
				'/pos/toast.png',
				'/pos/square.png',
				'/pos/clover.png',
				'/pos/touchbistro.png',
				'/pos/lightspeed.png',
				'/pos/micros.png',
				'/pos/resyos.png',
				'/pos/opentable.png',
			].map((src) => ({
				src,
				alt: titleFromFilename(src.split('/').pop()),
			})),
		[],
	);

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

	const capabilities = [
		{ title: 'Answer calls instantly', detail: 'Every call picked up before the second ring — no voicemail, no hold music.' },
		{ title: 'Handle common questions', detail: 'Hours, location, menu items, delivery zones — answered accurately.' },
		{ title: 'Take orders by phone', detail: 'Walk callers through the menu, confirm items, process the order.' },
		{ title: 'Send orders to your POS', detail: 'Orders land in your system ready for the kitchen to see.' },
		{ title: 'Transfer when needed', detail: 'Complex requests or VIP callers routed seamlessly to staff.' },
		{ title: 'Work during peak hours', detail: 'No delays, no dropped calls, no matter how busy the rush.' },
	];

	const flowSteps = [
		{ title: 'What callers ask', items: ['Hours, location, and common questions', 'Menu or service details', 'Orders, reservations, or appointments'] },
		{ title: 'What happens next', items: ['Orders sent directly to your POS', 'Reservations booked in your system', 'Nothing new for your staff to learn'] },
	];

	return (
		<>
			<Navbar />

			<main>
				{/* Hero */}
				<section ref={heroRef} className="relative pt-32 sm:pt-44 pb-16 sm:pb-24 overflow-hidden">
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
							animate={isHeroInView ? 'visible' : 'hidden'}
						>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
								<div>
									<motion.span variants={item} className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-6 block">
										<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
										Phone Handling
									</motion.span>
									<motion.h1 variants={item} className="font-display text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] leading-[0.95] tracking-[-0.03em] text-[var(--text)] mb-6">
										Every call answered.{' '}
										<span className="font-serif italic text-[var(--text-muted)]">Every time.</span>
									</motion.h1>
									<motion.p variants={item} className="font-body text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-lg mb-8">
										An automated phone line that handles calls, takes orders, and answers questions — built for how restaurants actually operate.
									</motion.p>

									<motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-3.5">
										<Link href="/contact">
											<motion.div
												className="btn-primary text-[15px] px-7 py-3.5 cursor-pointer"
												whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(200, 67, 43, 0.3)' }}
												whileTap={{ scale: 0.97 }}
												transition={{ type: 'spring', stiffness: 400, damping: 25 }}
											>
												Book a Demo
											</motion.div>
										</Link>
										<motion.a
											href="tel:+14374944696"
											className="btn-ghost text-[15px] px-7 py-3.5 cursor-pointer"
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
											transition={{ type: 'spring', stiffness: 400, damping: 25 }}
										>
											<svg className="w-4 h-4 text-[var(--terracotta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
											</svg>
											Call the live demo
										</motion.a>
									</motion.div>
									<motion.p variants={item} className="font-body text-xs text-[var(--text-faint)] mt-4">
										(437) 494-4696
									</motion.p>
								</div>

								{/* Hero Media */}
								<motion.div variants={item} className="relative">
									<div className="relative max-w-sm mx-auto">
										<div
											className="absolute inset-0 -m-10 rounded-[3rem]"
											style={{
												background: 'radial-gradient(ellipse at 50% 40%, rgba(200, 67, 43, 0.08) 0%, transparent 60%)',
												filter: 'blur(50px)',
											}}
										/>
										{mounted && (
											<div className="relative" style={{ animation: 'float 7s ease-in-out infinite' }}>
												<div className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[85%] h-12 bg-black/15 blur-3xl rounded-full" />
												<Image
													src="/heroiphone.png"
													alt="Asterra phone handling interface"
													width={400}
													height={800}
													className="w-full h-auto mx-auto"
													style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.2))' }}
													priority
												/>
											</div>
										)}
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Capabilities */}
				<section ref={capRef} className="section-dark relative overflow-hidden" style={{ padding: 'var(--section-gap) 0' }}>
					<div
						className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
						style={{ background: 'linear-gradient(90deg, transparent, rgba(200, 67, 43, 0.3), transparent)' }}
					/>
					<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
						<motion.div
							variants={container}
							initial="hidden"
							animate={isCapInView ? 'visible' : 'hidden'}
						>
							<motion.div variants={item} className="text-center mb-14 sm:mb-16">
								<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1] tracking-[-0.03em] text-[var(--text-on-dark)]">
									What the phone line{' '}
									<span className="font-serif italic text-[var(--text-on-dark-muted)]">actually does.</span>
								</h2>
							</motion.div>

							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{capabilities.map((cap, i) => (
									<motion.div key={cap.title} variants={item} className="glass-dark rounded-[var(--r-md)] p-6">
										<span className="font-display text-[11px] font-bold tracking-[0.15em] text-[var(--terracotta)] opacity-70 mb-3 block">
											0{i + 1}
										</span>
										<p className="font-body text-[15px] font-semibold text-[var(--text-on-dark)] mb-2">{cap.title}</p>
										<p className="font-body text-[13px] text-[var(--text-on-dark-muted)] leading-relaxed">{cap.detail}</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Call Flow */}
				<section ref={flowRef} className="relative bg-white overflow-hidden" style={{ padding: 'var(--section-gap) 0' }}>
					<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
						<motion.div
							variants={container}
							initial="hidden"
							animate={isFlowInView ? 'visible' : 'hidden'}
						>
							<motion.div variants={item} className="text-center mb-14 sm:mb-16">
								<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1] tracking-[-0.03em] text-[var(--text)]">
									What happens{' '}
									<span className="font-serif italic text-[var(--text-muted)]">when someone calls.</span>
								</h2>
								<p className="font-body text-base text-[var(--text-muted)] mt-4 max-w-2xl mx-auto leading-relaxed">
									From the first ring to the final action — handled automatically.
								</p>
							</motion.div>

							<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-stretch">
								{flowSteps.map((step) => (
									<motion.div key={step.title} variants={item} className="glass-card rounded-[var(--r-lg)] p-8">
										<p className="font-body text-base font-semibold text-[var(--text)] mb-5">{step.title}</p>
										<ul className="space-y-4">
											{step.items.map((listItem, i) => (
												<li key={i} className="flex items-start gap-3">
													<span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--terracotta)] flex-shrink-0" />
													<p className="font-body text-sm text-[var(--text-muted)] leading-relaxed">{listItem}</p>
												</li>
											))}
										</ul>
									</motion.div>
								))}

								{/* Connector */}
								<div className="hidden lg:flex items-center justify-center">
									<div className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-[var(--text-faint)]">
										<span className="text-base">&rarr;</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Integrations */}
				<section ref={intRef} className="relative bg-[var(--ivory)] overflow-hidden" style={{ padding: 'var(--section-gap-sm) 0' }}>
					<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
						<motion.div
							variants={container}
							initial="hidden"
							animate={isIntInView ? 'visible' : 'hidden'}
						>
							<motion.div variants={item} className="text-center mb-10 sm:mb-12">
								<span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-5">
									<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
									Integrations
								</span>
								<h2 className="font-display text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1] tracking-[-0.03em] text-[var(--text)]">
									Works with the tools{' '}
									<span className="font-serif italic text-[var(--text-muted)]">you already use.</span>
								</h2>
							</motion.div>

							<motion.div variants={item}>
								<div className="glass-card rounded-[var(--r-lg)] py-8 px-4">
									<LogoMarquee logos={posLogos} ariaLabel="POS integrations" />
								</div>
							</motion.div>

							<motion.p variants={item} className="text-center font-body text-sm text-[var(--text-muted)] mt-8 max-w-2xl mx-auto">
								No workflow changes required. The phone line fits into how you already operate.
							</motion.p>
						</motion.div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="section-dark relative overflow-hidden" style={{ padding: 'var(--section-gap) 0' }}>
					<div
						className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px]"
						style={{ background: 'linear-gradient(90deg, transparent, rgba(200, 67, 43, 0.35), transparent)' }}
					/>
					<div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
						style={{ background: 'radial-gradient(ellipse at center, rgba(200, 67, 43, 0.06) 0%, transparent 55%)' }}
					/>
					<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
						<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] text-[var(--text-on-dark)] leading-[1] tracking-[-0.03em] mb-6">
							Ready to stop{' '}
							<span className="font-serif italic text-[var(--terracotta)]">missing calls?</span>
						</h2>
						<p className="font-body text-base text-[var(--text-on-dark-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
							See how Asterra handles calls for restaurants like yours.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link href="/contact">
								<motion.div
									className="btn-primary text-base px-8 py-4 cursor-pointer"
									whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(200, 67, 43, 0.35)' }}
									whileTap={{ scale: 0.97 }}
									transition={{ type: 'spring', stiffness: 400, damping: 25 }}
								>
									Book a Demo
								</motion.div>
							</Link>
							<motion.a
								href="tel:+14374944696"
								className="inline-flex items-center gap-2.5 px-8 py-4 rounded-[var(--r-full)] text-base font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 cursor-pointer font-body"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: 'spring', stiffness: 400, damping: 25 }}
							>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
								</svg>
								Call the live demo
							</motion.a>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default PhoneHandlingPage;
