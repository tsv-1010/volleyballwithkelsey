"use client"

import { motion } from "framer-motion"
import { MapPin, Car, Clock, CheckCircle } from "lucide-react"

export function LocationSection() {
  const serviceAreas = [
    { name: "Petaluma", primary: true },
    { name: "Santa Rosa", primary: true },
    { name: "Rohnert Park", primary: false },
    { name: "Cotati", primary: false },
    { name: "Sebastopol", primary: false },
    { name: "Windsor", primary: false },
  ]

  return (
    <section id="location" className="py-21 md:py-34 bg-white dark:bg-stone-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-2 gap-13 items-center">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 border border-border">
              {/* Simplified Map Background */}
              <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-400"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                </svg>

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 50 200 Q 150 150 200 200 T 350 200" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-[#185FAD]/30"
                  />
                  <path 
                    d="M 200 50 Q 250 150 200 200 T 200 350" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-[#185FAD]/30"
                  />
                </svg>
              </div>

              {/* Central Location Marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative"
                >
                  <div className="w-21 h-21 bg-[#185FAD] rounded-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-6 h-6 mx-auto" />
                      <span className="text-[11px] font-medium">North Bay</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Region Label */}
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-stone-800/90 px-3 py-1.5 rounded-lg">
                <p className="text-[12px] font-medium text-foreground">Sonoma County</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 21 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[#185FAD] font-medium text-[13px] uppercase tracking-wider mb-2">
              Location
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[34px] md:text-[44px] font-medium tracking-tight text-foreground leading-[1.1]">
              Serving the North Bay
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              Training throughout Sonoma County and the greater North Bay area.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-8 mb-8">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className={`flex items-center gap-2 p-2.5 rounded-lg ${
                    area.primary 
                      ? "bg-[#185FAD]/10 border border-[#185FAD]/20" 
                      : "bg-stone-100 dark:bg-stone-800"
                  }`}
                >
                  <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${
                    area.primary ? "text-[#185FAD]" : "text-muted-foreground"
                  }`} />
                  <span className={`text-[13px] ${
                    area.primary ? "font-medium text-foreground" : "text-muted-foreground"
                  }`}>
                    {area.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 rounded-full px-4 py-2">
                <Car className="w-4 h-4 text-[#185FAD]" />
                <span className="text-[13px] text-muted-foreground">Mobile training</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-[#185FAD]" />
                <span className="text-[13px] text-muted-foreground">Evenings & weekends</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
