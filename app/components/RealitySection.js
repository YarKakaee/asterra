'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const RealitySection = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
	const [activeVideoIndex, setActiveVideoIndex] = useState(null);
	const [mounted, setMounted] = useState(false);
	const videoRefs = useRef([]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
				staggerChildren: 0.12,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	const problems = [
		{
			text: 'Phones that go unanswered',
			video: '/calls.mp4',
		},
		{
			text: 'Messages that pile up',
			video: '/inbox.mp4',
		},
		{
			text: 'Follow-ups that fall through',
			video: '/forgotten.mp4',
		},
		{
			text: "Tools that don't talk to each other",
			video: '/everything.mp4',
		},
	];

	// Handle mounting
	useEffect(() => {
		setMounted(true);
	}, []);

	// Staggered video sequence
	useEffect(() => {
		if (!mounted || !isInView) return;

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;
		if (prefersReduced) return;

		let currentIndex = 0;
		const videoDuration = 3000; // 3 seconds per video
		const transitionDelay = 500; // 500ms between videos

		const playNext = () => {
			setActiveVideoIndex(currentIndex);
			currentIndex = (currentIndex + 1) % problems.length;
		};

		// Start the sequence
		playNext();

		const interval = setInterval(() => {
			playNext();
		}, videoDuration + transitionDelay);

		return () => clearInterval(interval);
	}, [mounted, isInView, problems.length]);

	// Handle video play/pause
	useEffect(() => {
		videoRefs.current.forEach((video, index) => {
			if (!video) return;
			if (index === activeVideoIndex) {
				video.play().catch(() => {});
			} else {
				video.pause();
				video.currentTime = 0;
			}
		});
	}, [activeVideoIndex]);

	return (
		<section
			ref={sectionRef}
			className="py-20 sm:py-28 lg:py-40 relative -mt-14"
		>
			{/* Background with rounded top corners */}
			<div
				className="absolute inset-0 bg-white rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] overflow-hidden border-t border-gray-200"
				style={{
					boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.05)',
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
				>
					{/* Title */}
					<motion.h2
						variants={itemVariants}
						className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1d1d1f] mb-12 sm:mb-16 lg:mb-20 text-center leading-tight"
					>
						The problems we see every day
					</motion.h2>

					{/* Problem Cards Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
						{problems.map((problem, index) => {
							const isActive = activeVideoIndex === index;
							return (
								<motion.div
									key={index}
									variants={cardVariants}
									className="group relative overflow-hidden rounded-2xl"
								>
									{/* Video Background Layer - Clear video */}
									{mounted && (
										<div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
											<video
												ref={(el) => {
													videoRefs.current[index] =
														el;
												}}
												src={problem.video}
												loop
												muted
												playsInline
												preload="auto"
												className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
													isActive
														? 'opacity-100'
														: 'opacity-0'
												}`}
											/>
										</div>
									)}

									{/* Blurred white foggy layer - soft organic gradient */}
									{mounted && isActive && (
										<div
											className="absolute inset-0 z-[5] rounded-2xl transition-opacity duration-1000 ease-out pointer-events-none"
											style={{
												background:
													'radial-gradient(ellipse 120% 100% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)',
												backdropFilter: 'blur(4px)',
												WebkitBackdropFilter:
													'blur(4px)',
											}}
										/>
									)}

									{/* Card Content */}
									<div
										className="relative z-10 h-full p-6 sm:p-8 rounded-2xl border border-gray-200/50 transition-all duration-500 hover:border-gray-300 hover:shadow-lg"
										style={{
											background: isActive
												? 'transparent'
												: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
										}}
									>
										<div className="flex items-start gap-4">
											<div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/95 backdrop-blur-sm group-hover:bg-white transition-colors duration-300 flex items-center justify-center shadow-sm">
												<span className="text-gray-500 text-lg sm:text-xl font-light">
													{index + 1}
												</span>
											</div>
											<p className="text-base sm:text-lg lg:text-xl text-[#1d1d1f] leading-relaxed pt-1 font-medium">
												{problem.text}
											</p>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>

					{/* Closing Line */}
					<motion.div variants={itemVariants} className="text-center">
						<div className="inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gray-50/80 backdrop-blur-sm border border-gray-200/50">
							<p className="text-lg sm:text-xl lg:text-2xl text-[#1d1d1f] font-semibold leading-relaxed">
								These aren&apos;t growth problems.{` `}
								<span className="text-gray-600 font-normal">
									They&apos;re operational ones.
								</span>
							</p>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default RealitySection;
