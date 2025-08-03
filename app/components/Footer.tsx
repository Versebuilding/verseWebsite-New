'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#1D1925] text-gray-300 py-16 px-8 relative">

 <h1
        className="
          absolute inset-0  flex items-center justify-center
          font-unbounded font-bold uppercase pointer-events-none select-none
          text-[22rem] md:text-[28rem] lg:text-[30rem]
          leading-none tracking-widest
          opacity-1.5 z-10"
      >
        Verse
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <div className="flex justify-between mb-10">
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
            <div className="flex items-center mt-10 gap-20">
              <input
                type="email"
                placeholder="You@example.com"
                className="border-b border-gray-400 text-white w-80 text-sm bg-transparent
                           placeholder-gray-400 focus:outline-none focus:ring-0 pb-1"
              />
             <Button className='bg-white text-black font-semibold'>Subscribe</Button>
            </div>
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
          <div className="flex items-start gap-6">
            <div>
              <h4 className="text-white font-medium mb-2">Support</h4>
              <ul>
                <li className="font-semibold text-[#b8a6a6] cursor-pointer">Donate</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 ml-32">
              <Link href="https://www.instagram.com/buildingverses/">
                <FaInstagram className="text-[#f5d8e4] text-2xl cursor-pointer hover:opacity-80" />
              </Link>
              <Link href="https://x.com/buildingverses">
                <X className="text-white text-2xl cursor-pointer hover:opacity-80" />
              </Link>
              <Link href="https://www.linkedin.com/company/building-the-verse/">
                <FaLinkedin className="text-white text-2xl cursor-pointer hover:opacity-80" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400" />

      

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © The Verse 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
