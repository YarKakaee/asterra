'use client';

import { useEffect } from 'react';
import Footer from '../components/Footer';

export default function ContactPage() {
	useEffect(() => {
		if (document.querySelector('script[src*="calendly.com"]')) return;
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<>
			<main className="pt-32 sm:pt-40 pb-20 sm:pb-28">
				{/* Heading */}
				<div className="w-full max-w-6xl mx-auto px-5 sm:px-8 text-center mb-12 sm:mb-16">
					<h1
						className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-black leading-[1.1] mb-5"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							letterSpacing: '-0.03em',
						}}
					>
						Book a call with us.
					</h1>
					<p
						className="text-[#6B7280] text-sm sm:text-[15px] md:text-[16px] max-w-[480px] mx-auto"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							fontWeight: 400,
							lineHeight: 1.6,
						}}
					>
						Pick a time that works for you. We&apos;ll walk through
						how Asterra fits your business and get you set up.
					</p>
				</div>

				{/* Calendly embed */}
				<div className="w-full max-w-[900px] mx-auto px-5 sm:px-8">
					<div
						className="calendly-inline-widget rounded-2xl overflow-hidden"
						data-url="https://calendly.com/kakaeeyar/30min?primary_color=ff5633"
						style={{
							minWidth: '320px',
							height: '700px',
						}}
					/>
				</div>
			</main>

			<Footer />
		</>
	);
}
