'use client';

import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';
import Image from 'next/image';

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
					className="flex items-center gap-14 sm:gap-20 w-max animate-marquee hover:[animation-play-state:paused]"
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

const IntegrationsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });

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
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section ref={ref} className="relative bg-white overflow-hidden" style={{ padding: 'var(--section-gap-sm) 0' }}>
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
				<motion.div
					variants={container}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Header */}
					<motion.div variants={item} className="text-center mb-12 sm:mb-16">
						<span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--terracotta)] mb-6">
							<span className="w-8 h-[1.5px] bg-[var(--terracotta)] rounded-full" />
							Integrations
						</span>
						<h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1] tracking-[-0.03em] text-[var(--text)]">
							Works with the systems{' '}
							<span className="font-serif italic text-[var(--text-muted)]">you already use.</span>
						</h2>
					</motion.div>

					{/* Logo marquee in glass container */}
					<motion.div variants={item}>
						<div className="glass-card rounded-[var(--r-lg)] py-8 sm:py-10 px-4">
							<LogoMarquee
								logos={posLogos}
								ariaLabel="POS and restaurant platform integrations"
							/>
						</div>
					</motion.div>

					{/* Subline */}
					<motion.p
						variants={item}
						className="text-center font-body text-sm sm:text-base text-[var(--text-muted)] mt-8 sm:mt-10 max-w-xl mx-auto leading-relaxed"
					>
						No workflow changes. No new hardware. Orders land where they already go.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};

export default IntegrationsSection;
