"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone, Mail, X } from "lucide-react"

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past hero section (roughly 100vh)
      const scrollY = window.scrollY
      const threshold = window.innerHeight * 0.8
      setIsVisible(scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const contactOptions = [
    {
      label: "Text Kelsey",
      icon: MessageCircle,
      href: "sms:+1234567890",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/1234567890?text=Hi%20Kelsey,%20I'm%20interested%20in%20volleyball%20training!",
      color: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      label: "Call",
      icon: Phone,
      href: "tel:+1234567890",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Main Bar */}
          <div className="bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 px-4 py-3 safe-area-inset-bottom">
            <div className="flex items-center justify-between gap-2">
              {contactOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  className={`flex-1 flex items-center justify-center gap-2 ${option.color} text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-lg`}
                >
                  <option.icon className="w-4 h-4" />
                  <span className="text-sm">{option.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Desktop version - Floating action buttons on the right side
export function DesktopQuickContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = window.innerHeight * 0.5
      setIsVisible(scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const contactOptions = [
    {
      label: "Text",
      icon: MessageCircle,
      href: "sms:+1234567890",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/1234567890?text=Hi%20Kelsey,%20I'm%20interested%20in%20volleyball%20training!",
      color: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      label: "Call",
      icon: Phone,
      href: "tel:+1234567890",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:kelsey@volleyballwithkelsey.com",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 bottom-8 z-50 hidden md:flex flex-col gap-3"
        >
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.href}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group flex items-center gap-3 ${option.color} text-white p-3 rounded-full shadow-lg transition-all hover:pr-5`}
              title={option.label}
            >
              <option.icon className="w-5 h-5" />
              <span className="text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
                {option.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
