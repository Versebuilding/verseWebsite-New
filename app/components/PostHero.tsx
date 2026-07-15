'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const PostHero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const blur = useTransform(
    scrollYProgress,
    [0, 0.4],
    ['0px', '12px']
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 0]
  )

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-1/3 w-full bg-gradient-to-b from-[#170237]/90 to-transparent" />

      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{ filter: blur }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/posthero.MP4"
          type="video/mp4"
        />
      </motion.video>

      <motion.h1
        style={{ opacity }}
        className="absolute bottom-80 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(28px,6vw,64px)] font-bold leading-tight text-white/80"
      >
        Welcome To The Verse
      </motion.h1>
    </section>
  )
}

export default PostHero