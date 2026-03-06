"use client"

export function SkillsTicker() {
  const skills = [
    "FOOTWORK",
    "SERVE RECEIVE",
    "PASSING",
    "HITTING",
    "BLOCKING",
    "DEFENSE",
    "SETTING",
    "POSITIONING",
  ]

  const doubledSkills = [...skills, ...skills]

  return (
    <section className="relative py-5 bg-[#185FAD] overflow-hidden hover-pause">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      
      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-21 bg-gradient-to-r from-[#185FAD] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-21 bg-gradient-to-l from-[#185FAD] to-transparent z-10" />

        {/* Scrolling text */}
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {doubledSkills.map((skill, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-8 text-[14px] font-medium tracking-[0.2em] text-white/60 uppercase">
                {skill}
              </span>
              <span className="text-white/30 text-[13px]">•</span>
            </span>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex items-center whitespace-nowrap" aria-hidden="true">
          {doubledSkills.map((skill, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-8 text-[14px] font-medium tracking-[0.2em] text-white/60 uppercase">
                {skill}
              </span>
              <span className="text-white/30 text-[13px]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
