'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [mobileDropdown, setMobileDropdown] = useState(null);
	const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1 for smooth fade
	const [isMobile, setIsMobile] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Handle scroll detection with smooth gradual fade
	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const scrollTop = window.scrollY;
					// Smooth fade: starts at 0px, fully faded at 60px
					const fadeStart = 0;
					const fadeEnd = 60;
					const progress = Math.min(
						Math.max(
							(scrollTop - fadeStart) / (fadeEnd - fadeStart),
							0,
						),
						1,
					);
					setScrollProgress(progress);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Check initial scroll position
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Simplified mobile detection for performance optimization
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024);
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Handle hydration
	useEffect(() => {
		setMounted(true);
	}, []);

	// Navigation menu items
	const navItems = [
		{
			name: 'Phone Handling',
			hasDropdown: false,
			href: '/phone-handling',
		},
		{
			name: 'Online Presence',
			hasDropdown: false,
			href: '/online-presence',
		},
		{
			name: 'Use Cases',
			hasDropdown: true,
			href: '/industries',
			dropdownItems: [
				{ name: 'Restaurants', href: '/restaurants' },
				{
					name: 'Barbershops & Salons',
					href: '/barbershops-salons',
				},
				{ name: 'Service Businesses', href: '/service-businesses' },
				{
					name: 'Contractors',
					href: '/industries/contractors',
				},
				{ name: 'Retail & Local Shops', href: '/retail-local-shops' },
			],
		},
		{
			name: 'Results',
			hasDropdown: false,
			href: '/client-success',
		},
	];

	// Simplified animation variants for better performance
	const dropdownVariants = {
		hidden: {
			opacity: 0,
			y: -4,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.15,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			y: -2,
			transition: {
				duration: 0.1,
				ease: 'easeIn',
			},
		},
	};

	const mobileMenuVariants = {
		hidden: { opacity: 0, height: 0 },
		visible: {
			opacity: 1,
			height: 'auto',
			transition: {
				duration: 0.2,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.15 },
		},
	};

	const mobileItemVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.15 },
		},
	};

	const mobileDropdownVariants = {
		hidden: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.2, ease: 'easeInOut' },
		},
		visible: {
			opacity: 1,
			height: 'auto',
			transition: { duration: 0.3, ease: 'easeInOut' },
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.2, ease: 'easeInOut' },
		},
	};

	const mobileDropdownItemVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.2, ease: 'easeOut' },
		},
	};

	return (
		<motion.nav className="fixed top-4 left-0 right-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Glass Pill Container */}
				<motion.div
					className={`shadow-lg px-4 sm:px-6 ${
						isMenuOpen && isMobile
							? 'rounded-t-3xl rounded-b-3xl'
							: 'rounded-3xl'
					}`}
					style={{
						backgroundColor: isMobile
							? 'rgba(255, 255, 255, 0.8)'
							: `rgba(255, 255, 255, ${scrollProgress * 0.8})`,
						backdropFilter: isMobile
							? 'blur(12px) saturate(180%)'
							: `blur(${scrollProgress * 12}px) saturate(${
									100 + scrollProgress * 80
								}%)`,
						borderColor: isMobile
							? 'rgba(255, 255, 255, 0.3)'
							: `rgba(255, 255, 255, ${scrollProgress * 0.3})`,
						boxShadow: isMobile
							? '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.8) inset'
							: scrollProgress > 0
								? `0 ${scrollProgress * 4}px ${
										scrollProgress * 20
									}px rgba(0, 0, 0, ${scrollProgress * 0.1}), 0 ${
										scrollProgress * 1
									}px 0 rgba(255, 255, 255, ${
										scrollProgress * 0.8
									}) inset`
								: '0 0px 0px rgba(0, 0, 0, 0)',
						borderWidth: '1px',
						borderStyle: 'solid',
						transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
					}}
				>
					<div className="flex items-center justify-between h-16 sm:h-16 relative">
						{/* Left side: Logo */}
						<div className="flex-shrink-0">
							<Link href="/">
								<Image
									src="/navlogo.png"
									alt="Asterra"
									width={272}
									height={72}
									className="h-8 sm:h-7 w-auto mb-0.5"
									priority
								/>
							</Link>
						</div>

						{/* Center: Desktop Navigation */}
						<div className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
							{navItems.map((item) => (
								<div
									key={item.name}
									className="relative dropdown-trigger"
									onMouseEnter={() =>
										item.hasDropdown &&
										setActiveDropdown(item.name)
									}
									onMouseLeave={(e) => {
										// Don't close if mouse is moving to dropdown
										if (item.hasDropdown) {
											const relatedTarget =
												e.relatedTarget;
											const relatedEl =
												relatedTarget instanceof Element
													? relatedTarget
													: null;
											if (
												!relatedEl ||
												!relatedEl.closest(
													'.dropdown-menu',
												)
											) {
												setActiveDropdown(null);
											}
										}
									}}
								>
									{item.hasDropdown ? (
										<div className="text-[#151719] hover:text-[#FF5633] px-3 py-2 text-sm font-medium transition-colors duration-200 relative group flex items-center cursor-pointer">
											<motion.div
												whileHover={{ scale: 1.02 }}
												className="flex items-center"
											>
												{item.name}
												<motion.div
													className="ml-1"
													animate={{
														rotate:
															activeDropdown ===
															item.name
																? 180
																: 0,
													}}
													transition={{
														duration: 0.2,
													}}
												>
													<FontAwesomeIcon
														icon={faChevronDown}
														className="scale-90"
													/>
												</motion.div>
											</motion.div>
											{/* Hover underline animation */}
											<motion.div
												className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5633]"
												initial={{ scaleX: 0 }}
												whileHover={{ scaleX: 1 }}
												transition={{
													duration: 0.2,
												}}
											/>
										</div>
									) : (
										<Link
											href={item.href}
											className="text-[#151719] hover:text-[#FF5633] px-3 py-2 text-sm font-medium transition-colors duration-200 relative group flex items-center"
										>
											<motion.div
												whileHover={{ scale: 1.02 }}
												className="flex items-center"
											>
												{item.name}
											</motion.div>
											{/* Hover underline animation */}
											<motion.div
												className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5633]"
												initial={{ scaleX: 0 }}
												whileHover={{ scaleX: 1 }}
												transition={{
													duration: 0.2,
												}}
											/>
										</Link>
									)}

									{/* Clean Dropdown Menu */}
									<AnimatePresence>
										{item.hasDropdown &&
											activeDropdown === item.name && (
												<motion.div
													variants={dropdownVariants}
													initial="hidden"
													animate="visible"
													exit="exit"
													className="absolute top-full left-0 pt-2 w-56 overflow-visible dropdown-menu"
													onMouseEnter={() =>
														setActiveDropdown(
															item.name,
														)
													}
													onMouseLeave={() =>
														setActiveDropdown(null)
													}
												>
													{/* Invisible bridge area to prevent dropdown from closing when moving mouse through gap */}
													<div className="h-2 w-full absolute top-0 left-0 pointer-events-auto" />
													{/* Dropdown content */}
													<div
														className="rounded-2xl py-2 overflow-visible"
														style={{
															backgroundColor:
																'rgba(255, 255, 255, 1)',
															backdropFilter:
																'blur(12px) saturate(180%)',
															WebkitBackdropFilter:
																'blur(12px) saturate(180%)',
															border: '1px solid rgba(255, 255, 255, 0.3)',
															boxShadow:
																'0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.8) inset',
														}}
													>
														{item.dropdownItems.map(
															(
																dropdownItem,
																index,
															) => (
																<motion.div
																	key={
																		dropdownItem.name
																	}
																	variants={{
																		hidden: {
																			opacity: 0,
																			y: -5,
																		},
																		visible:
																			{
																				opacity: 1,
																				y: 0,
																			},
																	}}
																	transition={{
																		delay:
																			index *
																			0.04,
																		duration: 0.2,
																		ease: [
																			0.16,
																			1,
																			0.3,
																			1,
																		],
																	}}
																	className="group overflow-hidden"
																>
																	<Link
																		href={
																			dropdownItem.href
																		}
																		className="block px-5 py-3 text-sm text-[#1d1d1f] group-hover:text-[#FF5633] transition-all duration-200 relative"
																	>
																		{/* Smooth hover background */}
																		<div className="absolute inset-0 bg-[#1d1d1f]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
																		<span className="relative z-10 font-medium">
																			{
																				dropdownItem.name
																			}
																		</span>
																	</Link>
																</motion.div>
															),
														)}
													</div>
												</motion.div>
											)}
									</AnimatePresence>
								</div>
							))}
						</div>

						{/* Right side: Desktop CTA Button */}
						<div className="hidden lg:flex ml-auto">
							<Link href="/contact-sales">
								<motion.div
									className="bg-[#151719] text-white px-6 py-3 rounded-full text-sm font-medium cursor-pointer"
									whileHover={{
										scale: 1.05,
										boxShadow:
											'0 4px 12px rgba(21, 23, 25, 0.3)',
									}}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									Contact Us
								</motion.div>
							</Link>
						</div>

						{/* Right side: Mobile CTA Button + Hamburger */}
						<div className="lg:hidden flex items-center gap-3 ml-auto">
							<Link href="/contact-sales">
								<motion.div
									className="bg-[#151719] text-white px-4 py-2.5 rounded-3xl text-sm font-medium cursor-pointer"
									whileHover={{
										scale: 1.05,
										boxShadow:
											'0 4px 12px rgba(21, 23, 25, 0.3)',
									}}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									Contact
								</motion.div>
							</Link>
							<motion.button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-[#151719] hover:text-[#FF5633] p-2 cursor-pointer"
								whileTap={{ scale: 0.95 }}
							>
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									{isMenuOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</motion.button>
						</div>
					</div>

					{/* Mobile Navigation Menu */}
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								variants={mobileMenuVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="lg:hidden border-t border-gray-200 mt-2 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-4"
							>
								<div className="py-4 space-y-0.5">
									{navItems.map((item) => (
										<motion.div
											key={item.name}
											variants={mobileItemVariants}
										>
											{item.hasDropdown ? (
												<div>
													{/* Mobile Dropdown Trigger */}
													<motion.button
														onClick={() =>
															setMobileDropdown(
																mobileDropdown ===
																	item.name
																	? null
																	: item.name,
															)
														}
														className="cursor-pointer w-full flex items-center justify-between px-4 py-3 text-[#151719] hover:text-[#FF5633] transition-colors duration-200 relative group"
														whileTap={{
															scale: 0.98,
														}}
													>
														<span className="font-medium">
															{item.name}
														</span>
														<motion.div
															animate={{
																rotate:
																	mobileDropdown ===
																	item.name
																		? 180
																		: 0,
															}}
															transition={{
																duration: 0.2,
															}}
															className="text-gray-400"
														>
															<FontAwesomeIcon
																icon={
																	faChevronDown
																}
																className="scale-90"
															/>
														</motion.div>
														{/* Hover underline animation */}
														<motion.div
															className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5633]"
															initial={{
																scaleX: 0,
															}}
															whileHover={{
																scaleX: 1,
															}}
															transition={{
																duration: 0.2,
															}}
														/>
													</motion.button>

													{/* Mobile Dropdown Content */}
													<AnimatePresence>
														{mobileDropdown ===
															item.name && (
															<motion.div
																variants={
																	mobileDropdownVariants
																}
																initial="hidden"
																animate="visible"
																exit="exit"
																className="mt-2 ml-4 rounded-xl py-2 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden"
																style={{
																	backgroundColor:
																		'rgba(255, 255, 255, 0.9)',
																	backdropFilter:
																		'blur(16px) saturate(180%)',
																	WebkitBackdropFilter:
																		'blur(16px) saturate(180%)',
																}}
															>
																{item.dropdownItems.map(
																	(
																		dropdownItem,
																		index,
																	) => (
																		<motion.div
																			key={
																				dropdownItem.name
																			}
																			variants={{
																				hidden: {
																					opacity: 0,
																					y: -5,
																				},
																				visible:
																					{
																						opacity: 1,
																						y: 0,
																					},
																			}}
																			transition={{
																				delay:
																					index *
																					0.04,
																				duration: 0.2,
																				ease: [
																					0.16,
																					1,
																					0.3,
																					1,
																				],
																			}}
																		>
																			<Link
																				href={
																					dropdownItem.href
																				}
																				className="block px-4 py-2.5 text-sm text-[#1d1d1f] hover:text-[#FF5633] transition-all duration-200 relative group font-medium"
																				onClick={() => {
																					setIsMenuOpen(
																						false,
																					);
																					setMobileDropdown(
																						null,
																					);
																				}}
																			>
																				<span className="relative z-10">
																					{
																						dropdownItem.name
																					}
																				</span>
																				<motion.div
																					className="absolute inset-0 bg-[#FF5633]/5 rounded-lg"
																					initial={{
																						opacity: 0,
																					}}
																					whileHover={{
																						opacity: 1,
																					}}
																					transition={{
																						duration: 0.2,
																					}}
																				/>
																			</Link>
																		</motion.div>
																	),
																)}
															</motion.div>
														)}
													</AnimatePresence>
												</div>
											) : (
												<Link
													href={item.href}
													className="block px-4 py-3 text-[#151719] hover:text-[#FF5633] transition-colors duration-200 font-medium relative group"
													onClick={() => {
														setIsMenuOpen(false);
														setMobileDropdown(null);
													}}
												>
													{item.name}
													{/* Hover underline animation */}
													<motion.div
														className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5633]"
														initial={{ scaleX: 0 }}
														whileHover={{
															scaleX: 1,
														}}
														transition={{
															duration: 0.2,
														}}
													/>
												</Link>
											)}
										</motion.div>
									))}
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
