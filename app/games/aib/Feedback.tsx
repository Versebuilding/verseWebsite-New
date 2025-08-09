'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type FeedbackCard = {
  id: number
  url: string
  altText?: string | null
  title: string
  type: 'image' | 'video'
}

const FeedbackCards = () => {
  const [cards, setCards] = useState<FeedbackCard[]>([])
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null)

  useEffect(() => {
    const fetchFeedback = async () => {
      const [imageRes, videoRes] = await Promise.all([
        fetch('/api/feedback?type=image'),
        fetch('/api/feedback?type=video'),
      ])
      const [images, videos] = await Promise.all([
        imageRes.json(),
        videoRes.json(),
      ])
      setCards([...images, ...videos])
    }
    fetchFeedback()
  }, [])

  const images = cards.filter(c => c.type === 'image')
  const videos = cards.filter(c => c.type === 'video')

  return (
    <section className="bg-white">
      <div className="w-full h-[1px] mb-10 bg-gray-400" />
      <h2 className="text-3xl text-black text-center font-bold mb-12">
        Let us know what you think
      </h2>

      {/* small image strip */}
      <div className="flex justify-center gap-4 mb-10">
        {images.map(card => (
          <div key={card.id} className="relative w-32 aspect-video">
            <Image
              src={card.url}
              alt={card.altText || card.title || ''}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 25vw, 8rem"
            />
          </div>
        ))}
      </div>

      {/* flip cards (videos) */}
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {videos.map(card => {
          const isFlipped = flippedCardId === card.id
          return (
            <motion.div
              key={card.id}
              className="relative w-full h-[300px] cursor-pointer"
              onClick={() => setFlippedCardId(isFlipped ? null : card.id)}
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              {/* Front */}
              <motion.div
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{ backfaceVisibility: 'hidden', rotateY: 0, zIndex: isFlipped ? 0 : 1 }}
              >
                <video
                  src={card.url}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 text-white bg-black/60 px-2 py-1 text-sm rounded">
                  {card.title}
                </div>
              </motion.div>

              {/* Back */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center 
                           rounded-lg p-4 text-center backdrop-blur-md 
                           bg-black border border-white/10 text-white overflow-hidden"
                style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
              >
                <p className="text-lg">The verse echoes your attention</p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default FeedbackCards
