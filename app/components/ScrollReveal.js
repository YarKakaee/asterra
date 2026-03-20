'use client';

import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function ScrollReveal({
	children,
	delay = 0,
	duration = 0.6,
	y = 24,
	once = true,
	margin = '-80px',
	className = '',
	...props
}) {
	const shouldReduce = useReducedMotion();

	return (
		<motion.div
			initial={shouldReduce ? false : { opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once, margin }}
			transition={
				shouldReduce
					? { duration: 0 }
					: { duration, delay, ease: EASE }
			}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	);
}
