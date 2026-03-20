'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function CallNowSection() {
	const [showStaticPhone, setShowStaticPhone] = useState(false);

	useEffect(() => {
		// Check initially in case event already fired or it's a small screen
		if (window.innerWidth < 1024) {
			setShowStaticPhone(true);
		}

		const handleKill = () => setShowStaticPhone(true);
		window.addEventListener('heroAnimationKilled', handleKill);

		// Show static phone when scroll animation finishes
		const handleComplete = () => setShowStaticPhone(true);
		window.addEventListener('heroAnimationComplete', handleComplete);

		// Hide static phone when scrolling back up into animation
		const handleResumed = () => setShowStaticPhone(false);
		window.addEventListener('heroAnimationResumed', handleResumed);

		const handleResize = () => {
			if (window.innerWidth < 1024) setShowStaticPhone(true);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('heroAnimationKilled', handleKill);
			window.removeEventListener('heroAnimationComplete', handleComplete);
			window.removeEventListener('heroAnimationResumed', handleResumed);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section
			id="call-now-section"
			className="relative lg:min-h-screen flex items-center overflow-hidden"
		>
			{/* Background Cloud decorations */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{ zIndex: 0 }}
			>
				<Image
					src="/Cloud.png"
					width={600}
					height={400}
					alt=""
					className="absolute select-none opacity-30"
					style={{
						top: '15%',
						left: '8%',
						width: '320px',
						transform: 'rotate(-10deg)',
					}}
					draggable={false}
				/>
				<img
					src="/Cloud.png"
					alt=""
					className="absolute select-none opacity-20 hidden md:block"
					style={{
						bottom: '10%',
						right: '2%',
						width: '240px',
						transform: 'rotate(15deg) scaleX(-1)', // Flipped horizontal for variance
					}}
					draggable={false}
				/>
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-0">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_4.5fr_6.5fr] gap-8 items-center min-h-[300px] lg:min-h-screen">
					{/* Left spacer to shift the whole layout to the right */}
					<div className="hidden lg:block w-full h-full" />

					{/* Middle/Left — empty space for the fixed phone, or static phone */}
					<div
						id="phone-destination"
						className="hidden lg:flex relative items-center justify-center w-full h-full min-h-[500px]"
					>
						<div
							id="static-phone"
							className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[320px]"
							style={{
								left: '-48px',
								opacity: showStaticPhone ? 1 : 0,
								transform:
									'scale(1.15) perspective(800px) rotateY(12deg) rotateX(3deg)',
								filter: 'drop-shadow(-15px 50px 50px rgba(0,0,0,0.5))',
							}}
						>
							<Image
								src="/phone.png"
								alt="Phone showing active call with Asterra"
								width={440}
								height={880}
								className="w-full h-auto"
								priority
								draggable={false}
							/>
						</div>
					</div>

					{/* Right side — text content */}
					<div className="max-w-[480px] mx-auto text-center lg:text-left lg:mx-0">
						<ScrollReveal>
							<h2
								className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-black leading-[1.1] mb-5"
								style={{
									fontFamily:
										'var(--font-inter), system-ui, sans-serif',
									letterSpacing: '-0.03em',
								}}
							>
								Hear exactly what your
								<br />
								customers will hear.
							</h2>
						</ScrollReveal>

						<ScrollReveal delay={0.1}>
							<p
								className="text-[#6B7280] text-base mb-8"
								style={{
									fontFamily:
										'var(--font-inter), system-ui, sans-serif',
									fontWeight: 400,
								}}
							>
								Call the number below, a fully working demo for
								a fake pizza shop. Place an order, book a table,
								and hear exactly how it sounds.
							</p>
						</ScrollReveal>

						<ScrollReveal delay={0.2}>
							<a
								href="tel:+14374944696"
								className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-[15px] font-semibold transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.15)] mx-auto lg:mx-0 overflow-hidden"
								style={{
									background: '#0a0a0a',
									border: '1px solid rgba(255,255,255,0.1)',
								}}
							>
							{/* Hover Background Radial Glow */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent" />
							</div>

							{/* Glass Sweep Animation */}
							<div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[800ms] ease-out group-hover:translate-x-[150%] pointer-events-none" />

							{/* Button Content Context */}
							<div className="relative z-10 flex items-center gap-3 text-white transition-transform duration-500 group-hover:scale-[1.03]">
								<div className="relative flex items-center justify-center">
									{/* Inner Icon Glow */}
									<div className="absolute inset-0 bg-white/50 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-full" />

									<svg
										width="16"
										height="16"
										viewBox="0 0 512 512"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										className="relative z-10 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-white"
									>
										<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
									</svg>
								</div>
								<span className="tracking-wide group-hover:text-white transition-colors duration-500">
									+1 (437) 494-4696
								</span>
							</div>
						</a>
						</ScrollReveal>
					</div>
				</div>
			</div>
		</section>
	);
}
