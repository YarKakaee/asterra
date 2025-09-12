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
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<Navbar />

			<main className="pt-16">
				<HeroSection />
				<Reclaim />
				<ProblemValidationSection />
				<ROICalculatorSection />
				<SolutionPreviewSection />
				<GlassJourneySection />
				<IndustryShowcaseSection />
				<TechnologyTransparencySection />

				{/* Additional sections will go here */}
			</main>
		</>
	);
}
