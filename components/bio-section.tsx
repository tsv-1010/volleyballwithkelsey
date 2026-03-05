"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Award, Users, Heart } from "lucide-react"

export function BioSection() {
  const highlights = [
    {
      icon: MapPin,
      label: "Southern California",
      description: "Indoor volleyball standout",
    },
    {
      icon: GraduationCap,
      label: "University of Great Falls",
      description: "Collegiate career in Montana",
    },
    {
      icon: Users,
      label: "Club Coach",
      description: "Current role training athletes",
    },
    {
      icon: Award,
      label: "Elite Training",
      description: "Pro-level techniques",
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{
        background:
          "linear-gradient(to bottom, var(--section-gradient-start) 0%, var(--section-gradient-middle) 50%, var(--section-gradient-end) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 shadow-2xl">
              {/* Placeholder for Coach Photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-white">K</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Coach Photo Coming Soon
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-xl opacity-80" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-slate-900 dark:bg-orange-500/30 rounded-lg" />
            </div>

            {/* Stats Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Passion for Athletes</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
                Meet Your Coach
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Kelsey van Uden
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Elite Volleyball Coach • Petaluma & Santa Rosa
              </p>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Coach Kelsey's volleyball journey began in Southern California, where she developed 
                into a standout indoor volleyball player known for her technical precision and 
                competitive drive.
              </p>
              <p>
                Her talent earned her a spot at the <span className="font-semibold text-foreground">
                University of Great Falls, Montana</span>, where she competed at the collegiate level, 
                honing her skills against top competition and developing a deep understanding of 
                what it takes to succeed at the highest levels.
              </p>
              <p>
                Now based in Northern California, Kelsey brings that collegiate experience and 
                passion directly to her athletes. As a dedicated <span className="font-semibold text-foreground">
                Club Coach</span>, she specializes in position-specific training, technical 
                fundamentals, and mental game development—helping athletes from Petaluma to 
                Santa Rosa unlock their full potential on the court.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
