'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScopeSection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.7,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	return (
		<section
			ref={sectionRef}
			className="py-20 sm:py-28 lg:py-40 relative bg-[#151719] overflow-hidden"
		>
			{/* Subtle background texture */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
					backgroundSize: '20px 20px',
				}}
			/>

			{/* Gradient accents */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5633]/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Title */}
					<motion.h2
						variants={itemVariants}
						className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-16 sm:mb-20 lg:mb-24 text-center leading-tight"
					>
						What we put in place
					</motion.h2>

					{/* Two Columns */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
						{/* Column 1 - Phone Handling */}
						<motion.div
							variants={cardVariants}
							className="relative group"
						>
							{/* Decorative gradient orb */}
							<div className="absolute -top-4 -right-4 w-32 h-32 bg-[#FF5633]/10 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

							<div className="relative h-full p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF5633]/10 overflow-hidden">
								{/* Subtle inner glow */}
								<div className="absolute inset-0 bg-gradient-to-br from-[#FF5633]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Badge with icon area */}
								<div className="mb-8 flex items-center gap-3">
									<div className="w-10 h-10 rounded-xl bg-[#FF5633]/20 backdrop-blur-sm border border-[#FF5633]/30 flex items-center justify-center">
										<svg
											className="w-5 h-5 text-[#FF5633]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
										<span className="text-white/90 text-sm font-medium">
											Phone Handling
										</span>
									</div>
								</div>

								{/* Heading */}
								<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
									We handle incoming calls so your team
									doesn&apos;t have to.
								</h3>

								{/* Description */}
								<div className="space-y-3">
									<p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
										Answering questions, routing requests,
										booking appointments, and making sure
										nothing gets missed.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Column 2 - Online Presence */}
						<motion.div
							variants={cardVariants}
							className="relative group"
						>
							{/* Decorative gradient orb */}
							<div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

							<div className="relative h-full p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
								{/* Subtle inner glow */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Badge with icon area */}
								<div className="mb-8 flex items-center gap-3">
									<div className="w-10 h-10 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
										<svg
											className="w-5 h-5 text-blue-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>
									<div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
										<span className="text-white/90 text-sm font-medium">
											Online Presence
										</span>
									</div>
								</div>

								{/* Heading */}
								<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
									We take care of the systems customers
									interact with before and after they call.
								</h3>

								{/* Description */}
								<div className="space-y-3">
									<p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
										Websites, Google listings, messaging,
										and ads — built to support operations,
										not distract from them.
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ScopeSection;
