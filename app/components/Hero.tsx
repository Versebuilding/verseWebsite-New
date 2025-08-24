import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'



export async function getHeroImage() {
  return prisma.mediaAsset.findFirst({
    where: { page : 'homePage', section: 'hero', type: 'image'},
    orderBy: { createdAt: 'desc'},
    select: {url: true, altText: true, title:true}
  })
}
const Hero = async() => {

  const HeroImage = await getHeroImage() 
  return (
    <main className="relative w-full min-h-[100svh] overflow-hidden">
      {HeroImage?.url && (
        <Image 
        src={HeroImage.url}
        alt={HeroImage.altText || 'hero iamge'}
        fill
        priority
        className="object-cover pointer-events-none select-none"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/70 md:from-black/35 md:via-black/25 md:to-black/40" />




      <div className="relative z-10 inset-0 flex flex-col items-center justify-center text-center text-white px-4
                      min-h-[100svh] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        <h1 className="text-balance font-extrabold tracking-tight leading-[1.05]
                       text-[clamp(28px,8vw,64px)] drop-shadow-[0_0_14px_rgba(165,100,255,0.7)]">
          What If Games Could Make You Feel Better ?
        </h1>

        <p className="mt-3 text-pretty text-white/90 leading-[1.8]
                      text-[clamp(15px,4.2vw,20px)] max-w-[68ch]">
          At The Verse, we build immersive digital experiences that support healing,
          connection, and personal growth.
        </p>

        <div className="mt-8 md:mt-12 w-30 flex flex-col md:flex-row gap-3 md:gap-6 items-stretch md:items-center md:justify-center">
          <Button 
          asChild 
 className="relative rounded-2xl px-6 py-5 md:w-40 w-full 
            bg-[#7963DE] text-white 
             transition duration-300 hover:animate-glow">      
              <Link href="/games" aria-label="Explore games and experiences">Explore
               </Link>
          </Button>
          <Button 
          asChild 
          className="bg-white text-black rounded-2xl px-6 py-5 md:w-40 w-full transition duration-300 hover:animate-glow">
            <Link href="/comingSoon" aria-label="Try the demo">Demo</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Hero
