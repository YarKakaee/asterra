import './globals.css';
import './lib/fontawesome';

export const metadata = {
	title: 'Asterra | Stop Losing Revenue to Daily Business Problems',
	description: 'Asterra application',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="page-bg">{children}</body>
		</html>
	);
}
