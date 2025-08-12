'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = { url: string }

const VideoZoom = ({ url }: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 80%', 'end 10%'],
  })

  // to grow and fade
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1.3])
  const opacity = useTransform(scrollYProgress, [0.25, 0.4], [1, 0])


  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const unsub = scrollYProgress.on('change', v => setIsDone(v >= 0.95))
    return () => unsub()
  }, [scrollYProgress])

  return (
    <div className="relative"> 
      <section
        ref={targetRef}
        className="relative h-[120svh] md:h-[160vh] w-full bg-black z-10 overflow-hidden"
      >
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-1/2 left-1/2 w-auto h-auto max-w-[90vw] max-h-[90vh] object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ scale, opacity }}
          >
          <source src={url} type="video/mp4" />
        </motion.video>

<div className="pointer-events-none absolute left-1/2 top-[50svh] md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
          <motion.h1
 className="text-white text-center font-bold leading-tight
               text-[clamp(22px,7vw,40px)] sm:text-[clamp(26px,5vw,48px)] max-w-[24ch] mx-auto" 
                          initial={{ opacity: 1 }}
            animate={{ opacity: isDone ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome To The VERSE
          </motion.h1>
        </div>
      </section>
    </div>
  )
}

export default VideoZoom
