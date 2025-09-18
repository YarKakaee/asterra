'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CanvasVideoWord from './CanvasVideoWord';

const PROBLEMS = [
	{ text: 'Missed Calls.', src: '/calls.mp4' },
	{ text: 'Overwhelmed Inbox.', src: '/inbox.mp4' },
	{ text: 'Forgotten Follow-Ups.', src: '/forgotten.mp4' },
	{ text: 'Lost Leads.', src: '/leads.mp4' },
	{ text: 'Slow Responses.', src: '/responses.mp4' },
	{ text: 'Everything Else.', src: '/everything.mp4' },
];

const Reclaim = () => {
	const [mounted, setMounted] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReduced) return;
		const id = setInterval(() => {
			setActiveIndex((i) => (i + 1) % PROBLEMS.length);
		}, 2400);
		return () => clearInterval(id);
	}, []);

	return (
		<section className="py-12 sm:py-20 lg:py-28 relative">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h3 className="text-base sm:text-lg font-medium text-gray-700 mb-4 sm:mb-6">
					Reclaim Your Time
				</h3>

				{/* tighter gap on mobile; roomier on desktop */}
				<div className="mb-8 sm:mb-12 flex flex-col gap-3 sm:gap-4">
					{PROBLEMS.map((p, i) => (
						<div key={p.text}>
							{mounted ? (
								<CanvasVideoWord
									text={p.text}
									src={p.src}
									active={i === activeIndex}
									// you can tune these per your brand
									activeSize="text-[clamp(1rem,8vw,5.3rem)]"
									inactiveSize="text-[clamp(1.6rem,6.5vw,3.25rem)]"
								/>
							) : (
								<span className="text-[clamp(1.6rem,6.5vw,3.25rem)] font-extrabold leading-[0.95] tracking-tight text-gray-300">
									{p.text}
								</span>
							)}
						</div>
					))}
				</div>

				{mounted ? (
					<motion.div>
						<motion.a
							href="#"
							className="inline-flex items-center sm:px-8 px-5 sm:py-4 py-3 bg-[#FF5633] text-white text-sm sm:text-lg font-semibold rounded-lg shadow-lg"
							whileHover={{
								scale: 1.05,
								boxShadow: '0 20px 40px rgba(255, 86, 51, 0.3)',
							}}
							whileTap={{ scale: 0.98 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 20,
							}}
						>
							Diagnose My Business Problems
						</motion.a>
					</motion.div>
				) : (
					<div>
						<a
							href="/book-demo"
							className="inline-flex items-center sm:px-8 px-5 sm:py-4 py-3 bg-[#FF5633] text-white text-sm sm:text-lg font-semibold rounded-lg shadow-lg"
						>
							Diagnose My Business Problems
						</a>
					</div>
				)}
			</div>
		</section>
	);
};

export default Reclaim;
