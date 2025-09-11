'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Reclaim from './components/Reclaim';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="pt-16">
				<HeroSection />
				<Reclaim />
				{/* Additional sections will go here */}
			</main>
		</>
	);
}
