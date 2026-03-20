import Footer from '../components/Footer';

export const metadata = {
	title: 'Terms & Conditions',
	description: 'Terms and Conditions for Asterra Solutions Inc., governing your use of our AI-powered phone handling services.',
};

export default function TermsPage() {
	const h2 =
		'text-[1.25rem] sm:text-[1.4rem] md:text-[1.5rem] font-bold text-black leading-[1.2] mt-12 mb-4';
	const h3 =
		'text-[1rem] sm:text-[1.1rem] font-semibold text-black leading-[1.3] mt-8 mb-3';
	const p = 'text-[14px] sm:text-[15px] text-[#374151] leading-[1.8] mb-4';
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
						Terms &amp; Conditions
					</h1>
					<div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] sm:text-[14px] text-[#9CA3AF] mb-10">
						<span>
							<span className={strong}>Last Updated:</span> March
							20, 2026
						</span>
						<span>
							<span className={strong}>Effective Date:</span>{' '}
							March 20, 2026
						</span>
					</div>
					<div className="h-px bg-[#e5e7eb] mb-10" />

					{/* 1 */}
					<h2 className={h2}>1. Agreement</h2>
					<p className={p}>
						These Terms and Conditions (&ldquo;Terms&rdquo;) govern
						your use of Asterra Solutions Inc.&apos;s website
						(asterra.ca) and services. By using our website, booking
						a consultation, or entering into a service agreement
						with us, you agree to be bound by these Terms.
					</p>
					<p className={p}>
						References to &ldquo;Asterra,&rdquo; &ldquo;we,&rdquo;
						&ldquo;us,&rdquo; or &ldquo;our&rdquo; refer to Asterra
						Solutions Inc. References to &ldquo;Client,&rdquo;
						&ldquo;you,&rdquo; or &ldquo;your&rdquo; refer to the
						business or individual engaging our services.
					</p>

					{/* 2 */}
					<h2 className={h2}>2. Our Services</h2>
					<p className={p}>
						Asterra provides AI-powered phone handling services for
						service-based businesses. Our services include:
					</p>
					<ul className={ul}>
						<li>
							Configuring and deploying a custom AI phone agent
							trained on your business, menu, hours, policies, and
							FAQs
						</li>
						<li>
							Answering inbound calls on behalf of your business
						</li>
						<li>
							Taking and placing orders directly into your
							connected POS system
						</li>
						<li>
							Handling reservation and booking requests through
							your connected platforms
						</li>
						<li>Answering common questions from callers</li>
						<li>Transferring calls to your staff when required</li>
						<li>
							Providing a client dashboard with call logs,
							metrics, and controls
						</li>
						<li>
							Sending automated SMS confirmations to callers
							following a booking or reservation (where enabled)
						</li>
					</ul>
					<p className={p}>
						The specific scope of services for your business is
						detailed in your individual service agreement.
					</p>

					{/* 3 */}
					<h2 className={h2}>3. Service Setup and Onboarding</h2>

					<h3 className={h3}>3.1 Setup Period</h3>
					<p className={p}>
						Upon signing a service agreement, we will begin
						configuring your AI agent. Typical setup takes 3 to 10
						business days depending on the complexity of your
						business, integrations required, and responsiveness in
						providing necessary information.
					</p>

					<h3 className={h3}>
						3.2 Client Responsibilities During Setup
					</h3>
					<p className={p}>
						You agree to provide accurate and complete information
						about your business, including menu details, pricing,
						hours of operation, specials, policies, and any other
						information needed to train and configure your agent
						accurately.
					</p>

					<h3 className={h3}>3.3 Testing</h3>
					<p className={p}>
						We will conduct testing before your agent goes live. You
						will have an opportunity to review and approve the
						agent&apos;s behavior prior to launch.
					</p>

					{/* 4 */}
					<h2 className={h2}>4. Pricing and Payment</h2>

					<h3 className={h3}>4.1 Flat Monthly Pricing</h3>
					<p className={p}>
						Asterra charges a flat monthly fee as specified in your
						service agreement. Pricing is not usage-based &mdash;
						your monthly fee does not change based on the number of
						calls handled within your plan&apos;s included usage.
					</p>

					<h3 className={h3}>4.2 Payment Terms</h3>
					<ul className={ul}>
						<li>
							Monthly fees are invoiced in advance at the start of
							each billing period
						</li>
						<li>Payment is due within 14 days of invoice</li>
						<li>
							All fees are in Canadian dollars unless otherwise
							specified
						</li>
						<li>
							Applicable taxes (including HST/GST) will be added
							to invoices as required
						</li>
					</ul>

					<h3 className={h3}>4.3 Late Payment</h3>
					<p className={p}>
						Overdue invoices may incur interest at a rate of 1.5%
						per month. We reserve the right to suspend your service
						if payment is more than 30 days overdue, with reasonable
						notice provided.
					</p>

					<h3 className={h3}>4.4 Refunds</h3>
					<p className={p}>
						Monthly fees are non-refundable once a billing period
						has commenced, except where required by applicable law.
					</p>

					<h3 className={h3}>4.5 Pricing Changes</h3>
					<p className={p}>
						We will provide at least 30 days written notice before
						changing your monthly fee.
					</p>

					{/* 5 */}
					<h2 className={h2}>5. Cancellation and Termination</h2>

					<h3 className={h3}>5.1 Cancellation by Client</h3>
					<p className={p}>
						You may cancel your service at any time by providing
						written notice to hello@asterra.ca. Your service will
						continue until the end of the current billing period. No
						refund will be issued for the remaining days of that
						period.
					</p>

					<h3 className={h3}>5.2 Pilot Agreements</h3>
					<p className={p}>
						If your service agreement includes a pilot period with
						specific cancellation terms, those terms take precedence
						over this section.
					</p>

					<h3 className={h3}>5.3 Termination by Asterra</h3>
					<p className={p}>
						We reserve the right to terminate your service if:
					</p>
					<ul className={ul}>
						<li>
							Payment is not received within 30 days of the due
							date after reasonable notice
						</li>
						<li>
							You use our services in a manner that violates these
							Terms or applicable law
						</li>
						<li>
							Continuing to provide services becomes technically
							or operationally impossible
						</li>
					</ul>
					<p className={p}>
						We will provide reasonable notice before termination
						where possible.
					</p>

					<h3 className={h3}>5.4 Effect of Termination</h3>
					<p className={p}>
						Upon termination, your dashboard access will be
						deactivated and your phone handling agent will be taken
						offline. Call logs and data will be retained for 7 years
						for legal and accounting purposes, and you may request
						an export prior to termination.
					</p>

					{/* 6 */}
					<h2 className={h2}>6. Phone Numbers and Call Forwarding</h2>
					<p className={p}>
						You retain your existing business phone numbers. Our
						service is activated by forwarding your calls to a
						number we provide. You may revert your call forwarding
						at any time to restore normal phone operation.
					</p>
					<p className={p}>
						We are not responsible for any disruption to your phone
						service caused by your phone carrier, forwarding
						configuration errors made by you or your carrier, or any
						outages outside our control.
					</p>

					{/* 7 */}
					<h2 className={h2}>
						7. Integrations and Third-Party Systems
					</h2>

					<h3 className={h3}>7.1 Access</h3>
					<p className={p}>
						To connect to your POS, reservation, or booking
						platform, you authorize us to access those systems on
						your behalf for the purpose of performing the
						integration.
					</p>

					<h3 className={h3}>7.2 Third-Party Availability</h3>
					<p className={p}>
						Our ability to integrate with third-party platforms
						depends on those platforms remaining accessible and
						compatible. We are not responsible for disruptions
						caused by changes to third-party APIs, platform outages,
						or policy changes by those platforms.
					</p>

					<h3 className={h3}>7.3 Accuracy</h3>
					<p className={p}>
						We will make reasonable efforts to ensure orders and
						reservations are placed accurately. In the event of an
						error, our agent is instructed to remain professional
						and direct the caller to resolve the issue with your
						staff at the point of fulfillment. We are not liable for
						losses arising from order errors where we have followed
						the information and rules you provided during setup.
					</p>

					{/* 8 */}
					<h2 className={h2}>8. Kill Switch and Control Features</h2>
					<p className={p}>
						Your dashboard includes a kill switch that allows you to
						disable phone handling at any time. When disabled, calls
						will revert to your normal phone line. We also provide
						an info-only mode that disables order taking while
						keeping question answering active.
					</p>
					<p className={p}>
						You are responsible for using these controls
						appropriately. Asterra is not liable for calls that are
						not handled during periods when you have disabled the
						service.
					</p>

					{/* 9 */}
					<h2 className={h2}>9. AI Limitations and Disclaimer</h2>
					<p className={p}>
						Our AI phone agents are designed to handle the most
						common call types accurately. However, AI systems are
						not perfect. By using our service, you acknowledge that:
					</p>
					<ul className={ul}>
						<li>
							The agent may occasionally misunderstand a caller or
							make an error
						</li>
						<li>
							We make no guarantee that every call will be handled
							perfectly
						</li>
						<li>
							Our agents are not a substitute for human judgment
							in complex, sensitive, or unusual situations
						</li>
						<li>
							Smart escalation features are designed to transfer
							such calls to your staff, but this does not
							guarantee every edge case will be identified
						</li>
					</ul>
					<p className={p}>
						We continuously monitor and improve agent performance,
						and we will work with you to address any recurring
						issues.
					</p>

					{/* 10 */}
					<h2 className={h2}>10. Demo System</h2>
					<p className={p}>
						Asterra operates a public demo phone number that routes
						to a fictional restaurant for prospective clients to
						experience the service. This demo system is provided for
						demonstration purposes only. Any information shared with
						the demo system is not retained beyond 90 days and is
						not used for any purpose other than demonstrating the
						service.
					</p>

					{/* 11 */}
					<h2 className={h2}>11. Confidentiality</h2>
					<p className={p}>
						Both parties agree to keep confidential any non-public
						information shared in connection with the service,
						including business data, pricing, configuration details,
						and operational information. This obligation survives
						termination of the service.
					</p>

					{/* 12 */}
					<h2 className={h2}>12. Intellectual Property</h2>

					<h3 className={h3}>12.1 Asterra&apos;s Property</h3>
					<p className={p}>
						All software, systems, AI models, dashboard interfaces,
						and technology used to provide the service remain the
						property of Asterra. You receive a limited,
						non-exclusive, non-transferable license to use the
						dashboard and services during your active subscription.
					</p>

					<h3 className={h3}>12.2 Your Property</h3>
					<p className={p}>
						Your business information, menu data, call logs, and
						customer data remain your property. We use this
						information only to provide and improve the service.
					</p>

					{/* 13 */}
					<h2 className={h2}>13. Limitation of Liability</h2>
					<p className={p}>
						To the maximum extent permitted by applicable law:
					</p>
					<ul className={ul}>
						<li>
							Asterra&apos;s total liability to you for any claim
							arising from the service is limited to the fees paid
							by you in the three months preceding the claim
						</li>
						<li>
							We are not liable for indirect, incidental,
							consequential, or punitive damages, including lost
							revenue or lost orders
						</li>
						<li>
							We are not liable for disruptions caused by
							third-party systems, phone carriers, or internet
							outages
						</li>
					</ul>
					<p className={p}>
						Nothing in these Terms limits liability for gross
						negligence, willful misconduct, or fraud.
					</p>

					{/* 14 */}
					<h2 className={h2}>14. Indemnification</h2>
					<p className={p}>
						You agree to indemnify and hold harmless Asterra from
						any claims, losses, or damages arising from:
					</p>
					<ul className={ul}>
						<li>
							Your provision of inaccurate business information
							that causes the agent to behave incorrectly
						</li>
						<li>
							Your misuse of the dashboard or control features
						</li>
						<li>
							Your violation of any applicable law in connection
							with your use of the service
						</li>
					</ul>

					{/* 15 */}
					<h2 className={h2}>15. Governing Law</h2>
					<p className={p}>
						These Terms are governed by the laws of the Province of
						Ontario and the laws of Canada applicable therein. Any
						disputes not resolved through good faith negotiation
						will be submitted to the courts of Ontario.
					</p>

					{/* 16 */}
					<h2 className={h2}>16. Changes to These Terms</h2>
					<p className={p}>
						We may update these Terms from time to time. We will
						notify you of material changes at least 30 days in
						advance by email. Continued use of the service after the
						effective date of changes constitutes acceptance.
					</p>

					{/* 17 */}
					<h2 className={h2}>17. Entire Agreement</h2>
					<p className={p}>
						These Terms, together with your individual service
						agreement, constitute the entire agreement between you
						and Asterra with respect to the services. In the event
						of a conflict, the service agreement takes precedence.
					</p>

					{/* 18 */}
					<h2 className={h2}>18. Contact</h2>
					<p className={p}>For questions about these Terms:</p>
					<p className={p}>
						<span className={strong}>Asterra Solutions Inc.</span>
						<br />
						Email: contact@asterra.ca
						<br />
						Website: asterra.ca
					</p>
				</div>
			</main>

			<Footer />
		</>
	);
}
