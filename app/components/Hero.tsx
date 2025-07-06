import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <main className='w-full overflow-hidden'>
      <div className="relative  min-h-[500px] md:h-[200px] lg:min-h-[500px]">
        <Image src='/images/verseBg.png'
        alt='Hero of the verse'
        width={1920}
        height={500}
        className="w-full h-auto"

        priority
        />

        <div className="absolute inset-0 bg-black/30"></div>

        {/* content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mt-8">
            <h1 className='font-extrabold md:text-5xl mb-4'>What if games could make you feel better ?</h1>
            <p className='text-2xl max-w-2xl mt-2 '>At The Verse, we build immersive digital experiences that
               support healing, connection, and personal growth
            </p>
            <div className='flex gap-8 mt-20'>
               <button className="bg-gray-700 text-white px-6 py-2 rounded-2xl w-32">Explore</button>
               <button className="bg-pink-300 text-black px-6 rounded-2xl w-30">Demo</button>
            </div>
        </div>
        </div>

    </main>

    <article className='flex justify-center items-center bg-gradient-to-b from-[#1C1428] to-[#202020]'>
      <Image 
      src='/images/vid.png'
      alt='vid'
      width={600}
      height={600}
      className='mt-10'
      />
    </article>
    </>
  )
}

export default Hero