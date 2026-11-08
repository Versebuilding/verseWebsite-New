import type { Metadata } from 'next';
import Image from 'next/image';
import { Play, Sparkle } from 'lucide-react';
import ForestSections from './ForestSections';
import palettes from './palettes.module.css';

export const metadata: Metadata = {
  title: 'RythHum | The Verse',
  description: 'Explore RythHum, a voice-controlled forest adventure for ages 8–12. Match woodland creatures’ rhythms and cast spells with a hum.',
};

const previewPalettes = ['verse-violet', 'moonlit-indigo', 'velvet-plum', 'woodland'];

export default async function RythHumPage({ searchParams }: {
  searchParams: Promise<{ palette?: string | string[] }>;
}) {
  const { palette } = await searchParams;
  const activePalette = typeof palette === 'string' && previewPalettes.includes(palette)
    ? palette
    : palettes.defaultPalette;

  return (
    <main data-palette={activePalette} className={`${palettes.page} bg-(color:--rh-page) text-(color:--rh-ink)`}>
      <section aria-labelledby="rythhum-title" className="relative isolate overflow-hidden">
        <div className="relative mx-auto max-w-[120rem]">
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-6 sm:px-10 md:pointer-events-none md:flex md:min-h-[35rem] md:items-center md:py-16 lg:px-16 rh-desktop:min-h-[38.5rem] rh-desktop:max-w-[91rem]">
            <div className="md:pointer-events-auto md:w-1/2 rh-desktop:w-[53%]">
              <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-(color:--rh-brand) rh-desktop:text-base">
                <Sparkle size={18} aria-hidden="true" className="rh-desktop:size-5" />
                RythHum
                <span aria-hidden="true" className="h-px w-10 bg-(color:--rh-line)" />
                <span className="text-xs tracking-wide text-(color:--rh-secondary) rh-desktop:text-sm">Ages 8–12</span>
              </div>
              <h1 id="rythhum-title" className="mt-5 font-serif text-[clamp(3.25rem,6.8vw,6.5rem)] leading-[0.97] tracking-[-0.055em] rh-desktop:text-[min(7.7vw,7.4rem)]">
                Your voice<br />heals the forest
              </h1>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-(color:--rh-intro) rh-desktop:max-w-[27.5rem] rh-desktop:text-xl">
                A voice-controlled adventure where children explore big feelings, befriend forest creatures, and find the magic in their own breath.
              </p>
              <a href="#film" className="mt-7 inline-flex items-center gap-3 rounded-full bg-(color:--rh-button) px-6 py-3 font-semibold text-(color:--rh-button-ink) hover:bg-(color:--rh-button-hover) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(color:--rh-focus) rh-desktop:px-7 rh-desktop:py-3.5 rh-desktop:text-lg">
                <Play size={16} fill="currentColor" aria-hidden="true" className="rh-desktop:size-[1.125rem]" />
                Watch the trailer
              </a>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[68%]">
            <Image src="/images/rythhum/home-light.webp" alt="" fill priority sizes="(min-width: 768px) 68vw, 100vw" className="object-cover object-center" />
            <div aria-hidden="true" className="absolute -inset-px bg-linear-to-b from-(--rh-page) via-transparent via-30% to-transparent md:bg-linear-to-r md:via-(--rh-page)/90 md:via-22% md:to-56%" />
            <Image src="/images/rythhum/player.webp" alt="A little forest wizard in a purple hat and red scarf" width={966} height={1024} sizes="(min-width: 768px) 16vw, 28vw" className="absolute bottom-[4%] left-[34%] h-[42%] w-[29%] object-contain object-bottom md:left-[36%]" />
          </div>
        </div>
      </section>

      <section id="film" aria-labelledby="film-title" className="mx-auto max-w-5xl px-6 pt-16 text-center sm:px-10 sm:pt-24 rh-desktop:max-w-[73rem] rh-desktop:pt-16">
        <p className="text-xs font-bold tracking-[0.18em] text-(color:--rh-film-label) uppercase rh-desktop:text-sm">Welcome to the enchanted forest</p>
        <h2 id="film-title" className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl rh-desktop:text-[3.5rem]">Small hums. Big changes.</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-(color:--rh-secondary) rh-desktop:max-w-2xl rh-desktop:text-xl">
          Step inside the woodland hut, meet its neighbors, and see how a hum brings the forest to life in this trailer from The Verse.
        </p>
        <video controls playsInline preload="metadata" poster="/images/rythhum/home-light.webp" aria-label="The Verse trailer featuring RythHum gameplay" className="mt-8 aspect-video w-full rounded-2xl bg-(color:--rh-player-bg) shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(color:--rh-focus) sm:rounded-3xl">
          <source src="/videos/rythhum-trailer.mp4" type="video/mp4" />
          <a href="/videos/rythhum-trailer.mp4">Download the trailer</a>
        </video>
      </section>

      <ForestSections />
    </main>
  );
}
