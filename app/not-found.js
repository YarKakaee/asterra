import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<main className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<p className="text-lg text-gray-600 mb-8">Page not found.</p>
				<Link href="/" className="text-blue-600 hover:underline">
					Go Home
				</Link>
			</div>
		</main>
	);
}
