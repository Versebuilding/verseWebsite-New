import { getAibHeroVideo } from "./aib"

const AibPage = async() => {
    const video = await getAibHeroVideo()
  return (
    <>
   <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        src={video?.url}
        />
      <div className="relative z-10 text-white p-10">
        <h1 className="text-4xl font-bold">Adventures in Breath</h1>
      </div>
    </section>
        </>
      )
}

export default AibPage