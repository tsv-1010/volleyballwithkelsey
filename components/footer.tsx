"use client"

import { Instagram, Phone, Mail, MapPin, Volleyball, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "About Coach Kelsey", href: "#about" },
    { label: "Training Packages", href: "#pricing" },
    { label: "Our Process", href: "#success-path" },
    { label: "Service Areas", href: "#location" },
    { label: "Book Training", href: "#booking" },
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
    <footer className="relative overflow-hidden bg-sky-900 py-16 px-6 text-sky-100">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-amber-400/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center">
                <Volleyball className="w-5 h-5 text-sky-900" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Volleyball</h3>
                <p className="text-xs text-amber-300">with Kelsey</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-sky-200">
              Elite volleyball coaching for athletes in Northern California. 
              From technical fundamentals to mental game development, 
              we help you master the court.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/volleyballwithkelsey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-800 transition-colors hover:bg-amber-400 hover:text-sky-900"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="sms:+1234567890"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-800 transition-colors hover:bg-amber-400 hover:text-sky-900"
                aria-label="Text"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-sky-200 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-1.5 text-sm text-sky-200">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-sky-300">
              Serving Sonoma County & North Bay Area
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-sky-200 hover:text-amber-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (XXX) XXX-XXXX
              </a>
              <a
                href="mailto:kelsey@volleyballwithkelsey.com"
                className="flex items-center gap-3 text-sm text-sky-200 hover:text-amber-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                kelsey@volleyballwithkelsey.com
              </a>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-sky-800/50 border border-sky-700">
              <p className="text-xs text-sky-200">
                <span className="text-amber-300 font-semibold">Quick Tip:</span> The fastest 
                way to reach Coach Kelsey is via text message!
              </p>
            </div>
          </div>
        </div>

        {/* SEO Keywords & Copyright */}
        <div className="mt-12 pt-8 border-t border-sky-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-sky-300">
              Volleyball Private Lessons Petaluma • Santa Rosa Volleyball Coaching • Northern California Elite Volleyball Training
            </p>
            <p className="text-sm text-sky-300">
              © {currentYear} Volleyball with Kelsey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
