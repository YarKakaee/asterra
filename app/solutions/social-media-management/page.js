'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartLine,
	faUsers,
	faBullhorn,
	faCalendarAlt,
	faRocket,
	faCheckCircle,
	faArrowRight,
	faPhone,
	faEnvelope,
	faClock,
	faDollarSign,
	faTarget,
	faHeart,
	faComments,
	faShare,
	faEye,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faFacebook,
	faTwitter,
	faLinkedin,
	faTiktok,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useMobileDetection } from '../../utils/mobileOptimization';

const fadeInUp = {
	hidden: { opacity: 0, y: 60 },
	visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const scaleIn = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const slideInLeft = {
	hidden: { opacity: 0, x: -60 },
	visible: { opacity: 1, x: 0 },
};

const slideInRight = {
	hidden: { opacity: 0, x: 60 },
	visible: { opacity: 1, x: 0 },
};

const platforms = [
	{
		name: 'Instagram',
		icon: faInstagram,
		description: 'Visual content, stories, reels, and shopping',
		color: 'from-pink-500 to-purple-600',
	},
	{
		name: 'Facebook',
		icon: faFacebook,
		description: 'Community building, events, and marketplace',
		color: 'from-blue-600 to-blue-800',
	},
	{
		name: 'LinkedIn',
		icon: faLinkedin,
		description: 'Professional networking and B2B content',
		color: 'from-blue-700 to-blue-900',
	},
	{
		name: 'TikTok',
		icon: faTiktok,
		description: 'Short-form video content and trends',
		color: 'from-black to-gray-800',
	},
	{
		name: 'Twitter/X',
		icon: faTwitter,
		description: 'Real-time updates and engagement',
		color: 'from-gray-800 to-black',
	},
	{
		name: 'YouTube',
		icon: faYoutube,
		description: 'Long-form video content and tutorials',
		color: 'from-red-600 to-red-800',
	},
];

const services = [
	{
		icon: faCalendarAlt,
		title: 'Content Planning & Scheduling',
		description:
			'Strategic content calendar tailored to your brand and audience',
		features: [
			'Monthly content planning',
			'Optimal posting times',
			'Brand voice consistency',
			'Content mix optimization',
		],
	},
	{
		icon: faBullhorn,
		title: 'Social Media Advertising',
		description:
			'Targeted ads that reach your ideal customers and drive conversions',
		features: [
			'Facebook & Instagram ads',
			'Google ads integration',
			'A/B testing',
			'Budget optimization',
		],
	},
	{
		icon: faUsers,
		title: 'Community Management',
		description:
			'Engage with your audience, respond to comments, and build relationships',
		features: [
			'24/7 comment monitoring',
			'Customer service integration',
			'Community building',
			'Crisis management',
		],
	},
	{
		icon: faChartLine,
		title: 'Analytics & Reporting',
		description:
			'Track performance and optimize your social media strategy',
		features: [
			'Monthly performance reports',
			'ROI tracking',
			'Growth metrics',
			'Competitor analysis',
		],
	},
];

const benefits = [
	{
		icon: faRocket,
		title: 'Increase Brand Awareness',
		description:
			'Reach more potential customers and build a strong online presence',
		stat: '300%',
		statLabel: 'Average reach increase',
	},
	{
		icon: faDollarSign,
		title: 'Drive More Sales',
		description:
			'Convert followers into customers with strategic content and ads',
		stat: '250%',
		statLabel: 'ROI improvement',
	},
	{
		icon: faUsers,
		title: 'Build Community',
		description: 'Create loyal customers who advocate for your brand',
		stat: '400%',
		statLabel: 'Engagement boost',
	},
	{
		icon: faClock,
		title: 'Save Time',
		description: 'Focus on your business while we handle your social media',
		stat: '20+',
		statLabel: 'Hours saved weekly',
	},
];

const pricingPlans = [
	{
		name: 'Starter',
		price: '$497',
		period: '/month',
		description: 'Perfect for small businesses getting started',
		features: [
			'2 social media platforms',
			'15 posts per month',
			'Basic analytics report',
			'Email support',
			'Content creation',
		],
		cta: 'Get Started',
		popular: false,
	},
	{
		name: 'Growth',
		price: '$997',
		period: '/month',
		description: 'Ideal for growing businesses',
		features: [
			'4 social media platforms',
			'30 posts per month',
			'Advanced analytics',
			'Priority support',
			'Content + ads management',
			'Community management',
		],
		cta: 'Most Popular',
		popular: true,
	},
	{
		name: 'Enterprise',
		price: '$1,997',
		period: '/month',
		description: 'For established businesses with high volume',
		features: [
			'All social media platforms',
			'Unlimited posts',
			'Custom analytics dashboard',
			'Dedicated account manager',
			'Full-service management',
			'Crisis management',
			'Competitor analysis',
		],
		cta: 'Contact Sales',
		popular: false,
	},
];

const testimonials = [
	{
		name: 'Sarah Chen',
		role: 'Owner, Bloom Beauty Salon',
		content:
			'Asterra transformed our social media presence. We went from 200 followers to 5,000 in just 3 months, and our bookings increased by 300%.',
		avatar: 'SC',
	},
	{
		name: 'Mike Rodriguez',
		role: 'Manager, Rodriguez Restaurant',
		content:
			'The team handles everything - posting, responding to customers, running ads. Our online orders increased by 400% and we save 15 hours per week.',
		avatar: 'MR',
	},
	{
		name: 'Jennifer Park',
		role: 'CEO, Park Legal Services',
		content:
			"Professional, reliable, and results-driven. Our LinkedIn presence has grown exponentially and we're getting qualified leads every week.",
		avatar: 'JP',
	},
];

const faqData = [
	{
		question: 'How quickly will I see results?',
		answer: 'Most clients see increased engagement within 2-3 weeks and significant growth in followers and sales within 2-3 months.',
	},
	{
		question: 'Do you create all the content?',
		answer: 'Yes! We handle everything from content creation and graphic design to posting and community management. You just approve the content.',
	},
	{
		question: 'Which social media platforms do you manage?',
		answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and YouTube. We'll recommend the best platforms for your business.",
	},
	{
		question: 'How do you measure success?',
		answer: "We track key metrics like follower growth, engagement rates, website traffic, leads generated, and ROI. You'll receive detailed monthly reports.",
	},
	{
		question: 'Can I cancel anytime?',
		answer: "Yes, you can cancel with 30 days notice. However, we're confident you'll love the results and want to continue growing with us.",
	},
	{
		question: 'Do you work with any industry?',
		answer: 'Yes! We work with businesses across all industries - from restaurants and salons to professional services and e-commerce.',
	},
];

export default function SocialMediaManagementPage() {
	const isMobile = useMobileDetection();
	const heroRef = useRef(null);
	const platformsRef = useRef(null);
	const servicesRef = useRef(null);
	const benefitsRef = useRef(null);
	const pricingRef = useRef(null);
	const testimonialsRef = useRef(null);
	const faqRef = useRef(null);

	const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
	const platformsInView = useInView(platformsRef, {
		once: true,
		margin: '-100px',
	});
	const servicesInView = useInView(servicesRef, {
		once: true,
		margin: '-100px',
	});
	const benefitsInView = useInView(benefitsRef, {
		once: true,
		margin: '-100px',
	});
	const pricingInView = useInView(pricingRef, {
		once: true,
		margin: '-100px',
	});
	const testimonialsInView = useInView(testimonialsRef, {
		once: true,
		margin: '-100px',
	});
	const faqInView = useInView(faqRef, { once: true, margin: '-100px' });

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section
				ref={heroRef}
				className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100"
			>
				{/* Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial="hidden"
						animate={heroInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="space-y-8"
					>
						<motion.div variants={fadeInUp} className="space-y-6">
							<div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full shadow-lg">
								<FontAwesomeIcon
									icon={faRocket}
									className="w-4 h-4 text-orange-500 mr-2"
								/>
								<span className="text-sm font-medium text-gray-700">
									Social Media Management
								</span>
							</div>

							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
								Grow Your Business with
								<span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
									Social Media
								</span>
							</h1>

							<p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
								Stop struggling with social media. We handle
								everything - content creation, posting, ads, and
								community management - so you can focus on
								running your business.
							</p>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<Link href="/book-demo">
								<motion.div
									className="inline-flex items-center px-8 py-4 bg-[#FF5633] text-white text-lg font-semibold rounded-lg shadow-lg cursor-pointer"
									whileHover={{
										scale: 1.05,
										boxShadow:
											'0 20px 40px rgba(255, 86, 51, 0.3)',
									}}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									Get Started Today
									<FontAwesomeIcon
										icon={faArrowRight}
										className="ml-2 w-5 h-5"
									/>
								</motion.div>
							</Link>

							<motion.div
								onClick={() =>
									document
										.getElementById('how-it-works')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								className="inline-flex items-center px-8 py-4 border-2 border-[#FF5633] text-[#FF5633] text-lg font-semibold rounded-lg hover:bg-[#FF5633] hover:text-white transition-colors duration-200 cursor-pointer"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								See How It Works
							</motion.div>
						</motion.div>

						<motion.div variants={fadeInUp} className="pt-8">
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
								<div className="text-center">
									<div className="text-3xl md:text-4xl font-bold text-[#FF5633]">
										300%
									</div>
									<div className="text-sm text-gray-600">
										Average reach increase
									</div>
								</div>
								<div className="text-center">
									<div className="text-3xl md:text-4xl font-bold text-[#FF5633]">
										250%
									</div>
									<div className="text-sm text-gray-600">
										ROI improvement
									</div>
								</div>
								<div className="text-center">
									<div className="text-3xl md:text-4xl font-bold text-[#FF5633]">
										20+
									</div>
									<div className="text-sm text-gray-600">
										Hours saved weekly
									</div>
								</div>
								<div className="text-center">
									<div className="text-3xl md:text-4xl font-bold text-[#FF5633]">
										30-Day
									</div>
									<div className="text-sm text-gray-600">
										ROI guarantee
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Platforms Section */}
			<section ref={platformsRef} className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						animate={platformsInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2
							variants={fadeInUp}
							className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
						>
							We Manage All Major Platforms
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-600 max-w-3xl mx-auto"
						>
							From Instagram to LinkedIn, we create
							platform-specific content that resonates with your
							audience and drives results.
						</motion.p>
					</motion.div>

					<motion.div
						initial="hidden"
						animate={platformsInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{platforms.map((platform, index) => (
							<motion.div
								key={platform.name}
								variants={scaleIn}
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
							>
								<div
									className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<FontAwesomeIcon
										icon={platform.icon}
										className="w-8 h-8 text-white"
									/>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{platform.name}
								</h3>
								<p className="text-gray-600">
									{platform.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Services Section */}
			<section
				ref={servicesRef}
				id="how-it-works"
				className="py-20 bg-white"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						animate={servicesInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2
							variants={fadeInUp}
							className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
						>
							Complete Social Media Management
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-600 max-w-3xl mx-auto"
						>
							We handle every aspect of your social media presence
							so you can focus on what you do best.
						</motion.p>
					</motion.div>

					<motion.div
						initial="hidden"
						animate={servicesInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 gap-12"
					>
						{services.map((service, index) => (
							<motion.div
								key={service.title}
								variants={
									index % 2 === 0 ? slideInLeft : slideInRight
								}
								className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<div className="flex items-start space-x-6">
									<div className="flex-shrink-0">
										<div className="w-16 h-16 bg-gradient-to-r from-[#FF5633] to-orange-500 rounded-2xl flex items-center justify-center">
											<FontAwesomeIcon
												icon={service.icon}
												className="w-8 h-8 text-white"
											/>
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-gray-900 mb-3">
											{service.title}
										</h3>
										<p className="text-gray-600 mb-6">
											{service.description}
										</p>
										<ul className="space-y-2">
											{service.features.map(
												(feature, featureIndex) => (
													<li
														key={featureIndex}
														className="flex items-center text-gray-700"
													>
														<FontAwesomeIcon
															icon={faCheckCircle}
															className="w-4 h-4 text-green-500 mr-3"
														/>
														{feature}
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section
				ref={benefitsRef}
				className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						animate={benefitsInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2
							variants={fadeInUp}
							className="text-4xl md:text-5xl font-bold text-white mb-6"
						>
							Why Choose Our Social Media Management?
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-300 max-w-3xl mx-auto"
						>
							We don't just post content - we build communities,
							drive sales, and grow your business.
						</motion.p>
					</motion.div>

					<motion.div
						initial="hidden"
						animate={benefitsInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
								variants={scaleIn}
								className="text-center group"
							>
								<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
									<div className="w-16 h-16 bg-gradient-to-r from-[#FF5633] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
										<FontAwesomeIcon
											icon={benefit.icon}
											className="w-8 h-8 text-white"
										/>
									</div>
									<div className="text-4xl font-bold text-white mb-2">
										{benefit.stat}
									</div>
									<div className="text-sm text-gray-300 mb-4">
										{benefit.statLabel}
									</div>
									<h3 className="text-xl font-bold text-white mb-3">
										{benefit.title}
									</h3>
									<p className="text-gray-300">
										{benefit.description}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Pricing Section */}
			<section ref={pricingRef} className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						animate={pricingInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2
							variants={fadeInUp}
							className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
						>
							Simple, Transparent Pricing
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-600 max-w-3xl mx-auto"
						>
							Choose the plan that fits your business needs. All
							plans include our 30-day ROI guarantee.
						</motion.p>
					</motion.div>

					<motion.div
						initial="hidden"
						animate={pricingInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						{pricingPlans.map((plan, index) => (
							<motion.div
								key={plan.name}
								variants={scaleIn}
								className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
									plan.popular
										? 'ring-2 ring-[#FF5633] scale-105'
										: ''
								}`}
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="bg-[#FF5633] text-white px-4 py-2 rounded-full text-sm font-semibold">
											Most Popular
										</span>
									</div>
								)}
								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{plan.name}
									</h3>
									<p className="text-gray-600 mb-4">
										{plan.description}
									</p>
									<div className="flex items-baseline justify-center">
										<span className="text-5xl font-bold text-gray-900">
											{plan.price}
										</span>
										<span className="text-gray-600 ml-2">
											{plan.period}
										</span>
									</div>
								</div>
								<ul className="space-y-4 mb-8">
									{plan.features.map(
										(feature, featureIndex) => (
											<li
												key={featureIndex}
												className="flex items-center text-gray-700"
											>
												<FontAwesomeIcon
													icon={faCheckCircle}
													className="w-5 h-5 text-green-500 mr-3"
												/>
												{feature}
											</li>
										)
									)}
								</ul>
								<Link href="/book-demo">
									<motion.div
										className={`w-full py-4 px-6 rounded-lg font-semibold text-center cursor-pointer transition-all duration-200 ${
											plan.popular
												? 'bg-[#FF5633] text-white hover:bg-orange-600'
												: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
										}`}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										{plan.cta}
									</motion.div>
								</Link>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section ref={testimonialsRef} className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						animate={testimonialsInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2
							variants={fadeInUp}
							className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
						>
							What Our Clients Say
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-600 max-w-3xl mx-auto"
						>
							Don't just take our word for it - hear from
							businesses that have transformed their social media
							presence with us.
						</motion.p>
					</motion.div>

					<motion.div
						initial="hidden"
						animate={testimonialsInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.name}
								variants={scaleIn}
								className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<div className="flex items-center mb-6">
									<div className="w-12 h-12 bg-gradient-to-r from-[#FF5633] to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
										{testimonial.avatar}
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-semibold text-gray-900">
											{testimonial.name}
										</h4>
										<p className="text-gray-600">
											{testimonial.role}
										</p>
									</div>
								</div>
								<p className="text-gray-700 italic">
									"{testimonial.content}"
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section ref={faqRef} className="py-20 bg-gray-50">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial="hidden"
						animate={faqInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="text-center mb-16"
					>
						<motion.h2
							variants={fadeInUp}
							className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
						>
							Frequently Asked Questions
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-600"
						>
							Got questions? We've got answers.
						</motion.p>
					</motion.div>

					<motion.div
						initial="hidden"
						animate={faqInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="space-y-6"
					>
						{faqData.map((faq, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{faq.question}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{faq.answer}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-[#FF5633] to-orange-500">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial="hidden"
						animate={faqInView ? 'visible' : 'hidden'}
						variants={staggerContainer}
						className="space-y-8"
					>
						<motion.h2
							variants={fadeInUp}
							className="text-4xl md:text-5xl font-bold text-white"
						>
							Ready to Transform Your Social Media?
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-xl text-white/90 max-w-2xl mx-auto"
						>
							Join hundreds of businesses that have grown their
							online presence and increased sales with our social
							media management services.
						</motion.p>
						<motion.div
							variants={fadeInUp}
							className="flex flex-col sm:flex-row gap-4 justify-center"
						>
							<Link href="/book-demo">
								<motion.div
									className="inline-flex items-center px-8 py-4 bg-white text-[#FF5633] text-lg font-semibold rounded-lg shadow-lg cursor-pointer"
									whileHover={{
										scale: 1.05,
										boxShadow:
											'0 20px 40px rgba(255, 255, 255, 0.3)',
									}}
									whileTap={{ scale: 0.98 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									Get Started Today
									<FontAwesomeIcon
										icon={faArrowRight}
										className="ml-2 w-5 h-5"
									/>
								</motion.div>
							</Link>
							<Link href="/contact-sales">
								<motion.div
									className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-[#FF5633] transition-colors duration-200 cursor-pointer"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									Contact Sales
								</motion.div>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
