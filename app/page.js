'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RealitySection from './components/RealitySection';
import ScopeSection from './components/ScopeSection';
import Reclaim from './components/Reclaim';
import ProblemValidationSection from './components/ProblemValidationSection';
import SolutionPreviewSection from './components/SolutionPreviewSection';
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
				{/* Optimized Background with gradient and texture - covers navbar area with controllable cutoff */}
				<div
					className="absolute inset-0"
					style={{
						top: '-4rem', // Extend above to go under navbar
						height: 'calc(120vh + 4rem)', // Reduced from 300vh for better performance
						background:
							'linear-gradient(180deg, #F9F4F2 0%, rgba(249, 244, 242, 0.95) 30%, rgba(249, 244, 242, 0.9) 50%, rgba(249, 244, 242, 0.95) 75%, rgba(248, 250, 252, 0.98) 90%, rgba(248, 250, 252, 1) 100%)',
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
								maskImage:
									'linear-gradient(180deg, black 0%, black 85%, transparent 100%)',
								WebkitMaskImage:
									'linear-gradient(180deg, black 0%, black 85%, transparent 100%)',
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
								maskImage:
									'linear-gradient(180deg, black 20%, black 75%, transparent 90%)',
								WebkitMaskImage:
									'linear-gradient(180deg, black 20%, black 75%, transparent 90%)',
								willChange: 'transform',
								transform: 'translateZ(0)',
								contain: 'layout style paint',
							}}
						/>
						{/* Final gradient overlay for smooth color transition */}
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(180deg, rgba(249,244,242,0) 0%, rgba(249,244,242,0.2) 30%, rgba(249,244,242,0.4) 50%, rgba(249,244,242,0.6) 75%, rgba(248,250,252,0.9) 90%, rgba(248,250,252,1) 100%)',
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
					<ScopeSection />
					<Reclaim />
					<ProblemValidationSection />
					<ROICalculatorSection />
					<SolutionPreviewSection />
					<GlassJourneySection />
					<IndustryShowcaseSection />
					<TechnologyTransparencySection />
					<FAQSection />
					<FinalUrgencySection />

					{/* Additional sections will go here */}
				</div>
			</main>

			<Footer />
		</>
	);
}
