'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FeedbackCard = {
  id: number
  url: string
  altText?: string | null
  title: string
  type: 'image' | 'video'
}

const FeedbackCards = () => {
  const [cards, setCards] = useState<FeedbackCard[]>([])
  const [selected, setSelected] = useState<FeedbackCard | null>(null)

  useEffect(() => {
    const fetchFeedback = async () => {
      const [imageRes, videoRes] = await Promise.all([
        fetch('/api/feedback?type=image'),
        fetch('/api/feedback?type=video'),
      ])
      const [images, videos] = await Promise.all([imageRes.json(), videoRes.json()])
      setCards([...images, ...videos])
    }
    fetchFeedback()
  }, [])
  const videos = useMemo(() => cards.filter(c => c.type === 'video'), [cards])



  return (
    <section className="bg-white pb-20">
      <div className="mb-10 h-px w-full" />
      <h2 className="mb-8 text-center text-3xl font-bold text-black">
        Let us know what you think
      </h2>


      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-5 sm:gap-6">
        {videos.map(card => (
          <button
            key={card.id}
            onClick={() => setSelected(card)}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition hover:shadow-2xl"
          >
            <div className="aspect-square w-full bg-white">
              <video
                src={card.url}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              />
            </div>

            <div className="px-3 py-2 text-center">
              <span className="block text-sm font-semibold text-neutral-900">
                {card.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="w-[min(92vw,520px)] rounded-3xl bg-white p-6 text-black shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-xl ring-1 ring-neutral-200">
                  <video
                    src={selected.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-contain bg-white"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold">Thanks for your feedback!</p>
                  <p className="text-neutral-600">The verse echoes your attention.</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeedbackCards
