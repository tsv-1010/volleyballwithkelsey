"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = window.innerHeight * 0.8
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
    },
    {
      label: "Call",
      icon: Phone,
      href: "tel:+1234567890",
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
          <div className="bg-[#185FAD]/95 backdrop-blur-lg border-t border-white/20 px-4 py-3 safe-area-inset-bottom">
            <div className="flex items-center justify-center gap-3">
              {contactOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-lg transition-colors border border-white/20"
                >
                  <option.icon className="w-4 h-4" />
                  <span className="text-[14px]">{option.label}</span>
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
    },
    {
      label: "Call",
      icon: Phone,
      href: "tel:+1234567890",
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
          className="fixed right-5 bottom-8 z-50 hidden md:flex flex-col gap-2"
        >
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.href}
              initial={{ x: 34, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group flex items-center gap-2 bg-[#185FAD] hover:bg-[#1a6bc4] text-white p-3 rounded-full border border-white/20 transition-all hover:pr-5"
              title={option.label}
            >
              <option.icon className="w-5 h-5" />
              <span className="text-[13px] font-medium max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
                {option.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
