import './globals.css';
import './lib/fontawesome';

export const metadata = {
	title: {
		default:
			'Asterra | Streamline Operations & Elevate Customer Experiences',
		template: '%s | Asterra',
	},
	description:
		'Asterra provides modern automation tools for service-based brands. Handle high call volumes, manage bookings effortlessly, and deliver exceptional guest experiences without the overhead.',
	keywords: [
		'business automation',
		'service business software',
		'restaurant automation',
		'phone handling system',
		'customer experience platform',
		'business operations software',
		'automated booking system',
		'digital front desk',
	],
	authors: [{ name: 'Asterra Solutions Inc.' }],
	creator: 'Asterra Solutions Inc.',
	publisher: 'Asterra Solutions Inc.',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://asterra.ca'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'en_CA',
		url: 'https://asterra.ca',
		siteName: 'Asterra',
		title: 'Asterra | Streamline Operations & Elevate Customer Experiences',
		description:
			'Asterra provides modern automation tools for service-based brands. Handle high call volumes, manage bookings effortlessly, and deliver exceptional guest experiences without the overhead.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Asterra Business Automation - Built for Service Based Brands',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Asterra | Streamline Operations & Elevate Customer Experiences',
		description:
			'Asterra provides modern automation tools for service-based brands. Handle high call volumes, manage bookings effortlessly, and deliver exceptional guest experiences without the overhead.',
		images: ['/og-image.png'],
		creator: '@AsterraTeam',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="page-bg">{children}</body>
		</html>
	);
}
