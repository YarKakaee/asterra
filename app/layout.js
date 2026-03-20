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
	title: 'Asterra',
	description: 'Asterra',
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
