import './globals.css';
import './lib/fontawesome';

export const metadata = {
	title: {
		default: 'Asterra | Stop Losing Revenue to Daily Business Problems',
		template: '%s | Asterra',
	},
	description:
		'AI Business Automation That Actually Works. AI receptionists, customer support, lead nurturing, and website development that saves time and money. 30-day ROI guarantee or your money back.',
	keywords: [
		'AI automation',
		'business automation',
		'AI receptionist',
		'customer support AI',
		'lead nurturing',
		'website development',
		'ROI guarantee',
		'small business automation',
		'business efficiency',
		'AI solutions',
		'automation software',
		'business AI',
		'customer service automation',
		'lead generation automation',
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
		title: 'Asterra | Stop Losing Revenue to Daily Business Problems',
		description:
			'AI Business Automation That Actually Works. AI receptionists, customer support, lead nurturing, and website development that saves time and money. 30-day ROI guarantee or your money back.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Asterra AI Business Automation - Stop Losing Revenue to Daily Business Problems',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Asterra | Stop Losing Revenue to Daily Business Problems',
		description:
			'AI Business Automation That Actually Works. AI receptionists, customer support, lead nurturing, and website development that saves time and money. 30-day ROI guarantee or your money back.',
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
