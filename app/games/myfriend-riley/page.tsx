import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Baloo_2, Lexend } from 'next/font/google';
import { RileyStage, FeelingsPicker, BloomCycle } from './RileyInteractions';
import styles from './riley.module.css';
import palettes from './palettes.module.css';

const display = Baloo_2({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-riley-display', display: 'swap' });
const body = Lexend({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-riley-body', display: 'swap' });
export const metadata: Metadata = {
  title: 'My Friend Riley | The Verse',
  description: 'Hum it out with Riley: a cozy, voice-powered wellbeing game with a living garden and a friend for every feeling. In development at The Verse.',
};
const paletteOptions = [
  ['verse-violet', 'Verse violet'], ['moonlit-indigo', 'Moonlit indigo'],
  ['velvet-plum', 'Velvet plum'], ['original', 'Original light'],
];
export default async function RileyPage({ searchParams }: { searchParams: Promise<{ palette?: string | string[] }> }) {
  const { palette } = await searchParams;
  const activePalette = typeof palette === 'string' && paletteOptions.some(([id]) => id === palette) ? palette : palettes.defaultPalette;
  return <main id="mfr" data-palette={activePalette} className={`${styles.page} ${palettes.page} ${display.variable} ${body.variable}`}>

  <div className={styles["wrap"]}>

    <header className={styles["hero"]}>
      <div>
        <span className={styles["eyebrow"]}>A Verse game · in development</span>
        <h1>Hum it out with <span className={styles["hum"]}>Riley</span>.</h1>
        <p className={styles["lede"]}>My Friend Riley is a cozy wellbeing game for kids. Hum along on a magical rollercoaster, slice through stress, and come home to a living garden where every feeling has a furry friend.</p>
        <div className={styles["ctas"]}>
          <a className={styles["btn"] + " " + styles["btn-primary"]} href="#mfr-trailer">▶ Watch the trailer</a>
          <a className={styles["btn"] + " " + styles["btn-ghost"]} href="#mfr-feelings">Meet the feelings</a>
        </div>
        <div className={styles["facts"]}><span>Ages 7–25+</span><span>Voice-powered play</span><span>Phones &amp; tablets</span></div>
      </div>

      <RileyStage />
    </header>

    <figure className={styles["garden-banner"]}>
      <div className={styles["shot"]}>
        <picture>
        <source media="(max-width: 600px)" srcSet="/images/myfriend-riley/garden-banner-mobile.webp" width="900" height="675" />
        {/* Native picture keeps the supplied phone-specific garden crop. */}
        <img src="/images/myfriend-riley/garden-banner-1600.webp"
             srcSet="/images/myfriend-riley/garden-banner-800.webp 800w, /images/myfriend-riley/garden-banner-1600.webp 1600w"
             sizes="(max-width: 1279px) calc(100vw - 40px), 1380px"
             alt="Riley&apos;s garden at home: emotion pets around the heart tree, with Riley saying 'Good afternoon, Bella! Your garden is glowing from all your care today!'"
             width="1600" height="900" decoding="async" loading="lazy" />
        </picture>
      </div>
      <figcaption>Your garden, glowing from a day of care</figcaption>
    </figure>

    <section className={styles["section"]} aria-labelledby="mfr-story-h">
      <span className={styles["eyebrow"]}>Big feelings, little friend</span>
      <h2 id="mfr-story-h" className={styles["section-title"]}>Some days feel like a win. Some days feel heavy.</h2>
      <p className={`${styles.lede} ${styles["section-intro"]}`}>Riley gets both. The game turns those everyday ups and downs into play kids can actually do something with: a hum, a breath, a check-in, a tiny act of care.</p>
      <div className={styles["story"]}>
        <figure><div className={styles["shot"]}><Image src="/images/myfriend-riley/story-school.webp" alt="Riley proudly holding a trophy at a school talent show" loading="lazy" width={1280} height={720} sizes="(max-width: 520px) calc(100vw - 40px), (max-width: 1279px) 50vw, 680px" /></div><figcaption>the proud days</figcaption></figure>
        <figure><div className={styles["shot"]}><Image src="/images/myfriend-riley/story-football.webp" alt="Riley looking worried on a football field" loading="lazy" width={1280} height={720} sizes="(max-width: 520px) calc(100vw - 40px), (max-width: 1279px) 50vw, 680px" /></div><figcaption>and the worried ones</figcaption></figure>
      </div>
    </section>

    <section className={styles["section"] + " " + styles["split"]} aria-labelledby="mfr-ride-h">
      <div>
        <span className={styles["eyebrow"]}>The Hum Ride</span>
        <h2 id="mfr-ride-h" className={styles["section-title"]}>A rollercoaster you steer with your voice.</h2>
        <ul className={styles["points"]}>
          <li><span className={styles["dot"]}>1</span><div><b>Hum to open the gates</b><span>Hold your hum inside the glowing wedge of the HumDial and the gate ahead slides open.</span></div></li>
          <li><span className={styles["dot"]}>2</span><div><b>Slice the stress blobs</b><span>Swipe through flying worry blobs, and every cut gives the cart a burst of speed.</span></div></li>
          <li><span className={styles["dot"]}>3</span><div><b>Breathe between gates</b><span>Calm stretches of track let kids slow down and reset before the next gate.</span></div></li>
        </ul>
        <div className={styles["gate-seq"]} aria-label="Gate pitch progression">
          <span className={styles["chip"]}>gate 1 <em>mid</em></span><span className={styles["chip"]}>gate 2 <em>high</em></span><span className={styles["chip"]}>gate 3 <em>mid → high</em></span><span className={styles["chip"]}>gate 4 <em>high → loud</em></span><span className={styles["chip"]}>gate 5 <em>mid → high → low</em></span>
        </div>
      </div>
      <div className={styles["ride-grid"]}>
        <div className={styles["shot"]}><Image src="/images/myfriend-riley/humdial.webp" alt="The HumDial, a glowing wedge dial that fills while you hum" loading="lazy" width={1280} height={720} sizes="(max-width: 860px) calc(100vw - 40px), (max-width: 1279px) 50vw, 700px" /></div>
        <div className={styles["shot"]}><Image src="/images/myfriend-riley/ride-countdown.webp" alt="The rollercoaster cart approaching a closed Starflower gate" loading="lazy" width={1280} height={720} sizes="(max-width: 860px) calc(100vw - 40px), (max-width: 1279px) 50vw, 700px" /></div>
        
      </div>
    </section>

    <section className={styles["section"]} id="mfr-feelings" aria-labelledby="mfr-garden-h">
      <span className={styles["eyebrow"]}>The Living Garden</span>
      <h2 id="mfr-garden-h" className={styles["section-title"]}>Every feeling has a friend who lives here.</h2>
      <p className={`${styles.lede} ${styles["section-intro"]}`}>Nine emotion pets roam the garden, each with a home of its own. Care for yourself, and the whole place comes alive: the lotus blooms, the moon coaster glows, the heart tree grows with your streak.</p>
      <div className={styles["garden-hero"]}><div className={styles["shot"]}><Image src="/images/myfriend-riley/ride-tunnel.webp" alt="The garden home screen with emotion pets, a lotus pond ride and a moonlit coaster" loading="lazy" width={1280} height={720} sizes="(max-width: 1279px) calc(100vw - 40px), 1380px" /></div></div>

      <FeelingsPicker />
    </section>

    <section className={styles["section"]} aria-labelledby="mfr-rituals-h">
      <span className={styles["eyebrow"]}>Little daily rituals</span>
      <h2 id="mfr-rituals-h" className={styles["section-title"]}>Care that feels like play.</h2>
      <div className={styles["rituals"]}>
        <article className={styles["ritual"]}>
          <div className={styles["shot"]}><Image src="/images/myfriend-riley/garden.webp" alt="Water intake screen with a blooming lotus" loading="lazy" width={1600} height={900} sizes="(max-width: 860px) calc(100vw - 40px), (max-width: 1279px) 33vw, 450px" /></div>
          <span className={styles["tag"]}>water</span><h3>Bloom the lotus</h3>
          <p>Drop in today&apos;s cups of water and watch a sleepy bud open into a beaming lotus.</p>
        </article>
        <article className={styles["ritual"]}>
          <div className={styles["shot"]}><Image src="/images/myfriend-riley/care-water.webp" alt="Sleep screen with a moon cactus in a twilight canyon" loading="lazy" width={1280} height={720} sizes="(max-width: 860px) calc(100vw - 40px), (max-width: 1279px) 33vw, 450px" /></div>
          <span className={styles["tag"]}>sleep</span><h3>Count sleep stars</h3>
          <p>Feed last night&apos;s hours to the Moon Cactus and wake it up rested and glowing.</p>
        </article>
        <article className={styles["ritual"]}>
          <div className={styles["shot"]}><Image src="/images/myfriend-riley/journal-today.webp" alt="The Today journal with wishes, a gratitude seed and a login bonus" loading="lazy" width={1280} height={720} sizes="(max-width: 860px) calc(100vw - 40px), (max-width: 1279px) 33vw, 450px" /></div>
          <span className={styles["tag"]}>journal</span><h3>Open today&apos;s page</h3>
          <p>Little wishes, a gratitude seed and a gentle tip, all in Riley&apos;s magic book.</p>
        </article>
      </div>
    </section>

    <section className={styles["section"]} aria-labelledby="mfr-promise-h" style={{ paddingTop: 0 }}>
      <div className={styles["promise"]}>
        <div>
          <h2 id="mfr-promise-h">Nothing in the garden ever wilts because of you.</h2>
          <p>No streak shaming, no scary meters, no lost progress. A missed day just means a sleepy flower waiting for a splash, and logging a hard feeling earns the same warmth as a happy one.</p>
        </div>
        <BloomCycle />
      </div>
    </section>

    <section className={styles["section"]} aria-labelledby="mfr-vault-h">
      <span className={styles["eyebrow"]}>For self, parents &amp; carers</span>
      <h2 id="mfr-vault-h" className={styles["section-title"]}>Your Wellness Profile</h2>
      <p className={`${styles.lede} ${styles["section-intro"]}`}>You, your parents, or your carers can see what the garden sees: feelings, water and sleep over time, key moments, and how humming sessions line up with the rest of the day. The garden stays playful, your info is safeguarded behind a vault PIN, and the details stay private.</p>
      <figure className={styles["vault-banner"]}>
        <div className={styles["shot"]}><Image src="/images/myfriend-riley/profile.webp" alt="Bella&apos;s profile: wellness overview with water, sleep, emotions, humming and streak" loading="lazy" width={1280} height={724} sizes="(max-width: 1279px) calc(100vw - 40px), 1160px" /></div>
        <figcaption>the wellness overview — a whole week of care at a glance</figcaption>
      </figure>
      <figure className={styles["vault-banner"]}>
        <div className={styles["shot"]}><Image src="/images/myfriend-riley/vault-insights.webp" alt="Grownup insights: logs over time, key moments and humming trends" loading="lazy" width={1280} height={720} sizes="(max-width: 1279px) calc(100vw - 40px), 1160px" /></div>
        <figcaption>grownup insights — logs over time, key moments, and humming trends</figcaption>
      </figure>
    </section>

    <section className={styles["section"]} id="mfr-trailer" aria-labelledby="mfr-trailer-h" style={{ paddingTop: 0 }}>
      <span className={styles["eyebrow"]}>Trailer</span>
      <h2 id="mfr-trailer-h" className={styles["section-title"]}>See Riley&apos;s world in a minute.</h2>
      <div className={styles["trailer"]}>
        <video aria-label="My Friend Riley gameplay trailer" controls playsInline preload="none" poster="/images/myfriend-riley/trailer-poster.webp">
          <source src="/videos/myfriend-riley-trailer.mp4" type="video/mp4" />
          <a href="/videos/myfriend-riley-trailer.mp4">Download the Riley trailer</a>
        </video>
      </div>
    </section>

    <div className={styles["foot"]}>
      <span>My Friend Riley · a Verse game</span>
      <span>in development · art and footage from the current build</span>
    </div>

    <details className={styles['palette-preview']}>
      <summary>Preview page colors</summary>
      <div className={styles['palette-links']}>
        {paletteOptions.map(([id, label]) => <Link key={id} href={`?palette=${id}`} scroll={false} aria-current={activePalette === id ? 'true' : undefined}>{label}</Link>)}
      </div>
    </details>
  </div>

  </main>;
}

