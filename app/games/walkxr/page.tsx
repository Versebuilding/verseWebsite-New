'use client'

import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/walkxr/walkxrBg.png"
          alt="WALK-XR background"
          fill
          priority
          className="object-cover w-full h-full"
          />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_0_25px_rgba(165,100,255,0.9)]">
          WALK-XR
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-sm">
          An immersive path to wellness, driven by cutting-edge technology and engaging gameplay.
        </p>

      </div>
    </div>
<section className="bg-[#0b0b17] text-white px-6 py-24">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    <div className="md:w-1/2">
      <Image src="/images/walkxr/how.gif" alt="How it works" width={600} height={400} className="rounded-xl shadow-2xl" />
    </div>
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl font-bold">The How of WalkXR</h2>
      <p className="text-lg text-gray-300">WalkXR uses curated multimedia experiences, mindfulness practices, and rituals...</p>
    </div>
  </div>
</section>



          </>
  )
}

export default page
