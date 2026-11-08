import Image from "next/image";
import { AudioLines, Music2, Wind } from "lucide-react";

const art = "/images/rythhum";
const eyebrow = "text-xs font-bold uppercase tracking-[0.18em] rh-desktop:text-sm";
const sectionTitle = "mt-3 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl rh-desktop:text-[3.5rem]";
const modeTitle = "mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl rh-desktop:text-[2.625rem]";
const modeCopy = "space-y-4 pt-5 text-base leading-relaxed sm:text-lg rh-desktop:text-[1.3125rem]";
const practiceTitle = "text-2xl font-bold rh-desktop:text-[1.75rem]";
const practiceCopy = "text-lg leading-relaxed text-(color:--rh-body) rh-desktop:text-[1.3125rem]";

// Lazy images use their measured slot when supported. The fallbacks reflect the padded grid.
const forestSizes = "auto, (min-width: 80rem) min(41.5rem, calc(50vw - 2rem)), (min-width: 48rem) min(36rem, calc(50vw - 2rem)), (min-width: 40rem) calc(100vw - 4rem), calc(100vw - 2.5rem)";

export default function ForestSections() {
  return (
    <>
      <section id="gameplay" aria-labelledby="gameplay-title" className="bg-(color:--rh-page) px-5 py-16 text-(color:--rh-ink) sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl rh-desktop:max-w-[83rem]">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 rh-desktop:max-w-[55rem]">
            <p className={`${eyebrow} text-(color:--rh-forest-label)`}>Two ways to find your rhythm</p>
            <h2 id="gameplay-title" className={sectionTitle}>A brighter world. A stronger you.</h2>
            <p className={`mx-auto mt-5 max-w-2xl rh-desktop:max-w-[48rem] ${practiceCopy}`}>
              A hum can help a shy creature come closer. When the woods turn dark, the same voice can help you protect your home.
            </p>
          </header>

          <div className="grid gap-7 sm:gap-10">
            <article className="grid overflow-hidden rounded-3xl bg-(color:--rh-forest) md:grid-cols-2">
              <div className="relative isolate flex aspect-[4/3] items-center justify-center gap-3 overflow-hidden md:aspect-auto md:min-h-80 rh-desktop:min-h-[23rem]">
                <Image src={`${art}/forest-light.webp`} alt="" fill sizes={forestSizes} className="-z-10 object-cover" />
                <Image src={`${art}/bunny.webp`} alt="A woodland rabbit" width={258} height={403} sizes="auto, (min-width: 80rem) 11.5rem, (min-width: 48rem) 10rem, min(10rem, 31vw)" className="h-auto w-[31%] max-w-40 translate-y-3 -rotate-6 rounded-xl border-4 border-(color:--rh-page) shadow-xl rh-desktop:max-w-[11.5rem]" />
                <Image src={`${art}/deer.webp`} alt="A spotted fawn" width={313} height={381} sizes="auto, (min-width: 80rem) 13.875rem, (min-width: 48rem) 12rem, min(12rem, 37vw)" className="h-auto w-[37%] max-w-48 -translate-y-3 rotate-6 rounded-xl border-4 border-(color:--rh-page) shadow-xl rh-desktop:max-w-[13.875rem]" />
              </div>
              <div className="self-center p-6 sm:p-9 lg:p-12">
                <p className={`${eyebrow} text-(color:--rh-forest-label)`}>01 / Explore &amp; connect</p>
                <h3 className={modeTitle}>Enchanted Forest</h3>
                <div className={modeCopy}>
                  <p>Leave your woodland hut and listen for a creature’s call. Hum its pattern back, matching the pauses and holding the longer notes.</p>
                  <p>As the creature warms to you, the forest brightens. Your new friend can follow you home. Release it into the woods and you may meet again on your next walk.</p>
                </div>
              </div>
            </article>

            <article className="grid overflow-hidden rounded-3xl bg-(color:--rh-storm) text-(color:--rh-storm-ink) md:grid-cols-2">
              <div className="relative isolate aspect-[4/3] overflow-hidden md:order-2 md:aspect-auto md:min-h-80 rh-desktop:min-h-[23rem]">
                <Image src={`${art}/forest-dark.webp`} alt="" fill sizes={forestSizes} className="-z-10 object-cover" />
                <div className="absolute inset-x-[10%] top-[7%] bottom-[7%]">
                  <Image src={`${art}/stone-golem.webp`} alt="A moss-covered stone golem" fill sizes="auto, (min-width: 80rem) min(33.2rem, calc(40vw - 1.6rem)), (min-width: 48rem) min(28.8rem, calc(40vw - 1.6rem)), 80vw" className="object-contain object-bottom drop-shadow-md" />
                </div>
              </div>
              <div className="self-center p-6 sm:p-9 lg:p-12">
                <p className={`${eyebrow} text-(color:--rh-storm-label)`}>02 / Breathe &amp; endure</p>
                <h3 className={modeTitle}>Weather the storm</h3>
                <div className={modeCopy}>
                  <p>When stone golems approach your hut, your hum becomes a spell. Listen for the next wave and use your voice to strike or shield your home.</p>
                  <p>The challenge is to hold on until the wave passes. Each group of golems gives you a cue for how long to sustain your spell.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="intervention" aria-labelledby="intervention-title" className="bg-(color:--rh-practice) px-5 py-16 text-(color:--rh-ink) sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl rh-desktop:max-w-[83rem]">
          <header className="mx-auto max-w-3xl text-center rh-desktop:max-w-[55rem]">
            <p className={`${eyebrow} text-(color:--rh-forest-label)`}>The practice behind the magic</p>
            <h2 id="intervention-title" className={sectionTitle}>Built around breath. Brought to life through play.</h2>
          </header>
          <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-5 rounded-3xl bg-(color:--rh-page) p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-10 rh-desktop:max-w-[74rem]">
            <AudioLines aria-hidden="true" className="size-12 shrink-0 text-(color:--rh-music) sm:size-16 rh-desktop:size-[4.625rem]" />
            <div>
              <h3 className={practiceTitle}>The mechanic is the intervention</h3>
              <p className={`mt-2 max-w-3xl rh-desktop:max-w-[55rem] ${practiceCopy}`}>A rabbit gives you a pattern to echo. A line of golems gives you a spell to sustain. In both encounters, the hum you practice is also how you play.</p>
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-12 rh-desktop:max-w-[74rem]">
            <article className="border-t border-(color:--rh-forest-line) pt-6">
              <Wind aria-hidden="true" className="mb-4 size-8 text-(color:--rh-wind) rh-desktop:size-9" />
              <h3 className={practiceTitle}>Sustained exhalation</h3>
              <p className={`mt-3 ${practiceCopy}`}>Try humming a single note. The sound lasts as long as your out-breath. In RythHum, a creature’s longer call gives you a reason to keep that note going.</p>
            </article>
            <article className="border-t border-(color:--rh-storm-line) pt-6">
              <Music2 aria-hidden="true" className="mb-4 size-8 text-(color:--rh-music) rh-desktop:size-9" />
              <h3 className={practiceTitle}>Finding your hum</h3>
              <p className={`mt-3 ${practiceCopy}`}>Listen for where a call rises, pauses, or repeats. Humming it back turns a breathing exercise into a conversation with a forest friend.</p>
            </article>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-(color:--rh-forest-label) rh-desktop:max-w-[48rem] rh-desktop:text-base">
            Research into breathing and humming informed the design of RythHum. The game’s effects on emotional regulation would need to be evaluated separately.
          </p>
        </div>
      </section>
    </>
  );
}
