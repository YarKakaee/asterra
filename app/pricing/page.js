import Footer from '../components/Footer';

export const metadata = {
	title: 'Pricing',
	description:
		"Simple, flat monthly pricing for Asterra's AI phone handling. One predictable number every month with no per-minute charges.",
};

const CHECK = (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="shrink-0 mt-0.5"
	>
		<path
			d="M13.3 4.3L6 11.6L2.7 8.3"
			stroke="#374151"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const PLANS = [
	{
		name: 'Starter',
		price: 150,
		subline: 'If you get around 25 calls a day',
		featuresLabel: "WHAT'S INCLUDED",
		features: [
			'Every call answered, 24/7',
			'Full order taking and POS sync',
			'Reservation and booking handling',
			'Answers questions about menu, hours, and specials',
			'Smart escalation to staff when needed',
			'Client dashboard access',
			'Call history and logs',
			'Weekly email summaries',
		],
		featured: false,
	},
	{
		name: 'Standard',
		price: 250,
		subline: 'If you get around 50 calls a day',
		featuresLabel: 'EVERYTHING IN STARTER, PLUS',
		features: [
			'After hours handling with automatic info-only mode',
			'Automatic SMS confirmation after every booking',
			'Trained on daily specials and menu changes',
			'Info-only mode toggle to instantly pause ordering',
			'Call outcome reporting with orders, transfers, and info calls broken down',
			'Priority onboarding and setup',
		],
		featured: true,
	},
	{
		name: 'Busy',
		price: 350,
		subline: 'If you get around 75 calls a day',
		featuresLabel: 'EVERYTHING IN STANDARD, PLUS',
		features: [
			'Dedicated setup and onboarding call',
			'Agent refined using real call data from your business',
			'Custom flows for catering, events, and large party bookings',
			'Franchise-ready, expandable to additional locations',
			'Faster support response time',
		],
		featured: false,
	},
];

export default function PricingPage() {
	return (
		<>
			<main className="pt-32 sm:pt-54 pb-20 sm:pb-28">
				{/* Heading */}
				<div className="w-full max-w-6xl mx-auto px-5 sm:px-8 text-center mb-16 sm:mb-20">
					<h1
						className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold text-black leading-[1.1] mb-5"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							letterSpacing: '-0.03em',
						}}
					>
						Simple, flat monthly pricing.
					</h1>
					<p
						className="text-[#6B7280] text-sm sm:text-[15px] md:text-[16px] max-w-[560px] mx-auto"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							fontWeight: 400,
							lineHeight: 1.6,
						}}
					>
						One predictable number every month. No per-minute
						charges, no usage surprises. Pick the plan that fits how
						busy your phones are.
					</p>
				</div>

				{/* Pricing cards */}
				<div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 mb-16 sm:mb-20">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
						{PLANS.map((plan) => (
							<div
								key={plan.name}
								className="relative flex flex-col bg-white rounded-2xl"
								style={{
									border: plan.featured
										? 'none'
										: '0.5px solid #e5e7eb',
									boxShadow: plan.featured
										? '0 8px 40px -8px rgba(0, 0, 0, 0.15), 0 2px 8px -2px rgba(0, 0, 0, 0.06)'
										: 'none',
									padding: plan.featured
										? '40px 32px'
										: '32px',
									marginTop: plan.featured ? '-12px' : '0',
									marginBottom: plan.featured ? '-12px' : '0',
									zIndex: plan.featured ? 10 : 1,
								}}
							>
								{/* Most Popular badge */}
								{plan.featured && (
									<div
										className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-semibold text-white tracking-wide"
										style={{
											background: '#111',
											fontFamily:
												'var(--font-inter), system-ui, sans-serif',
										}}
									>
										Most Popular
									</div>
								)}

								{/* Plan name */}
								<p
									className="text-[13px] font-semibold text-[#6B7280] uppercase tracking-wider mb-4"
									style={{
										fontFamily:
											'var(--font-inter), system-ui, sans-serif',
									}}
								>
									{plan.name}
								</p>

								{/* Price */}
								<div className="flex items-baseline gap-1 mb-2">
									<span
										className="text-[2.5rem] sm:text-[2.75rem] font-bold text-black leading-none"
										style={{
											fontFamily:
												'var(--font-inter), system-ui, sans-serif',
											letterSpacing: '-0.03em',
										}}
									>
										${plan.price}
									</span>
									<span
										className="text-[14px] text-[#9CA3AF] font-medium"
										style={{
											fontFamily:
												'var(--font-inter), system-ui, sans-serif',
										}}
									>
										/month
									</span>
								</div>

								{/* Subline */}
								<p
									className="text-[13px] sm:text-[14px] text-[#9CA3AF] mb-6"
									style={{
										fontFamily:
											'var(--font-inter), system-ui, sans-serif',
										fontWeight: 400,
										lineHeight: 1.5,
									}}
								>
									{plan.subline}
								</p>

								{/* Divider */}
								<div className="h-px bg-[#e5e7eb] mb-6" />

								{/* Features label */}
								<p
									className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider mb-4"
									style={{
										fontFamily:
											'var(--font-inter), system-ui, sans-serif',
									}}
								>
									{plan.featuresLabel}
								</p>

								{/* Features */}
								<div className="flex flex-col gap-3 mb-8 flex-1">
									{plan.features.map((f, i) => (
										<div
											key={i}
											className="flex items-start gap-2.5"
										>
											{CHECK}
											<span
												className="text-[13px] sm:text-[14px] text-[#374151] leading-snug"
												style={{
													fontFamily:
														'var(--font-inter), system-ui, sans-serif',
													fontWeight: 400,
												}}
											>
												{f}
											</span>
										</div>
									))}
								</div>

								{/* CTA */}
								<a
									href="/contact"
									className="w-full text-center py-3 rounded-xl text-[14px] font-semibold transition-all duration-300"
									style={{
										fontFamily:
											'var(--font-inter), system-ui, sans-serif',
										background: plan.featured
											? '#111'
											: 'transparent',
										color: plan.featured ? '#fff' : '#111',
										border: plan.featured
											? '1px solid #111'
											: '1px solid #D1D5DB',
									}}
								>
									Book a Call
								</a>
							</div>
						))}
					</div>
				</div>

				{/* Enterprise card */}
				<div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 mb-14 sm:mb-16">
					<div
						className="relative rounded-2xl overflow-hidden"
						style={{
							background:
								'linear-gradient(135deg, #0a0a0b 0%, #141416 50%, #0a0a0b 100%)',
							padding: '1px',
						}}
					>
						{/* Subtle border glow */}
						<div
							className="absolute inset-0 rounded-2xl opacity-40"
							style={{
								background:
									'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)',
							}}
						/>

						<div
							className="relative rounded-2xl"
							style={{
								background:
									'linear-gradient(160deg, #0f0f11 0%, #0a0a0b 40%, #101012 100%)',
								padding: '44px 40px',
							}}
						>
							{/* Subtle radial glow in top-right */}
							<div
								className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
								style={{
									background:
										'radial-gradient(circle at top right, rgba(255,255,255,0.03) 0%, transparent 70%)',
								}}
							/>

							<div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
								{/* Left */}
								<div>
									<p
										className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-5"
										style={{
											fontFamily:
												'var(--font-inter), system-ui, sans-serif',
											color: '#555',
										}}
									>
										MULTI-LOCATION & ENTERPRISE
									</p>
									<h2
										className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-white leading-[1.15] mb-4"
										style={{
											fontFamily:
												'var(--font-inter), system-ui, sans-serif',
											letterSpacing: '-0.02em',
										}}
									>
										Running more than one location?
									</h2>
									<p
										className="text-[14px] sm:text-[15px] leading-relaxed mb-7 max-w-[480px]"
										style={{
											fontFamily:
												'var(--font-inter), system-ui, sans-serif',
											fontWeight: 400,
											color: '#7a7a85',
										}}
									>
										Franchises, restaurant groups, and
										high-volume operations get custom
										pricing based on locations and call
										volume.
									</p>

									{/* Feature pills */}
									<div className="flex flex-wrap gap-2.5">
										{[
											'Per-location agents',
											'Franchise dashboard',
											'Volume discounts',
										].map((item) => (
											<span
												key={item}
												className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[12px] sm:text-[13px]"
												style={{
													fontFamily:
														'var(--font-inter), system-ui, sans-serif',
													fontWeight: 500,
													color: '#9CA3AF',
													background:
														'rgba(255,255,255,0.04)',
													border: '1px solid rgba(255,255,255,0.06)',
												}}
											>
												<svg
													width="12"
													height="12"
													viewBox="0 0 16 16"
													fill="none"
													className="shrink-0"
												>
													<path
														d="M13.3 4.3L6 11.6L2.7 8.3"
														stroke="#555"
														strokeWidth="1.8"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												{item}
											</span>
										))}
									</div>
								</div>

								{/* Right */}
								<div className="flex lg:justify-end">
									<a
										href="/contact"
										className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
										style={{
											fontFamily:
												'var(--font-inter), system-ui, sans-serif',
											background: '#fff',
											color: '#000',
										}}
									>
										Get in Touch
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
										>
											<path
												d="M6 3l5 5-5 5"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom help line */}
				<div className="text-center">
					<p
						className="text-[13px] sm:text-[14px] text-[#9CA3AF]"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							fontWeight: 400,
						}}
					>
						Not sure which plan fits?{' '}
						<a
							href="/contact"
							className="text-[#6B7280] underline underline-offset-2 hover:text-black transition-colors duration-300"
						>
							Book a call and we&apos;ll figure it out together.
						</a>
					</p>
				</div>
			</main>

			<Footer />
		</>
	);
}
