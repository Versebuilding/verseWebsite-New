'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem, } from '../components/ui/dropdown-menu';



  const projectCategories = [
     'Game Design',
     'Digital Art',
     'Wellness',
     'Educational Games',
     'Environmental Awareness',
  ]
  const technologyPlatform = [
      'Web',
      'Mobile',
      'Desktop',
      'Virtual Reality (VR)',
     ' Augmented Reality (AR)',
  ]


const ContactUs = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen}/>
      <div className="relative min-h-screen bg-gradient-to-b from-[#10082e] to-[#0B0816] text-white flex flex-col items-center px-4 py-20 overflow-hidden">

        {/* Background Logo */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-20 pointer-events-none">
          <Image 
            src="/images/contactLogo.png"
            alt="Logo of the Verse"
            width={600}
            height={500}
            className="object-contain mt-44 opacity-60"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl mt-24 font-extrabold mb-6 text-center z-10">
          Welcome To The Verse Community!
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-center mb-12 z-10">
          Join Betas, share feedback, and experience the joys and well-being benefits of shifting into positive states of consciousness in fun and engaging ways.
        </p>

        {/* Form */}
        <form className="w-full max-w-xl mt-10 space-y-10 z-10 flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-b border-white bg-transparent py-3 placeholder-white/40 tracking-widest focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-b border-white bg-transparent py-3 placeholder-white/40 tracking-widest focus:outline-none"
          />

          <input
            type="text"
            placeholder="What inspires you about The Verse"
            className="w-full border-b border-white bg-transparent py-3 placeholder-white/40 tracking-widest focus:outline-none"
          />

          <DropdownMenu>
            <DropdownMenuTrigger className="bg-[#1C1428] flex justify-between items-center rounded-3xl py-3 px-6 w-full text-left text-white cursor-pointer focus:outline-none focus:ring-0">
              Project Categories
              <ChevronDown className="ml-2 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1C1428] w-md rounded-3xl p-2 shadow-lg border border-[#2F334D] mt-2">
              {projectCategories.map((item) => (
                <DropdownMenuItem
                  key={item}
                  className="text-white flex justify-center rounded-2xl px-4 py-2 hover:bg-[#2F334D] cursor-pointer"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>



          <DropdownMenu>
            <DropdownMenuTrigger className="bg-[#1C1428] flex justify-between items-center rounded-3xl py-3 px-6 w-full text-left text-white cursor-pointer focus:outline-none focus:ring-0">
              Technology Platform
              <ChevronDown className="ml-2 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1C1428] w-md rounded-3xl p-2 shadow-lg border border-[#2F334D] mt-2">
              {technologyPlatform.map((item) => (
                <DropdownMenuItem
                  key={item}
                  className="text-white flex justify-center rounded-2xl px-4 py-2 hover:bg-[#2F334D] cursor-pointer"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
        </DropdownMenu>

    
          <button type="submit" className="bg-[#2F334D] text-white rounded-lg p-2 px-10">
            Submit
          </button>
        </form>

      </div>
    </>
  );
};

export default ContactUs;
