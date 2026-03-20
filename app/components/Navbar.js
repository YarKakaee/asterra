'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
	{ label: 'How it works', href: '#how-it-works' },
	{ label: 'Integrations', href: '#integrations' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'Business types', href: '#business-types' },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav className="fixed top-3 left-0 right-0 z-[100] flex justify-center">
			<div
				className="relative w-full transition-all duration-500 ease-out"
				style={{
					maxWidth: scrolled ? '1280px' : '1400px',
					margin: scrolled ? '12px auto 0' : '0 auto',
					borderRadius: scrolled ? '24px' : '0px',
					padding: scrolled ? '0 8px' : '0 32px',
				}}
			>
				<div
					className="nav-glass transition-all duration-500 ease-out"
					style={{
						background: scrolled
							? 'rgba(255, 255, 255, 0.55)'
							: 'transparent',
						backdropFilter: scrolled
							? 'blur(20px) saturate(180%)'
							: 'none',
						WebkitBackdropFilter: scrolled
							? 'blur(20px) saturate(180%)'
							: 'none',
						boxShadow: scrolled
							? '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04), inset 0 0.5px 0 rgba(255, 255, 255, 0.7)'
							: 'none',
						border: scrolled
							? '1px solid rgba(255, 255, 255, 0.45)'
							: '1px solid transparent',
						borderRadius: scrolled ? '24px' : '0px',
						padding: scrolled ? '10px 24px' : '16px 0',
					}}
				>
					<div className="relative flex items-center">
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
								<a
									key={link.href}
									href={link.href}
									className="nav-link relative px-4 py-2 text-[14px] font-medium text-gray-700 rounded-lg transition-colors duration-300 hover:text-black whitespace-nowrap"
								>
									<span className="relative z-10">
										{link.label}
									</span>
								</a>
							))}
						</div>

						{/* Buttons — right */}
						<div className="hidden lg:flex items-center gap-3 ml-auto">
							<a
								href="#book"
								className="nav-btn-primary px-4 py-[9px] text-[13px] font-medium text-white rounded-2xl transition-all duration-300"
								style={{
									background: '#111',
								}}
							>
								Book a Call
							</a>
							<a
								href="#login"
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
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
					className={`lg:hidden absolute top-[calc(100%+8px)] left-0 w-full overflow-hidden transition-all duration-300 origin-top ${mobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
					style={{ padding: scrolled ? '0 8px' : '0 32px' }}
				>
					<div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl flex flex-col p-4 gap-4">
						<div className="flex flex-col gap-1">
							{NAV_LINKS.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={() => setMobileMenuOpen(false)}
									className="px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100 hover:text-black rounded-xl transition-colors"
								>
									{link.label}
								</a>
							))}
						</div>
						<div className="h-[1px] bg-gray-200/50 w-full" />
						<div className="flex flex-col gap-3">
							<a
								href="#book"
								onClick={() => setMobileMenuOpen(false)}
								className="w-full text-center px-4 py-[14px] text-[14px] font-semibold text-white rounded-2xl transition-all"
								style={{ background: '#111' }}
							>
								Book a Call
							</a>
							<a
								href="#login"
								onClick={() => setMobileMenuOpen(false)}
								className="w-full text-center px-4 py-[14px] text-[14px] font-medium text-gray-800 rounded-2xl border border-gray-200 transition-all bg-white"
							>
								Client Login
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
