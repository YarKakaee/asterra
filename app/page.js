'use client';

import { useEffect } from 'react';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import RealitySection from './components/RealitySection';
import SolutionPreviewSection from './components/SolutionPreviewSection';
import { OrganizationSchema, ServiceSchema } from './components/StructuredData';
import UseCasesSection from './components/UseCasesSection';
// Removed unused motion import for better performance

export default function Home() {
	useEffect(() => {
		// Add loaded class after hydration to enable transitions
		document.documentElement.classList.add('loaded');

		// If we landed here with a hash, smooth scroll to it.
		if (
			typeof window !== 'undefined' &&
			window.location.hash === '#use-cases'
		) {
			// Let layout settle for a frame.
			window.requestAnimationFrame(() => {
				const el = document.getElementById('use-cases');
				if (el)
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		}
	}, []);

	return (
		<>
			<OrganizationSchema />
			<ServiceSchema />
			<Navbar />

			<main className="pt-16 relative overflow-hidden">
				{/* Optimized Background with solid color and texture - covers navbar area */}
				<div
					className="absolute inset-0"
					style={{
						top: '-4rem', // Extend above to go under navbar
						height: 'calc(100vh + 8rem)', // Extend beyond viewport for smooth transition
						background: '#F9F4F2', // Solid color
						// Performance optimizations
						willChange: 'transform',
						transform: 'translateZ(0)',
						contain: 'layout style paint', // CSS containment for better performance
					}}
				>
					{/* Optimized texture effect with dot pattern restored */}
					<div
						className="absolute inset-0"
						style={{
							willChange: 'transform',
							transform: 'translateZ(0)',
							contain: 'layout style paint',
						}}
					>
						{/* Base dot texture pattern */}
						<div
							className="absolute inset-0 opacity-30"
							style={{
								backgroundImage:
									'radial-gradient(circle at center, rgba(0,0,0,0.25) 1.5px, transparent 1.5px)',
								backgroundSize: '20px 20px',
								backgroundPosition: '0 0',
								willChange: 'transform',
								transform: 'translateZ(0)',
								contain: 'layout style paint',
							}}
						/>
						{/* Subtle blur layer for depth */}
						<div
							className="absolute inset-0 opacity-20"
							style={{
								backgroundImage:
									'radial-gradient(circle at center, rgba(0,0,0,0.12) 1px, transparent 1px)',
								backgroundSize: '20px 20px',
								backgroundPosition: '0 0',
								filter: 'blur(0.5px)',
								willChange: 'transform',
								transform: 'translateZ(0)',
								contain: 'layout style paint',
							}}
						/>
					</div>
				</div>

				{/* Content with relative positioning */}
				<div className="relative z-10">
					<HeroSection />
					<RealitySection />
					<SolutionPreviewSection />
					<UseCasesSection />

					{/* Additional sections will go here */}
				</div>
			</main>

			<Footer />
		</>
	);
}
