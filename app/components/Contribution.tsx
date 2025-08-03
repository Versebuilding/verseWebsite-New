import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const Contribution = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[#202020c9] text-white py-16 px-6"
    >     
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl text-left font-bold mb-6">Make an Impact</h1>
          <p className="text-lg text-gray-300 leading-relaxed text-left max-w-xl mx-auto md:mx-0">
            The Verse is a global community of inspired gamers, developers, designers, scientists, artists, visionaries, teachers, and students who join together to passionately contribute their wide ranging expertise to invent experiences that enhance human flourishing.
          </p>

            <div className="flex justify-start">
          <button className="mt-8 bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition">
            Learn More
          </button>
            </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            //  src="/images/commiunity.png"
            src="/images/impact.png"
            alt="Make an impact photo"
            width={500}
            height={400}
            className="rounded-3xl object-cover w-full max-w-lg"
          />
        </div>

      </div>
    </motion.section>
  )
}

export default Contribution
