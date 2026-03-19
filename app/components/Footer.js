'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const footerLinks = [
		{ name: 'Phone Handling', href: '/phone-handling' },
		{ name: 'For Restaurants', href: '/#restaurants' },
		{ name: 'Multi-Location', href: '/#franchise' },
		{ name: 'Contact', href: '/contact' },
	];

	const socialLinks = [
		{ icon: faEnvelope, href: 'mailto:support@asterra.ca', label: 'Email' },
		{ icon: faLinkedin, href: 'https://www.linkedin.com/company/teamasterra/', label: 'LinkedIn' },
		{ icon: faXTwitter, href: 'https://x.com/AsterraTeam', label: 'X' },
		{ icon: faInstagram, href: 'https://www.instagram.com/asterra.ai/', label: 'Instagram' },
	];

	return (
		<footer
			className="relative overflow-hidden"
			style={{ backgroundColor: 'var(--dark)' }}
		>
			{/* Gradient mesh background */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: [
						'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(200, 67, 43, 0.06) 0%, transparent 70%)',
						'radial-gradient(ellipse 60% 60% at 75% 20%, rgba(180, 140, 100, 0.04) 0%, transparent 70%)',
						'radial-gradient(ellipse 70% 50% at 50% 90%, rgba(200, 180, 150, 0.03) 0%, transparent 70%)',
					].join(', '),
				}}
			/>

			{/* Subtle grain overlay */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.03]"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
					backgroundSize: '200px 200px',
				}}
			/>

			{/* Top accent line */}
			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px]"
				style={{
					background:
						'linear-gradient(90deg, transparent, rgba(200, 67, 43, 0.3), transparent)',
				}}
			/>

			{/* Main footer content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 sm:pt-24 pb-14 sm:pb-16">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10 lg:gap-16">

					{/* Brand column */}
					<div className="md:col-span-5 lg:col-span-4">
						<Image
							src="/footerlogowhite.png"
							alt="Asterra"
							width={355}
							height={215}
							className="h-12 w-auto mb-6"
						/>
						<p
							className="font-serif text-lg sm:text-xl leading-snug max-w-xs mb-4"
							style={{ color: 'var(--text-on-dark-muted)' }}
						>
							Phone handling built for restaurants.
						</p>
						<p
							className="text-[13px] tracking-wide"
							style={{ color: 'rgba(248, 246, 241, 0.3)' }}
						>
							Toronto &middot; GTA &middot; Canada
						</p>
					</div>

					{/* Links column */}
					<div className="md:col-span-3 lg:col-span-3">
						<p
							className="font-display text-[11px] font-semibold tracking-[0.15em] uppercase mb-6"
							style={{ color: 'rgba(248, 246, 241, 0.35)' }}
						>
							Navigate
						</p>
						<ul className="space-y-4">
							{footerLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="font-body text-[15px] transition-colors duration-200"
										style={{ color: 'var(--text-on-dark-muted)' }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = 'var(--text-on-dark)')
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = 'var(--text-on-dark-muted)')
										}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* CTA column */}
					<div className="md:col-span-4 lg:col-span-5">
						<p
							className="font-display text-[11px] font-semibold tracking-[0.15em] uppercase mb-6"
							style={{ color: 'rgba(248, 246, 241, 0.35)' }}
						>
							Get Started
						</p>
						<p
							className="font-body text-[15px] leading-relaxed max-w-sm mb-7"
							style={{ color: 'var(--text-on-dark-muted)' }}
						>
							See how Asterra handles calls for restaurants like yours.
						</p>

						<Link href="/contact">
							<motion.div
								className="btn-primary text-sm px-6 py-3 inline-flex cursor-pointer"
								whileHover={{
									scale: 1.03,
									boxShadow: '0 8px 30px rgba(200, 67, 43, 0.3)',
								}}
								whileTap={{ scale: 0.98 }}
								transition={{
									type: 'spring',
									stiffness: 400,
									damping: 25,
								}}
							>
								Book a Demo
							</motion.div>
						</Link>

						<div className="mt-5">
							<a
								href="tel:+14374944696"
								className="inline-flex items-center gap-2 font-body text-sm transition-colors duration-200"
								style={{ color: 'rgba(248, 246, 241, 0.4)' }}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color = 'var(--text-on-dark)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color = 'rgba(248, 246, 241, 0.4)')
								}
							>
								<svg
									className="w-3.5 h-3.5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
								Live demo: (437) 494-4696
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
				<div
					className="h-[1px] w-full"
					style={{
						background:
							'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
					}}
				/>
			</div>

			{/* Bottom bar */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-7 sm:py-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Copyright */}
					<p
						className="font-body text-xs text-center md:text-left"
						style={{ color: 'rgba(248, 246, 241, 0.25)' }}
					>
						&copy; 2025 Asterra&trade; is a brand of Asterra Solutions Inc.
					</p>

					<div className="flex flex-col sm:flex-row items-center gap-6">
						{/* Social icons */}
						<div className="flex items-center gap-5">
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									target={
										social.href.startsWith('mailto')
											? undefined
											: '_blank'
									}
									rel={
										social.href.startsWith('mailto')
											? undefined
											: 'noopener noreferrer'
									}
									aria-label={social.label}
									className="block"
									style={{ color: 'rgba(248, 246, 241, 0.3)' }}
									whileHover={{
										scale: 1.15,
										color: 'rgba(248, 246, 241, 0.85)',
									}}
									whileTap={{ scale: 0.9 }}
									transition={{
										type: 'spring',
										stiffness: 400,
										damping: 20,
									}}
								>
									<FontAwesomeIcon
										icon={social.icon}
										className="w-[18px] h-[18px]"
									/>
								</motion.a>
							))}
						</div>

						{/* Legal links */}
						<div
							className="flex items-center gap-5 text-xs font-body"
							style={{ color: 'rgba(248, 246, 241, 0.25)' }}
						>
							<Link
								href="/privacy"
								className="transition-colors duration-200 hover:text-[var(--text-on-dark-muted)]"
								style={{ color: 'inherit' }}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										'var(--text-on-dark-muted)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										'rgba(248, 246, 241, 0.25)')
								}
							>
								Privacy Policy
							</Link>
							<span style={{ color: 'rgba(248, 246, 241, 0.12)' }}>
								|
							</span>
							<Link
								href="/terms"
								className="transition-colors duration-200 hover:text-[var(--text-on-dark-muted)]"
								style={{ color: 'inherit' }}
								onMouseEnter={(e) =>
									(e.currentTarget.style.color =
										'var(--text-on-dark-muted)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.color =
										'rgba(248, 246, 241, 0.25)')
								}
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
