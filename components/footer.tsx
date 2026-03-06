"use client"

import { Instagram, Phone, Mail, MapPin, Volleyball, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Training", href: "#pricing" },
    { label: "Process", href: "#success-path" },
    { label: "Location", href: "#location" },
    { label: "Book", href: "#booking" },
  ]

  const serviceAreas = [
    "Petaluma",
    "Santa Rosa",
    "Rohnert Park",
    "Cotati",
    "Sebastopol",
    "Windsor",
  ]

  return (
    <footer className="relative overflow-hidden bg-[#185FAD] py-13 px-6 text-white/90">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Volleyball className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] font-medium text-[16px] text-white">Volleyball</h3>
                <p className="text-[11px] text-white/70">with Kelsey</p>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-white/70">
              Private volleyball coaching in Northern California.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              <a
                href="https://instagram.com/volleyballwithkelsey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/30 transition-colors hover:bg-white hover:text-[#185FAD]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="sms:+1234567890"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/30 transition-colors hover:bg-white hover:text-[#185FAD]"
                aria-label="Text"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-3">Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-3">Areas</h4>
            <ul className="grid grid-cols-2 gap-1">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-1 text-[13px] text-white/70">
                  <MapPin className="w-3 h-3 text-white/50" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-3">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                (XXX) XXX-XXXX
              </a>
              <a
                href="mailto:kelsey@volleyballwithkelsey.com"
                className="flex items-center gap-2 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                kelsey@volleyballwithkelsey.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-5 border-t border-white/20">
          <p className="text-[12px] text-white/50 text-center">
            © {currentYear} Volleyball with Kelsey
          </p>
        </div>
      </div>
    </footer>
  )
}
