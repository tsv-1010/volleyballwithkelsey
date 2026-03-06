"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Phone, ClipboardCheck, Trophy, MessageCircle, Target, Calendar } from "lucide-react"

export function SuccessPathSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  const steps = [
    {
      number: "01",
      title: "Assessment Call",
      description: "We start with a quick call or text to understand your athlete's current level, goals, and what success looks like for your family. No pressure, just conversation.",
      icon: Phone,
      duration: "15-20 min",
    },
    {
      number: "02",
      title: "Technical Baseline",
      description: "In our first session, Coach Kelsey assesses your athlete's technical foundation—passing, footwork, hitting mechanics, and court awareness. This creates a personalized development roadmap.",
      icon: ClipboardCheck,
      duration: "First session",
    },
    {
      number: "03",
      title: "Elite Performance",
      description: "With consistent training, your athlete develops pro-level habits, gains confidence, and elevates their game. Whether the goal is making varsity, earning a college spot, or just loving the sport more—we get there together.",
      icon: Trophy,
      duration: "Ongoing development",
    },
  ]

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-stone-50 to-white dark:from-stone-900 dark:to-stone-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Your Journey to Excellence
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            The Success Path
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Know exactly what to expect. Here's how we take your athlete from where they 
            are to where they want to be.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 dark:bg-stone-700 md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-sky-600 to-sky-700"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 flex-shrink-0`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center shadow-lg shadow-sky-600/30 border-4 border-white dark:border-stone-950"
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-stone-800 rounded-2xl p-6 md:p-8 shadow-lg border border-stone-200 dark:border-stone-700"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-extrabold text-sky-600/20">
                        {step.number}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground bg-stone-100 dark:bg-stone-700 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>

          {/* Final CTA Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 flex justify-center"
          >
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -top-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-600 to-sky-700 flex items-center justify-center shadow-lg shadow-sky-600/30 border-4 border-white dark:border-stone-950">
                <Target className="w-7 h-7 text-white" />
              </div>
            </div>
            
            <div className="ml-24 md:ml-0 md:text-center pt-12">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ready to Start?
              </h3>
              <p className="text-muted-foreground mb-4">
                The journey begins with one simple step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Text Kelsey
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 border border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800 text-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
