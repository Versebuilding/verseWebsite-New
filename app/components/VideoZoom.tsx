'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Props {
  url: string
}

const VideoZoom = ({ url }: Props) => {
  const { scrollYProgress } = useScroll()

  // video starts small and grows big
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1.3])
  const opacity = useTransform(scrollYProgress, [0.25, 0.4], [1, 0])

  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setIsDone(v > 2)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <div className="relative h-[150vh] w-full bg-black z-10 overflow-hidden">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute top-1/2 left-1/2 w-auto h-auto max-w-[90vw] max-h-[90vh] object-cover -translate-x-1/2 -translate-y-1/2"
        style={{ scale, opacity }}
      >
        <source src={url} type="video/mp4" />
      </motion.video>

      {/* overlay text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.h1
          className="text-white text-5xl font-bold"
          initial={{ opacity: 1 }}
          animate={{ opacity: isDone ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to The Verse
        </motion.h1>
      </div>
    </div>
  )
}

export default VideoZoom
