'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import OrderCard from './OrderCard';
import BorderGlow from './BorderGlow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
	const [stage, setStage] = useState(0);
	const [isKilled, setIsKilled] = useState(false);
	const sectionRef = useRef(null);
	const phoneRef = useRef(null);

	useEffect(() => {
		const t1 = setTimeout(() => setStage(1), 100);
		const t2 = setTimeout(() => setStage(2), 300);
		const t3 = setTimeout(() => setStage(3), 700);
		const t4 = setTimeout(() => setStage(4), 900);
		return () => [t1, t2, t3, t4].forEach(clearTimeout);
	}, []);

	useEffect(() => {
		if (stage < 4 || !phoneRef.current || !sectionRef.current) return;

		// No scroll animation on mobile
		if (window.innerWidth < 1024) {
			setIsKilled(true);
			window.dispatchEvent(new Event('heroAnimationKilled'));
			return;
		}

		let ctx;
		let animationKilled = false;

		const timer = setTimeout(() => {
			if (animationKilled) return;
			const phone = phoneRef.current;
			if (!phone) return;

			// Kill CSS transition so it doesn't fight GSAP
			phone.style.transition = 'none';

			const vw = window.innerWidth;
			const vh = window.innerHeight;

			// End position: perfectly centered inside the destination layout spacer
			const rect = phone.getBoundingClientRect();
			const phoneWidth = rect.width;
			const phoneHeight = rect.height;

			let endX, endY;
			const dest = document.getElementById('phone-destination');
			const section = document.getElementById('call-now-section');

			if (dest && section && dest.getBoundingClientRect().width > 0) {
				const destRect = dest.getBoundingClientRect();
				const sectionRect = section.getBoundingClientRect();

				// Nudge slightly to the left (-48px) for perfect visual balance with the 3D perspective
				endX = destRect.left + destRect.width / 2 - phoneWidth / 2 - 48;

				// Calculate dynamic top by getting the element's position relative to its section
				const finalDestTop = destRect.top - sectionRect.top;
				endY =
					finalDestTop + destRect.height / 2 - phoneHeight / 2 - 125;
			} else {
				// Fallback layout when elements are unavailable
				const maxW = Math.min(1280, vw);
				const contentLeft = (vw - maxW) / 2;
				endX = contentLeft + maxW * 0.06;
				endY = (vh - phoneHeight) / 2;
			}

			// Track the start position (measured when trigger activates)
			let startX, startY, startW;

			ctx = gsap.context(() => {
				ScrollTrigger.create({
					trigger: sectionRef.current,
					start: 'bottom 80%',
					end: 'bottom -20%',
					scrub: 2,
					onEnter: () => {
						// Snapshot current viewport position and switch to fixed
						const rect = phone.getBoundingClientRect();
						startX = rect.left;
						startY = rect.top;
						startW = rect.width;
						phone.style.position = 'fixed';
						phone.style.left = startX + 'px';
						phone.style.top = startY + 'px';
						phone.style.width = startW + 'px';
						phone.style.bottom = 'auto';
						phone.style.right = 'auto';
						phone.style.zIndex = '50';
					},
					onLeave: () => {
						// Animation complete: hide animated phone and instantly show static
						const staticPhone = document.getElementById('static-phone');
						if (staticPhone) staticPhone.style.opacity = '1';
						phone.style.display = 'none';
					},
					onEnterBack: () => {
						// Scrolling back up: show animated phone, hide static
						if (startX === undefined) return;
						phone.style.display = '';
						const staticPhone = document.getElementById('static-phone');
						if (staticPhone) staticPhone.style.opacity = '0';
						phone.style.position = 'fixed';
						phone.style.left = startX + 'px';
						phone.style.top = startY + 'px';
						phone.style.width = startW + 'px';
						phone.style.zIndex = '50';
					},
					onLeaveBack: () => {
						// Fully exited backward — restore to hero layout
						phone.style.position = '';
						phone.style.left = '';
						phone.style.top = '';
						phone.style.width = '';
						phone.style.bottom = '';
						phone.style.right = '';
						phone.style.zIndex = '';
						phone.style.transform = '';
						phone.style.filter =
							'drop-shadow(0 20px 40px rgba(0,0,0,0.25))';
					},
					onUpdate: (self) => {
						if (startX === undefined) return;

						const p = self.progress;
						const ease = gsap.parseEase('power2.inOut');
						const ep = ease(p);

						const dx = (endX - startX) * ep;
						const dy = (endY - startY) * ep;
						const scale = 1 + 0.15 * ep;
						const rotY = 12 * ep;
						const rotX = 3 * ep;
						const rotZ = 0 * ep;

						phone.style.transform = `translate(${dx}px, ${dy}px) scale(${scale}) perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg)`;

						// Shadow expands dynamically as phone "lifts"
						const shadowX = -15 * ep;
						const shadowBlur = 40 + 10 * ep;
						const shadowY = 20 + 30 * ep;
						const shadowOpacity = 0.25 + 0.25 * ep;
						phone.style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity}))`;
					},
				});
			});
		}, 1000);

		const handleResize = () => {
			if (animationKilled) return;
			animationKilled = true;
			setIsKilled(true);
			clearTimeout(timer);
			if (ctx) {
				ctx.revert();
				ctx = null;
			}
			window.dispatchEvent(new Event('heroAnimationKilled'));
		};

		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(timer);
			if (ctx) ctx.revert();
			window.removeEventListener('resize', handleResize);
		};
	}, [stage]);

	return (
		<>
			<section
				ref={sectionRef}
				className="relative min-h-[500px] lg:min-h-screen flex flex-col items-center justify-start pt-44 sm:pt-48 lg:pt-54 pb-16"
			>
				{/* Cloud decorations — lowest layer, below gradient */}
				<div
					className="absolute inset-0 pointer-events-none overflow-hidden"
					style={{ zIndex: 0 }}
				>
					{/* Above heading, drifting right */}
					<img
						src="/cloud.png"
						alt=""
						className="absolute select-none hidden sm:block"
						style={{
							top: '8%',
							right: '5%',
							width: '260px',
							opacity: 0.3,
							transform: 'rotate(6deg) scaleX(-1)',
						}}
						draggable={false}
					/>
					{/* Near description, drifting left */}
					<img
						src="/cloud.png"
						alt=""
						className="absolute select-none"
						style={{
							top: '18%',
							left: '3%',
							width: '220px',
							opacity: 0.25,
							transform: 'rotate(-5deg)',
						}}
						draggable={false}
					/>
					{/* Left of video */}
					<img
						src="/cloud.png"
						alt=""
						className="absolute select-none"
						style={{
							top: '52%',
							left: '1%',
							width: '360px',
							opacity: 0.5,
							transform: 'rotate(-8deg)',
						}}
						draggable={false}
					/>
					{/* Right of video */}
					<img
						src="/cloud.png"
						alt=""
						className="absolute select-none hidden sm:block"
						style={{
							top: '42%',
							right: '0%',
							width: '320px',
							opacity: 0.45,
							transform: 'rotate(10deg) scaleX(-1)',
						}}
						draggable={false}
					/>
					{/* Below video, left-center */}
					<img
						src="/cloud.png"
						alt=""
						className="absolute select-none"
						style={{
							bottom: '4%',
							left: '18%',
							width: '280px',
							opacity: 0.35,
							transform: 'rotate(5deg)',
						}}
						draggable={false}
					/>
					{/* Below video, right-center */}
					<img
						src="/cloud.png"
						alt=""
						className="absolute select-none hidden sm:block"
						style={{
							bottom: '1%',
							right: '12%',
							width: '340px',
							opacity: 0.4,
							transform: 'rotate(-4deg) scaleX(-1)',
						}}
						draggable={false}
					/>
				</div>

				{/* Subtle radial blue gradient background */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						zIndex: 1,
						background: `
							radial-gradient(ellipse 100% 80% at 50% 50%, rgba(147, 197, 253, 0.4) 0%, rgba(191, 219, 254, 0.2) 30%, transparent 60%),
							radial-gradient(ellipse 70% 60% at 50% 55%, rgba(96, 165, 250, 0.2) 0%, transparent 55%),
							radial-gradient(ellipse 50% 40% at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
						`,
					}}
				/>

				{/* Content */}
				<div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8">
					{/* Text block */}
					<div className="text-center mb-10 sm:mb-14">
						<h1
							className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-bold text-black leading-[1.08] mb-5"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
								letterSpacing: '-0.03em',
								opacity: stage >= 1 ? 1 : 0,
								transform:
									stage >= 1
										? 'translateY(0)'
										: 'translateY(20px)',
								transition:
									'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
							}}
						>
							Smarter Phone Handling that
							<br />
							Answers, Books, and Orders
						</h1>

						<p
							className="text-[#6B7280] text-base sm:text-lg max-w-[480px] mx-auto"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
								fontWeight: 400,
								lineHeight: 1.6,
								opacity: stage >= 2 ? 1 : 0,
								transform:
									stage >= 2
										? 'translateY(0)'
										: 'translateY(16px)',
								transition:
									'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
							}}
						>
							A fully trained AI host for your business. Handles
							the whole call, start to finish. No staff involved.
						</p>
					</div>

					{/* Media container */}
					<div className="relative max-w-[960px] mx-auto">
						{/* Glow beneath container */}
						<div className="hero-glow" />

						{/* Glow Wrapper */}
						<BorderGlow
							className="relative rounded-[20px]"
							borderWidth={2}
							borderRadius={20}
						>
							<div
								className="relative rounded-[20px] overflow-hidden bg-gray-900"
								style={{ aspectRatio: '16 / 9.5' }}
							>
								<video
									autoPlay
									loop
									muted
									playsInline
									disablePictureInPicture
									className="absolute inset-0 w-full h-full object-cover pointer-events-none"
								>
									<source
										src="/herovideo.mp4"
										type="video/mp4"
									/>
								</video>
							</div>

							<OrderCard visible={stage >= 3} />
						</BorderGlow>

						{/* Phone PNG */}
						<div
							ref={phoneRef}
							className={`absolute -bottom-14 right-8 sm:-bottom-36 sm:right-4 z-30 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[320px] ${isKilled ? 'hidden' : ''}`}
							style={{
								opacity: stage >= 4 ? 1 : 0,
								transform:
									stage >= 4
										? 'translateY(0)'
										: 'translateY(20px)',
								transition:
									'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
								filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
								transformStyle: 'preserve-3d',
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
				</div>
			</section>

			{/* Spacer — gives the scroll animation room to complete before the next section */}
			<div
				className="hidden lg:block w-full"
				style={{ height: '10vh' }}
			/>
		</>
	);
}
