'use client';

const CARDS = [
	{
		image: '/card1.png',
		title: 'Trained on your business',
		description:
			'Knows your menu, specials, and hours. Answers like your best staff member would.',
	},
	{
		image: '/card2.png',
		title: 'Orders, reservations, and bookings placed directly into your system',
		description:
			'The moment a call ends, everything is already in your POS or booking platform. Orders confirmed, tables reserved, no staff involvement.',
	},
	{
		image: '/card3.png',
		title: 'Your dashboard, your control',
		description:
			'Every call, order, and outcome in real time. Toggle modes and manage everything in one place.',
	},
	{
		image: '/card4.png',
		title: 'Smart escalations',
		description:
			'Recognizes when a human is needed and hands off the call instantly. Never gets in the way.',
	},
	{
		image: '/card5.png',
		title: 'Instant confirmations',
		description:
			'Every reservation triggers an automatic text. Your customers feel taken care of without your team lifting a finger.',
	},
	{
		image: '/card6.png',
		title: 'Always on, always appropriate',
		description:
			'24/7 coverage. After hours it answers questions without taking orders. Flip to info-only during a rush in one tap.',
	},
];

function BentoCard({ image, title, description, className }) {
	return (
		<div
			className={`bento-card relative overflow-hidden rounded-3xl ${className}`}
		>
			<img
				src={image}
				alt={title}
				className="absolute inset-0 w-full h-full object-cover"
				draggable={false}
			/>
			<div className="bento-card-overlay absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
				<h3
					className="text-white text-[15px] sm:text-[17px] font-semibold leading-tight mb-1.5"
					style={{
						fontFamily: 'var(--font-inter), system-ui, sans-serif',
					}}
				>
					{title}
				</h3>
				<p
					className="text-white/70 text-[13px] sm:text-[14px] leading-relaxed"
					style={{
						fontFamily: 'var(--font-inter), system-ui, sans-serif',
						fontWeight: 400,
					}}
				>
					{description}
				</p>
			</div>
		</div>
	);
}

export default function HowItWorksSection() {
	return (
		<section id="how-it-works" className="relative py-24 sm:py-32">
			<div className="w-full max-w-6xl mx-auto px-2">
				{/* Heading */}
				<div className="text-center mb-12 sm:mb-16">
					<h2
						className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-black leading-[1.1] mb-4"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							letterSpacing: '-0.03em',
						}}
					>
						More than a voice.
					</h2>
					<p
						className="text-[#6B7280] text-base sm:text-lg mx-auto"
						style={{
							fontFamily:
								'var(--font-inter), system-ui, sans-serif',
							fontWeight: 400,
							lineHeight: 1.6,
						}}
					>
						Orders placed, tables booked, questions answered. No
						staff required.
					</p>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-3">
					{/* Row 1 */}
					<BentoCard
						{...CARDS[0]}
						className="md:col-span-4 aspect-[4/3] md:aspect-auto md:h-[350px]"
					/>
					<BentoCard
						{...CARDS[1]}
						className="md:col-span-8 aspect-[4/3] md:aspect-auto md:h-[350px]"
					/>

					{/* Row 2 */}
					<BentoCard
						{...CARDS[2]}
						className="md:col-span-6 aspect-[4/3] md:aspect-auto md:h-[350px]"
					/>
					<BentoCard
						{...CARDS[3]}
						className="md:col-span-6 aspect-[4/3] md:aspect-auto md:h-[350px]"
					/>

					{/* Row 3 */}
					<BentoCard
						{...CARDS[4]}
						className="md:col-span-5 aspect-[4/3] md:aspect-auto md:h-[350px]"
					/>
					<BentoCard
						{...CARDS[5]}
						className="md:col-span-7 aspect-[4/3] md:aspect-auto md:h-[350px]"
					/>
				</div>
			</div>
		</section>
	);
}
