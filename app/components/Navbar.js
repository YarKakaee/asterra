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
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
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
			setIsMobile(window.innerWidth < 768);
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
			name: 'Solutions',
			hasDropdown: true,
			href: '/solutions',
			dropdownItems: [
				{
					name: 'AI Receptionists',
					href: '/solutions/ai-receptionists',
				},
				{
					name: 'Customer Support',
					href: '/solutions/customer-support',
				},
				{ name: 'Lead Nurturing', href: '/solutions/lead-nurturing' },
				{
					name: 'Website Development',
					href: '/solutions/website-development',
				},
				{ name: 'See All Solutions', href: '/solutions' },
			],
		},
		{
			name: 'Industries',
			hasDropdown: true,
			href: '/industries',
			dropdownItems: [
				{
					name: 'Barbershops & Salons',
					href: '/industries/barbershops-salons',
				},
				{ name: 'Restaurants', href: '/industries/restaurants' },
				{
					name: 'Clinics & Healthcare',
					href: '/industries/clinics-healthcare',
				},
				{ name: 'Law Firms', href: '/industries/law-firms' },
				{ name: 'Real Estate', href: '/industries/real-estate' },
				{
					name: 'Contractors',
					href: '/industries/contractors-home-services',
				},
				{
					name: 'Small Businesses',
					href: '/industries/small-businesses',
				},
			],
		},
		{
			name: 'Client Success',
			hasDropdown: false,
			href: '/client-success',
		},
		{
			name: 'The Asterra™ Promise',
			hasDropdown: false,
			href: '/guarantee',
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

	// Prevent hydration mismatch by using consistent initial state
	if (!mounted) {
		return (
			<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent border-b border-transparent">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex-shrink-0">
							<Link href="/">
								<Image
									src="/navlogo.png"
									alt="Asterra"
									width={272}
									height={72}
									className="h-8 w-auto"
									priority
								/>
							</Link>
						</div>
						{/* Placeholder for content during hydration */}
						<div className="hidden md:flex items-center space-x-4">
							<div className="w-80 h-8"></div>
						</div>
						<div className="hidden md:flex">
							<div className="w-32 h-8"></div>
						</div>
					</div>
				</div>
			</nav>
		);
	}

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'glass-nav border-b border-white/20'
					: 'bg-transparent border-b border-transparent'
			}`}
			animate={{
				backgroundColor: isScrolled
					? 'rgba(255, 255, 255, 0.9)'
					: 'rgba(255, 255, 255, 0)',
				backdropFilter: isScrolled
					? 'blur(12px) saturate(180%)'
					: 'blur(0px) saturate(100%)',
				boxShadow: isScrolled
					? '0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 1px 3px rgba(0, 0, 0, 0.05)'
					: '0 0 0 rgba(255, 255, 255, 0) inset, 0 0 0 rgba(0, 0, 0, 0)',
			}}
			transition={{ duration: 0.3, ease: 'easeOut' }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/">
							<Image
								src="/navlogo.png"
								alt="Asterra"
								width={272}
								height={72}
								className="h-8 w-auto"
								priority
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-4">
						{navItems.map((item) => (
							<div
								key={item.name}
								className="relative"
								onMouseEnter={() =>
									item.hasDropdown &&
									setActiveDropdown(item.name)
								}
								onMouseLeave={() =>
									item.hasDropdown && setActiveDropdown(null)
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
												transition={{ duration: 0.2 }}
											>
												<FontAwesomeIcon
													icon={faChevronDown}
												/>
											</motion.div>
										</motion.div>
										{/* Hover underline animation */}
										<motion.div
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5633]"
											initial={{ scaleX: 0 }}
											whileHover={{ scaleX: 1 }}
											transition={{ duration: 0.2 }}
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
											transition={{ duration: 0.2 }}
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
													(dropdownItem, index) => (
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

					{/* CTA Button */}
					<div className="hidden md:flex">
						<Link href="/contact">
							<motion.div
								className="bg-[#FF5633] text-white/95 px-6 py-2 rounded-lg text-sm cursor-pointer"
								whileHover={{
									scale: 1.05,
									boxShadow:
										'0 5px 40px rgba(255, 86, 51, 0.3)',
								}}
								whileTap={{ scale: 0.98 }}
								transition={{
									type: 'spring',
									stiffness: 300,
									damping: 20,
								}}
							>
								Contact Sales
							</motion.div>
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<motion.button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-[#151719] hover:text-[#FF5633] p-2"
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
							className="md:hidden border-t border-gray-300"
						>
							<div className="py-4 space-y-2">
								{navItems.map((item) => (
									<motion.div
										key={item.name}
										variants={mobileItemVariants}
									>
										{item.hasDropdown ? (
											<div className="block px-4 py-2 text-[#151719] hover:text-[#FF5633] hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
												{item.name}
											</div>
										) : (
											<Link
												href={item.href}
												className="block px-4 py-2 text-[#151719] hover:text-[#FF5633] hover:bg-gray-50 transition-colors duration-200"
												onClick={() =>
													setIsMenuOpen(false)
												}
											>
												{item.name}
											</Link>
										)}
									</motion.div>
								))}
								<motion.div
									variants={mobileItemVariants}
									className="px-4 pt-4"
								>
									<Link
										href="/contact"
										className="block w-full text-center bg-[#FF5633] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#E04A2B] transition-colors duration-200"
										onClick={() => setIsMenuOpen(false)}
									>
										Contact Sales
									</Link>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
};

export default Navbar;
