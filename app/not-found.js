'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';

const NotFoundPage = () => {
	return (
		<>
			<Navbar />

			<main className="min-h-screen flex items-center justify-center relative overflow-hidden">
				{/* Background with gradient and texture */}
				<div
					className="absolute inset-0"
					style={{
						background:
							'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.8) 30%, rgba(241, 245, 249, 0.6) 70%, rgba(255, 255, 255, 1) 100%)',
					}}
				>
					{/* Full textured blur effect */}
					<div className="absolute inset-0">
						{/* Base texture pattern */}
						<div
							className="absolute inset-0 opacity-25"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 3px, transparent 0)',
								backgroundSize: '20px 20px',
							}}
						/>
						{/* Blurred texture transition layers */}
						<div
							className="absolute inset-0 opacity-20"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 2px, transparent 0)',
								backgroundSize: '20px 20px',
								filter: 'blur(1px)',
								maskImage:
									'linear-gradient(180deg, black 0%, black 60%, transparent 85%)',
								WebkitMaskImage:
									'linear-gradient(180deg, black 0%, black 60%, transparent 85%)',
							}}
						/>
						<div
							className="absolute inset-0 opacity-15"
							style={{
								backgroundImage:
									'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)',
								backgroundSize: '20px 20px',
								filter: 'blur(2px)',
								maskImage:
									'linear-gradient(180deg, black 20%, black 70%, transparent 90%)',
								WebkitMaskImage:
									'linear-gradient(180deg, black 20%, black 70%, transparent 90%)',
							}}
						/>
						{/* Final gradient overlay for smooth color transition */}
						<div
							className="absolute inset-0"
							style={{
								background:
									'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.9) 100%)',
							}}
						/>
					</div>
				</div>

				{/* Content */}
				<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div>
						{/* Glass Badge */}
						<div className="mb-8">
							<div className="inline-flex items-center px-6 py-3 glass-plaque rounded-full text-sm font-semibold text-gray-800">
								Oops! Page Not Found
							</div>
						</div>

						{/* 404 Number */}
						<div className="mb-8">
							<h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-inset leading-none mb-4">
								404
							</h1>
						</div>

						{/* Main Message */}
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
							This Page Went Missing
						</h2>

						<p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
							Don't worry, even our AI automation couldn't prevent
							this one. Let's get you back on track to
							streamlining your business.
						</p>

						{/* Action Button */}
						<div className="flex justify-center">
							<Link href="/">
								<div className="bg-[#FF5633] text-white px-8 py-4 rounded-xl text-lg font-semibold cursor-pointer hover:bg-[#E04A2B] transition-colors duration-200">
									Go Home
								</div>
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default NotFoundPage;
