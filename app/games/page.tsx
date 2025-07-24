
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';

const experiences = [
  {
    title: 'WalkXR',
    description: 'An immersive first-person game blending storytelling, interactive gameplay, and emotional regulation to foster learning, creativity, and healing.',
    image: '/images/games/walkxr.jpeg',
    slug: 'walkxr'
  },
  {
    title: 'Karma: The Six Realms',
    description: 'A prosocial exploration through the Buddhist 6 Realms where you are rewarded for being empathetic, altruistic, cooperative and collaborative. It is a prosocial game that primes prosocial behaviour',
    image: '/images/games/karma.png',
    slug: 'karma'
  },
  {
    title: 'Adventures in Breath',
    description: 'Games that make you breath. Imagine playing a game like Angry Birds or Temple Run, but instead of traditional controls, you use your breath to move characters and interact with the game environment. Breathe, have fun, and improve your health/well-being',
    image: '/images/games/aib.png',
    slug : 'aib'
  },
];

export default function Games() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#070316] to-[#332859]  text-white py-16 px-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 mt-10 text-center">Interactive Experiences</h1>
      <p className="max-w-2xl text-lg md:text-xl text-center mb-8">
        Discover immersive, nature-inspired experiences designed to nurture your well-being and creativity
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {experiences.map((exp) => (
<div key={exp.title} className="bg-[#1C1428] rounded-3xl p-6 shadow-lg hover:scale-[1.03] hover:shadow-xl transition-transform duration-300 flex flex-col items-center text-center">
            <Image
              src={exp.image}
              alt={exp.title}
              width={500}
              height={300}
              className="rounded-2xl object-cover"
              />
            <h2 className="text-2xl font-bold mt-4 mb-2">{exp.title}</h2>
            <p className="text-base text-gray-300">{exp.description}</p>
            <Link href={`/games/${exp.slug}`}>
            <Button variant='default' className='bg-white/10 mt-8 rounded-xl z-50 cursor-pointer'>Explore</Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
