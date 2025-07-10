'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi';

export type NavbarProps = {
  navOpen : boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({navOpen, setNavOpen}: NavbarProps) => {
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
   <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-black">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <Image 
      src="/images/logo - The verse.png"
      alt="Logo of the Verse"
      width={40}
      height={40}
    />
    <Link href='/'>The Verse</Link>
  </div>

  {/* Links */}
  <div className="hidden md:flex gap-20 items-center">
    <Link href="/Games">Games & Digital Experiences</Link>
    <Link href="/team">Our Team</Link>
    <Link href="/aboutUs">About Us</Link>
    <Link href="/contact-us">Contact Us</Link>
  </div>

  {/* Button */}
  <button className="hidden md:block bg-gradient-to-r from-[#7F5AF0] to-[#9F7AEA] rounded-xl w-24 h-8">Explore</button>


    {/* Mobile icon */}
<div className="md:hidden text-3xl cursor-pointer" onClick={toggleNav}>
        {navOpen ? <FiX /> : <FiMenu />}
      </div>        

    {/* Mobile menu */}
    {navOpen && (
      <div className="absolute top-16 left-0 w-full text-white flex flex-col items-center gap-6 py-8 bg-black/70">
          <Link href="/Games" onClick={toggleNav}>Games & Digital Experiences</Link>
          <Link href="/team" onClick={toggleNav}>Our Team</Link>
          <Link href="/about-us" onClick={toggleNav}>About Us</Link>
          <Link href="/contactUs" onClick={toggleNav}>Contact Us</Link>
          <button className=" bg-gradient-to-r from-[#7F5AF0] to-[#9F7AEA] rounded-xl w-24 h-8 mt-4" onClick={toggleNav}>Explore</button>
      </div>
    )}


</nav>

  )
}

export default Navbar