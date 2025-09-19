'use client';

import React from 'react';

const StructuredData = ({ data }) => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
};

export const OrganizationSchema = () => {
	const organizationData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Asterra Solutions Inc.',
		alternateName: 'Asterra',
		url: 'https://asterra.ca',
		logo: 'https://asterra.ca/footerlogo.png',
		description:
			'AI business automation solutions that save time and money. AI receptionists, customer support, lead nurturing, and website development with 30-day ROI guarantee.',
		foundingDate: '2024',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'CA',
		},
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: '+1-XXX-XXX-XXXX',
				contactType: 'customer service',
				email: 'support@asterra.ca',
			},
			{
				'@type': 'ContactPoint',
				telephone: '+1-XXX-XXX-XXXX',
				contactType: 'sales',
				email: 'sales@asterra.ca',
			},
		],
		sameAs: [
			'https://www.linkedin.com/company/teamasterra/',
			'https://x.com/AsterraTeam',
			'https://www.instagram.com/asterraai/',
		],
		offers: {
			'@type': 'Offer',
			description:
				'AI business automation solutions with 30-day ROI guarantee',
			priceCurrency: 'CAD',
			availability: 'https://schema.org/InStock',
		},
	};

	return <StructuredData data={organizationData} />;
};

export const ServiceSchema = () => {
	const serviceData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'AI Business Automation',
		description:
			'Comprehensive AI automation solutions for businesses including AI receptionists, customer support, lead nurturing, and website development.',
		provider: {
			'@type': 'Organization',
			name: 'Asterra Solutions Inc.',
			url: 'https://asterra.ca',
		},
		areaServed: {
			'@type': 'Country',
			name: 'Canada',
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'AI Automation Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI Receptionist',
						description: '24/7 automated phone and chat support',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI Customer Support',
						description: 'Automated customer service and support',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI Lead Nurturing',
						description: 'Automated lead follow-up and conversion',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI Website Development',
						description: 'Custom business websites built by AI',
					},
				},
			],
		},
	};

	return <StructuredData data={serviceData} />;
};

export const FAQSchema = ({ faqs }) => {
	const faqData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.detailedAnswer,
			},
		})),
	};

	return <StructuredData data={faqData} />;
};

export default StructuredData;
