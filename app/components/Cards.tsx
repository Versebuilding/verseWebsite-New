'use client';
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

const slides = [
  '/images/cards/cards2.png',
  '/images/cards/cards3.png',
  '/images/cards/cards1.png',
  '/images/cards/cards4.png',
  '/images/cards/cards5.png',
]

export default function Cards() {
  return (
    <section className="py-12 bg-[#0b0b17]">
      <motion.div
        initial={{ opacity: 0, y: 72 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold text-white mb-3">
          What We’re Building
        </h2>
        <h4 className="text-center text-lg md:text-2xl text-gray-400 mb-8 md:mb-10">
          Interactive projects and imaginative spaces we’re bringing to life
        </h4>

        <div className="relative mx-auto w-full max-w-[min(1000px,100vw-2rem)] md:max-w-[min(1100px,100vw-4rem)] px-8 md:px-16">

          <button
            className="swiper-nav-prev hidden md:flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2
                       text-white text-3xl select-none z-50"
            aria-label="Previous"
          >
            &#10094;
          </button>

          <button
            className="swiper-nav-next hidden md:flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2
                       text-white text-3xl select-none z-50"
            aria-label="Next"
          >
            &#10095;
          </button>
<div className="relative mx-auto w-full max-w-[min(1100px,100vw-2rem)] px-8 md:px-16">
  <div className="rounded-3xl overflow-hidden"></div>
          <Swiper
            modules={[Autoplay, EffectCreative, Navigation]}
            navigation={{
              nextEl: '.swiper-nav-next',
              prevEl: '.swiper-nav-prev',
            }}
            effect="creative"
            creativeEffect={{
              prev: { shadow: true, translate: [0, 0, -400] },
              next: { translate: ['35%', 0, -100], scale: 0.92 },
            }}
            grabCursor
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            loop
            centeredSlides
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.1 },
              768: { slidesPerView: 1.25 },
              1024: { slidesPerView: 1.4 },
            }}
            className="w-full"
          >
            {slides.map((src, i) => (
              <SwiperSlide
                key={i}
                className="flex items-center justify-center"
              >
  <div className="rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  <Image
                    src={src}
                    alt={`slide-${i}`}
                    width={1000}
                    height={600}
      className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1000px"
                    priority={i === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </motion.div>
    </section>
  )
}
