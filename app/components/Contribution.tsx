import React from 'react'
import Image from 'next/image'

const Contribution = () => {
  return (
    <section className="bg-[#202020c9] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl text-center font-bold mb-6">Make an Impact</h1>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-xl mx-auto md:mx-0">
            The Verse is a global community of inspired gamers, developers, designers, scientists, artists, visionaries, teachers, and students who join together to passionately contribute their wide ranging expertise to invent experiences that enhance human flourishing.
          </p>

            <div className="flex justify-center">
          <button className="mt-8 bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition">
            Learn More
          </button>
            </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/commiunity.png"
            alt="Make an impact photo"
            width={500}
            height={400}
            className="rounded-3xl object-cover w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default Contribution
