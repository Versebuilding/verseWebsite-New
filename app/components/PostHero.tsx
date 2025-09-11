'use client'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  url: string
}

const PostHero = ({ url }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)



  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })



  // blur increases as scroll
  const blur = useTransform(scrollYProgress, [0, 0.4], ['0px', '12px'])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  if (!url) {
    return (
      <section className="flex justify-center items-center bg-gradient-to-b from-[#170237] to-[#030004] py-16">
        <p className="text-white text-lg">Video Loading ..</p>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
        {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#170237]/90 to-transparent z-10 pointer-events-none" />


      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{ filter: blur }} 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={url} type="video/mp4" />
      </motion.video>


      {/* text */}
      <motion.h1
        className="absolute z-20 text-white/80 text-center font-bold leading-tight
                   text-[clamp(28px,6vw,64px)] bottom-80 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity }}
      >
        Welcome To The Verse 
      </motion.h1>
    </section>
  )
}

export default PostHero
