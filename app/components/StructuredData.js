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
			'Asterra provides phone handling for restaurants and QSR. Every call answered, every order captured, every location covered.',
		foundingDate: '2024',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Toronto',
			addressRegion: 'ON',
			addressCountry: 'CA',
		},
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: '+1-437-494-4696',
				contactType: 'sales',
				email: 'support@asterra.ca',
				areaServed: 'CA',
				availableLanguage: 'English',
			},
		],
		sameAs: [
			'https://www.linkedin.com/company/teamasterra/',
			'https://x.com/AsterraTeam',
			'https://www.instagram.com/asterra.ai/',
		],
	};

	return <StructuredData data={organizationData} />;
};

export const ServiceSchema = () => {
	const serviceData = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Restaurant Phone Handling',
		description:
			'Automated phone handling for restaurants and QSR. Answers calls, takes orders, handles questions, and sends orders to your POS.',
		provider: {
			'@type': 'Organization',
			name: 'Asterra Solutions Inc.',
			url: 'https://asterra.ca',
		},
		areaServed: [
			{
				'@type': 'City',
				name: 'Toronto',
			},
			{
				'@type': 'AdministrativeArea',
				name: 'Greater Toronto Area',
			},
			{
				'@type': 'Country',
				name: 'Canada',
			},
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Phone Handling Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Restaurant Phone Handling',
						description:
							'Automated inbound call handling for restaurants — answers calls, takes orders, handles questions.',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Multi-Location Phone Handling',
						description:
							'Centralized phone handling for franchise and multi-location restaurant groups.',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'POS Order Integration',
						description:
							'Phone orders sent directly to your POS system — Toast, Square, Clover, and more.',
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
