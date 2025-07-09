import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
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
    <h1>The Verse</h1>
  </div>

  {/* Links */}
  <div className="flex gap-20 items-center">
    <Link href="/Games">Games & Digital Experiences</Link>
    <Link href="/team">Our Team</Link>
    <Link href="/aboutUs">About Us</Link>
    <Link href="/contactUs">Contact Us</Link>
  </div>

  {/* Button */}
  <button className="button-gradient rounded-xl w-24 h-8">Explore</button>
</nav>

  )
}

export default Navbar