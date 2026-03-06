"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Phone, ClipboardCheck, Trophy, Target } from "lucide-react"

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
      title: "Connect",
      description: "Quick call or text to discuss goals and current skill level.",
      icon: Phone,
    },
    {
      number: "02",
      title: "Assess",
      description: "First session establishes your technical baseline and roadmap.",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "Develop",
      description: "Consistent training builds confidence and elevates performance.",
      icon: Trophy,
    },
  ]

  return (
    <section 
      ref={containerRef}
      className="py-21 md:py-34 bg-gradient-to-b from-stone-50 to-white dark:from-stone-900 dark:to-stone-950"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 13 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-13"
        >
          <p className="text-[#185FAD] font-medium text-[13px] uppercase tracking-wider mb-2">
            The Process
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[34px] md:text-[44px] font-medium tracking-tight text-foreground leading-[1.1]">
            How It Works
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-700 md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-[#185FAD]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-13">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 21 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex items-start gap-5 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#185FAD] flex items-center justify-center border-3 border-white dark:border-stone-950">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-21 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:pr-5" : "md:pl-5"
                }`}>
                  <div className="bg-white dark:bg-stone-800 rounded-xl p-5 border border-border">
                    <span className="text-[21px] font-medium text-[#185FAD]/30">
                      {step.number}
                    </span>
                    <h3 className="text-[16px] font-medium text-foreground mt-1">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-muted-foreground mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>

          {/* Final CTA Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative mt-13 flex justify-center"
          >
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -top-5">
              <div className="w-12 h-12 rounded-full bg-[#185FAD] flex items-center justify-center border-3 border-white dark:border-stone-950">
                <Target className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="ml-21 md:ml-0 md:text-center pt-8">
              <p className="text-[14px] text-muted-foreground">
                Ready to start? <button onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })} className="text-[#185FAD] hover:underline">Book your first session</button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
