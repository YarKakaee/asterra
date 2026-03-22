'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedinIn,
	faXTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const FOOTER_LINKS = [
	{
		links: [
			{ label: 'How it works', href: '/#how-it-works' },
			{ label: 'Integrations', href: '/#integrations' },
			{ label: 'Pricing', href: '/pricing' },
			{ label: 'Scalability', href: '/#coordination' },
		],
	},
	{
		links: [
			{ label: 'Contact', href: '/contact' },
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Terms & Conditions', href: '/terms' },
			{ label: 'Client login', href: 'https://dashboard.asterra.ca' },
		],
	},
];

export default function Footer() {
	return (
		<footer className="bg-white">
			{/* Final CTA */}
			<section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28">
				<div className="w-full max-w-6xl mx-auto px-5 sm:px-8 text-center">
					<h2
						className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-black leading-[1.1] mb-5"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							letterSpacing: '-0.03em',
						}}
					>
						Ready to stop missing calls?
					</h2>
					<p
						className="text-[#6B7280] text-sm sm:text-[15px] md:text-[16px] max-w-[400px] mx-auto mb-8"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							fontWeight: 400,
							lineHeight: 1.6,
						}}
					>
						Up and running in days. No disruption to how you already
						operate.
					</p>

					<div className="flex items-center justify-center gap-3">
						{/* Book a call — dark with fancy hover */}
						<a
							href="/contact"
							className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-[14px] font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.02] overflow-hidden"
							style={{
								background: '#0a0a0a',
								border: '1px solid rgba(255,255,255,0.1)',
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
							}}
						>
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent" />
							</div>
							<div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[800ms] ease-out group-hover:translate-x-[150%] pointer-events-none" />
							<span className="relative z-10 text-white tracking-wide">
								Book a call
							</span>
						</a>

						{/* See pricing — outlined */}
						<a
							href="/pricing"
							className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-[14px] font-semibold border border-[#D1D5DB] text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
							}}
						>
							See pricing
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<div className="w-full max-w-7xl mx-auto px-5 sm:px-8 pt-14 sm:pt-16 pb-6">
				{/* Top row */}
				<div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-8 mb-12">
					{/* Logo + tagline */}
					<div className="flex flex-col gap-3">
						<Link
							href="/"
							className="flex items-center gap-2 w-fit"
						>
							<Image
								src="/navlogo.png"
								alt="Asterra"
								width={130}
								height={32}
								className="h-7 w-auto"
								draggable={false}
							/>
						</Link>
						<p
							className="text-[13px] text-[#6B7280]"
							style={{
								fontFamily:
									'var(--font-inter), system-ui, sans-serif',
								fontWeight: 400,
							}}
						>
							AI phone handling that answers calls, places orders, and books reservations.
						</p>
					</div>

					{/* Link columns */}
					<div className="flex gap-16 sm:gap-20">
						{FOOTER_LINKS.map((col, i) => (
							<div key={i} className="flex flex-col gap-3">
								{col.links.map((link) =>
									link.href.startsWith('http') ? (
										<a
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[13px] sm:text-[14px] text-[#6B7280] hover:text-black transition-colors duration-300"
											style={{
												fontFamily:
													'var(--font-inter), system-ui, sans-serif',
												fontWeight: 400,
											}}
										>
											{link.label}
										</a>
									) : (
										<Link
											key={link.label}
											href={link.href}
											className="text-[13px] sm:text-[14px] text-[#6B7280] hover:text-black transition-colors duration-300"
											style={{
												fontFamily:
													'var(--font-inter), system-ui, sans-serif',
												fontWeight: 400,
											}}
										>
											{link.label}
										</Link>
									),
								)}
							</div>
						))}
					</div>
				</div>

				{/* Divider */}
				<div className="h-px bg-black/10 mb-6" />

				{/* Bottom row */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<p
						className="text-[12px] sm:text-[13px] text-[#6B7280]"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							fontWeight: 400,
						}}
					>
						&copy; {new Date().getFullYear()} Asterra&trade; is a
						brand of Asterra Solutions Inc. All rights reserved.
					</p>

					<div className="flex items-center gap-4">
						<a
							href="mailto:contact@asterra.ca"
							className="text-[#6B7280] hover:text-black transition-colors duration-300"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="w-4 h-4"
							/>
						</a>
						<a
							href="https://linkedin.com/company/teamasterra/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#6B7280] hover:text-black transition-colors duration-300"
						>
							<FontAwesomeIcon
								icon={faLinkedinIn}
								className="w-4 h-4"
							/>
						</a>
						<a
							href="https://x.com/AsterraTeam"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#6B7280] hover:text-black transition-colors duration-300"
						>
							<FontAwesomeIcon
								icon={faXTwitter}
								className="w-4 h-4"
							/>
						</a>
						<a
							href="https://instagram.com/asterra.ai"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#6B7280] hover:text-black transition-colors duration-300"
						>
							<FontAwesomeIcon
								icon={faInstagram}
								className="w-4 h-4"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
