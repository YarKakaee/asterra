'use client';

import { useState, useEffect, useCallback } from 'react';

const ORDER_ITEMS = [
	{ name: 'Margherita Pizza', qty: 'x 1' },
	{ name: 'Pasta Arrabbiata', qty: 'x 1' },
	{ name: 'Sparkling Water', qty: 'x 2' },
];

const CYCLE_DURATION = 8000;
const ITEM_STAGGER = 1250;
const ITEMS_START_DELAY = 700;
const PROGRESS_START_DELAY =
	ITEMS_START_DELAY + ORDER_ITEMS.length * ITEM_STAGGER + 400;
const PROGRESS_DURATION = 2400;
const SENT_DISPLAY_DURATION = 2000;

export default function OrderCard({ visible }) {
	const [cycle, setCycle] = useState(0);
	const [itemsVisible, setItemsVisible] = useState([]);
	const [progressWidth, setProgressWidth] = useState(0);
	const [sent, setSent] = useState(false);
	const [cardVisible, setCardVisible] = useState(false);

	const runCycle = useCallback(() => {
		setCardVisible(false);
		setItemsVisible([]);
		setProgressWidth(0);
		setSent(false);

		// Card fades in
		const t0 = setTimeout(() => setCardVisible(true), 100);

		// Items stagger in
		const itemTimers = ORDER_ITEMS.map((_, i) => {
			return setTimeout(
				() => {
					setItemsVisible((prev) => [...prev, i]);
				},
				ITEMS_START_DELAY + i * ITEM_STAGGER,
			);
		});

		// Progress bar starts
		const t1 = setTimeout(() => {
			setProgressWidth(100);
		}, PROGRESS_START_DELAY);

		// Sent confirmation
		const t2 = setTimeout(() => {
			setSent(true);
		}, PROGRESS_START_DELAY + PROGRESS_DURATION);

		// Restart cycle
		const t3 = setTimeout(
			() => {
				setCycle((c) => c + 1);
			},
			PROGRESS_START_DELAY + PROGRESS_DURATION + SENT_DISPLAY_DURATION,
		);

		return [t0, ...itemTimers, t1, t2, t3];
	}, []);

	useEffect(() => {
		if (!visible) return;
		const timers = runCycle();
		return () => timers.forEach(clearTimeout);
	}, [visible, cycle, runCycle]);

	return (
		<div
			className="absolute -bottom-14 left-8 z-20 w-[280px] sm:w-[300px]"
			style={{
				opacity: cardVisible ? 1 : 0,
				transform: cardVisible ? 'translateY(0)' : 'translateY(12px)',
				transition:
					'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
			}}
		>
			<div
				className="order-card rounded-[14px] p-[16px_18px]"
				style={{ minHeight: '210px' }}
			>
				{/* Top row */}
				<div className="flex items-center justify-between mb-3.5">
					<div className="flex items-center gap-2">
						<span className="pulse-dot" />
						<span className="text-white/90 text-[13px] font-medium">
							Call in progress
						</span>
					</div>
					<span className="text-[11px] font-medium text-white/60 bg-white/[0.08] border border-white/[0.1] rounded-full px-2.5 py-0.5">
						Table 4
					</span>
				</div>

				{/* Divider */}
				<div className="h-px bg-white/[0.08] mb-3.5" />

				{/* Order items */}
				<div className="space-y-3 mb-6">
					{ORDER_ITEMS.map((item, i) => (
						<div
							key={item.name}
							className="flex items-center justify-between"
							style={{
								opacity: itemsVisible.includes(i) ? 1 : 0,
								transform: itemsVisible.includes(i)
									? 'translateY(0)'
									: 'translateY(8px)',
								transition:
									'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
							}}
						>
							<span className="text-white/90 text-[13px]">
								{item.name}
							</span>
							<span className="text-white/50 text-[13px]">
								{item.qty}
							</span>
						</div>
					))}
				</div>

				{/* Progress / Sent */}
				<div style={{ height: '28px' }}>
					{!sent ? (
						<div>
							<div className="flex items-center justify-between mb-1.5">
								<span className="text-white/40 text-[11px] font-medium">
									Sending to POS...
								</span>
							</div>
							<div className="h-[3px] rounded-full bg-white/[0.08] overflow-hidden">
								<div
									className="h-full rounded-full bg-white/20"
									style={{
										width: `${progressWidth}%`,
										transition:
											progressWidth > 0
												? `width ${PROGRESS_DURATION}ms ease-in-out`
												: 'none',
									}}
								/>
							</div>
						</div>
					) : (
						<div
							className="flex items-center gap-1.5"
							style={{
								animation: 'fadeIn 0.3s ease-in-out',
							}}
						>
							<span className="text-emerald-400 text-[12px] font-medium">
								Order sent ✓
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
