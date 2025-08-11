import React from 'react'
import Image from 'next/image'
import PolyWalk from './polywalk'
import { BookOpen, Paintbrush, Handshake, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'WalkXR | The Verse',
  description:'WalkXR turns real world walking into an embodied, story driven path to wellness inviting people to learn, create, connect, and heal through play.',
}



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
          sizes='40'
          priority
          className="object-cover"
          />
      </div>

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
    <div className="md:w-1/2 transition hover:-translate-y-1 hover:shadow-xl/30">
      <Image src="/images/walkxr/walkxr-walk.png" alt="How it works" width={600} height={400} className="rounded-xl shadow-2xl" />
    </div>
    <div className=" space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Walking the Walk</h2>
      <p className="text-lg text-gray-300 mb-6">
        WalkXR turns play into a path for growth—every step invites you to <span className="text-indigo-300 font-medium">learn</span>, <span className="text-indigo-300 font-medium">create</span>, <span className="text-indigo-300 font-medium">connect</span>, and <span className="text-indigo-300 font-medium">heal</span>.
      </p>

      <ul className="space-y-4">
        <li className="text-gray-300">
          <span className="text-white font-semibold">Learn</span>, Immerse in stories and role-plays that spark empathy for real-world challenges.
        </li>
        <li className="text-gray-300">
          <span className="text-white font-semibold">Create</span>, Shape your journey with art, rituals, and personal “walks.”
        </li>
        <li className="text-gray-300">
          <span className="text-white font-semibold">Connect</span>, Share experiences, reflect together, and build community.
        </li>
        <li className="text-gray-300">
          <span className="text-white font-semibold">Heal</span>, Use guided practices to process emotions and build resilience.
        </li>
      </ul>
    
    
    </div>
  </div>

</section>


  {/* walk the walk */}


<section className="bg-[#0b0b17] text-white px-6 py-24">

  <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
    <h2 className="text-4xl md:text-5xl font-bold font-unbounded">
      Walking&nbsp;the&nbsp;Walk
    </h2>
    <p className="text-lg md:text-xl text-gray-300">
      WalkXR embraces the transformative power of <span className="text-indigo-400 font-semibold">play</span> to
      redefine how we&nbsp;learn, create, connect and heal. By weaving game
      mechanics into every step, the platform invites participants to explore
      critical issues and personal growth through an embodied journey.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

    <div className="bg-[#13131f] rounded-2xl p-6 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-xl/30">
      <span className="text-5xl mb-4"><BookOpen /></span>
      <h3 className="text-xl font-semibold mb-2">Learn</h3>
      <p className="text-sm text-gray-400">
        Narrative role-play and interactive scenarios build deep empathy around
        challenges like climate change and DEI.
      </p>
    </div>

    <div className="bg-[#13131f] rounded-2xl p-6 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-xl/30">
      <span className="text-5xl mb-4"><Paintbrush /></span>
      <h3 className="text-xl font-semibold mb-2">Create</h3>
      <p className="text-sm text-gray-400">
        Art-based rituals, journaling and custom “walks” let participants leave
        lasting artifacts of their experience.
      </p>
    </div>

    <div className="bg-[#13131f] rounded-2xl p-6 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-xl/30">
      <span className="text-5xl mb-4"><Handshake /></span>
      <h3 className="text-xl font-semibold mb-2">Connect</h3>
      <p className="text-sm text-gray-400">
        Shared reflection spaces encourage story-exchange, strengthening empathy
        and community bonds.
      </p>
    </div>

    <div className="bg-[#13131f] rounded-2xl p-6 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-xl/30">
      <span className="text-5xl mb-4"><HeartHandshake /></span>
      <h3 className="text-xl font-semibold mb-2">Heal</h3>
      <p className="text-sm text-gray-400">
        Built-in breathwork &amp; mindfulness loops help process tough emotions,
        boosting resilience and self-awareness.
      </p>
    </div>
  </div>
</section>



<section className="bg-[#0b0b17] text-white py-24 px-6">

  <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
    <h2 className="text-4xl md:text-5xl font-unbounded">
      Step&nbsp;Into&nbsp;Action&nbsp;with&nbsp;PolyWalks
    </h2>
    <p className="text-lg md:text-xl text-gray-300">
      We focus on humanity’s most urgent crises through immersive learning
      paths we call&nbsp;<span className="text-indigo-400 font-semibold">PolyWalks</span>.
    </p>
  </div>

  <div className="max-w-6xl mx-auto">

    
            <PolyWalk />


  </div>
</section>



          </>
  )
}

export default page
