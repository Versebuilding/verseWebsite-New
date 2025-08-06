'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'


const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col items-center justify-center text-white text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold tracking-wide mb-6"
      >
        Something Magical is Brewing..
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-purple-300 max-w-2xl mb-10"
      >
        We&apos;re working on new immersive experiences that will transform how you play and feel. Stay tuned, it’ll be worth the wait.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 hover:bg-purple-500 text-white mb-8 font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
      >
        <Link href='/#newsletter'>
        Notify Me
        </Link>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-white font-semibold underline underline-offset-6 py-3 tracking-widest text transition-all"
      >     
      <Link href='/'>
        Back To Home
      </Link>
      
       </motion.button>

    </div>
  )
}

export default ComingSoon
