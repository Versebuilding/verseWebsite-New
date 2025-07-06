'use client';

import Link from 'next/link';
import { FaInstagram, FaTimes, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1D1925] text-gray-300 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        <h3 className="text-white text-2xl font-semibold">Contact Us</h3>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">

          {/* The Verse */}
          <div>
            <h4 className="text-white font-medium mb-4">The Verse</h4>
            <ul className="space-y-2">
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Games & Digital</Link></li>
              <li><Link href="/">Our Team</Link></li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h4 className="text-white font-medium mb-4">Games</h4>
            <ul className="space-y-2">
              <li><Link href="/">walkXR</Link></li>
              <li><Link href="/">Karma The Six Realms</Link></li>
              <li><Link href="/">Adventures In Breath</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/">Privacy</Link></li>
              <li><Link href="/">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="font-semibold text-[#b8a6a6]">Donate</li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6 mt-8">
          <FaInstagram className="text-[#f5d8e4] text-2xl cursor-pointer" />
          <FaTimes className="text-white text-2xl cursor-pointer" />
          <FaLinkedin className="text-white text-2xl cursor-pointer" />
        </div>

        {/* Stay Connected */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-400 pt-6">
          <span className="text-gray-400 text-sm">Stay Connected</span>
          <div className="flex items-center gap-2">
            <div className="border-b border-gray-400 w-64"></div>
            <span className="text-white text-xl">&rarr;</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Copyright © The Verse 2024
        </p>

      </div>
    </footer>
  );
};

export default Footer;
