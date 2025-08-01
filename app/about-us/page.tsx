'use client'
import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const AboutUs = () => {
 
  const missions = [
    { label: 'Human First Approach', src: '/images/aboutUs/human.png' },
    { label: 'Collaboration', src: '/images/aboutUs/collab.png' },
    { label: 'Holistic Thinking', src: '/images/aboutUs/brain.png' },
    { label: 'Play, Ritual, Story', src: '/images/aboutUs/play.png' },
    { label: 'Servant Leadership', src: '/images/aboutUs/leader.jpg' },
  ]

  const community = [
    { img: '/images/aboutUs/community1.jpg', text: 'Over 250 contributors at The Verse' },
    { img: '/images/aboutUs/community2.jpg', text: 'Over 47,000 hours on Verse Projects' },
    { img: '/images/aboutUs/community3.jpg', text: '50+ working on average 25 hours a week' },
    { img: '/images/aboutUs/community4.jpg', text: 'You know who you are! Multi-talented, creative, and inspired to change the world' },
    { img: '/images/aboutUs/community5.jpg', text: 'Versers feel empowered, enriched, connected, and productive' },
    { img: '/images/aboutUs/community6.png', text: 'The Verse spans 20+ countries, uniting creators worldwide' },

  ]

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#e8def7] min-h-screen flex flex-col md:flex-row items-center px-10 py-40 gap-44">
        <div className="relative">
          <Image src="/images/aboutUs/aboutUs.png" alt="about us page image" width={500} height={500} className="rounded-3xl ml-40" />
          <h1 className="absolute top-1/2 left-1/2 translate-x-44 -translate-y-44 w-full text-7xl font-bold text-purple-900">THE VERSE</h1>
        </div>
        <div className="max-w-xl">
          <p className="text-lg text-gray-800 leading-relaxed mt-44 ">
            At The Verse, we create games, experiences, and rituals that uplift humanity.
            We are a global community of gamers, developers, designers, scientists, artists,
            visionaries, teachers, and students each of us contributing our expertise to invent
            experiences that foster human flourishing.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="bg-[#25153ded] px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-4xl font-bold mb-6 flex justify-center">Our Mission</motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="text-lg text-center mb-6">
            The Verse collaboratively creates digital therapeutics and experiences that are playful, embodied, and ritual enriched, that invite co-creation and foster participation and that enhance health, improve well being, and raise consciousness.
          </motion.p>
          <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="text-xl font-semibold mb-2 mt-20 uppercase tracking-wide">Our Guiding Principle: Connection</motion.h3>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} className="text-lg mb-18">The key elements of Interconnection in The Verse are:</motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {missions.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4 + i} className="text-center">
                <Image src={item.src} alt={item.label} width={200} height={200} className="rounded-xl object-cover w-full h-[200px]" />
                <p className="mt-10 text-base">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Path Section */}
        <div className="max-w-4xl mx-auto mt-28 space-y-10">
          <motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={10} className="text-4xl font-bold mb-6 flex justify-center">Our Path</motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={11} className="text-lg text-white/60">
            The founders of The Verse met at a tech conference in 2019 and discovered that we shared the vision of making different kinds of games one that brings joy and uplift and finding a different way to do it, in the spirit of collaboration, empowerment and playfulness.
          </motion.p>
          <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={12} className="text-xl font-semibold">The Problem We Are Addressing</motion.h3>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={13} className="text-lg text-white/60">
            In a world embroiled in an ongoing polycrisis, there is a great need (and significant market interest) for solutions improving mental health, well being and building human connection.
          </motion.p>
          <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={14} className="text-xl font-semibold">How We Create Impact</motion.h3>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={15} className="text-lg text-white/60">
            Through our process of ideation, research, prototyping, and testing we guide our projects toward targeted partners and their audiences, seeking always to address vital issues and generate measurable outcomes.
          </motion.p>
        </div>
      </section>

      {/* Way of The Verse */}

      
      <section className="relative bg-gradient-to-b from-[#1b1b1f] to-[#0c0c10] text-white py-40 px-12 md:px-32 overflow-hidden">
        {/* Glowing Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-fuchsia-500 to-purple-700 blur-3xl opacity-20 animate-pulse z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-6xl font-bold mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white">
            The Way of The Verse
          </motion.h2>

          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            We don’t just build things, we practice. We iterate in harmony with each other, crafting moments that spark unity and flow.
          </motion.p>

          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="text-xl md:text-2xl text-gray-400 italic">
            The Verse is not a product. It’s a path. A ritual. A calling.
          </motion.p>




          <div className="mt-20 grid md:grid-cols-3 gap-10 justify-center">

            {community.map((card, i) => (
                <motion.div key={i} custom={3 + i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-black/30 text-white rounded-xl overflow-hidden shadow-md w-full max-w-sm">
                <Image src={card.img} alt={card.text} width={500} height={300} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="text-center font-medium text-lg">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
