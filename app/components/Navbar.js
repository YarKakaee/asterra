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

	// Handle scroll detection
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Mobile detection for performance optimization
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(
				window.innerWidth < 768 ||
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					)
			);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Navigation menu items
	const navItems = [
		{
			name: 'Solutions',
			hasDropdown: true,
			dropdownItems: [
				'AI Receptionists',
				'Customer Support',
				'Lead Nurturing',
				'Website Development',
				'See All Solutions',
			],
		},
		{
			name: 'Industries',
			hasDropdown: true,
			dropdownItems: [
				'Restaurants',
				'Real Estate',
				'Medical',
				'Law Firms',
				'Small Business',
			],
		},
		{ name: 'Case Studies', hasDropdown: false },
		{ name: 'About', hasDropdown: false },
		{ name: 'Contact', hasDropdown: false },
	];

	// Animation variants
	const dropdownVariants = {
		hidden: {
			opacity: 0,
			y: -15,
			scale: 0.92,
			filter: 'blur(4px)',
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			filter: 'blur(0px)',
			transition: {
				duration: 0.3,
				ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for premium feel
				staggerChildren: 0.05,
			},
		},
		exit: {
			opacity: 0,
			y: -10,
			scale: 0.95,
			filter: 'blur(2px)',
			transition: {
				duration: 0.2,
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
				duration: 0.3,
				ease: 'easeOut',
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.2 },
		},
	};

	const mobileItemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.2 },
		},
	};

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
								<motion.a
									href="#"
									className="text-[#151719] hover:text-[#FF5633] px-3 py-2 text-sm font-medium transition-colors duration-200 relative group flex items-center"
									whileHover={{ scale: 1.02 }}
								>
									{item.name}
									{item.hasDropdown && (
										<motion.div
											className="ml-1"
											animate={{
												rotate:
													activeDropdown === item.name
														? 180
														: 0,
											}}
											transition={{ duration: 0.2 }}
										>
											<FontAwesomeIcon
												icon={faChevronDown}
											/>
										</motion.div>
									)}
									{/* Hover underline animation */}
									<motion.div
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5633]"
										initial={{ scaleX: 0 }}
										whileHover={{ scaleX: 1 }}
										transition={{ duration: 0.2 }}
									/>
								</motion.a>

								{/* Glass Morphism Dropdown Menu */}
								<AnimatePresence>
									{item.hasDropdown &&
										activeDropdown === item.name && (
											<motion.div
												variants={dropdownVariants}
												initial="hidden"
												animate="visible"
												exit="exit"
												className="absolute top-full left-0 mt-2 w-56 rounded-2xl py-3 overflow-hidden"
												style={{
													background:
														'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.9) 100%)',
													backdropFilter: isMobile
														? 'blur(12px) saturate(150%)'
														: 'blur(20px) saturate(180%)',
													border: '1px solid rgba(255, 255, 255, 0.6)',
													borderTop:
														'2px solid rgba(255, 255, 255, 0.8)',
													borderBottom:
														'1px solid rgba(255, 255, 255, 0.3)',
													boxShadow: isMobile
														? `0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)`
														: `
															0 8px 32px rgba(0, 0, 0, 0.12),
															0 2px 8px rgba(0, 0, 0, 0.08),
															inset 0 1px 0 rgba(255, 255, 255, 0.9),
															inset 0 0 20px rgba(255, 255, 255, 0.1)
														`,
												}}
											>
												{/* Subtle shimmer effect - disabled on mobile */}
												{!isMobile && (
													<motion.div
														className="absolute inset-0 opacity-0"
														style={{
															background:
																'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
														}}
														animate={{
															x: [
																'-100%',
																'100%',
															],
															opacity: [
																0, 0.3, 0,
															],
														}}
														transition={{
															duration: 3,
															repeat: Infinity,
															ease: 'easeInOut',
														}}
													/>
												)}

												{item.dropdownItems.map(
													(dropdownItem, index) => (
														<motion.div
															key={dropdownItem}
															className="relative overflow-hidden"
															initial={{
																opacity: 0,
																y: 10,
															}}
															animate={{
																opacity: 1,
																y: 0,
															}}
															transition={{
																delay:
																	index *
																	0.05,
																duration: 0.2,
																ease: 'easeOut',
															}}
														>
															<motion.a
																href="#"
																className="block px-4 py-3 text-sm text-[#151719] font-medium relative group"
																whileHover={{
																	backgroundColor:
																		'rgba(255, 255, 255, 0.5)',
																}}
																transition={{
																	duration: 0.2,
																	ease: 'easeOut',
																}}
															>
																{/* Hover glass effect */}
																<motion.div
																	className="absolute inset-0 opacity-0 group-hover:opacity-100"
																	style={{
																		background:
																			'linear-gradient(135deg, rgba(255, 107, 71, 0.08) 0%, rgba(255, 107, 71, 0.04) 100%)',
																		backdropFilter:
																			'blur(8px)',
																	}}
																	initial={{
																		scale: 0.8,
																		opacity: 0,
																	}}
																	whileHover={{
																		scale: 1,
																		opacity: 1,
																		transition:
																			{
																				duration: 0.2,
																				ease: 'easeOut',
																			},
																	}}
																/>

																{/* Text with subtle glow on hover */}
																<motion.span
																	className="relative z-10"
																	whileHover={{
																		color: '#FF5633',
																		textShadow:
																			'0 0 8px rgba(255, 107, 71, 0.3)',
																	}}
																	transition={{
																		duration: 0.2,
																	}}
																>
																	{
																		dropdownItem
																	}
																</motion.span>

																{/* Subtle left accent */}
																<motion.div
																	className="absolute left-0 top-1/2 w-0 h-0 bg-gradient-to-r from-[#FF5633] to-transparent opacity-0 group-hover:opacity-100"
																	style={{
																		transform:
																			'translateY(-50%)',
																	}}
																	whileHover={{
																		width: '3px',
																		height: '60%',
																		transition:
																			{
																				duration: 0.2,
																				ease: 'easeOut',
																			},
																	}}
																/>
															</motion.a>
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
						<motion.a
							href="#"
							className="bg-[#FF5633] text-white/95 px-6 py-2 rounded-lg text-sm"
							whileHover={{
								scale: 1.05,
								boxShadow: '0 5px 40px rgba(255, 86, 51, 0.3)',
							}}
							whileTap={{ scale: 0.98 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 20,
							}}
						>
							Contact Sales
						</motion.a>
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
							className="md:hidden border-t border-gray-100"
						>
							<div className="py-4 space-y-2">
								{navItems.map((item) => (
									<motion.div
										key={item.name}
										variants={mobileItemVariants}
									>
										<a
											href="#"
											className="block px-4 py-2 text-[#151719] hover:text-[#FF5633] hover:bg-gray-50 transition-colors duration-200"
										>
											{item.name}
										</a>
									</motion.div>
								))}
								<motion.div
									variants={mobileItemVariants}
									className="px-4 pt-4"
								>
									<a
										href="#"
										className="block w-full text-center bg-[#FF5633] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#E04A2B] transition-colors duration-200"
									>
										Contact Sales
									</a>
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
