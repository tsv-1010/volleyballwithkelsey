"use client"

export function SkillsTicker() {
  const skills = [
    "TECHNICAL FOOTWORK",
    "RECRUITING CONSULT",
    "POSITION SPECIFIC",
    "SERVE RECEIVE",
    "PLYOMETRIC AGILITY",
    "MENTAL TOUGHNESS",
    "PASSING PRECISION",
    "HITTING MECHANICS",
    "BLOCKING TECHNIQUE",
    "COURT AWARENESS",
    "DEFENSIVE READS",
    "SETTING FUNDAMENTALS",
  ]

  // Double the skills array to create seamless loop
  const doubledSkills = [...skills, ...skills]

  return (
    <section className="relative py-8 bg-sky-900 dark:bg-sky-950 overflow-hidden hover-pause">
      {/* Background gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5" />
      
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      
      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sky-900 dark:from-sky-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sky-900 dark:from-sky-950 to-transparent z-10" />

        {/* Scrolling text */}
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {doubledSkills.map((skill, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-8 text-lg md:text-xl font-bold tracking-wider text-sky-200/70 uppercase">
                {skill}
              </span>
              <span className="text-amber-400 text-2xl">•</span>
            </span>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex items-center whitespace-nowrap" aria-hidden="true">
          {doubledSkills.map((skill, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-8 text-lg md:text-xl font-bold tracking-wider text-sky-200/70 uppercase">
                {skill}
              </span>
              <span className="text-amber-400 text-2xl">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
