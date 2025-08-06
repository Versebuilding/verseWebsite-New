'use client'
import Cards from "./components/Cards";
import Contribution from "./components/Contribution";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
 return(
    <>
  <Navbar />
  <Hero />
  <Cards />
  <Contribution />

    </>
 )
}
