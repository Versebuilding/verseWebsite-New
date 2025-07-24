import { getAibFirstCatImage, getAibFirstImage, getAibHeroVideo, getAibSecondCatVideo } from "./aib"

const AibPage = async() => {
    const video = await getAibHeroVideo()
    const image = await getAibFirstImage()
    const catFirstImage = await getAibFirstCatImage()
    const sleepCat = await getAibSecondCatVideo()

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
      </div>
    </section>

<section className="bg-white text-black py-16 px-6 md:px-20">
  <h1 className="text-4xl font-bold text-center mb-6">
    Turn Every Breath Into a Journey
  </h1>
  <p className="text-center max-w-6xl text-xl mx-auto leading-relaxed" >
At Adventures in Breath, we gamify breathing practices to enhance health and wellbeing. Our mission is to make mindfulness fun and accessible for everyone. By combining engaging gameplay with scientifically-backed techniques, we help users improve their mental and physical health, reduce stress, and boost overall wellness. Venture on an adventure through the rich world of AiB, showcasing a diverse array of games, concepts, and imaginative ideas where breath serves as the core mechanic, whether its navigating mystical landscapes or outmaneuvering adversaries.  </p>


    <div className="relative w-full max-w-4xl mx-auto mt-56">

        {image?.url && (
            <img
            src={image.url}
            alt={image.altText || 'Aib First image'}
            width={1000}
            height={600}
            className="w-full rounded-lg shadow-lg"
            />
          )}

    {catFirstImage?.url && (
        <img
        src={catFirstImage.url}
        alt={catFirstImage.altText || 'Aib Cat Image'}
        width={400}
        height={200}
        className="absolute right-0 top-0 -translate-y-[330px] translate-x-20 "
        
        />
    )}


    </div>
</section>


{/* section 3 */}

    <section className="bg-white flex items-center gap-2 justify-center ">
        <h1 className="text-black text-4xl font-extrabold">Ready, Set, Breathe</h1>
        {sleepCat?.url && (
    <video
      autoPlay
      loop
      muted
      playsInline
      src={sleepCat.url}
      className="w-60 h-44"
    />
  )}

    </section>


  {/* section 4  */}
    
  <section>
    <p >Our games are built on scientifically validated breath techniques, and use the players breathing as the means of interaction within the game. Through our games, digital experiences, and innovative concepts, we gamify therapeutic breath practices, creating engaging and immersive experiences that promote mindfulness and well-being.</p>
  </section>

        
        </>
      )
}

export default AibPage