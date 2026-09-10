import Cards from "./components/Cards";
import Testimony from "./components/Testimony";

import Contribution from "./components/Contribution";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PostHero from "./components/PostHero";
import { prisma } from "@/lib/prisma";
import VerseWay from "./components/VerseWay";


export default async function Home() {
  const video = await prisma.mediaAsset.findFirst({
    where: {
      title: 'landing page video',
    },
  })
  // const video = null
 return(
    <>
  <Navbar />
  <Hero />
  <PostHero />
  <div className="relative z-20">
  <Cards />
  <Testimony />

  <VerseWay />
  <Contribution />
  </div>

    </>
 )
}
