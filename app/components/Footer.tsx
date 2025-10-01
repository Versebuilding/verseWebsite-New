import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { X } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

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
          <h3 className="text-white text-2xl font-semibold">Contact Us</h3>

          {/* Newsletter */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <div>
              <h1 className="text-white text-lg font-semibold">Subscribe to our newsletter</h1>
              <p className="text-gray-300 text-sm">
                The latest news, articles, and resources delivered weekly to your inbox
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="text-white font-medium mb-4">The Verse</h4>
            <ul className="space-y-2">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/games">Games &amp; Digital</Link></li>
              <li><Link href="/our-team">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Games</h4>
            <ul className="space-y-2">
              <li><Link href="/games/walkxr">WalkXR</Link></li>
              <li><Link href="/games/karma">Karma The Six Realms</Link></li>
              <li><Link href="/games/aib">Adventures In Breath</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div>
                <h4 className="text-white font-medium mb-2">Support</h4>
                <ul>
                  <li className="font-semibold text-[#b8a6a6] cursor-pointer">
                    <Link href="/comingSoon">Donate</Link>
                  </li>
                </ul>
              </div>

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

        <div className="border-t border-gray-400 my-8 md:my-0" />

        <p className="text-center text-gray-400 text-sm">
          © The Verse 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
