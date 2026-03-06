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
    { name: "Novato", primary: false },
    { name: "San Rafael", primary: false },
  ]

  return (
    <section id="location" className="py-24 md:py-32 bg-white dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 shadow-xl">
              {/* Stylized Map Background */}
              <div className="absolute inset-0">
                {/* Grid pattern to simulate map */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-400"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                </svg>

                {/* Curved lines to simulate roads */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 50 200 Q 150 150 200 200 T 350 200" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    className="text-sky-600/40"
                  />
                  <path 
                    d="M 200 50 Q 250 150 200 200 T 200 350" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    className="text-sky-600/40"
                  />
                  <path 
                    d="M 100 100 Q 200 100 200 200 T 300 300" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-slate-400/40"
                  />
                </svg>
              </div>

              {/* Location Markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central marker - Primary service area */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative"
                >
                  {/* Pulse ring */}
                  <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="absolute inset-0 bg-sky-600/20 rounded-full animate-ping" />
                  </div>
                  
                  {/* Main circle */}
                  <div className="relative w-32 h-32 bg-gradient-to-br from-sky-600 to-sky-700 rounded-full flex items-center justify-center shadow-xl shadow-sky-600/30">
                    <div className="text-center text-white">
                      <MapPin className="w-8 h-8 mx-auto mb-1" />
                      <span className="text-xs font-bold uppercase tracking-wider">North Bay</span>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary markers */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-1/4 left-1/4 w-16 h-16 bg-white dark:bg-stone-800 rounded-full shadow-lg flex items-center justify-center border-2 border-sky-600/50"
                >
                  <span className="text-xs font-bold text-foreground">Petaluma</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-1/3 right-1/4 w-20 h-20 bg-white dark:bg-stone-800 rounded-full shadow-lg flex items-center justify-center border-2 border-sky-600/50"
                >
                  <span className="text-xs font-bold text-foreground text-center">Santa<br/>Rosa</span>
                </motion.div>
              </div>

              {/* Region Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-xs font-semibold text-foreground">Sonoma County</p>
                <p className="text-xs text-muted-foreground">Northern California</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Training Locations
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-6">
              Serving the North Bay
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Coach Kelsey provides elite volleyball training throughout Sonoma County and 
              the greater North Bay area. Whether you're in Petaluma, Santa Rosa, or 
              surrounding communities, quality coaching is within reach.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    area.primary 
                      ? "bg-sky-600/10 border border-sky-600/30" 
                      : "bg-stone-100 dark:bg-stone-800 border border-transparent"
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                    area.primary ? "text-sky-600" : "text-emerald-600"
                  }`} />
                  <span className={`text-sm ${
                    area.primary ? "font-semibold text-foreground" : "text-muted-foreground"
                  }`}>
                    {area.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Travel Info */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-stone-100 dark:bg-stone-800 rounded-xl p-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-sky-600/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Mobile Training</p>
                  <p className="text-xs text-muted-foreground">Can travel to local courts</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-stone-100 dark:bg-stone-800 rounded-xl p-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-sky-600/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Flexible Hours</p>
                  <p className="text-xs text-muted-foreground">Evenings & weekends available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
