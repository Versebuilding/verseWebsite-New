import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Verse',
  description:
    'How The Verse collects, uses, and protects your information when you visit versebuilding.com.',
}
const LAST_UPDATED = 'December 17, 2024'

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#10082e] to-[#0B0816]">
            {/* glowww */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="mt-24 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-purple-700/25 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-white/70">Last Updated: {LAST_UPDATED}</p>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            Welcome to The Verse! Your privacy is important to us. This policy explains how we collect, use, and protect
            information when you visit <span className="whitespace-nowrap">www.versebuilding.com</span>.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[260px,1fr]">
          <nav className="md:sticky md:top-8 md:h-max">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
                On this page
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  ['collect', 'Information We Collect'],
                  ['use', 'How We Use Your Information'],
                  ['share', 'Sharing Your Information'],
                  ['cookies', 'Cookies'],
                  ['security', 'Data Security'],
                  ['links', 'Third-Party Links'],
                  ['rights', 'Your Rights'],
                  ['updates', 'Updates to This Policy'],
                  ['contact', 'Questions? Contact Us'],
                ].map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="block rounded-md px-2 py-1 text-white/85 hover:bg-white/10"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <article className="space-y-12 leading-relaxed">
            <section id="collect" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Information We Collect</h2>
              <p className="mt-4 text-white/80">
                We may collect the following types of information:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
                <li>
                  <span className="font-semibold text-white">Personal Information:</span>{' '}
                  name, email address, and contact details (only if you provide them—for example,
                  when signing up for newsletters or submitting a form).
                </li>
                <li>
                  <span className="font-semibold text-white">Usage Data:</span>{' '}
                  details about how you interact with the site (e.g., pages visited, time on page, browser type).
                </li>
                <li>
                  <span className="font-semibold text-white">Cookies & Tracking:</span>{' '}
                  we use cookies to enhance your experience and analyze traffic.
                </li>
              </ul>
            </section>

            <section id="use" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">How We Use Your Information</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
                <li>Improve our website and user experience.</li>
                <li>Send newsletters, updates, or reply to inquiries if you opt in.</li>
                <li>Analyze site performance using aggregated, non-identifiable data.</li>
              </ul>
            </section>

            <section id="share" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Sharing Your Information</h2>
              <p className="mt-4 text-white/80">
                We do not sell or rent your personal information. We may share limited data:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
                <li>
                  <span className="font-semibold text-white">With trusted service providers</span> who help operate the site
                  (e.g., hosting, email delivery, analytics), bound by confidentiality and data-protection obligations.
                </li>
                <li>If required by law or to protect our legal rights.</li>
              </ul>
            </section>

            <section id="cookies" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Cookies</h2>
              <p className="mt-4 text-white/80">
                Cookies help us remember preferences and understand site usage. You can control or disable cookies through
                your browser settings. Note that some features may not function properly without cookies.
              </p>
            </section>

            <section id="security" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Data Security</h2>
              <p className="mt-4 text-white/80">
                We implement reasonable safeguards to protect your data. However, no online platform is 100% secure, so please
                share information responsibly.
              </p>
            </section>

            <section id="links" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Third-Party Links</h2>
              <p className="mt-4 text-white/80">
                Our site may contain links to external websites. We are not responsible for the privacy practices or content
                of third-party sites.
              </p>
            </section>

            <section id="rights" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Your Rights</h2>
              <p className="mt-4 text-white/80">Depending on your location, you may be able to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
                <li>Request access to your personal information.</li>
                <li>Ask us to delete or correct your data.</li>
                <li>Opt out of receiving communications at any time.</li>
              </ul>
            </section>

            <section id="updates" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Updates to This Policy</h2>
              <p className="mt-4 text-white/80">
                We may update this Privacy Policy periodically. Changes will be posted on this page, and the “Last Updated”
                date will be revised.
              </p>
            </section>
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold md:text-3xl">Questions?</h2>
              <p className="mt-4 text-white/80">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:team@versebuilding.com" className="underline decoration-fuchsia-400/70 underline-offset-4 hover:text-fuchsia-200">
                  team@versebuilding.com
                </a>.
              </p>
              <p className="mt-6 text-sm text-white/60">
                You can also read our{' '}
                <Link href="/terms" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                  Terms of Service
                </Link>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}
