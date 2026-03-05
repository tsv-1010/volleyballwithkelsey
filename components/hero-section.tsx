"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Trophy, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.2),transparent_50%)]" />
        {/* Court lines pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="court-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#court-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex h-full min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-orange-400 border border-orange-500/30 mb-8"
          >
            <Trophy className="h-4 w-4" />
            Northern California Elite Volleyball Training
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Master the Court with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Elite Volleyball Coaching
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-lg leading-relaxed text-slate-300 md:text-xl lg:text-2xl max-w-3xl mx-auto">
            From Southern California standout to Collegiate star, Coach{" "}
            <span className="text-white font-semibold">Kelsey van Uden</span> brings pro-level 
            technical training to Petaluma and Santa Rosa.
          </p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
              <Target className="h-4 w-4 text-orange-400" />
              Private 1-on-1 Sessions
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
              <Zap className="h-4 w-4 text-orange-400" />
              Position-Specific Training
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
              <Trophy className="h-4 w-4 text-orange-400" />
              Collegiate Experience
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600 text-base font-bold px-8 py-6 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              onClick={scrollToBooking}
            >
              Book Your Training
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 text-base font-medium px-8 py-6"
              onClick={scrollToAbout}
            >
              Meet Coach Kelsey
            </Button>
          </motion.div>

          {/* SEO Keywords (visually subtle but present) */}
          <p className="mt-8 text-xs text-slate-500 max-w-2xl mx-auto">
            Volleyball Private Lessons Petaluma • Santa Rosa Volleyball Coaching • North Bay Elite Training
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
