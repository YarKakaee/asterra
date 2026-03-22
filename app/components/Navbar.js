'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
	{ label: 'How it works', href: '/#how-it-works' },
	{ label: 'Integrations', href: '/#integrations' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'Scalability', href: '/#coordination' },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-[100]">
			{/* Gradient fade — white top fading to transparent with smooth blur */}
			<div
				className="absolute inset-x-0 top-0 pointer-events-none"
				style={{
					height: '180px',
					background:
						'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 42%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.78) 58%, rgba(255,255,255,0.58) 66%, rgba(255,255,255,0.38) 74%, rgba(255,255,255,0.2) 82%, rgba(255,255,255,0.08) 90%, transparent 100%)',
				}}
			/>

			{/* Nav content */}
			<div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8">
				<div className="flex items-center py-4 sm:py-5">
					{/* Logo — left */}
					<Link href="/" className="flex-shrink-0">
						<Image
							src="/navlogo.png"
							alt="Asterra"
							width={140}
							height={36}
							className="h-[28px] w-auto"
							priority
							draggable={false}
						/>
					</Link>

					{/* Links — absolutely centered */}
					<div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="nav-link relative px-4 py-2 text-[14px] font-medium text-gray-700 rounded-lg transition-colors duration-300 hover:text-black whitespace-nowrap"
							>
								<span className="relative z-10">
									{link.label}
								</span>
							</Link>
						))}
					</div>

					{/* Buttons — right */}
					<div className="hidden lg:flex items-center gap-3 ml-auto">
						<a
							href="/contact"
							className="nav-btn-primary px-4 py-[9px] text-[13px] font-medium text-white rounded-2xl transition-all duration-300"
							style={{
								background: '#111',
							}}
						>
							Book a Call
						</a>
						<a
							href="https://dashboard.asterra.ca"
							target="_blank"
							rel="noopener noreferrer"
							className="nav-btn-secondary px-4 py-[9px] text-[13px] font-medium text-gray-800 rounded-2xl border transition-all duration-300"
							style={{
								borderColor: 'rgba(0, 0, 0, 0.15)',
								background: 'rgba(255, 255, 255, 0.6)',
							}}
						>
							Client Login
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden ml-auto p-2 text-gray-800"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle navigation menu"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							{mobileMenuOpen ? (
								<path d="M18 6L6 18M6 6l12 12" />
							) : (
								<path d="M3 12h18M3 6h18M3 18h18" />
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu dropdown */}
			<div
				className={`lg:hidden absolute top-[calc(100%)] left-0 w-full overflow-hidden transition-all duration-300 origin-top px-5 sm:px-8 ${mobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
			>
				<div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl flex flex-col p-4 gap-4">
					<div className="flex flex-col gap-1">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setMobileMenuOpen(false)}
								className="px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100 hover:text-black rounded-xl transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>
					<div className="h-[1px] bg-gray-200/50 w-full" />
					<div className="flex flex-col gap-3">
						<a
							href="/contact"
							onClick={() => setMobileMenuOpen(false)}
							className="w-full text-center px-4 py-[14px] text-[14px] font-semibold text-white rounded-2xl transition-all"
							style={{ background: '#111' }}
						>
							Book a Call
						</a>
						<a
							href="https://dashboard.asterra.ca"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setMobileMenuOpen(false)}
							className="w-full text-center px-4 py-[14px] text-[14px] font-medium text-gray-800 rounded-2xl border border-gray-200 transition-all bg-white"
						>
							Client Login
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
