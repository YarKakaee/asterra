'use client';

import './BorderGlow.css';

export default function BorderGlow({
	children,
	className = '',
	borderWidth = 2,
	borderRadius = 20,
	...props
}) {
	return (
		<div
			className={`border-glow-wrapper ${className}`}
			style={{
				'--border-width': `${borderWidth}px`,
				'--border-radius': `${borderRadius}px`,
			}}
			{...props}
		>
			<div className="border-glow-animated-diffuse" />
			<div className="border-glow-animated-rim" />
			<div className="border-glow-content">{children}</div>
		</div>
	);
}
