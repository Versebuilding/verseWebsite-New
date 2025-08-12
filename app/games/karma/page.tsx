import Image from 'next/image'
import { getKarmaImages } from './karma'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'
export const metadata = {
  title: 'Karma: The Six Realms | The verse',
  description: 'Begin your journey through the six psychological realms inspired by Buddhist teachings. Where will you land?',
}

const realms = [
  { name: 'God realm', desc: 'a world of ecstasy, beauty, and pleasure.' },
  { name: 'Demi-God realm', desc: 'a world of violence, envy, and jealousy.' },
  { name: 'Human realm', desc: 'a world of purpose, aspirations, and possibilities.' },
  { name: 'Animal realm', desc: 'a world of instincts, survival, and self preservation.' },
  { name: 'Ghost realm', desc: 'a world of neediness, addictions, and compulsions.' },
  { name: 'Hell realm', desc: 'a world of agony, terror, and depression.' },
]

export default async function KarmaPage() {
  const images = await getKarmaImages()

  return (
    <>
      <section className="relative bg-black min-h-[100svh] overflow-hidden twinkling-stars">
        {/* bg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/karma/karmaBg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90 z-10" />

        <div className="relative z-20 text-white px-6 py-44 text-center">
          <h1 className="text-4xl md:text-5xl mt-40 font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(165,100,255,0.8)]">
            Discover Your Path Through the Six Realms
          </h1>
          <p className="max-w-5xl mx-auto text-lg text-gray-300">
            Karma is a game that turns kindness and self awareness into play. The Six Realms come from Buddhist teachings
            not real places, but ways our minds feel and behave. Everyone experiences them differently. You’ll start with
            short games that explore your prosocial traits, and based on your choices, you’ll land in the realm that fits you best.
          </p>
        <Button className='bg-white text-black px-6 mt-10'>
          <Link href='/comingSoon'>
          Explore
          </Link>
          </Button>
        </div>
      </section>

      <section className="relative bg-black text-white px-6 mb-44 py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:gap-12 md:grid-cols-[minmax(0,520px)_1fr] items-start">
          <div className="relative w-full  rounded-xl overflow-hidden shadow-[0_0_60px_rgba(165,100,255,0.4)] transition duration-500 hover:shadow-[0_0_80px_rgba(165,100,255,0.8)] [mask-image:radial-gradient(circle,rgba(0,0,0,1)_92%,transparent_100%)]">
            {images?.[0] && (
              <Image
                src={images[0].url}
                alt={images[0].altText || 'Image of the Realms'}
                height={700}
                width={500}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 600px"
                priority
              />
            )}
          </div>

          <ul className="text-left max-w-2xl mx-auto md:mx-0 space-y-12 mt-44 text-lg text-gray-300">
            {realms.map((realm, i) => (
              <li key={i}>
                <span className="text-purple-400 font-semibold">{realm.name}</span> – {realm.desc}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="relative z-20 px-6  text-white text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white drop-shadow-[0_0_10px_rgba(165,100,255,0.8)]">
          Karmic Score Determines Your Realm
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our current <span className="text-indigo-400 font-medium">PS Mini Games</span> is <span className="text-purple-300 font-bold">F-E-S</span> where players interact with 3 classes of characters. Based on players <span className="text-indigo-300">Karmic Score</span> (psychological survey and game play), players are born into one of the six realms of existence (God, Demi-God, Human, Animal, Ghost, Hell) where they employ our human ability to <span className="italic text-pink-400">“tend and befriend”</span> to solve challenges and move on to the next levels.
        </p>

        <div className="rounded-xl mt-10 mb-20 border border-purple-500 bg-black/30 backdrop-blur-md transition duration-300 shadow-[0_0_30px_rgba(165,100,255,0.4)] hover:shadow-[0_0_40px_rgba(165,100,255,0.6)] p-3">
          <Image
            src="/images/karma/karma-gameEx.png"
            alt="F-E-S Mini Game Screenshot"
            width={900}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>

      <section className="relative z-20 px-6 py-24 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(165,100,255,0.8)]">
          What&apos;s Your Take on the Six Realms?
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Feel free to think beyond the traditional interpretations and bring your own unique perspective to each realm.
          We&apos;re excited to see how you can help translate these ancient concepts into relatable, meaningful reflections on
          our daily lives and interactions.
          <br /><br />
          How would you <span className="text-indigo-400 font-medium">“skin”</span> the 6 Realms? Artistic? Media? Political? Historic? Science Fiction?
        </p>

        <div className="mt-18 grid grid-cols-1 md:grid-cols-2 gap-18">
          <div className="rounded-xl shadow-[0_0_30px_rgba(165,100,255,0.6)] overflow-hidden border border-black bg-black/30 backdrop-blur p-2 transition duration-300 hover:shadow-[0_0_80px_rgba(165,100,255,0.6)]">
            {images[2] && (
              <div className="relative w-full aspect-square bg-black/40 rounded-lg">
                <Image
                  src={images[1].url}
                  alt={images[2].altText || 'image of karma map'}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            <p className="text-sm text-purple-300 mt-2 italic">Example: Media Interpretation</p>
          </div>

          <div className="rounded-xl shadow-[0_0_30px_rgba(165,100,255,0.6)] overflow-hidden border border-black bg-black/30 backdrop-blur p-2 transition duration-300 hover:shadow-[0_0_80px_rgba(165,100,255,0.6)]">
            {images[0] && (
              <div className="relative w-full aspect-square bg-black/40 rounded-lg">
                <Image
                  src={images[2].url}
                  alt={images[0].altText || 'image of karma map 2'}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            <p className="text-sm text-purple-300 mt-2 italic">Example: Sci-Fi Take</p>
          </div>
        </div>
      </section>
    </>
  )
}
