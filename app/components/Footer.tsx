'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'react-toastify';

const Footer = () => {
  return (
    <footer className="bg-[#1D1925] text-gray-300 py-16 px-8 relative">

 <h1
        className="
          hidden md:flex absolute inset-0 items-center justify-center
          font-unbounded font-bold uppercase pointer-events-none select-none
          text-[20rem] lg:text-[24rem] leading-none tracking-widest
          opacity-2.5 z-10"
      >
        Verse
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-20">

        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 mb-10">
          {/* Left title */}
          <h3 className="text-white text-2xl font-semibold">Contact Us</h3>

          {/* newsletter */}
          <div className="flex flex-col items-start w-full md:w-auto">

            <div>
              <h1 className="text-white text-lg font-semibold">
                Subscribe to our newsletter
              </h1>
              <p className="text-gray-300 text-sm">
                The latest news, articles, and resources delivered weekly to your inbox.
              </p>
            </div>

            {/* Form */}
            <form action="" id='newsletter' 
            onSubmit={async(e) => {
              e.preventDefault();
              const target = e.target as HTMLFormElement
              const email = target.email.value
              const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                 'Content-Type' : 'application/json',
                },
                body : JSON.stringify({email})
              })
              if(res.ok){
                toast.success('You’re in!')
                target.reset()
              }else {
                const data = await res.json();
                toast.error(data.error?.[0]?.message || 'Something went wrong, Try again')
              }
            }}
            >

  <div className="mt-6 sm:mt-10 w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              <input
                type="email"
                name="email"
                placeholder="You@example.com"
                className="block w-full sm:w-80 border-b border-gray-400 text-white text-sm bg-transparent
               placeholder-gray-400 focus:outline-none focus:ring-0 pb-1 min-w-0"
                />
                <Button className="bg-white text-black font-semibold w-full sm:w-auto">Subscribe</Button>
            </div>
                </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="text-white font-medium mb-4">The Verse</h4>
            <ul className="space-y-2">
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Games &amp; Digital</Link></li>
              <li><Link href="/">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Games</h4>
            <ul className="space-y-2">
              <li><Link href="/">WalkXR</Link></li>
              <li><Link href="/">Karma The Six Realms</Link></li>
              <li><Link href="/">Adventures In Breath</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/">Privacy</Link></li>
              <li><Link href="/">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>

          {/* Support + Socials */}
          {/* Support + Socials */}
<div className="col-span-2 md:col-span-1">
  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
    <div>
      <h4 className="text-white font-medium mb-2">Support</h4>
      <ul>
        <li className="font-semibold text-[#b8a6a6] cursor-pointer">Donate</li>
      </ul>
    </div>

    {/* Socials: below Donate on mobile, to the right on md+ */}
    <div className="flex gap-4 md:flex-col md:gap-6 mt-4 md:mt-0 md:ml-32">
      <Link href="https://www.instagram.com/buildingverses/" aria-label="Instagram">
        <FaInstagram className="text-white text-2xl cursor-pointer hover:opacity-80" />
      </Link>
      <Link href="https://x.com/buildingverses" aria-label="X (Twitter)">
        <X className="text-white text-2xl cursor-pointer hover:opacity-80" />
      </Link>
      <Link href="https://www.linkedin.com/company/building-the-verse/" aria-label="LinkedIn">
        <FaLinkedin className="text-white text-2xl cursor-pointer hover:opacity-80" />
      </Link>
    </div>
  </div>
</div>

        </div>

        {/* <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400" /> */}
        <div className="border-t border-gray-400 my-8 md:my-0" />

      

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © The Verse 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
