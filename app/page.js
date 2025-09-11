'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Reclaim from './components/Reclaim';
import ProblemValidationSection from './components/ProblemValidationSection';
import SolutionPreviewSection from './components/SolutionPreviewSection';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="pt-16">
				<HeroSection />
				<Reclaim />
				<ProblemValidationSection />
				<SolutionPreviewSection />
				{/* Additional sections will go here */}
			</main>
		</>
	);
}
