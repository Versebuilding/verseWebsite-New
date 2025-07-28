'use client'

import { useEffect, useState } from 'react'

type FeedbackCard = {
  id: number
  url: string
  altText?: string | null
  title: string
  type: 'image' | 'video'
}

const FeedbackCards = () => {
  const [cards, setCards] = useState<FeedbackCard[]>([])

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

  return (
    <section className='bg-white'>
<div className='w-full h-[1px] mb-10 bg-gray-400 ' />
      <h2 className="text-3xl text-black text-center font-bold mb-12">Let us know what you think</h2>

      {/* Display image first */}
      <div className="flex justify-center mb-10">
        {cards
          .filter((card) => card.type === 'image')
          .map((card) => (
            <img key={card.id} src={card.url} alt={card.altText || ''} className="w-32 h-auto" />
          ))}
      </div>
      {/* Display videos */}
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {cards
          .filter((card) => card.type === 'video')
          .map((card) => (
            <div key={card.id} className="flex flex-col items-center p-4 rounded-lg">
              <video
                src={card.url}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-auto mb-4 rounded-md"
              />
              <p className="text-lg text-[#493D3F] font-semibold uppercase">{card.title}</p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default FeedbackCards
