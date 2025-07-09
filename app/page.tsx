'use client'
import { useState } from "react";
import Cards from "./components/Cards";
import Contribution from "./components/Contribution";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)
 return(
    <>
  <Navbar navOpen={navOpen} setNavOpen={setNavOpen}/>
  <div className={navOpen ? 'blur-sm pointer-events-none select-none transition-all duration-300' : 'transition-all duration-300'}>
  <Hero />
  </div>
  <Cards />
  <Contribution />
  <Footer />
    </>
 )
}
