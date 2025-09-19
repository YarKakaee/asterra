export const metadata = {
	title: 'Book Free Demo | See AI Automation in Action',
	description:
		'Book a free 30-minute demo to see how AI automation can transform your business. Get a custom ROI report and see real results. No commitment required.',
	keywords: [
		'book demo',
		'AI automation demo',
		'free business consultation',
		'AI solutions demo',
		'business automation demo',
		'ROI report',
		'AI consultation',
		'business transformation demo',
		'automation demo',
		'AI business demo',
	],
	openGraph: {
		title: 'Book Free Demo | See AI Automation in Action',
		description:
			'Book a free 30-minute demo to see how AI automation can transform your business. Get a custom ROI report and see real results. No commitment required.',
		url: 'https://asterra.ca/book-demo',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Book Free Asterra Demo - See AI Automation in Action',
			},
		],
	},
	twitter: {
		title: 'Book Free Demo | See AI Automation in Action',
		description:
			'Book a free 30-minute demo to see how AI automation can transform your business. Get a custom ROI report and see real results. No commitment required.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://asterra.ca/book-demo',
	},
};

export default function BookDemoLayout({ children }) {
	return children;
}
