'use client'
import React from 'react'
import VideoZoom from './VideoZoom'

type Props = {
  url: string
}

const PostHero = ({ url }: Props) => {
  if (!url) {
    return (
      <section className="flex justify-center items-center bg-gradient-to-b from-[#170237] to-[#030004] py-16">
        <p className="text-white text-lg">Video Loading ..</p>
      </section>
    )
  }

  return <VideoZoom url={url} />
}

export default PostHero
