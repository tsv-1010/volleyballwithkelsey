"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"

export function BioSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-21 md:py-34"
      style={{
        background: "linear-gradient(to bottom, var(--section-gradient-start) 0%, var(--section-gradient-end) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-13 lg:gap-21 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900">
              {/* Placeholder for Coach Photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-21 h-21 mx-auto rounded-full bg-[#185FAD] flex items-center justify-center mb-5">
                    <span className="text-[34px] font-medium text-white font-[family-name:var(--font-playfair)]">K</span>
                  </div>
                  <p className="text-muted-foreground text-[13px]">Photo Coming Soon</p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-3 -right-3 w-21 h-21 bg-[#185FAD]/20 rounded-lg" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <p className="text-[#185FAD] font-medium text-[13px] uppercase tracking-wider mb-2">
                About
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-[34px] md:text-[44px] font-medium tracking-tight text-foreground leading-[1.1]">
                Kelsey van Uden
              </h2>
              <p className="mt-2 text-[16px] text-muted-foreground">
                Volleyball Coach • Petaluma & Santa Rosa
              </p>
            </div>

            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Kelsey developed as a standout indoor player in Southern California before 
                competing collegiately at the University of Great Falls, Montana.
              </p>
              <p>
                Now based in the North Bay, she brings collegiate-level training to local athletes, 
                focusing on technical fundamentals and position-specific development.
              </p>
            </div>

            {/* Simple highlights */}
            <div className="flex flex-wrap gap-3 pt-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#185FAD]/20 text-[13px] text-muted-foreground">
                <MapPin className="w-4 h-4 text-[#185FAD]" />
                Southern California
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#185FAD]/20 text-[13px] text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-[#185FAD]" />
                University of Great Falls
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
