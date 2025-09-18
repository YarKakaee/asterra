'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faXTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="relative text-gray-900 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
			{/* Main Footer Content - Logo and Description */}
			<div className="relative z-10 py-16">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<Image
							src="/footerlogo.png"
							alt="Asterra"
							width={355}
							height={215}
							className="h-20 w-auto mx-auto mb-6"
						/>
						<p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
							Custom AI automation that solves your daily problems
							and saves you money.
						</p>
					</motion.div>
				</div>
			</div>

			{/* Footer Bottom Line */}
			<div className="relative z-10 border-t border-gray-200 py-8">
				<div className="max-w-6xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						{/* Left side - Copyright */}
						<div className="text-gray-500 text-sm">
							© 2025 Asterra™ is a brand of Asterra Solutions Inc.
							All rights reserved.
						</div>

						{/* Right side - Social Icons and Legal Links */}
						<div className="flex items-center gap-6">
							{/* Social Icons */}
							<div className="flex gap-3">
								<motion.a
									href="https://www.linkedin.com/company/asterra-ai"
									target="_blank"
									aria-label="LinkedIn"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="w-5 h-5"
									/>
								</motion.a>
								<motion.a
									href="https://www.twitter.com/asterra_ai"
									target="_blank"
									aria-label="X"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
								>
									<FontAwesomeIcon
										icon={faXTwitter}
										className="w-5 h-5"
									/>
								</motion.a>
								<motion.a
									href="https://www.youtube.com/@asterra_ai"
									target="_blank"
									aria-label="Instagram"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className="w-5 h-5"
									/>
								</motion.a>
							</div>

							{/* Legal Links */}
							<div className="flex gap-4 text-sm">
								<a
									href="/privacy"
									className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
								>
									Privacy Policy
								</a>
								<a
									href="/terms"
									className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
								>
									Terms of Service
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
