'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const polyContent = [
  {
    label: 'Climate',
    img: '/images/walkxr/polywalk1.png',
    title: '"Climate Change" Comic × WalkXR',
    blurb:
      'WalkXR Climate is an interactive journey that translates the global climate crisis into deeply personal stakes …'
  },
  {
      label: 'Gun Violence',
      img: '/images/walkxr/polywalk2.png',
      title: '"Safe Streets" WalkXR',
      blurb:
      'WalkXR Gun violence Prevention challenges participants to design safer communities and process collective trauma.'
    },
    {
      label: 'Gender Inequality',
      img: '/images/walkxr/polywalk3.png',
      title: '"Equal Futures" WalkXR',
      blurb:
        'WalkXR Gender lets players explore systemic bias, build empathy and co create rituals for equity.'
    },
  {
    label: 'DEI',
    img: '/images/walkxr/polywalk4.png',
    title: '"Belonging" WalkXR',
    blurb:
      'WalkXR DEI guides teams through experiential practice, turning diversity talk into daily inclusive action.'
  }
] as const

export default function PolyWalk () {
  const [active, setActive] = useState(0)
  const { label, img, title, blurb } = polyContent[active]

  return (
    <section className='bg-[#0b0b17] text-white py-18'>
      {/*  pills */}
<div className='flex flex-wrap justify-center gap-3 mb-20 text-base font-medium'>
        {polyContent.map((p, i) => (
          <button
            key={p.label}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full transition-all duration-300
              ${active === i
                ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-lg'
                : 'bg-[#191929] hover:bg-[#23233a]'}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* panel */}
<div className='max-w-[88rem] lg:px-8 mx-auto flex flex-col lg:flex-row gap-16 lg:gap-18 items-end'>
        {/* image */}
  <div className='relative w-full lg:w-[55%] aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl'>        
            <AnimatePresence mode='wait'>
            <motion.div
              key={img}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className='absolute inset-0'
            >
              <Image
                src={img}
                alt={label}
                fill
                className='object-cover'
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='w-full lg:w-1/2 space-y-6'>
          <h3 className='text-2xl md:text-3xl font-semibold'>{title}</h3>
          <p className='text-gray-300 leading-relaxed'>{blurb}</p>
        </div>
      </div>
    </section>
  )
}
