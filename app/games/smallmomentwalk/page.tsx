import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Brain, ExternalLink, Heart, Leaf, Quote, Sparkles, UserRound } from 'lucide-react';
import palettes from './palettes.module.css';
import styles from './smallmomentwalk.module.css';

export const metadata: Metadata = {
  title: 'Small Moments Walk | The Verse',
  description: 'Feel seen. Walk together. Discover an AI-powered social experience designed to create meaningful moments of connection through play.',
};

const paletteOptions = [
  ['verse-violet', 'Verse violet'],
  ['moonlit-indigo', 'Moonlit indigo'],
  ['velvet-plum', 'Velvet plum'],
  ['original', 'Original cosmic'],
] as const;

const benefits = [
  { title: 'Feel seen', icon: UserRound, description: 'Meaningful interactions with AI agents who listen and respond.' },
  { title: 'Fight isolation', icon: Heart, description: 'Build connection in safe, low-pressure simulated environments.' },
  { title: 'Reduce anxiety', icon: Leaf, description: 'Practice social connection and grow at your own pace.' },
  { title: 'Real impact', icon: Sparkles, description: 'Grounded in behavioral science to support well-being.' },
];

export default async function SmallMomentWalk({ searchParams }: {
  searchParams: Promise<{ palette?: string | string[] }>;
}) {
  const { palette } = await searchParams;
  const activePalette = typeof palette === 'string' && paletteOptions.some(([value]) => value === palette)
    ? palette : palettes.defaultPalette;

  return (
    <main className={`${palettes.page} ${styles.page}`} data-palette={activePalette}>
      <div className={`${styles.wrap} mx-auto w-full px-5 sm:px-8 lg:px-12`}>
        <section className={styles.hero} aria-labelledby="smw-title">
          <div className={styles.intro}>
            <Link href="/games" className={styles.backLink}>Games &amp; digital experiences <ArrowRight size={14} aria-hidden="true" /></Link>
            <p className={styles.eyebrow}><Sparkles size={18} aria-hidden="true" /> Small Moments Walk</p>
            <h1 id="smw-title">Feel seen.<br /><span>Walk together.</span></h1>
            <p className={styles.lede}>Small Moments Walk is an AI-powered social experience designed to help you feel connected, reduce isolation, and ease anxiety—one small moment at a time.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className={styles.primaryButton} href="mailto:team@versebuilding.com?subject=Small%20Moments%20Walk%20beta%20interest">Email about beta testing <ArrowRight size={18} aria-hidden="true" /></a>
              <a className={styles.secondaryButton} href="#benefits">Explore the idea <ArrowDown size={18} aria-hidden="true" /></a>
            </div>
            <p className={styles.contactNote}>Interested in taking part? Get in touch with the team.</p>
            <div className={styles.smallMoment}><span aria-hidden="true" /> Small moments can make a difference.</div>
          </div>

          <figure id="artwork" className={styles.artwork}>
            <a href="/images/SMW.webp" target="_blank" rel="noopener noreferrer" className={styles.posterLink} aria-label="Open the original Small Moments Walk poster at full size in a new tab">
              <Image src="/images/SMW.webp" alt="Small Moments Walk poster: two characters connect on a riverside path at sunset. Feel seen. Feel connected. Small moments can make a difference." width={385} height={768} priority sizes="(min-width: 1280px) 340px, (min-width: 768px) 300px, (min-width: 380px) 320px, calc(100vw - 40px)" className={styles.poster} />
            </a>
            <figcaption>One small moment of connection. <a href="/images/SMW.webp" target="_blank" rel="noopener noreferrer">View original poster <ExternalLink size={12} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></figcaption>
          </figure>
        </section>

        <section id="benefits" className={styles.benefits} aria-labelledby="benefits-title">
          <h2 id="benefits-title" className={styles.sectionLabel}><span aria-hidden="true" /> Prosocial benefits · Designed for flourishing</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ title, icon: Icon, description }) => (
              <article key={title} className={styles.card}>
                <div className={styles.icon}><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.science} aria-labelledby="science-title">
          <div className={styles.quote}>
            <Quote size={32} aria-hidden="true" />
            <blockquote>“No human being succeeds in life alone.”</blockquote>
            <p className={styles.attribution}>Nicholas Epley</p>
          </div>
          <div className={styles.scienceText}>
            <h2 id="science-title"><Brain size={20} aria-hidden="true" /> The science of connection</h2>
            <p>Inspired by Nicholas Epley’s research on social connection, Small Moments Walk invites you to interact with AI agents in low-pressure settings and practice connecting at your own pace.</p>
            <a className={styles.textLink} href="https://www.chicagobooth.edu/review/line-inquiry-nicholas-epley-importance-being-social" target="_blank" rel="noopener noreferrer">Explore the research at Chicago Booth <ExternalLink size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </section>

        <details className={styles.palettePreview} id="palettes">
          <summary>Preview page colors</summary>
          <nav aria-label="Page color previews" className="mt-4 flex flex-wrap gap-3">
            {paletteOptions.map(([value, label]) => (
              <Link key={value} href={`?palette=${value}#palettes`} scroll={false} aria-current={activePalette === value ? 'true' : undefined}>{label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </main>
  );
}
