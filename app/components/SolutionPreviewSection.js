'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

const SolutionPreviewSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });
	const [selectedCard, setSelectedCard] = useState(null);
	const [hoveredButton, setHoveredButton] = useState(null);

	const solutionCards = [
		{
			id: 'phone-handling',
			label: 'PHONE HANDLING',
			valueLine: 'Every call answered. Every time.',
			supportingLine:
				'So your team stays focused on the work that matters.',
			capabilities: [
				'Available 24/7, without staffing overhead',
				'Bookings, questions, and follow-ups handled automatically',
				'No missed calls. No dropped opportunities.',
			],
			href: '/solutions/phone-handling',
		},
		{
			id: 'online-presence',
			label: 'ONLINE PRESENCE',
			valueLine: 'Clear. Consistent. Working for you.',
			supportingLine:
				'So customers trust you before they ever reach out.',
			capabilities: [
				'Professional websites and landing pages',
				'Search visibility across Google and maps',
				'Trust built across every channel',
			],
			href: '/solutions/online-presence',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.2,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: 'easeOut',
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 60, rotateX: -15 },
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<section
			ref={ref}
			className="relative py-20 lg:py-36 overflow-hidden bg-[#030303]"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="text-center mb-16"
				>
					{/* Main Headline */}
					<motion.h2
						variants={headerVariants}
						className="text-xl sm:text-5xl font-bold text-white mb-5 leading-tight"
					>
						Two simple systems.{' '}
						<span className="text-white font-semibold">
							Unlimited results.
						</span>
					</motion.h2>

					<motion.p
						variants={headerVariants}
						className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
					>
						Together, they turn everyday friction into predictable
						growth.
					</motion.p>
				</motion.div>

				{/* Solution Sections - Vertical Split Layout */}
				<div className="space-y-24 mb-16">
					{solutionCards.map((card, index) => {
						const isPhoneHandling = card.id === 'phone-handling';

						return (
							<div key={card.id}>
								{/* Mobile: Label first (outside grid) */}
								{card.label && (
									<motion.div
										variants={cardVariants}
										initial="hidden"
										animate={
											isInView ? 'visible' : 'hidden'
										}
										className="mb-6 lg:hidden"
									>
										<p className="text-xs font-medium text-white/40 tracking-[0.15em] uppercase">
											{card.label}
										</p>
									</motion.div>
								)}

								<motion.div
									variants={cardVariants}
									initial="hidden"
									animate={isInView ? 'visible' : 'hidden'}
									className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
								>
									{/* Left Side - Text Content (Mobile: order-3, Desktop: first/left) */}
									<div className="text-left order-3 lg:order-none">
										{/* Small System Label - Desktop only */}
										{card.label && (
											<div className="hidden lg:block mb-8">
												<p className="text-xs font-medium text-white/40 tracking-[0.15em] uppercase">
													{card.label}
												</p>
											</div>
										)}

										{/* Icon and Title (for online presence) */}
										{card.icon && card.title && (
											<div className="flex items-center gap-3 mb-6">
												<div className="text-3xl">
													{card.icon}
												</div>
												<h3 className="text-3xl sm:text-4xl font-bold text-white">
													{card.title}
												</h3>
											</div>
										)}

										{/* Main Promise - Most breathing room */}
										<p className="text-2xl sm:text-3xl font-semibold text-white mb-8 leading-tight">
											{card.valueLine}
										</p>

										{/* Grounding Sentence - Extra space after promise (slightly more for online presence) */}
										<p
											className={`text-base text-white/70 leading-relaxed ${
												card.id === 'online-presence'
													? 'mb-9'
													: 'mb-8'
											}`}
										>
											{card.supportingLine}
										</p>

										{/* Capability Lines - Closer together, no bullets (lighter for online presence) */}
										{card.capabilities && (
											<div className="space-y-3 mb-8">
												{card.capabilities.map(
													(capability, capIndex) => (
														<p
															key={capIndex}
															className={`text-sm leading-relaxed ${
																card.id ===
																'online-presence'
																	? 'text-white/50'
																	: 'text-white/60'
															}`}
														>
															{capability}
														</p>
													),
												)}
											</div>
										)}

										{/* Bullets (for online presence) */}
										{card.bullets && (
											<ul className="space-y-2 mb-6">
												{card.bullets.map(
													(bullet, bulletIndex) => (
														<li
															key={bulletIndex}
															className="text-sm text-white/60 leading-relaxed"
														>
															{bullet}
														</li>
													),
												)}
											</ul>
										)}

										{/* Glassmorphism Button */}
										<Link
											href={card.href}
											className="group inline-block"
										>
											<motion.div
												onHoverStart={() =>
													setHoveredButton(card.id)
												}
												onHoverEnd={() =>
													setHoveredButton(null)
												}
												whileHover={{
													scale: 1.02,
													boxShadow:
														card.id ===
														'online-presence'
															? `
													0 8px 24px rgba(176, 48, 96, 0.25),
													0 2px 8px rgba(0, 0, 0, 0.15),
													inset 0 1px 0 rgba(220, 20, 60, 0.4),
													inset 0 0 16px rgba(178, 34, 34, 0.15)
												`
															: `
													0 8px 24px rgba(59, 130, 246, 0.25),
													0 2px 8px rgba(0, 0, 0, 0.15),
													inset 0 1px 0 rgba(191, 219, 254, 0.4),
													inset 0 0 16px rgba(96, 165, 250, 0.15)
												`,
												}}
												whileTap={{ scale: 0.98 }}
												transition={{
													type: 'spring',
													stiffness: 300,
													damping: 20,
												}}
												className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl"
												style={{
													background:
														card.id ===
														'online-presence'
															? 'linear-gradient(135deg, rgba(220, 20, 60, 0.15) 0%, rgba(176, 48, 96, 0.1) 50%, rgba(128, 0, 0, 0.15) 100%)'
															: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(37, 99, 235, 0.15) 100%)',
													backdropFilter:
														'blur(16px) saturate(180%)',
													border:
														card.id ===
														'online-presence'
															? '1px solid rgba(220, 20, 60, 0.25)'
															: '1px solid rgba(147, 197, 253, 0.25)',
													borderTop:
														card.id ===
														'online-presence'
															? '1px solid rgba(255, 105, 180, 0.35)'
															: '1px solid rgba(191, 219, 254, 0.35)',
													borderBottom:
														card.id ===
														'online-presence'
															? '1px solid rgba(178, 34, 34, 0.15)'
															: '1px solid rgba(96, 165, 250, 0.15)',
													boxShadow:
														card.id ===
														'online-presence'
															? `
													0 4px 20px rgba(176, 48, 96, 0.12),
													0 1px 4px rgba(0, 0, 0, 0.08),
													inset 0 1px 0 rgba(255, 105, 180, 0.25),
													inset 0 0 12px rgba(220, 20, 60, 0.08)
												`
															: `
													0 4px 20px rgba(59, 130, 246, 0.12),
													0 1px 4px rgba(0, 0, 0, 0.08),
													inset 0 1px 0 rgba(191, 219, 254, 0.25),
													inset 0 0 12px rgba(96, 165, 250, 0.08)
												`,
												}}
											>
												<span className="text-sm font-medium text-white">
													How it works
												</span>
												<motion.svg
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="white"
													strokeWidth="2.5"
													strokeLinecap="round"
													strokeLinejoin="round"
													animate={{
														x:
															hoveredButton ===
															card.id
																? 4
																: 0,
													}}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 30,
													}}
												>
													<path d="M5 12h14M12 5l7 7-7 7" />
												</motion.svg>
											</motion.div>
										</Link>
									</div>

									{/* Right Side - Video/Media (Mobile: order-2, Desktop: second/right) */}
									<div className="relative order-2 lg:order-none">
										{isPhoneHandling ? (
											<motion.div
												initial={{
													opacity: 0,
													scale: 0.95,
												}}
												animate={
													isInView
														? {
																opacity: 1,
																scale: 1,
															}
														: {
																opacity: 0,
																scale: 0.95,
															}
												}
												transition={{
													delay: 0.3,
													duration: 0.6,
												}}
												className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900/50 backdrop-blur-sm"
												style={{
													boxShadow:
														'0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
												}}
											>
												<video
													autoPlay
													loop
													muted
													playsInline
													className="w-full h-auto block"
												>
													<source
														src="/phonevideo.mp4"
														type="video/mp4"
													/>
												</video>
											</motion.div>
										) : (
											<motion.div
												initial={{
													opacity: 0,
													scale: 0.95,
												}}
												animate={
													isInView
														? {
																opacity: 1,
																scale: 1,
															}
														: {
																opacity: 0,
																scale: 0.95,
															}
												}
												transition={{
													delay: 0.3,
													duration: 0.6,
												}}
												className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900/50 backdrop-blur-sm"
												style={{
													boxShadow:
														'0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
												}}
											>
												<video
													autoPlay
													loop
													muted
													playsInline
													className="w-full h-auto block"
												>
													<source
														src="/onlinevideo.mp4"
														type="video/mp4"
													/>
												</video>
											</motion.div>
										)}
									</div>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default SolutionPreviewSection;
