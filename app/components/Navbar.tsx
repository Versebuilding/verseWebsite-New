import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between mx-10 mt-8 space-y-4'>
        <div className='flex items-center  gap-2'>
        <Image 
        src='/images/logo - The verse.png'
        alt='Logo of the Verse'
        width={40}
        height={40}
        />
        <h1>The Verse</h1>
        </div>

        {/* links */}

        <div className=' flex gap-20 items-center'>
            <Link href='/Games'>Games & Digital Experiences</Link>
            <Link href='/team'>Our Team</Link>
            <Link href='/aboutUs'>About Us</Link>
            <Link href='/contactUs'>Contact Us</Link>

        </div>

        {/* button */}
        <button className='button-gradient rounded-xl w-24 h-8'>Explore</button>

    </nav>
  )
}

export default Navbar