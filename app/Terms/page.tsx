import { Metadata } from 'next'
import { Link as LinkIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | The Verse',
  description:
    'Read the Terms of Service for The Verse. Please review these terms before using our website or services.',
}

const LAST_UPDATED_ISO = '2024-12-17'
const LAST_UPDATED_HUMAN = 'December 17, 2024'

const SECTIONS = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: (
      <p>
        By using this website, you agree to these Terms. If you do not agree, please refrain
        from using the site.
      </p>
    ),
  },
  {
    id: 'use',
    title: 'Use of the Website',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Use the site for lawful purposes only.</li>
        <li>
          Do not engage in unauthorized or malicious activities (e.g., hacking, distributing
          malware, scraping content).
        </li>
      </ul>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: (
      <>
        <p>
          All content on this website—including text, graphics, images, logos, and digital
          experiences—is the property of The Verse unless otherwise stated.
        </p>
        <p className="mt-3">
          You may not reproduce, distribute, or modify any content without explicit permission.
        </p>
      </>
    ),
  },
  {
    id: 'user-submissions',
    title: 'User Submissions',
    body: (
      <>
        <p>
          If you submit ideas, artwork, or other content to us, you grant The Verse a
          non-exclusive, royalty-free license to use, modify, or share the content as part of
          our initiatives.
        </p>
        <p className="mt-3">
          You are responsible for ensuring that your submissions do not violate any
          third-party rights.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Content',
    body: (
      <p>
        We may feature links, tools, or content from third parties. We are not responsible for
        their accuracy, availability, or security.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of Warranties',
    body: (
      <p>
        The website is provided “as is” without warranties of any kind. We do not guarantee
        uninterrupted access, error-free content, or that the website is free from harmful
        components.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: (
      <p>
        To the maximum extent allowed by law, The Verse will not be liable for any damages
        (direct, indirect, incidental) resulting from your use of this site.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    body: (
      <p>
        We reserve the right to suspend or terminate access to the site at any time for
        violation of these Terms.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    body: (
      <p>
        We may update these Terms periodically. Continued use of the website signifies
        acceptance of any updates.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: (
      <p>
        These Terms are governed by the laws of California, USA. Any disputes will be resolved
        in the jurisdiction of California, USA.
      </p>
    ),
  },
  {
    id: 'questions',
    title: 'Questions?',
    body: (
      <p>
        If you have any questions about these Terms, please contact us at{' '}
        <a
          href="mailto:team@versebuilding.com"
          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          team@versebuilding.com
        </a>
        .
      </p>
    ),
  },
]

function AnchorHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="group scroll-mt-28 text-2xl md:text-3xl font-semibold tracking-tight text-white flex items-center gap-2"
    >
      <a
        href={`#${id}`}
        className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 inline-flex items-center justify-center rounded-md p-1 hover:bg-white/10"
        aria-label="Copy link to section"
      >
        <LinkIcon className="h-4 w-4" />
      </a>
      <span>{children}</span>
    </h2>
  )
}

export default function TermsPage() {
  return (
    <main className="bg-[#0b0b17] text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#170237] via-[#110427] to-[#0b0b17]" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-widest text-white/60">Legal</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/70">
            Last updated{' '}
            <time dateTime={LAST_UPDATED_ISO} className="font-medium text-white">
              {LAST_UPDATED_HUMAN}
            </time>
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
            Welcome to The Verse at <span className="text-white">www.versebuilding.com</span>.
            By accessing or using our website, you agree to comply with the following Terms of
            Service.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-10">
          <aside className="hidden lg:block pt-6">
            <nav className="sticky top-24 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
                On this page
              </p>
              <ul className="space-y-2 text-sm">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block rounded-md px-2 py-1 text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="space-y-10 md:space-y-12 pt-6">
            {SECTIONS.map((s) => (
              <section key={s.id} className="space-y-4">
                <AnchorHeading id={s.id}>{s.title}</AnchorHeading>
                <div className="text-white/80 leading-relaxed">{s.body}</div>
                <hr className="border-white/10 mt-6" />
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  )
}
