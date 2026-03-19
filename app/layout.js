import './globals.css';

export const metadata = {
	title: 'Asterra',
	description: 'Asterra',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
