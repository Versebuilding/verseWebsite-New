'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <>
      {/* Blurred bg when nav opens*/}
      {navOpen && (
       <div
  className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
  onClick={toggleNav}
/>

      )}

      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-3 bg-black/30">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image 
            src="/images/logo - The verse.png"
            alt="Logo of the Verse"
            width={40}
            height={40}
          />
          <Link href="/">The Verse</Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-20 items-center">
          <Link href="/games">Games & Digital Experiences</Link>
          <Link href="/our-team">Our Team</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-gradient-to-r from-[#7F5AF0] to-[#9F7AEA] rounded-xl w-24 h-8">
          Explore
        </button>

        {/* Mobile icon */}
<div className="md:hidden text-3xl cursor-pointer z-[60]" onClick={toggleNav}>
          {navOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile menu */}
      {navOpen && (
        <div className="absolute top-16 left-0 w-full text-white flex flex-col items-center gap-6 py-8 bg-black/70 z-50">
          <Link href="/games" onClick={toggleNav}>Games & Digital Experiences</Link>
          <Link href="/our-team" onClick={toggleNav}>Our Team</Link>
          <Link href="/about-us" onClick={toggleNav}>About Us</Link>
          <Link href="/contact-us" onClick={toggleNav}>Contact Us</Link>
          <button
            className="bg-gradient-to-r from-[#7F5AF0] to-[#9F7AEA] rounded-xl w-24 h-8 mt-4"
            onClick={toggleNav}
          >
            Explore
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar
