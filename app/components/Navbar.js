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
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);
	const [mounted, setMounted] = useState(false);

	// Handle scroll detection
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 20);
		};

		window.addEventListener('scroll', handleScroll);
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

	// Prevent hydration mismatch by using consistent initial state
	if (!mounted) {
		return (
			<nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-300">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						className="rounded-full px-4 sm:px-6"
						style={{
							backgroundColor: 'rgba(250, 248, 245, 0)',
							border: '1px solid rgba(250, 248, 245, 0)',
						}}
					>
						<div className="flex items-center justify-between h-16 sm:h-16">
							<div className="flex-shrink-0">
								<Link href="/">
									<Image
										src="/navlogo.png"
										alt="Asterra"
										width={272}
										height={72}
										className="h-7 sm:h-8 w-auto"
										priority
									/>
								</Link>
							</div>
							<div className="hidden lg:flex items-center space-x-4">
								<div className="w-80 h-8"></div>
							</div>
							<div className="hidden lg:flex">
								<div className="w-32 h-8"></div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}

	return (
		<motion.nav
			className="fixed top-4 left-0 right-0 z-50 transition-all duration-300"
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Glass Pill Container */}
				<motion.div
					className={`shadow-lg px-4 sm:px-6 ${
						isMenuOpen && isMobile
							? 'rounded-t-3xl rounded-b-3xl'
							: 'rounded-3xl'
					}`}
					animate={{
						backgroundColor:
							isScrolled || isMobile
								? 'rgba(255, 255, 255, 0.8)'
								: 'rgba(250, 248, 245, 0)',
						backdropFilter:
							isScrolled || isMobile
								? 'blur(12px) saturate(180%)'
								: 'blur(0px) saturate(100%)',
						borderColor:
							isScrolled || isMobile
								? 'rgba(255, 255, 255, 0.3)'
								: 'rgba(250, 248, 245, 0)',
						boxShadow:
							isScrolled || isMobile
								? '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.8) inset'
								: '0 0px 0px rgba(0, 0, 0, 0)',
					}}
					style={{
						borderWidth: '1px',
						borderStyle: 'solid',
					}}
					transition={{ duration: 0.4, ease: 'easeOut' }}
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
									className="relative"
									onMouseEnter={() =>
										item.hasDropdown &&
										setActiveDropdown(item.name)
									}
									onMouseLeave={() =>
										item.hasDropdown &&
										setActiveDropdown(null)
									}
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
													className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl py-2 shadow-lg border border-gray-200 overflow-hidden"
												>
													{item.dropdownItems.map(
														(
															dropdownItem,
															index
														) => (
															<motion.div
																key={
																	dropdownItem.name
																}
																variants={{
																	hidden: {
																		opacity: 0,
																		x: -10,
																	},
																	visible: {
																		opacity: 1,
																		x: 0,
																	},
																}}
																transition={{
																	delay:
																		index *
																		0.03,
																	duration: 0.15,
																}}
															>
																<Link
																	href={
																		dropdownItem.href
																	}
																	className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#FF5633] hover:bg-gray-50 transition-colors duration-150 relative group"
																>
																	<span className="relative z-10">
																		{
																			dropdownItem.name
																		}
																	</span>
																	{/* Simple hover accent */}
																	<div className="absolute left-0 top-0 bottom-0 w-0 bg-[#FF5633] group-hover:w-1 transition-all duration-150"></div>
																</Link>
															</motion.div>
														)
													)}
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
																	: item.name
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
																className="mt-2 ml-4 bg-white rounded-xl py-2 shadow-lg border border-gray-200 overflow-hidden"
															>
																{item.dropdownItems.map(
																	(
																		dropdownItem,
																		index
																	) => (
																		<motion.div
																			key={
																				dropdownItem.name
																			}
																			variants={{
																				hidden: {
																					opacity: 0,
																					x: -10,
																				},
																				visible:
																					{
																						opacity: 1,
																						x: 0,
																					},
																			}}
																			transition={{
																				delay:
																					index *
																					0.03,
																				duration: 0.15,
																			}}
																		>
																			<Link
																				href={
																					dropdownItem.href
																				}
																				className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#FF5633] hover:bg-gray-50 transition-colors duration-150 relative group"
																				onClick={() => {
																					setIsMenuOpen(
																						false
																					);
																					setMobileDropdown(
																						null
																					);
																				}}
																			>
																				<span className="relative z-10">
																					{
																						dropdownItem.name
																					}
																				</span>
																				{/* Simple hover accent */}
																				<div className="absolute left-0 top-0 bottom-0 w-0 bg-[#FF5633] group-hover:w-1 transition-all duration-150"></div>
																			</Link>
																		</motion.div>
																	)
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
