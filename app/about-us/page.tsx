'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import  { motion, Variants } from 'framer-motion'

const AboutUs = () => {
  const [navOpen, setNavOpen] = useState(false)

  const missions = [
    { label: 'Human First Approach', src: '/images/aboutUs/human.png' },
    { label: 'Collaboration', src: '/images/aboutUs/collab.png' },
    { label: 'Holistic Thinking', src: '/images/aboutUs/brain.png' },
    { label: 'Play, Ritual, Story', src: '/images/aboutUs/play.png' },
    { label: 'Servant Leadership', src: '/images/aboutUs/leader.jpg' },
  ]

  const fadeInUp : Variants = {
    hidden : {opacity : 0, y:40},
    visible : ( i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay : i * 0.1,
            duration: 0.8,
            ease: 'easeOut',
        }
    })
  }

  return (
    <>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />

      {/* Hero */}
      <div className="bg-[#e8def7] min-h-screen flex flex-col md:flex-row items-center px-10 py-40 gap-20">
        <div className="relative">
          <Image
            src="/images/aboutUs/aboutUs.png"
            alt="about us page image"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-1/2 text-7xl font-bold text-black">
            THE VERSE
          </h1>
        </div>

        <div className="max-w-xl">
          <p className="text-lg text-gray-800 leading-relaxed">
            At The Verse, we create games, experiences, and rituals that uplift humanity.
            We are a global community of gamers, developers, designers, scientists, artists,
            visionaries, teachers, and students — each of us contributing our expertise to invent
            experiences that foster human flourishing.
          </p>
        </div>
      </div>

      {/* Mission */}
      {/* <section className="bg-[#25153ded] px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 flex justify-center">Our Mission</h2>

          <p className="text-lg text-center mb-6">
            The Verse collaboratively creates digital therapeutics and experiences that are
            playful, embodied, and ritual-enriched, that invite co-creation and foster participation
            and that enhance health, improve well being, and raise consciousness.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-20 uppercase tracking-wide">Our Guiding Principle: Connection</h3>
          <p className="text-lg mb-18">
            The key elements of Interconnection in The Verse are:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {missions.map((item, i) => (
              <div key={i} className="text-center">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={200}
                  height={200}
                  className="rounded-xl object-cover w-full h-auto"
                />
                <p className="mt-10 text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <h1>Our Path</h1>
        <p>The founders of The Verse met at a tech conference in 2019 and discovered that we shared the vision of making different kinds of games — one that brings joy and uplift — and finding a different way to do it, in the spirit of collaboration, empowerment and playfulness.</p>
        <h3>The Problem We Are Addressing</h3>
        <p>In a world embroiled in an ongoing polycrisis, there is a great need (and significant market interest) for solutions improving mental health, well-being and building human connection.</p>
        <h3>How We Create Impact</h3>
        <p>Through our process of ideation, research, prototyping, and testing we guide our projects toward targeted partners and their audiences, seeking always to address vital issues and generate measureable outcomes.</p>
      </section> */}
      <section className="bg-[#25153ded] px-6 md:px-20 py-20">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      className="text-4xl font-bold mb-6 flex justify-center"
    >
      Our Mission
    </motion.h2>

    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      className="text-lg text-center mb-6"
    >
      The Verse collaboratively creates digital therapeutics and experiences that are
      playful, embodied, and ritual-enriched, that invite co-creation and foster participation
      and that enhance health, improve well being, and raise consciousness.
    </motion.p>

    <motion.h3
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={2}
      className="text-xl font-semibold mb-2 mt-20 uppercase tracking-wide"
    >
      Our Guiding Principle: Connection
    </motion.h3>

    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={3}
      className="text-lg mb-18"
    >
      The key elements of Interconnection in The Verse are:
    </motion.p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {missions.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4 + i}
          className="text-center"
        >
          <Image
            src={item.src}
            alt={item.label}
            width={200}
            height={200}
            className="rounded-xl object-cover w-full h-[200px]"
          />
          <p className="mt-10 text-base">{item.label}</p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Our Path Section */}
  <div className="max-w-4xl mx-auto mt-28 space-y-10">
    <motion.h1
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={10}
      className="text-3xl font-bold text-center"
    >
      Our Path
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={11}
      className="text-lg"
    >
      The founders of The Verse met at a tech conference in 2019 and discovered that we shared the vision of making different kinds of games — one that brings joy and uplift — and finding a different way to do it, in the spirit of collaboration, empowerment and playfulness.
    </motion.p>

    <motion.h3
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={12}
      className="text-xl font-semibold"
    >
      The Problem We Are Addressing
    </motion.h3>

    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={13}
      className="text-lg"
    >
      In a world embroiled in an ongoing polycrisis, there is a great need (and significant market interest) for solutions improving mental health, well-being and building human connection.
    </motion.p>

    <motion.h3
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={14}
      className="text-xl font-semibold"
    >
      How We Create Impact
    </motion.h3>

    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={15}
      className="text-lg"
    >
      Through our process of ideation, research, prototyping, and testing we guide our projects toward targeted partners and their audiences, seeking always to address vital issues and generate measurable outcomes.
    </motion.p>
  </div>
</section>

      {/* way of the verse */}
      <section className="bg-gradient-to-b from-[#1b1b1f] to-[#0c0c10] text-white py-32 px-12 md:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-6xl md:text-8xl font-bold mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            The Way of The Verse
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          >
            We don’t just build things — we practice. We iterate in harmony with each other, crafting moments that spark unity and flow.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-lg md:text-xl text-gray-400 italic"
          >
            The Verse is not a product. It’s a path. A ritual. A calling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 1, duration: 1.2, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="mt-16 relative w-full flex justify-center"
          >
            <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500 to-purple-700 blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
