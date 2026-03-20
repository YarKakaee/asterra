import HeroSection from './components/HeroSection';
import CallNowSection from './components/CallNowSection';
import HowItWorksSection from './components/HowItWorksSection';
import IntegrationsSection from './components/IntegrationsSection';
import CoordinationSection from './components/CoordinationSection';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<CallNowSection />
			<HowItWorksSection />
			<IntegrationsSection />
			<CoordinationSection />
			<Footer />
		</main>
	);
}
