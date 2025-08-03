'use client';
import {motion} from 'framer-motion'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  '/images/cards/cards2.png',
  '/images/cards/cards3.png',
  '/images/cards/cards1.png',
  '/images/cards/cards4.png',
  '/images/cards/cards5.png',
];

export default function Cards() {
  return (
        <section className="py-12 bg-gradient-to-b from-[#1C1428] to-[#202020]">

        <motion.div
       initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .8, ease: 'easeOut' }}
      viewport={{ once: true, amount: .25 }}
      
    >
      
    <section className="py-12 bg-gradient-to-b from-[#1C1428] to-[#202020]">
      <h2 className="text-3xl font-bold text-center mb-4 text-white">
        What We’re Building
      </h2>
      <h4 className="text-center text-gray-400 mb-8">
        Interactive projects and imaginative spaces we’re bringing to life
      </h4>

      <div className="relative w-fit mx-auto px-20">

        {/* ← custom prev */}
        <button
          className="swiper-nav-prev absolute left-0 top-1/2 -translate-y-1/2
          text-white text-3xl select-none z-50"
          >
          &#10094;
        </button>

        {/* → custom next */}
        <button
          className="swiper-nav-next absolute right-0 top-1/2 -translate-y-1/2
          text-white text-3xl select-none z-50"
          >
          &#10095;
        </button>

        <Swiper
          modules={[Autoplay, EffectCreative, Navigation]}
          navigation={{
            nextEl: '.swiper-nav-next',
            prevEl: '.swiper-nav-prev',
          }}
          effect="creative"
          grabCursor
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          slidesPerView={1.1}
          centeredSlides
          creativeEffect={{
            prev: { shadow: true, translate: [0, 0, -400] },
            next: { translate: ['40%', 0, -100], scale: 0.9 },
          }}
          className="w-[800px] h-full mx-auto"
          >
          {slides.map((src, i) => (
            <SwiperSlide
            key={i}
            className="flex items-center justify-center h-full rounded-3xl overflow-hidden"
            >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

              <Image
              
              src={src}
              alt={`slide-${i}`}
              width={700}
              height={400}
              className="w-full h-full object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
          </motion.div>
          </section>
  );
}
