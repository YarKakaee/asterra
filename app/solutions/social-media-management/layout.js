export const metadata = {
	title: 'Social Media Management | Grow Your Business Online',
	description:
		'Transform your social media presence with our complete management service. Content creation, posting, ads, and community management. Increase reach by 300% and ROI by 250%. 30-day guarantee.',
	keywords: [
		'social media management',
		'social media marketing',
		'content creation',
		'social media advertising',
		'community management',
		'Instagram management',
		'Facebook management',
		'LinkedIn management',
		'TikTok management',
		'social media strategy',
		'brand awareness',
		'lead generation',
		'social media ROI',
		'online presence',
		'digital marketing',
		'social media agency',
		'content calendar',
		'social media analytics',
		'engagement growth',
		'follower growth',
	],
	authors: [{ name: 'Asterra Team' }],
	creator: 'Asterra',
	publisher: 'Asterra Solutions Inc.',
	openGraph: {
		title: 'Social Media Management | Grow Your Business Online',
		description:
			'Transform your social media presence with our complete management service. Content creation, posting, ads, and community management. Increase reach by 300% and ROI by 250%. 30-day guarantee.',
		url: 'https://asterra.ca/solutions/social-media-management',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Asterra Social Media Management - Grow Your Business Online',
			},
		],
	},
	twitter: {
		title: 'Social Media Management | Grow Your Business Online',
		description:
			'Transform your social media presence with our complete management service. Content creation, posting, ads, and community management. Increase reach by 300% and ROI by 250%. 30-day guarantee.',
		images: ['/og-image.png'],
	},
	alternates: {
		canonical: 'https://asterra.ca/solutions/social-media-management',
	},
};

export default function SocialMediaManagementLayout({ children }) {
	return <>{children}</>;
}

