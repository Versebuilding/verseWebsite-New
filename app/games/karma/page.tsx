import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Marcellus } from 'next/font/google';
import { RealmExplorer, KindnessMoment, HumStatueDemo } from './KarmaInteractions';
import styles from './karma.module.css';

const display = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-karma-display', display: 'swap' });

export const metadata: Metadata = {
  title: 'Karma: The Six Realms | The Verse',
  description:
    'A dream-walk through six states of mind, where kindness is the way forward. Karma: The Six Realms is a prosocial story adventure in development at The Verse.',
};

const art = '/images/karma';

const loop = [
  {
    step: '01',
    title: 'Dream',
    text: 'Sammy falls asleep and wakes inside a realm: a whole world built out of one feeling. A small black cat comes along and says nothing at all.',
  },
  {
    step: '02',
    title: 'Notice',
    text: 'Everyone here is stuck in the same loop. Before you can help, you have to see what is really going on. The clues are in the world, not in a menu.',
  },
  {
    step: '03',
    title: 'Give',
    text: 'Share, listen, carry, sit beside someone. Kind actions are how you move through the game, and your karma grows one lotus petal at a time.',
  },
  {
    step: '04',
    title: 'Breathe',
    text: 'At the hum statue your own voice becomes the controller. A slow, steady hum lights the statue and settles Sammy, and you along with it.',
  },
];

const skills = [
  { name: 'Empathy', text: 'Reading what someone feels before deciding what they need.' },
  { name: 'Altruism', text: 'Giving something up when nothing comes back for it.' },
  { name: 'Cooperation', text: 'Getting further together than anyone could alone.' },
  { name: 'Self-regulation', text: 'Calming your own body first, so you can show up for someone else.' },
];

const research = [
  {
    tag: 'Prosocial play',
    claim: 'What you practise in a game can come with you.',
    text: 'Across experimental, correlational and longitudinal studies, people who played games built around helping went on to help more in real life. A later meta-analysis of 98 studies found the same pattern.',
    cite: 'Gentile et al., 2009 · Greitemeyer & Mügge, 2014',
  },
  {
    tag: 'Compassion training',
    claim: 'Compassion behaves like a skill, not a fixed trait.',
    text: 'Two weeks of short daily compassion practice made adults more generous toward a stranger who had been treated unfairly, with matching changes in how their brains responded to suffering.',
    cite: 'Weng et al., 2013, Psychological Science',
  },
  {
    tag: 'Giving',
    claim: 'Generosity is good for the giver too.',
    text: 'People asked to spend a little money on someone else ended the day happier than people who spent it on themselves. Karma’s first chapter is built on that idea: giving is what fills the cup.',
    cite: 'Dunn, Aknin & Norton, 2008, Science',
  },
  {
    tag: 'Tend and befriend',
    claim: 'Fight-or-flight is not our only stress response.',
    text: 'Under threat, humans also reach toward each other: protecting, caring, and building alliances. Every realm in Karma asks for that response instead of a weapon.',
    cite: 'Taylor et al., 2000, Psychological Review',
  },
  {
    tag: 'Breath and voice',
    claim: 'A long, slow out-breath is a lever on the nervous system.',
    text: 'Slow-paced breathing is linked with higher heart-rate variability and calmer self-reported mood. A hum is a slow exhale you can hear, which makes it something a game can listen for.',
    cite: 'Zaccaro et al., 2018, Frontiers in Human Neuroscience',
  },
  {
    tag: 'Embodied learning',
    claim: 'We understand with our bodies, not just our heads.',
    text: 'Grounded-cognition research suggests ideas stick when they are tied to action. So Sammy does not pick “be kind” from a list. Sammy walks over and holds out the bread.',
    cite: 'Barsalou, 2008, Annual Review of Psychology',
  },
];

export default function KarmaPage() {
  return (
    <main id="karma" className={`${styles.page} ${display.variable}`}>
      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.stars} aria-hidden="true" />
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>A Verse Game about Pro social behaviour &amp; kindness</span>
            <h1 className={styles.title}>
              Karma
              <span className={styles.titleSub}>The Six Realms</span>
            </h1>
            <p className={styles.tagline}>A dream-walk through six states of mind, where kindness is the way forward.</p>
            <p className={styles.lede}>
              Each night, Sammy wakes somewhere new: a heaven that forgot how to feel, a battlefield of envy, a village
              where food rains from the sky and no one can eat. You cannot fight your way out. You help your way out.
            </p>
            <div className={styles.ctas}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="#karma-realms">Explore the realms</a>
              <a className={`${styles.btn} ${styles.btnGhost}`} href="#karma-science">See the science</a>
            </div>
            <div className={styles.facts}>
              <span>Story adventure</span>
              <span>Kindness is the mechanic</span>
              <span>Hum-powered calm</span>
            </div>
          </div>
          <figure className={styles.heroArt}>
            <Image
              src={`${art}/dream-wheel.webp`}
              alt="A black cat flies through a starry night sky carrying a sleeping child above a glowing wheel showing the six realms"
              width={1400}
              height={934}
              priority
              sizes="(min-width: 960px) 46vw, calc(100vw - 32px)"
            />
            <figcaption>Sammy, the cat, and the wheel of six realms</figcaption>
          </figure>
        </div>
      </header>

      {/* ── Concept ── */}
      <section className={styles.section} aria-labelledby="karma-concept-h">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>The idea</span>
          <h2 id="karma-concept-h">Six realms. One mind. Yours.</h2>
          <div className={styles.split}>
            <p className={styles.lede}>
              In Buddhist teaching, the Six Realms are not only places you might be reborn. They are moods we pass
              through before lunch: the scroll you cannot stop, the jealousy that flares at someone else’s good news,
              the afternoon on autopilot.
            </p>
            <p className={styles.lede}>
              Karma turns each of those states into a world you can walk around in, and asks one question of it:
              <strong> what does kindness look like here?</strong> There are no enemies to defeat, only people to
              understand.
            </p>
          </div>
          <ol className={styles.loop}>
            {loop.map((item) => (
              <li key={item.step}>
                <span className={styles.step}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Realms ── */}
      <section id="karma-realms" className={`${styles.section} ${styles.band}`} aria-labelledby="karma-realms-h">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>The worlds</span>
          <h2 id="karma-realms-h">Pick a realm. Recognise the feeling.</h2>
          <p className={`${styles.lede} ${styles.intro}`}>
            Every realm is one feeling turned all the way up, and every one has a way through. Choose a realm to see
            how it feels, where it shows up in ordinary life, and the skill that loosens it.
          </p>
          <RealmExplorer />
        </div>
      </section>

      {/* ── Chapter 1 ── */}
      <section className={styles.section} aria-labelledby="karma-chapter-h">
        <div className={`${styles.wrap} ${styles.chapter}`}>
          <figure className={styles.chapterCard}>
            <Image
              src={`${art}/chapter-hungry-ghost.webp`}
              alt="In-game chapter card: The Hungry Ghost and the Empty Cup"
              width={645}
              height={760}
              sizes="(min-width: 860px) 340px, min(340px, 80vw)"
            />
          </figure>
          <div>
            <span className={styles.eyebrow}>Chapter 1 · Hungry Ghost realm</span>
            <h2 id="karma-chapter-h">Serna and the Empty Cup</h2>
            <p className={styles.lede}>
              A warm little village under a pink sunset. Cakes on every bench. Food falling out of a clear sky. And
              not one person who can feel full.
            </p>
            <ul className={styles.beats}>
              <li>
                <strong>A feast nobody eats.</strong> An old villager sends Sammy up the hill to the temple with a
                question: why does more never feel like enough?
              </li>
              <li>
                <strong>A monk named Ananda.</strong> He teaches tonglen, the practice of breathing in someone’s
                difficulty and breathing out relief, and the hum that goes with it.
              </li>
              <li>
                <strong>The Falling Feast.</strong> Someone is behind the food from the sky. Sammy sets out to find
                them with a loaf of blessed bread, in case someone along the way needs it more.
              </li>
              <li>
                <strong>Serna.</strong> A girl in a dress made of everything she has tried to fill herself with. Her
                quest is not “deliver the bread”. It is “stay”.
              </li>
            </ul>
            <p className={styles.note}>The teaching underneath: generosity is the cure for emptiness.</p>
          </div>
        </div>
      </section>

      {/* ── Prosociality ── */}
      <section className={`${styles.section} ${styles.band}`} aria-labelledby="karma-kind-h">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Prosocial by design</span>
          <h2 id="karma-kind-h">Kindness is the controller.</h2>
          <p className={`${styles.lede} ${styles.intro}`}>
            “Prosocial” is the research word for anything we do to benefit someone else. Most games treat it as a
            dialogue option. Karma makes it the thing your hands are doing.
          </p>
          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.text}</p>
              </li>
            ))}
          </ul>
          <KindnessMoment />
        </div>
      </section>

      {/* ── Hum statue ── */}
      <section className={styles.section} aria-labelledby="karma-hum-h">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>The hum statue</span>
          <h2 id="karma-hum-h">Calm is something you do, not something you are told.</h2>
          <p className={`${styles.lede} ${styles.intro}`}>
            In the temple garden sits a statue with three empty orbs. Hum a low note, a middle note and a high note,
            hold each one steady, and the orbs light in turn. Try it here with your own voice: the statue learns your
            range first, so the notes fit you.
          </p>
          <HumStatueDemo />
        </div>
      </section>

      {/* ── Science ── */}
      <section id="karma-science" className={`${styles.section} ${styles.band}`} aria-labelledby="karma-science-h">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>The research behind the design</span>
          <h2 id="karma-science-h">Old wisdom, checked against new evidence.</h2>
          <p className={`${styles.lede} ${styles.intro}`}>
            The Six Realms are a 2,500-year-old map of the mind. Each design decision in Karma pairs that map with
            something psychology and neuroscience have since measured.
          </p>
          <ul className={styles.research}>
            {research.map((item) => (
              <li key={item.tag}>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.claim}</h3>
                <p>{item.text}</p>
                <cite>{item.cite}</cite>
              </li>
            ))}
          </ul>
          <p className={styles.disclaimer}>
            This research informed Karma’s design. Karma itself is still in development, and its own effects on
            kindness or wellbeing have not yet been studied. It is a game, not a treatment.
          </p>
        </div>
      </section>

      {/* ── Close ── */}
      <section className={`${styles.section} ${styles.close}`} aria-labelledby="karma-close-h">
        <div className={styles.wrap}>
          <h2 id="karma-close-h">Where will you wake up tonight?</h2>
          <p className={styles.lede}>
            Karma: The Six Realms is being built at The Verse, chapter by chapter, starting with the Hungry Ghost
            realm. If you would like to follow along, playtest, or collaborate, we would love to hear from you.
          </p>
          <div className={styles.ctas}>
            <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact-us">Get in touch</Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="/games">More games from The Verse</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
