import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Verse',
  description:
    'How The Verse collects, uses, and protects your information when you visit versebuilding.com.',
}
const LAST_UPDATED = 'December 17, 2024'

export default function BreathDetectionPage() {
  return (
<main className="min-h-screen bg-gradient-to-b from-[#10082e] to-[#0b0816] px-2 pb-8 pt-20 sm:px-4 md:px-8 md:pt-24">
    <div className="mx-auto max-w-[1440px]">
    {/* Introductory text — before the iframe */}
    <section className="mx-auto mb-8 max-w-4xl px-3 text-center md:mb-10">
        <p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
        At The Verse, we’re building an open source dataset and detection
        library for breath and humming detection. This project grows with
        every contribution. By recording a breath and humming sample, you’ll
        help create a resource that makes wellness-focused interactive
        experiences more accessible. We’re excited to build it together.
        </p>
    </section>

    {/* Embedded Breath Detection website */}
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl md:rounded-2xl">
        <iframe
        src="https://eclectic-crepe-f74bb5.netlify.app/"
        title="Breath Detection citizen science data collection"
        allow="microphone"
        className="block h-[2700px] w-full border-0 md:h-[1900px]"
        />
    </div>

    {/* Contribution section — after the iframe */}
    <section className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center shadow-xl backdrop-blur-sm sm:px-10 md:mt-16 md:py-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
        Join the project
        </p>

        <h2 className="font-unbounded text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
        Contribute to the Future of Games for Health &amp; Wellbeing
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
        Whether you are a breath practitioner, data scientist, clinical
        researcher, or a gamer, we need your expertise to help validate and
        scale these tools.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left">
        <a
            href="https://eclectic-crepe-f74bb5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-500/10"
        >
            <span className="block font-semibold text-white">
            Share the tool
            </span>
            <span className="mt-1 block text-sm text-purple-300 group-hover:text-purple-200 sm:text-base">
            Explore the Breath Detection Library →
            </span>
        </a>

        <a
            href="https://www.versebuilding.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-500/10"
        >
            <span className="block font-semibold text-white">
            See who we are
            </span>
            <span className="mt-1 block text-sm text-purple-300 group-hover:text-purple-200 sm:text-base">
            Learn more about The Verse →
            </span>
        </a>

        <a
            href="mailto:team@versebuilding.com"
            className="group rounded-xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-500/10"
        >
            <span className="block font-semibold text-white">
            Partner with us
            </span>
            <span className="mt-1 block break-words text-sm text-purple-300 group-hover:text-purple-200 sm:text-base">
            team@versebuilding.com — collaborate, integrate these tools, or
            share data →
            </span>
        </a>
        </div>

        <p className="mt-10 text-xl font-semibold text-white sm:text-2xl">
        Let’s gamify emotional regulation together.
        </p>
    </section>
    </div>
</main>  )
}
