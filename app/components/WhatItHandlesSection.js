'use client';

import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';
import Image from 'next/image';

function titleFromFilename(filename) {
	const base = filename.replace(/\.[^/.]+$/, '');
	return base
		.replace(/[-_]+/g, ' ')
		.replace(/\b\w/g, (m) => m.toUpperCase());
}

const LogoMarquee = ({ logos, direction = 'left', ariaLabel }) => {
	const items = useMemo(() => [...logos, ...logos], [logos]);
	const trackClass =
		direction === 'right'
			? 'animate-logo-marquee-reverse'
			: 'animate-logo-marquee';

	return (
		<div className="relative mx-auto max-w-6xl px-2 sm:px-4" aria-label={ariaLabel}>
			{/* Edge fade via mask (no blur / no hard blocks) */}
			<div
				className="overflow-hidden py-3"
				style={{
					WebkitMaskImage:
						'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
					maskImage:
						'linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)',
					WebkitMaskRepeat: 'no-repeat',
					maskRepeat: 'no-repeat',
					WebkitMaskSize: '100% 100%',
					maskSize: '100% 100%',
				}}
			>
				<div
					className={`flex items-center gap-14 sm:gap-16 w-max ${trackClass} hover:[animation-play-state:paused]`}
					style={{
						'--marquee-duration': '70s',
					}}
				>
					{items.map((logo, idx) => (
						<div
							key={`${logo.src}-${idx}`}
							className="flex items-center justify-center"
						>
							<Image
								src={logo.src}
								alt={logo.alt}
								width={150}
								height={60}
								className="h-9 sm:h-10 w-auto select-none"
								draggable={false}
								style={{
									filter:
										'grayscale(0.25) saturate(0.9) contrast(1.03) opacity(0.9)',
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const WhatItHandlesSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-120px' });

	const crmLogos = useMemo(
		() => [
			'/crm/booksy.png',
			'/crm/fresha.png',
			'/crm/glossgenius.png',
			'/crm/mangomint.png',
			'/crm/mindbody.png',
			'/crm/setmore.png',
			'/crm/vagaro.png',
		].map((src) => ({ src, alt: titleFromFilename(src.split('/').pop()) })),
		[],
	);

	const posLogos = useMemo(
		() => [
			'/pos/clover.png',
			'/pos/lightspeed.png',
			'/pos/micros.png',
			'/pos/square.png',
			'/pos/toast.png',
			'/pos/touchbistro.png',
		].map((src) => ({ src, alt: titleFromFilename(src.split('/').pop()) })),
		[],
	);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.7,
				staggerChildren: 0.12,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 18 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.55, ease: 'easeOut' },
		},
	};

	return (
		<section ref={ref} className="relative bg-white py-16 sm:py-20 lg:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="relative"
				>
					{/* Headline */}
					<motion.h2
						variants={itemVariants}
						className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#1d1d1f] text-center leading-tight"
					>
						What happens when someone calls
					</motion.h2>

					{/* Subline */}
					<motion.p
						variants={itemVariants}
						className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto mt-5 leading-relaxed"
					>
						From the first ring to the final action — handled
						automatically.
					</motion.p>

					{/* Capability blocks */}
					<motion.div
						variants={itemVariants}
						className="mt-12 sm:mt-14"
					>
						<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-stretch">
							{/* Left: lighter */}
							<div className="rounded-2xl border border-gray-200/50 bg-white p-7 sm:p-8">
								<p className="text-base font-semibold text-[#1d1d1f]">
									What callers ask
								</p>
								<ul className="mt-5 space-y-4">
									<li className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
										<p className="text-sm text-gray-600 leading-relaxed">
											Hours, location, and common questions
										</p>
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
										<p className="text-sm text-gray-600 leading-relaxed">
											Menu or service details
										</p>
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
										<p className="text-sm text-gray-600 leading-relaxed">
											Appointments, reservations, or orders
										</p>
									</li>
								</ul>
							</div>

							{/* Divider / flow cue */}
							<div className="hidden lg:flex items-center justify-center px-2">
								<div className="flex items-center gap-3">
									<div className="h-px w-10 bg-gray-200" />
									<div className="h-9 w-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400">
										<span className="text-base leading-none">
											→
										</span>
									</div>
									<div className="h-px w-10 bg-gray-200" />
								</div>
							</div>

							{/* Right: grounded */}
							<div className="rounded-2xl border border-gray-200/50 bg-[#F9F4F2] p-7 sm:p-8">
								<p className="text-base font-semibold text-[#1d1d1f]">
									What happens next
								</p>
								<ul className="mt-5 space-y-4">
									<li className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
										<p className="text-sm text-gray-700 leading-relaxed">
											Bookings and reservations are created in your
											scheduling system
										</p>
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
										<p className="text-sm text-gray-700 leading-relaxed">
											Orders are sent directly to your POS
										</p>
									</li>
									<li className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
										<p className="text-sm text-gray-700 leading-relaxed">
											Nothing new for your staff to learn
										</p>
									</li>
								</ul>

								<p className="mt-6 text-sm text-gray-500 leading-relaxed">
									Everything stays in the tools your team already
									uses.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Integrations */}
					<motion.div variants={itemVariants} className="mt-10 sm:mt-12">
						<p className="text-sm text-gray-500 font-medium text-center">
							Works with the tools you already use
						</p>

						<div className="mt-6 space-y-7">
							<LogoMarquee
								logos={crmLogos}
								direction="right"
								ariaLabel="CRM and booking platform integrations"
							/>

							<LogoMarquee
								logos={posLogos}
								direction="left"
								ariaLabel="POS and ordering system integrations"
							/>
						</div>

						<p className="text-sm sm:text-base text-gray-600 text-center max-w-3xl mx-auto mt-10 leading-relaxed">
							No workflow changes required. The phone line fits into
							how you already operate.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default WhatItHandlesSection;

