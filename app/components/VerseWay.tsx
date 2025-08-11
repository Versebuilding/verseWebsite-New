import { Gamepad2, Sparkles, Beaker, Users2, ShieldCheck } from "lucide-react";

const pills = [
        {
          icon: <Gamepad2 className="size-8 text-indigo-400" />,
          title: "Play That Heals",
          desc: "Mechanics that foster reflection, empathy, and emotional regulation."
        },
        {
          icon: <Sparkles className="size-8 text-purple-400" />,
          title: "Co - Created",
          desc: "Rituals & ‘walks’ shaped by our community your stories drive the worlds."
        },
        {
          icon: <Beaker className="size-8 text-sky-400" />,
          title: "Research Informed",
          desc: "Built with psychologists & educators. We iterate from evidence."
        },
        {
          icon: <Users2 className="size-8 text-pink-400" />,
          title: "Connection First",
          desc: "Experiences designed for shared moments and collective meaning making."
        },
        {
          icon: <ShieldCheck className="size-8 text-emerald-400" />,
          title: "Safe & Ethical",
          desc: "Privacy respecting, inclusive by design, and accessible across devices."
        }
      ]

const verseWay = () => {
  return (

<section className="bg-[#0B0B12] py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-white mb-3">Why The Verse ?</h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
      We build playful, healing first digital experiences co-created with our
      community, informed by research, and designed to be safe and accessible
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {pills.map((item, idx) => (
        <div
          key={idx}
          className="bg-[#15151F] rounded-xl p-6 text-center flex flex-col items-center shadow-lg hover:shadow-xl/30 hover:-translate-y-1 transition-all"
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-white text-base font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-md leading-relaxed tracking-wide">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default verseWay