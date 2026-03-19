'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ name: 'Phone Handling', href: '/phone-handling' },
	{ name: 'For Restaurants', href: '/#restaurants' },
	{ name: 'Multi-Location', href: '/#franchise' },
];

const clientAccessLink = {
	name: 'Client Access',
	href: 'https://dashboard.asterra.ca',
	external: true,
};

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const pathname = usePathname();
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const progress = Math.min(Math.max(latest / 80, 0), 1);
		setScrolled(progress);
	});

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 1024);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [isMenuOpen]);

	// Close mobile menu on route change
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const handleAnchorClick = useCallback((e, href) => {
		const hash = href.split('#')[1];
		if (!hash) return;

		if (pathname === '/') {
			e.preventDefault();
			const target = document.getElementById(hash);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				window.history.replaceState(null, '', href);
			}
		}
		setIsMenuOpen(false);
	}, [pathname]);

	// Computed glass values based on scroll
	const glassOpacity = isMobile ? 0.82 : 0.12 + scrolled * 0.7;
	const blurAmount = isMobile ? 24 : 6 + scrolled * 18;
	const saturation = isMobile ? 200 : 120 + scrolled * 80;
	const borderOpacity = isMobile ? 0.5 : scrolled * 0.5;
	const shadowIntensity = isMobile ? 0.08 : scrolled * 0.08;
	const innerGlow = isMobile ? 0.7 : scrolled * 0.7;

	const mobileMenuVariants = {
		hidden: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
		},
		visible: {
			opacity: 1,
			height: 'auto',
			transition: {
				duration: 0.32,
				ease: [0.16, 1, 0.3, 1],
				staggerChildren: 0.04,
				delayChildren: 0.06,
			},
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const mobileItemVariants = {
		hidden: { opacity: 0, x: -12 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
		exit: { opacity: 0, x: -8, transition: { duration: 0.15 } },
	};

	const renderNavLink = (item, mobile = false) => {
		const baseClasses = mobile
			? 'block px-4 py-3.5 text-[var(--text)] hover:text-[var(--terracotta)] font-medium text-[14px] tracking-[-0.01em] transition-colors duration-200 font-body'
			: 'text-[var(--text)] hover:text-[var(--terracotta)] px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 tracking-[-0.01em] font-body';

		if (item.external) {
			return (
				<a
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
					className={baseClasses}
					onClick={mobile ? () => setIsMenuOpen(false) : undefined}
				>
					{item.name}
					{!mobile && (
						<svg className="inline-block ml-1 w-2.5 h-2.5 opacity-40" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
							<path d="M3.5 1.5H10.5V8.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M10.5 1.5L1.5 10.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					)}
				</a>
			);
		}

		return (
			<Link
				href={item.href}
				onClick={
					item.href.includes('#')
						? (e) => handleAnchorClick(e, item.href)
						: mobile
							? () => setIsMenuOpen(false)
							: undefined
				}
				className={baseClasses}
			>
				{item.name}
			</Link>
		);
	};

	return (
		<motion.nav
			className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 pointer-events-none"
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
				<motion.div
					className={`glass-nav px-5 sm:px-6 ${
						isMenuOpen && isMobile ? 'rounded-[var(--r-xl)]' : 'rounded-[var(--r-full)]'
					}`}
					style={{
						backgroundColor: `rgba(253, 252, 250, ${glassOpacity})`,
						backdropFilter: `blur(${blurAmount}px) saturate(${saturation}%)`,
						WebkitBackdropFilter: `blur(${blurAmount}px) saturate(${saturation}%)`,
						borderWidth: '1px',
						borderStyle: 'solid',
						borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
						boxShadow: shadowIntensity > 0
							? `0 ${shadowIntensity * 50}px ${shadowIntensity * 300}px rgba(18, 18, 18, ${shadowIntensity * 0.75}), 0 ${shadowIntensity * 6}px ${shadowIntensity * 20}px rgba(18, 18, 18, ${shadowIntensity * 0.5}), inset 0 1px 0 rgba(255, 255, 255, ${innerGlow})`
							: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
					}}
				>
					<div className="flex items-center justify-between h-[52px] sm:h-14">
						{/* Logo */}
						<div className="flex-shrink-0">
							<Link href="/" aria-label="Asterra Home">
								<motion.div
									whileHover={{ opacity: 0.8 }}
									transition={{ duration: 0.2 }}
								>
									<Image
										src="/navlogo.png"
										alt="Asterra"
										width={272}
										height={72}
										className="h-[22px] sm:h-[26px] w-auto"
										priority
									/>
								</motion.div>
							</Link>
						</div>

						{/* Desktop Center Nav */}
						<div className="hidden lg:flex items-center gap-0.5 absolute left-1/2 transform -translate-x-1/2">
							{navLinks.map((item) => (
								<div key={item.name} className="flex items-center">
									{renderNavLink(item)}
								</div>
							))}

							{/* Divider */}
							<div className="h-4 w-px bg-[var(--text-faint)] opacity-30 mx-2 rounded-full" />

							{/* Client Access */}
							<div className="flex items-center">
								{renderNavLink(clientAccessLink)}
							</div>
						</div>

						{/* Desktop CTA */}
						<div className="hidden lg:flex ml-auto">
							<Link href="/contact">
								<motion.div
									className="font-body text-[13px] font-bold tracking-[-0.01em] px-5 py-2 cursor-pointer rounded-[var(--r-full)] text-white"
									style={{
										backgroundColor: 'var(--terracotta)',
									}}
									whileHover={{
										scale: 1.04,
										backgroundColor: 'var(--terracotta-hover)',
										boxShadow: '0 4px 20px rgba(200, 67, 43, 0.3)',
									}}
									whileTap={{ scale: 0.97 }}
									transition={{ type: 'spring', stiffness: 400, damping: 25 }}
								>
									Book a Demo
								</motion.div>
							</Link>
						</div>

						{/* Mobile: CTA + Hamburger */}
						<div className="lg:hidden flex items-center gap-2.5 ml-auto">
							<Link href="/contact">
								<motion.div
									className="font-body text-[12px] font-bold tracking-[-0.01em] px-4 py-1.5 cursor-pointer rounded-[var(--r-full)] text-white"
									style={{ backgroundColor: 'var(--terracotta)' }}
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.96 }}
								>
									Book a Demo
								</motion.div>
							</Link>
							<motion.button
								onClick={() => setIsMenuOpen((prev) => !prev)}
								className="text-[var(--text)] p-1.5 cursor-pointer rounded-[var(--r-sm)]"
								whileTap={{ scale: 0.9 }}
								aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
								aria-expanded={isMenuOpen}
							>
								<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
									<AnimatePresence mode="wait">
										{isMenuOpen ? (
											<motion.g
												key="close"
												initial={{ opacity: 0, rotate: -90 }}
												animate={{ opacity: 1, rotate: 0 }}
												exit={{ opacity: 0, rotate: 90 }}
												transition={{ duration: 0.2 }}
											>
												<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
											</motion.g>
										) : (
											<motion.g
												key="menu"
												initial={{ opacity: 0, rotate: 90 }}
												animate={{ opacity: 1, rotate: 0 }}
												exit={{ opacity: 0, rotate: -90 }}
												transition={{ duration: 0.2 }}
											>
												<path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
											</motion.g>
										)}
									</AnimatePresence>
								</svg>
							</motion.button>
						</div>
					</div>

					{/* Mobile Menu Dropdown */}
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								variants={mobileMenuVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="lg:hidden overflow-hidden"
							>
								<div className="border-t border-[var(--glass-border-faint)] mt-1 pt-3 pb-4">
									<div className="space-y-0.5">
										{navLinks.map((item) => (
											<motion.div key={item.name} variants={mobileItemVariants}>
												{renderNavLink(item, true)}
											</motion.div>
										))}
									</div>

									{/* Mobile divider */}
									<div className="h-px bg-[var(--text-faint)] opacity-15 mx-4 my-2" />

									<motion.div variants={mobileItemVariants}>
										{renderNavLink(clientAccessLink, true)}
									</motion.div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
