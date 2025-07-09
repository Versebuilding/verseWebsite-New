import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
<main className="w-full h-[100dvh] min-h-0 relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vbg.png"
          alt="Hero of the verse"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-extrabold text-3xl md:text-5xl mb-4 max-w-4xl">
            What if games could make you feel better?
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mt-2">
            At The Verse, we build immersive digital experiences that support healing, connection, and personal growth.
          </p>
          <div className="flex gap-8 mt-12">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl w-32">Explore</button>
            <button className="bg-pink-300 text-black px-6 py-2 rounded-2xl w-32">Demo</button>
          </div>
        </div>
      </main>

      <article className="flex justify-center items-center bg-gradient-to-b from-[#1C1428] to-[#202020] py-16">
        <Image
          src="/images/vid.png"
          alt="vid"
          width={600}
          height={600}
        />
      </article>
    </>
  )
}

export default Hero
