import './globals.css';
import './lib/fontawesome';
import { Syne, Instrument_Serif, DM_Sans } from 'next/font/google';

const syne = Syne({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-syne',
	display: 'swap',
});

const instrumentSerif = Instrument_Serif({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-instrument-serif',
	display: 'swap',
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-dm-sans',
	display: 'swap',
});

export const metadata = {
	title: {
		default: 'Asterra | Phone Handling for Restaurants',
		template: '%s | Asterra',
	},
	description:
		'Asterra answers every call, takes orders, and handles questions for restaurants and QSR — so your team stays on the line. Phone handling built for the rush.',
	keywords: [
		'restaurant phone handling',
		'restaurant phone answering',
		'AI phone system for restaurants',
		'QSR phone handling',
		'restaurant order taking',
		'missed calls restaurant',
		'POS phone integration',
		'restaurant phone automation Toronto',
	],
	authors: [{ name: 'Asterra Solutions Inc.' }],
	creator: 'Asterra Solutions Inc.',
	publisher: 'Asterra Solutions Inc.',
	formatDetection: { email: false, address: false, telephone: false },
	metadataBase: new URL('https://asterra.ca'),
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		locale: 'en_CA',
		url: 'https://asterra.ca',
		siteName: 'Asterra',
		title: 'Asterra | Phone Handling for Restaurants',
		description:
			'Asterra answers every call, takes orders, and handles questions for restaurants and QSR — so your team stays on the line.',
		images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Asterra — Phone Handling for Restaurants' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Asterra | Phone Handling for Restaurants',
		description:
			'Asterra answers every call, takes orders, and handles questions for restaurants and QSR.',
		images: ['/og-image.png'],
		creator: '@AsterraTeam',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${syne.variable} ${instrumentSerif.variable} ${dmSans.variable}`}>
			<body className="font-body">{children}</body>
		</html>
	);
}
