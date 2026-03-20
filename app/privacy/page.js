import Footer from '../components/Footer';

export const metadata = {
	title: 'Privacy Policy',
	description: 'Privacy Policy for Asterra Solutions Inc. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
	const h2 =
		'text-[1.25rem] sm:text-[1.4rem] md:text-[1.5rem] font-bold text-black leading-[1.2] mt-12 mb-4';
	const h3 =
		'text-[1rem] sm:text-[1.1rem] font-semibold text-black leading-[1.3] mt-8 mb-3';
	const p =
		'text-[14px] sm:text-[15px] text-[#374151] leading-[1.8] mb-4';
	const ul =
		'list-disc pl-6 text-[14px] sm:text-[15px] text-[#374151] leading-[1.8] mb-4 flex flex-col gap-1.5';
	const strong = 'font-semibold text-black';
	const font = 'var(--font-inter), system-ui, sans-serif';

	return (
		<>
			<main
				className="pt-32 sm:pt-40 pb-20 sm:pb-28"
				style={{ fontFamily: font }}
			>
				<div className="w-full max-w-[720px] mx-auto px-5 sm:px-8">
					{/* Header */}
					<h1
						className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-black leading-[1.1] mb-4"
						style={{ letterSpacing: '-0.03em' }}
					>
						Privacy Policy
					</h1>
					<div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] sm:text-[14px] text-[#9CA3AF] mb-10">
						<span>
							<span className={strong}>Last Updated:</span>{' '}
							March 20, 2026
						</span>
						<span>
							<span className={strong}>Effective Date:</span>{' '}
							March 20, 2026
						</span>
					</div>
					<div className="h-px bg-[#e5e7eb] mb-10" />

					{/* 1 */}
					<h2 className={h2}>1. Introduction</h2>
					<p className={p}>
						Asterra Solutions Inc. (&ldquo;Asterra,&rdquo;
						&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
						&ldquo;our&rdquo;) is a Canadian business providing
						AI-powered phone handling services for restaurants,
						salons, and other service-based businesses. We are
						committed to protecting the privacy of our website
						visitors, prospective clients, and existing clients.
					</p>
					<p className={p}>
						This Privacy Policy explains how we collect, use,
						store, and protect personal information through our
						website (asterra.ca), our services, our client
						dashboard, and any communications we have with you.
					</p>
					<p className={p}>
						By using our website or services, you agree to the
						practices described in this policy.
					</p>

					{/* 2 */}
					<h2 className={h2}>2. Who This Policy Applies To</h2>
					<p className={p}>This policy applies to:</p>
					<ul className={ul}>
						<li>Visitors to asterra.ca</li>
						<li>
							Prospective clients who contact us or book a
							consultation
						</li>
						<li>
							Existing clients who use our phone handling
							services and dashboard
						</li>
						<li>
							End users (customers of our clients) whose calls
							are handled by our system
						</li>
					</ul>

					{/* 3 */}
					<h2 className={h2}>3. Information We Collect</h2>

					<h3 className={h3}>
						3.1 Information You Provide Directly
					</h3>
					<ul className={ul}>
						<li>
							<span className={strong}>
								Contact information
							</span>{' '}
							&mdash; name, email address, phone number, and
							business name when you contact us, book a
							consultation, or sign up for our services
						</li>
						<li>
							<span className={strong}>
								Business information
							</span>{' '}
							&mdash; type of business, number of locations,
							existing POS or booking systems, call volume, and
							operational details needed to configure your phone
							handling agent
						</li>
						<li>
							<span className={strong}>
								Billing information
							</span>{' '}
							&mdash; handled through our third-party payment
							processor; we do not store full credit card details
						</li>
					</ul>

					<h3 className={h3}>
						3.2 Information Collected Through Our Services
					</h3>
					<p className={p}>
						When we provide phone handling services to a client,
						our system may collect and process:
					</p>
					<ul className={ul}>
						<li>
							<span className={strong}>
								Incoming call data
							</span>{' '}
							&mdash; caller phone numbers, call timestamps,
							call duration, and call outcomes (order placed,
							reservation made, information provided, transfer to
							staff)
						</li>
						<li>
							<span className={strong}>
								Call recordings and transcripts
							</span>{' '}
							&mdash; calls handled by the AI agent may be
							recorded and transcribed for quality assurance,
							service improvement, and dashboard reporting
							purposes
						</li>
						<li>
							<span className={strong}>
								Order and reservation details
							</span>{' '}
							&mdash; information provided by callers during a
							handled call, including names, order items,
							reservation times, and party sizes, as needed to
							complete the requested action
						</li>
						<li>
							<span className={strong}>
								Dashboard activity
							</span>{' '}
							&mdash; login times, settings changes, and usage
							of control features by client users
						</li>
					</ul>

					<h3 className={h3}>
						3.3 Information Collected Automatically
					</h3>
					<p className={p}>
						When you visit asterra.ca, we may collect:
					</p>
					<ul className={ul}>
						<li>IP address and general location</li>
						<li>Browser type and device information</li>
						<li>Pages visited and time spent</li>
						<li>Referring URLs</li>
					</ul>
					<p className={p}>
						We use cookies and similar technologies for analytics
						and to improve the website experience. You can control
						cookies through your browser settings.
					</p>

					{/* 4 */}
					<h2 className={h2}>
						4. How We Use Your Information
					</h2>
					<p className={p}>
						We use the information we collect to:
					</p>
					<ul className={ul}>
						<li>
							Set up, configure, and operate your AI phone
							handling agent
						</li>
						<li>
							Sync order and reservation data with your
							connected POS, booking, or reservation system
						</li>
						<li>
							Populate and maintain your client dashboard with
							call logs, metrics, and analytics
						</li>
						<li>
							Send automated SMS or text confirmations to your
							customers following a booking or reservation (where
							enabled)
						</li>
						<li>
							Communicate with you about your account, service
							updates, and support requests
						</li>
						<li>
							Send consultation follow-ups, proposals, and
							onboarding materials
						</li>
						<li>
							Improve the accuracy and performance of our AI
							agents
						</li>
						<li>Comply with legal obligations</li>
					</ul>
					<p className={p}>
						We do not sell your personal information or your
						customers&apos; personal information to any third
						party.
					</p>

					{/* 5 */}
					<h2 className={h2}>
						5. Call Recording and Voice Data
					</h2>
					<p className={p}>
						As part of our phone handling service, calls answered
						by the AI agent may be recorded and transcribed. This
						is disclosed to callers through a standard greeting at
						the start of each handled call.
					</p>
					<p className={p}>
						Call recordings and transcripts are:
					</p>
					<ul className={ul}>
						<li>
							Stored securely and accessible only to authorized
							Asterra personnel and to the client whose agent
							handled the call
						</li>
						<li>
							Used for quality assurance, agent tuning, and
							populating your dashboard call logs
						</li>
						<li>
							Retained for a period of 90 days by default,
							unless a different retention period is agreed upon
							in your service agreement
						</li>
						<li>
							Never shared with third parties except as required
							by law or as needed to operate our services (for
							example, transcription providers)
						</li>
					</ul>

					{/* 6 */}
					<h2 className={h2}>
						6. POS and Third-Party System Integrations
					</h2>
					<p className={p}>
						Our service integrates with third-party platforms
						including point-of-sale systems (such as Square, Toast,
						and Clover), reservation platforms (such as OpenTable),
						and booking systems (such as Booksy and Fresha).
					</p>
					<p className={p}>
						When we connect to these systems on your behalf:
					</p>
					<ul className={ul}>
						<li>
							We access only the data required to perform the
							integration (for example, placing an order or
							creating a reservation)
						</li>
						<li>
							We do not store your POS credentials beyond what
							is necessary for the integration to function
						</li>
						<li>
							Your use of these third-party platforms is also
							subject to their own privacy policies and terms
						</li>
					</ul>

					{/* 7 */}
					<h2 className={h2}>7. Client Dashboard</h2>
					<p className={p}>
						Access to your Asterra dashboard is protected by login
						credentials. Franchise and multi-location clients have
						tiered access &mdash; franchise-level users can view
						all locations, while store-level users can only view
						their own location&apos;s data.
					</p>
					<p className={p}>
						You are responsible for keeping your dashboard
						credentials secure and for managing access for your
						team members.
					</p>

					{/* 8 */}
					<h2 className={h2}>8. Data Sharing</h2>
					<p className={p}>
						We do not sell personal information. We may share
						information only in the following circumstances:
					</p>
					<ul className={ul}>
						<li>
							<span className={strong}>Service providers</span>{' '}
							&mdash; trusted third-party vendors who help us
							operate our infrastructure, including cloud
							hosting, transcription, and communication tools,
							under confidentiality agreements
						</li>
						<li>
							<span className={strong}>
								POS and integration partners
							</span>{' '}
							&mdash; as required to complete orders,
							reservations, or bookings on your behalf
						</li>
						<li>
							<span className={strong}>
								Legal requirements
							</span>{' '}
							&mdash; when required by law, a court order, or to
							protect the rights and safety of Asterra, our
							clients, or the public
						</li>
						<li>
							<span className={strong}>
								Business transfers
							</span>{' '}
							&mdash; in the event of a merger, acquisition, or
							sale of our business, your information may be
							transferred as part of that transaction, with
							notice provided to you
						</li>
					</ul>

					{/* 9 */}
					<h2 className={h2}>9. Data Retention</h2>
					<p className={p}>
						We retain personal information for as long as necessary
						to provide our services and meet legal obligations:
					</p>
					<ul className={ul}>
						<li>
							<span className={strong}>
								Active client data
							</span>{' '}
							&mdash; retained for the duration of the service
							agreement
						</li>
						<li>
							<span className={strong}>
								Call recordings and transcripts
							</span>{' '}
							&mdash; 90 days by default, unless otherwise
							agreed
						</li>
						<li>
							<span className={strong}>
								Dashboard and account data
							</span>{' '}
							&mdash; retained for 7 years following termination
							of the service agreement for legal and accounting
							purposes
						</li>
						<li>
							<span className={strong}>
								Website analytics
							</span>{' '}
							&mdash; retained for 24 months
						</li>
						<li>
							<span className={strong}>
								Prospective client inquiries
							</span>{' '}
							&mdash; retained for 2 years
						</li>
					</ul>
					<p className={p}>
						You may request deletion of your data at any time,
						subject to our legal retention obligations.
					</p>

					{/* 10 */}
					<h2 className={h2}>10. Your Rights</h2>
					<p className={p}>
						Depending on your province of residence, you may have
						the right to:
					</p>
					<ul className={ul}>
						<li>
							Access the personal information we hold about you
						</li>
						<li>
							Correct inaccurate or incomplete information
						</li>
						<li>
							Request deletion of your personal information
						</li>
						<li>
							Withdraw consent for certain uses of your
							information
						</li>
						<li>
							File a complaint with a relevant privacy regulator
						</li>
					</ul>
					<p className={p}>
						To exercise any of these rights, contact us at
						privacy@asterra.ca.
					</p>

					{/* 11 */}
					<h2 className={h2}>
						11. Children&apos;s Privacy
					</h2>
					<p className={p}>
						Our services are intended for business owners and
						operators. We do not knowingly collect personal
						information from individuals under the age of 18.
					</p>

					{/* 12 */}
					<h2 className={h2}>
						12. Changes to This Policy
					</h2>
					<p className={p}>
						We may update this Privacy Policy from time to time. We
						will notify active clients of material changes by email
						or through the dashboard. Continued use of our services
						after changes take effect constitutes acceptance of the
						updated policy.
					</p>

					{/* 13 */}
					<h2 className={h2}>13. Contact Us</h2>
					<p className={p}>
						For privacy-related questions or requests:
					</p>
					<p className={p}>
						<span className={strong}>
							Asterra Solutions Inc.
						</span>
						<br />
						Email: privacy@asterra.ca
						<br />
						Website: asterra.ca
					</p>
				</div>
			</main>

			<Footer />
		</>
	);
}
