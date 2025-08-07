import React from 'react'
import Image from 'next/image'
// import {motion} from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'

const Contribution = () => {
  return (
    <section className="bg-[#202020c9] text-white py-16 px-6">

    <div
  
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
    >     
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl text-left font-bold mb-6">Make an Impact</h1>
          <p className="text-lg text-gray-300 leading-relaxed text-left max-w-xl mx-auto md:mx-0">
            The Verse is a global community of inspired gamers, developers, designers, scientists, artists, visionaries, teachers, and students who join together to passionately contribute their wide ranging expertise to invent experiences that enhance human flourishing.
          </p>

            <div className="flex justify-start">
            <Link href='/about-us'>
          <Button className="mt-8 bg-black/40 text-whitec cursor-pointer font-semibold py-5 px-6 rounded-xl hover:bg-gray-200 transition hover:text-black ">
            Learn More
          </Button>
            </Link>
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
    </div>
    </section>
  )
}

export default Contribution
