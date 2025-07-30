import Image from 'next/image'
import { getKarmaImages } from './karma'

const realms = [
  { name: 'God realm', desc: 'a world of ecstasy, beauty, and pleasure.' },
  { name: 'Demi-God realm', desc: 'a world of violence, envy, and jealousy.' },
  { name: 'Human realm', desc: 'a world of purpose, aspirations, and possibilities.' },
  { name: 'Animal realm', desc: 'a world of instincts, survival, and self-preservation.' },
  { name: 'Ghost realm', desc: 'a world of neediness, addictions, and compulsions.' },
  { name: 'Hell realm', desc: 'a world of agony, terror, and depression.' },
]



export default async function KarmaPage() {

    const images = await getKarmaImages()
  return (
    <>
    <section className="relative bg-black min-h-screen overflow-hidden twinkling-stars">
        {/* bg */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: "url('/images/karma/karmaBg.png')",
        }}
        />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/90 z-10" />

      <div className="relative z-20 text-white px-6 py-44 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(165,100,255,0.8)]">
          Discover Your Path Through the Six Realms
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          A cosmic gamified journey into mind, meaning, and karma. Which realm will you awaken in?
        </p>
    <div className="flex justify-start mt-10 ml-82 pl-10 ">
{images[0] && (
  <img
    src={images[0].url}
    alt={images[0].altText || 'Image of the Realms'}
    width={400}
    height={400}
    className="rounded-xl shadow-[0_0_60px_rgba(165,100,255,0.3)] transition duration-300 hover:shadow-[0_0_40px_rgba(165,100,255,0.6)]"
  />
)}

    
      <ul className="text-left max-w-2xl mx-44 mt-12 space-y-8 text-lg text-gray-300">
        {realms.map((realm, i) => (
      <li key={i}>
      <span className="text-purple-400 font-semibold">{realm.name}</span> – {realm.desc}
    </li>
  ))}
</ul>
      </div>

      </div>
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
    </section>

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


  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-xl overflow-hidden border border-purple-500 bg-black/30 backdrop-blur p-2 shadow-lg transition duration-300 hover:shadow-[0_0_40px_rgba(165,100,255,0.6)]">
        {images[1] && (
    <img 
    src={images[1].url} 
    alt={images[1].altText || 'image of'} 
    className="rounded-lg" />
)}

      <p className="text-sm text-purple-300 mt-2 italic">Example: Media Interpretation – Marvel Universe</p>
    </div>

    <div className="rounded-xl overflow-hidden border border-purple-500 bg-black/30 backdrop-blur p-2 shadow-lg transition duration-300 hover:shadow-[0_0_40px_rgba(165,100,255,0.6)]">
{images[2] && (
    <img 
    src={images[2].url} 
    alt={images[2].altText || 'image of'} 
    className="rounded-lg" />
)}

      <p className="text-sm text-purple-300 mt-2 italic">Example: Sci-Fi Take – Star Wars Karma Map</p>
    </div>
  </div>
</section>


  </>
  )
}
