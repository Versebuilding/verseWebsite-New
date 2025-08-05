import { getAibCards, getAibFirstCatImage, getAibFirstImage, getAibHeroVideo, getAibSecondCatVideo } from "./aib"
import FeedbackCards from "./Feedback"




const AibPage = async() => {
    const video = await getAibHeroVideo()
    const image = await getAibFirstImage()
    const catFirstImage = await getAibFirstCatImage()
    const sleepCat = await getAibSecondCatVideo()
    const aibCards = await getAibCards()




    

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
  <h1 className="text-4xl font-bold text-center mb-6 font-orbitron">
    Turn Every Breath Into a Journey
  </h1>
  <p className="text-center max-w-6xl text-xl mx-auto leading-relaxed font-unbounded" >
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
        <h1 className="text-black text-4xl font-extrabold font-Questrial">Ready, Set, Breathe</h1>
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
    
  <section className="bg-white">
    <p className="text-black pt-20 pb-44 text-center max-w-6xl text-xl mx-auto leading-relaxed">Our games are built on scientifically validated breath techniques, and use the players breathing as the means of interaction within the game. Through our games, digital experiences, and innovative concepts, we gamify therapeutic breath practices, creating engaging and immersive experiences that promote mindfulness and well-being.</p>



    {/* cards */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {aibCards.map((card) => (
           <div key={card.id} className="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition duration-300">
  <div className="relative">
    <img
      src={card.url}
      alt={card.altText || card.title}
      className="w-full h-64 object-cover rounded-t-xl"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 px-4 text-center">
      <h3 className="text-lg font-bold tracking-wide">{card.title}</h3>
    </div>
  </div>

  <div className="p-4 text-center flex flex-col items-center">
<p className="text-gray-700 mb-4 line-clamp-3">
     {card.description}
    </p>
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition">
      Learn More
    </button>
  </div>
</div>


                ))}
                </div>


  </section>
<section className="bg-white py-20">
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
      <span className="font-bold">Play With Purpose</span><br />
      <span className="font-normal">
        <span className="text-gray-400 ml-44">Breathe</span> <span className="font-bold">With Impact</span>
      </span>
    </h2>
  </div>
  <p className="text-black text-center max-w-4xl text-xl mt-10 mx-auto leading-relaxed">Discover games where your breath guides the journey. Explore unique worlds, unlock mysteries, and experience the power of mindful interaction</p>
</section>

<FeedbackCards /> 

        </>
      )
}

export default AibPage