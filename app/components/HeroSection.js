'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <section className="min-h-screen bg-[var(--ivory)]" />;
	}

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.8, staggerChildren: 0.1 },
		},
	};

	const item = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
		},
	};

	const floatUp = {
		hidden: { opacity: 0, y: 60, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
		},
	};

	return (
		<section className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
			{/* Gradient mesh background */}
			<div className="absolute inset-0 mesh-warm" />

			{/* Faint dot grid */}
			<div
				className="absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage: 'radial-gradient(circle, var(--text-faint) 1px, transparent 1px)',
					backgroundSize: '32px 32px',
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left: Copy — takes 7 cols on lg */}
					<motion.div
						className="lg:col-span-7"
						variants={container}
						initial="hidden"
						animate="visible"
					>
						{/* Eyebrow */}
						<motion.div variants={item} className="mb-7">
							<span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)]">
								<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
								Phone handling for restaurants
							</span>
						</motion.div>

						{/* Headline — oversized Syne with serif italic accent */}
						<motion.h1
							variants={item}
							className="font-display text-[3rem] sm:text-[4rem] lg:text-[4.75rem] xl:text-[5.5rem] leading-[0.95] tracking-[-0.03em] text-[var(--text)] mb-7"
						>
							Your restaurant&apos;s
							<br />
							phone line.
							<br />
							<span className="font-serif italic text-[var(--terracotta)]">Handled.</span>
						</motion.h1>

						{/* Subline */}
						<motion.p
							variants={item}
							className="font-body text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-md mb-9"
						>
							Asterra answers every call, takes orders, and handles questions — so your team stays on the line.
						</motion.p>

						{/* CTAs */}
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

						{/* Trust signals */}
						<motion.div variants={item} className="flex items-center gap-6 mt-10">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-emerald-500" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
								<span className="font-body text-xs text-[var(--text-faint)]">Live now</span>
							</div>
							<span className="font-body text-xs text-[var(--text-faint)]">Serving Toronto & the GTA</span>
						</motion.div>
					</motion.div>

					{/* Right: Media Placeholder — takes 5 cols */}
					<motion.div
						className="lg:col-span-5 relative"
						variants={floatUp}
						initial="hidden"
						animate="visible"
					>
						{/*
						 ╔══════════════════════════════════════════════════════════════╗
						 ║  MEDIA PLACEHOLDER — HERO MEDIA                            ║
						 ║                                                             ║
						 ║  Type: Video or Image                                       ║
						 ║  Aspect: ~4:5 portrait (phone mockup)                       ║
						 ║  Size: 600x750px                                            ║
						 ║                                                             ║
						 ║  OPTION A (Recommended): iPhone mockup showing a live       ║
						 ║  Asterra call — caller asks about menu, system responds.    ║
						 ║  Use existing /heroiphone.png as starting point.            ║
						 ║                                                             ║
						 ║  OPTION B: Short looping video (8-12s) of the phone         ║
						 ║  interface — call comes in, order is taken, lands in POS.   ║
						 ║                                                             ║
						 ║  Art direction: Premium product shot feel. Warm lighting.   ║
						 ║  Slight float animation. Soft shadow beneath for depth.     ║
						 ╚══════════════════════════════════════════════════════════════╝
						*/}
						<div className="relative">
							{/* Terracotta glow behind */}
							<div
								className="absolute inset-0 -m-10 rounded-[3rem]"
								style={{
									background: 'radial-gradient(ellipse at 50% 40%, rgba(200, 67, 43, 0.1) 0%, transparent 65%)',
									filter: 'blur(50px)',
								}}
							/>

							{/* Main media frame */}
							<div
								className="relative glass-card rounded-[var(--r-xl)] overflow-hidden"
								style={{ animation: 'float 7s ease-in-out infinite' }}
							>
								<div
									className="media-slot rounded-[var(--r-xl)]"
									style={{ aspectRatio: '4/5', minHeight: '420px' }}
								>
									<div className="text-center p-10">
										<div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/60 flex items-center justify-center">
											<svg className="w-7 h-7 text-[var(--text-faint)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
											</svg>
										</div>
										<p className="font-body text-sm font-medium text-[var(--text-muted)]">Hero Media</p>
										<p className="font-body text-xs text-[var(--text-faint)] mt-1">Phone mockup or product video</p>
									</div>
								</div>
							</div>

							{/* Floating stat — bottom left */}
							<motion.div
								className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 glass-solid rounded-[var(--r-md)] px-5 py-3.5"
								initial={{ opacity: 0, x: -24 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
							>
								<p className="font-body text-[11px] text-[var(--text-faint)] font-medium uppercase tracking-wider">Calls answered</p>
								<p className="font-display text-xl font-bold text-[var(--text)] mt-0.5">24/7</p>
							</motion.div>

							{/* Floating stat — top right */}
							<motion.div
								className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 glass-solid rounded-[var(--r-md)] px-5 py-3.5"
								initial={{ opacity: 0, x: 24 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
							>
								<p className="font-body text-[11px] text-[var(--text-faint)] font-medium uppercase tracking-wider">Status</p>
								<div className="flex items-center gap-2 mt-0.5">
									<div className="w-2 h-2 rounded-full bg-emerald-500" />
									<p className="font-body text-sm font-semibold text-emerald-700">Active</p>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
