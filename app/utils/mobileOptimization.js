import { useState, useEffect } from 'react';

// Mobile optimization utilities for better performance
export const useMobileDetection = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(
				window.innerWidth < 768 ||
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					)
			);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return isMobile;
};

// Optimized animation variants for mobile
export const createMobileOptimizedVariants = (isMobile) => ({
	// Reduced durations and simpler animations for mobile
	fastTransition: {
		duration: isMobile ? 0.2 : 0.4,
		ease: 'easeOut',
	},

	mediumTransition: {
		duration: isMobile ? 0.3 : 0.6,
		ease: 'easeOut',
	},

	slowTransition: {
		duration: isMobile ? 0.4 : 0.8,
		ease: 'easeOut',
	},

	// Disable heavy animations on mobile
	infiniteAnimation: isMobile
		? {}
		: {
				repeat: Infinity,
				ease: 'easeInOut',
		  },

	// Reduced motion for mobile
	hoverScale: {
		scale: isMobile ? 1.01 : 1.02,
		transition: { duration: isMobile ? 0.15 : 0.3 },
	},

	// Simplified stagger for mobile
	staggerChildren: isMobile ? 0.05 : 0.1,
});

// Performance-optimized animation props
export const getMobileOptimizedProps = (isMobile) => ({
	// Reduce blur effects on mobile
	backdropFilter: isMobile ? 'blur(8px)' : 'blur(16px)',

	// Simpler shadows on mobile
	boxShadow: isMobile
		? '0 4px 12px rgba(0, 0, 0, 0.1)'
		: '0 8px 32px rgba(0, 0, 0, 0.12)',

	// Disable 3D transforms on mobile
	transformStyle: isMobile ? 'flat' : 'preserve-3d',
});
