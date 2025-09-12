'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
	ChevronDown,
	Clock,
	Shield,
	TrendingUp,
	Lock,
	Users,
	Zap,
	CheckCircle,
} from 'lucide-react';
import { useMobileDetection } from '../utils/mobileOptimization';

const FAQSection = () => {
	const [openFAQ, setOpenFAQ] = useState(null);
	const { isMobile } = useMobileDetection();
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const faqData = [
		{
			id: 1,
			category: 'Implementation',
			question: 'How long does implementation take?',
			shortAnswer: 'Most solutions are live within 2-3 weeks',
			detailedAnswer:
				'We follow a proven 4-phase process: Week 1 is diagnosis and design, Week 2 is building and testing, Week 3 is deployment and training, with ongoing optimization afterward. Simple solutions like AI receptionists can be ready in 7-10 days, while complex multi-system integrations may take 3-4 weeks.',
			highlight: 'Average: 18 days from start to results',
			icon: 'Clock',
		},
		{
			id: 2,
			category: 'Reliability',
			question: 'What if the automation breaks or makes mistakes?',
			shortAnswer: 'Built-in failsafes + 24/7 monitoring + human backup',
			detailedAnswer:
				'Every automation includes multiple safety layers: intelligent error detection, automatic fallback to human staff when needed, and real-time monitoring that alerts us instantly if anything goes wrong. We also include a confidence threshold - if the AI is not 95% sure about a response, it escalates to your team.',
			highlight: '99.7% uptime guarantee with instant human backup',
			icon: 'Shield',
		},
		{
			id: 3,
			category: 'Business Size',
			question: 'Is this worth it for smaller businesses?',
			shortAnswer:
				'Especially valuable for small businesses - bigger impact per dollar',
			detailedAnswer:
				'Small businesses often see the biggest ROI because every missed call or delayed follow-up hurts more. Our starter packages are designed for 5-50 employee businesses. A restaurant saving 10 hours of admin work weekly at $25/hour saves $13,000 annually - far more than our fees.',
			highlight: 'Small business clients average 340% ROI in year one',
			icon: 'TrendingUp',
		},
		{
			id: 4,
			category: 'Support',
			question: 'What ongoing support do you provide?',
			shortAnswer:
				'Dedicated account manager + optimization + unlimited adjustments',
			detailedAnswer:
				'You get a dedicated account manager who knows your business, monthly optimization reviews to improve performance, unlimited small adjustments to workflows, and priority support with guaranteed 4-hour response times. We also provide detailed monthly reports showing exactly how much time and money you&apos;re saving.',
			highlight: 'Dedicated support team, not just a help desk',
			icon: 'Users',
		},
		{
			id: 5,
			category: 'ROI',
			question: 'How quickly will we see results?',
			shortAnswer: 'Most clients see positive ROI within 30 days',
			detailedAnswer:
				'Simple automations like AI receptionists show immediate results - you&apos;ll see more calls answered from day one. Complex workflows typically show measurable improvements within 2-3 weeks. We guarantee positive ROI within 60 days or we&apos;ll refund your setup fee and optimize until you&apos;re profitable.',
			highlight: '60-day ROI guarantee - results or refund',
			icon: 'Zap',
		},
	];

	const iconMap = {
		Clock,
		Shield,
		TrendingUp,
		Lock,
		Users,
		Zap,
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section
			ref={ref}
			className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
		>
			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ duration: 0.8 }}
				>
					{/* Glass Badge */}
					<motion.div
						className="inline-flex items-center px-6 py-3 rounded-full mb-8"
						style={{
							background:
								'linear-gradient(135deg, rgba(255, 107, 71, 0.15) 0%, rgba(255, 107, 71, 0.08) 50%, rgba(255, 107, 71, 0.12) 100%)',
							backdropFilter: 'blur(12px) saturate(180%)',
							border: '1px solid rgba(255, 107, 71, 0.2)',
							borderTop: '1px solid rgba(255, 107, 71, 0.3)',
							borderBottom: '1px solid rgba(255, 107, 71, 0.1)',
							boxShadow: `
								0 4px 24px rgba(255, 107, 71, 0.1),
								0 1px 0 rgba(255, 255, 255, 0.8) inset,
								0 0 20px rgba(255, 107, 71, 0.05)
							`,
						}}
					>
						<span className="text-sm font-semibold text-[#FF5633] tracking-wide">
							ANSWERS YOU CARE ABOUT
						</span>
					</motion.div>

					<motion.h2
						className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						What Business Owners Ask Before Automating
					</motion.h2>

					<motion.p
						className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ delay: 0.6, duration: 0.8 }}
					>
						Here are the most common questions we hear from owners
						like you — and the clear answers that show exactly what
						to expect.
					</motion.p>
				</motion.div>

				{/* FAQ Accordion */}
				<motion.div
					className="space-y-4"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{faqData.map((faq, index) => (
						<FAQItem
							key={faq.id}
							faq={faq}
							isOpen={openFAQ === faq.id}
							onToggle={() =>
								setOpenFAQ(openFAQ === faq.id ? null : faq.id)
							}
							index={index}
							iconMap={iconMap}
							isMobile={isMobile}
							variants={itemVariants}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

// Individual FAQ Item Component
const FAQItem = ({
	faq,
	isOpen,
	onToggle,
	index,
	iconMap,
	isMobile,
	variants,
}) => {
	const IconComponent = iconMap[faq.icon];

	return (
		<motion.div
			variants={variants}
			className={`rounded-2xl overflow-hidden transition-all duration-300 ${
				isOpen ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
			}`}
			style={{
				background: isOpen
					? 'rgba(255, 255, 255, 0.95)'
					: 'rgba(255, 255, 255, 0.8)',
				backdropFilter: isMobile
					? 'blur(16px)'
					: 'blur(20px) saturate(180%)',
				border: `1px solid ${
					isOpen
						? 'rgba(44, 75, 124, 0.3)'
						: 'rgba(255, 255, 255, 0.3)'
				}`,
				borderTop: `2px solid ${
					isOpen
						? 'rgba(44, 75, 124, 0.4)'
						: 'rgba(255, 255, 255, 0.8)'
				}`,
			}}
			whileHover={{
				y: -2,
				boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
			}}
		>
			<button
				onClick={onToggle}
				className="cursor-pointer w-full p-6 text-left focus:outline-none transition-colors duration-200 hover:bg-black/5"
				aria-expanded={isOpen}
			>
				<div className="flex items-start gap-4">
					{/* Icon */}
					<div
						className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
						style={{
							background:
								'linear-gradient(135deg, #FF5633 0%, #F97316 100%)',
							boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
						}}
					>
						<IconComponent size={20} />
					</div>

					{/* Content */}
					<div className="flex-1 min-w-0">
						<h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
							{faq.question}
						</h3>
						<p className="text-gray-600 text-sm font-medium">
							{faq.shortAnswer}
						</p>
					</div>

					{/* Chevron */}
					<motion.div
						className="text-gray-400 flex-shrink-0"
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<ChevronDown size={20} />
					</motion.div>
				</div>
			</button>

			{/* Detailed Content */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="overflow-hidden"
					>
						<div className="px-6 pb-6">
							<div className="pl-16">
								<p className="text-gray-700 text-base leading-relaxed mb-4">
									{faq.detailedAnswer}
								</p>
								<div
									className="flex items-center gap-3 p-4 rounded-xl"
									style={{
										background:
											'linear-gradient(135deg, rgba(234, 88, 12, 0.05), rgba(249, 115, 22, 0.05))',
										border: '1px solid rgba(234, 88, 12, 0.2)',
									}}
								>
									<CheckCircle
										size={20}
										className="text-green-600 flex-shrink-0"
									/>
									<span className="font-semibold text-gray-900 text-sm">
										{faq.highlight}
									</span>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default FAQSection;
