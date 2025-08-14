import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'




export async function getContributionImage() {
  return prisma.mediaAsset.findFirst({
    where: { page : 'homePage', section: 'contribution', type: 'image'},
    orderBy: { createdAt: 'desc'},
    select: {url: true, altText: true, title:true}
  })
}


const Contribution = async() => {

  const contribution = await getContributionImage()

  return (
    <section className="bg-[#0b0b17] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-15">


        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {contribution?.url && (
            <Image 
            src={contribution.url}
            alt={contribution.altText || 'Contribution image'}
            width={500}
            height={400}
            className="rounded-3xl object-cover w-full max-w-sm sm:max-w-md md:max-w-lg"
            priority
            />
          )}
        </div>


       <div className="order-2 md:order-1 w-full md:w-1/2 text-center md:text-left md:mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 md:mt-10">Make an Impact</h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 md:mt-20">
            The Verse is a global community of inspired gamers, developers, designers, scientists, artists,
            visionaries, teachers, and students who join together to passionately contribute their wide
            ranging expertise to invent experiences that enhance human flourishing.
          </p>
          <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
            <Link href="/about-us">
              <Button className="bg-white text-black font-semibold py-5 px-6 rounded-xl hover:bg-gray-200 transition hover:text-black">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contribution
