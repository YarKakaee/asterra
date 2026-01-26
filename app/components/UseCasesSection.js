'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const UseCasesSection = () => {
	const useCases = useMemo(
		() => [
			{
				title: 'Restaurants & QSR',
				description:
					'Handles calls during rush hours — orders, reservations, and common questions — without pulling staff away from the line.',
				imageSrc: '/usecases/restaurant.png',
			},
			{
				title: 'Barbershops & Salons',
				description:
					'Books appointments, confirms availability, and answers service questions automatically throughout the day.',
				imageSrc: '/usecases/barber.png',
			},
			{
				title: 'Franchise Locations',
				description:
					'Keeps call handling and online presence consistent across locations, while adapting to each store.',
				imageSrc: '/usecases/franchises.png',
			},
			{
				title: 'Service Businesses',
				description:
					"Captures inbound calls, qualifies requests, and follows up so leads don't fall through.",
				imageSrc: '/usecases/services.png',
			},
			{
				title: 'Retail & Local Shops',
				description:
					'Answers product questions, hours, and availability while keeping listings accurate everywhere customers look.',
				imageSrc: '/usecases/retail.png',
			},
		],
		[],
	);

	const [activeIndex, setActiveIndex] = useState(0);
	const [isClient, setIsClient] = useState(false);
	const [enableTransitions, setEnableTransitions] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const id = window.requestAnimationFrame(() =>
			setEnableTransitions(true),
		);
		return () => window.cancelAnimationFrame(id);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		const id = window.setTimeout(() => {
			setActiveIndex((i) => (i + 1) % useCases.length);
		}, 3600);

		return () => window.clearTimeout(id);
	}, [activeIndex, isClient, useCases.length]);

	return (
		<section
			id="use-cases"
			className="relative py-20 lg:py-32 overflow-hidden scroll-mt-28 sm:scroll-mt-32"
		>
			{/* Subtle square grid background (light, neutral) */}
			<div className="absolute inset-0 bg-white" />
			<div
				className="absolute inset-0 opacity-30"
				style={{
					backgroundImage:
						'linear-gradient(to right, rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.055) 1px, transparent 1px)',
					backgroundSize: '46px 46px',
					backgroundPosition: '0 0',
				}}
			/>
			<div
				className="absolute inset-0"
				style={{
					background:
						'radial-gradient(1200px 600px at 50% 0%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 55%)',
				}}
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-12 lg:mb-16">
					<h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#1d1d1f] leading-tight">
						Built for the way your business actually runs.
					</h2>
					<p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
						One system for calls. One system for visibility. Applied
						where it matters.
					</p>
				</div>

				{/* Use Cases Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
					{useCases.map((useCase, index) => {
						const isFourth = index === 3;
						const isFifth = index === 4;
						const isActive = index === activeIndex;

						return (
							<div
								key={index}
								className={`relative isolate overflow-hidden rounded-2xl p-6 sm:p-7 transform-gpu transition-[transform,box-shadow,background-color,border-color] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
									isFourth
										? 'lg:col-start-2'
										: isFifth
											? 'lg:col-start-4'
											: ''
								} md:col-span-1 lg:col-span-2 border ${
									isActive
										? 'scale-[1.02] border-white/15 bg-transparent hover:-translate-y-0'
										: 'border-black/[0.04] bg-white/70'
								}`}
								style={{
									willChange: 'transform, box-shadow',
									boxShadow: isActive
										? `
										0 26px 85px rgba(15, 23, 42, 0.38),
										0 8px 24px rgba(15, 23, 42, 0.22),
										0 0 0 1px rgba(255, 255, 255, 0.10),
										0 0 64px rgba(255, 255, 255, 0.10)
									`
										: `
										0 10px 30px rgba(15, 23, 42, 0.06)
									`,
								}}
							>
								{/* Subtle halo ring (active only) */}
								<div
									className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
										isActive ? 'opacity-100' : 'opacity-0'
									}`}
									style={{
										boxShadow:
											'inset 0 0 0 1px rgba(255, 255, 255, 0.12)',
										background:
											'radial-gradient(800px 320px at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)',
									}}
									aria-hidden="true"
								/>

								{/* Soft glow (active only) */}
								<div
									className={`pointer-events-none absolute -inset-12 opacity-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
										isActive ? 'opacity-100' : 'opacity-0'
									}`}
									style={{
										background:
											'radial-gradient(700px 260px at 50% 15%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 38%, rgba(255,255,255,0) 72%)',
										filter: 'blur(22px)',
									}}
									aria-hidden="true"
								/>

								{/* Cinematic background image (active only) */}
								<div
									className={`absolute inset-0 ${
										enableTransitions
											? 'transition-opacity duration-1000'
											: 'transition-none'
									} ${
										isActive ? 'opacity-100' : 'opacity-0'
									}`}
									style={{
										transitionTimingFunction:
											'cubic-bezier(0.16, 1, 0.3, 1)',
									}}
									aria-hidden="true"
								>
									{/* Base cinematic wash so the first render feels immediate */}
									<div
										className="absolute inset-0"
										style={{
											background:
												'linear-gradient(180deg, rgba(12,14,18,0.75) 0%, rgba(0,0,0,0.88) 100%)',
										}}
									/>
									<Image
										src={useCase.imageSrc}
										alt=""
										fill
										sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
										className="object-cover"
										style={{
											filter: 'brightness(0.55) saturate(0.95) contrast(1.05)',
										}}
										loading="eager"
										priority={index === 0}
										fetchPriority={
											index === 0 ? 'high' : 'auto'
										}
									/>
									{/* Darken + unify */}
									<div
										className="absolute inset-0"
										style={{
											background:
												'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.62) 100%)',
										}}
									/>
								</div>

								<div className="relative">
									<h3
										className={`text-lg sm:text-xl font-semibold leading-tight transition-colors duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
											isActive
												? 'text-white'
												: 'text-[#1d1d1f]'
										}`}
									>
										{useCase.title}
									</h3>
									<p
										className={`mt-3 text-[15px] leading-relaxed transition-colors duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
											isActive
												? 'text-white/75'
												: 'text-gray-600'
										}`}
									>
										{useCase.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* Bottom line + subtle CTA */}
				<div className="mt-14 sm:mt-16 text-center">
					<div className="mt-5">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center px-6 py-4 rounded-2xl font-medium bg-white/80 border border-gray-200 text-[#151719] shadow-sm hover:shadow-md transition-shadow duration-200"
						>
							See how it works <span className="ml-2">→</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UseCasesSection;
