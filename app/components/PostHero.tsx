'use client'
import dynamic from 'next/dynamic'

const LazyVideoZoom = dynamic(() => import('./VideoZoom'),{
    ssr:false,
    loading: () => (
    <section className="flex justify-center items-center bg-black min-h-screen">
            <p className='text-white text-lg'>Loading Experience ..</p>
        </section>
    )
})
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

return (
  <div className="relative overflow-hidden">
    <div className="relative">
<LazyVideoZoom url={url}/>
    </div>
  </div>
)
}

export default PostHero
