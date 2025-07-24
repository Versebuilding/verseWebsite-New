'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { People } from './teamPeople'

const OurTeam = () => {

  const coFounders = People.slice(0, 2)
  const others = People.slice(2)

  return (
      <section className="relative bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-32 px-4 md:px-20 overflow-hidden">
        {/* Glowing Background */}
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/30 blur-3xl z-0 animate-pulse" />

        {/* Co-Founders */}
        <div className="relative flex flex-col items-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-20">
            {coFounders.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-[#0f111a] border border-white/10 rounded-3xl p-4 w-[400px] hover:shadow-[0_0_40px_10px_rgba(72,203,255,0.4)] transition-all duration-500"
              >
                <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="text-center mt-4 text-white">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="text-sm text-purple-300">{person.role}</p>
                  <p className="text-xs italic mt-2 mb-3 text-gray-400">{person.loc}</p>
                  <p className="text-md text-gray-300 mb-2">{person.about}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Grid – Other Members */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {others.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#0f111a] border border-white/10 rounded-3xl p-4 w-full hover:shadow-[0_0_40px_10px_rgba(72,203,255,0.4)] transition-all duration-500"
            >
            <div className="relative w-full h-[320px] overflow-hidden rounded-xl">
              <Image
                src={person.img}
                alt={person.name}
                fill
                className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 z-10 rounded-xl bg-black/30" />
              </div>
              <div className="text-center mt-4 text-white">
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-purple-300">{person.role}</p>
                <p className="text-xs italic mt-2 text-gray-400">{person.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default OurTeam
