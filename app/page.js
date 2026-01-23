'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RealitySection from './components/RealitySection';
import ScopeSection from './components/ScopeSection';
import Reclaim from './components/Reclaim';
import ProblemValidationSection from './components/ProblemValidationSection';
import SolutionPreviewSection from './components/SolutionPreviewSection';
import UseCasesSection from './components/UseCasesSection';
import GlassJourneySection from './components/GlassJourneySection';
import ROICalculatorSection from './components/ROICalculatorSection';
import IndustryShowcaseSection from './components/IndustryShowcaseSection';
import TechnologyTransparencySection from './components/TechnologyTransparencySection';
import FAQSection from './components/FAQSection';
import FinalUrgencySection from './components/FinalUrgencySection';
import Footer from './components/Footer';
import { OrganizationSchema, ServiceSchema } from './components/StructuredData';
// Removed unused motion import for better performance

export default function Home() {
	useEffect(() => {
		// Add loaded class after hydration to enable transitions
		document.documentElement.classList.add('loaded');
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
					
					

					{/* Additional sections will go here */}
				</div>
			</main>

			<Footer />
		</>
	);
}
