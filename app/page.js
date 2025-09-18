'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
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
// Removed unused motion import for better performance

export default function Home() {
	return (
		<>
			<Navbar />

			<main className="pt-16 relative overflow-hidden">
				{/* Optimized Background with gradient and texture - covers navbar area with controllable cutoff */}
				<div
					className="absolute inset-0"
					style={{
						top: '-4rem', // Extend above to go under navbar
						height: 'calc(120vh + 4rem)', // Reduced from 300vh for better performance
						background:
							'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 30%, rgba(241, 245, 249, 0.6) 70%, rgba(247, 249, 252, 1) 100%)',
						// Performance optimizations for Safari
						willChange: 'auto',
						transform: 'translate3d(0, 0, 0)',
						contain: 'layout style paint',
						backfaceVisibility: 'hidden',
						perspective: '1000px',
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
							className="absolute inset-0 opacity-25"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 3px, transparent 0)',
								backgroundSize: '20px 20px',
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
							className="absolute inset-0 opacity-15"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)',
								backgroundSize: '20px 20px',
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
									'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.6) 70%, rgba(247,249,252,0.9) 85%, rgba(247,249,252,1) 100%)',
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
