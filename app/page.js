'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ProductSection from './components/ProductSection';
import HowItWorksSection from './components/HowItWorksSection';
import IntegrationsSection from './components/IntegrationsSection';
import FranchiseSection from './components/FranchiseSection';
import DashboardSection from './components/DashboardSection';
import IndustriesSection from './components/IndustriesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { OrganizationSchema, ServiceSchema } from './components/StructuredData';

export default function Home() {
	useEffect(() => {
		document.documentElement.classList.add('loaded');

		// Handle anchor scroll on load
		if (typeof window !== 'undefined' && window.location.hash) {
			const hash = window.location.hash.substring(1);
			window.requestAnimationFrame(() => {
				const el = document.getElementById(hash);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		}
	}, []);

	return (
		<>
			<OrganizationSchema />
			<ServiceSchema />
			<Navbar />

			<main className="relative overflow-hidden">
				<HeroSection />
				<ProblemSection />
				<ProductSection />
				<HowItWorksSection />
				<IntegrationsSection />
				<FranchiseSection />
				<DashboardSection />
				<IndustriesSection />
				<CTASection />
			</main>

			<Footer />
		</>
	);
}
