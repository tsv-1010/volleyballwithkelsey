"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#185FAD]">
      {/* Subtle Background Pattern - Matisse-inspired organic shapes */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="matisse-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="white" />
              <circle cx="150" cy="150" r="30" fill="white" />
              <ellipse cx="100" cy="100" rx="25" ry="40" fill="white" transform="rotate(45 100 100)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#matisse-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 flex h-full min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 21 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Main Headline - Fibonacci scale: 55px base */}
          <h1 className="font-[family-name:var(--font-playfair)] text-[34px] sm:text-[55px] md:text-[70px] lg:text-[89px] font-medium tracking-tight text-white leading-[1.1] mb-5">
            Volleyball Coaching:
            <br />
            <span className="font-normal">Private Lessons</span>
          </h1>

          {/* Subheadline - 21px */}
          <p className="text-[18px] md:text-[21px] font-light text-white/90 mb-8">
            Gain confidence on the court and in the game
          </p>

          {/* Description - 13px base */}
          <p className="text-[14px] md:text-[16px] leading-relaxed text-white/70 max-w-2xl mx-auto mb-13">
            Volleyball with Kelsey breaks down the game from the fundamentals 
            to advanced collegiate level technical training.
          </p>

          {/* CTAs - Outlined buttons */}
          <motion.div
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-13 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#185FAD] text-[14px] font-medium px-8 py-6 transition-all"
              onClick={scrollToBooking}
            >
              Book a Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 bg-transparent text-white/80 hover:border-white hover:text-white text-[14px] font-medium px-8 py-6 transition-all"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
          >
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
