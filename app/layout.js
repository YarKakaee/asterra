import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata = {
	title: {
		template: '%s | Asterra',
		default: 'Asterra | Smarter Phone Handling that Answers, Books, and Orders',
	},
	description:
		'Asterra connects directly to your POS, reservation, and booking systems. Our AI phone agent handles calls, takes orders, and books reservations so you never miss a customer.',
	metadataBase: new URL('https://asterra.ca'),
	openGraph: {
		title: 'Asterra | Smarter Phone Handling that Answers, Books, and Orders',
		description:
			'Asterra connects directly to your POS, reservation, and booking systems. Our AI phone agent handles calls, takes orders, and books reservations so you never miss a customer.',
		url: 'https://asterra.ca',
		siteName: 'Asterra',
		locale: 'en_CA',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Asterra | Smarter Phone Handling that Answers, Books, and Orders',
		description:
			'Asterra connects directly to your POS, reservation, and booking systems. Our AI phone agent handles calls, takes orders, and books reservations so you never miss a customer.',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="font-sans">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
