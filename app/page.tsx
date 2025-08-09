import Cards from "./components/Cards";
import Contribution from "./components/Contribution";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PostHero from "./components/PostHero";
import { prisma } from "@/lib/prisma";


export default async function Home() {
  const video = await prisma.mediaAsset.findFirst({
    where: {
      title: 'landing page video',
    },
  })
 return(
    <>
  <Navbar />
  <Hero />
  <PostHero  url={video?.url ?? ''}/>
  <div className="relative z-20">

  <Cards />
  <Contribution />
  </div>

    </>
 )
}
