'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OnlinePresencePage() {
	return (
		<>
			<Navbar />

			<main>
				<section className="relative pt-32 pb-12 sm:pt-48 sm:pb-0 overflow-hidden">
					{/* Subtle off-white texture background (matching Phone Handling) */}
					<div
						className="absolute inset-0"
						style={{
							background: '#F9F4F2',
						}}
					>
						{/* Soft dot texture */}
						<div
							className="absolute inset-0 opacity-35"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.14) 1.4px, transparent 0)',
								backgroundSize: '22px 22px',
								backgroundPosition: '0 0',
							}}
						/>
						{/* Secondary finer dot layer */}
						<div
							className="absolute inset-0 opacity-18"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 0.9px, transparent 0)',
								backgroundSize: '11px 11px',
								backgroundPosition: '6px 6px',
							}}
						/>
						{/* Gentle “paper” blobs */}
						<div
							className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
							style={{
								background: 'rgba(21, 23, 25, 0.05)',
							}}
						/>
						<div
							className="absolute -bottom-28 -right-28 h-[28rem] w-[28rem] rounded-full blur-3xl"
							style={{
								background: 'rgba(21, 23, 25, 0.035)',
							}}
						/>
						{/* Gentle gradient wash */}
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.78) 100%)',
							}}
						/>
					</div>

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						<div className="text-center">
							<p className="text-xs sm:text-sm text-gray-500 tracking-[0.2em] uppercase font-medium">
								ONLINE PRESENCE
							</p>

							<h1 className="mt-4 text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1d1d1f] leading-tight">
								Trust is built before the call.
							</h1>

							<p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed font-light">
								Accurate information, clean pages, and
								consistent visibility — kept in sync across the
								platforms that matter.
							</p>

							<div className="mt-8 sm:mt-10 flex flex-col items-center gap-3">
								<motion.div
									className="inline-block"
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									<Link
										href="/contact"
										className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 bg-[#151719] text-white text-base sm:text-lg font-semibold rounded-3xl shadow-lg transition-shadow duration-200 hover:shadow-xl"
									>
										See how it works
									</Link>
								</motion.div>
								<p className="text-xs text-gray-400">
									No new tools. No extra work.
								</p>
							</div>

							<div className="mt-14 -mb-18">
								<div className="mx-auto max-w-6xl relative">
									{/* Soft drop shadow under the frame */}
									<div
										className="pointer-events-none absolute left-1/2 -bottom-3 -translate-x-1/2 w-[96%] h-14 blur-3xl rounded-full"
										style={{
											background:
												'rgba(15, 23, 42, 0.30)',
										}}
									/>
									<div
										className="pointer-events-none absolute left-1/2 -bottom-1 -translate-x-1/2 w-[78%] h-9 blur-2xl rounded-full"
										style={{
											background:
												'rgba(15, 23, 42, 0.22)',
										}}
									/>
									{/* Gentle top ambient shadow (helps the lift read "up" too) */}
									<div
										className="pointer-events-none absolute left-1/2 -top-4 -translate-x-1/2 w-[86%] h-10 blur-3xl rounded-full"
										style={{
											background:
												'rgba(15, 23, 42, 0.12)',
										}}
									/>
									<Image
										src="/heroimage1.png"
										alt="Example online presence for a local studio"
										width={1600}
										height={900}
										priority
										className="w-full h-auto rounded-3xl border border-white/30"
										style={{
											boxShadow:
												'0 -18px 60px rgba(15, 23, 42, 0.10), 0 56px 160px rgba(15, 23, 42, 0.26), 0 22px 70px rgba(15, 23, 42, 0.16), 0 8px 22px rgba(15, 23, 42, 0.10), 0 1px 0 rgba(255,255,255,0.35) inset',
											transform: 'translateZ(0)',
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* What we keep working on */}
				<section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-white">
					{/* Light grid texture (quiet, documentation-like) */}
					<div className="absolute inset-0 opacity-28">
						<div
							className="absolute inset-0"
							style={{
								backgroundImage:
									'linear-gradient(to right, rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.055) 1px, transparent 1px)',
								backgroundSize: '46px 46px',
								backgroundPosition: '0 0',
							}}
						/>
					</div>
					<div
						className="absolute inset-0"
						style={{
							background:
								'radial-gradient(1200px 600px at 50% 0%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 55%)',
						}}
					/>

					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						<div className="text-center">
							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] leading-tight">
								Your business, presented clearly everywhere.
							</h2>
							<p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
								We keep your information accurate, your pages
								clean, and your visibility consistent — across
								the platforms customers actually use.
							</p>
						</div>

						<div className="mt-12 sm:mt-14">
							<div
								className="grid grid-cols-1 lg:grid-cols-3 rounded-3xl overflow-hidden bg-white/70 border border-black/[0.04]"
								style={{
									boxShadow:
										'0 14px 50px rgba(15, 23, 42, 0.06)',
								}}
							>
								{/* Visibility */}
								<div className="p-8 sm:p-10 lg:p-12 border-b border-black/[0.05] lg:border-b-0 lg:border-r">
									<p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-medium">
										VISIBILITY
									</p>
									<h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1d1d1f] leading-tight">
										Easy to find
									</h3>
									<p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
										Your business shows up correctly across
										search, maps, and local listings.
									</p>
									<div className="mt-6 space-y-2">
										<p className="text-sm text-gray-500">
											Google Search &amp; Maps
										</p>
										<p className="text-sm text-gray-500">
											Local listings
										</p>
										<p className="text-sm text-gray-500">
											Shareable links
										</p>
									</div>
								</div>

								{/* Accuracy */}
								<div className="p-8 sm:p-10 lg:p-12 border-b border-black/[0.05] lg:border-b-0 lg:border-r">
									<p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-medium">
										ACCURACY
									</p>
									<h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1d1d1f] leading-tight">
										Always up to date
									</h3>
									<p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
										Hours, services, locations, and details
										stay in sync — without manual updates.
									</p>
									<div className="mt-6 space-y-2">
										<p className="text-sm text-gray-500">
											Hours &amp; availability
										</p>
										<p className="text-sm text-gray-500">
											Services / menus
										</p>
										<p className="text-sm text-gray-500">
											Contact details
										</p>
									</div>
								</div>

								{/* Trust */}
								<div className="p-8 sm:p-10 lg:p-12">
									<p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-medium">
										TRUST
									</p>
									<h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1d1d1f] leading-tight">
										Built before the first click
									</h3>
									<p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
										Clean pages, clear messaging, and strong
										signals that build confidence instantly.
									</p>
									<div className="mt-6 space-y-2">
										<p className="text-sm text-gray-500">
											Reviews &amp; ratings
										</p>
										<p className="text-sm text-gray-500">
											Booking-ready pages
										</p>
										<p className="text-sm text-gray-500">
											Professional websites
										</p>
									</div>
								</div>
							</div>

							<p className="mt-12 text-sm sm:text-base text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
								Everything stays clear, consistent, and working
								— even when you&apos;re not.
							</p>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
