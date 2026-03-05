"use client"
import { Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"
import { useRef } from "react"

export function TranslationsSection() {
  const { language } = useLanguage()
  const t = (key: keyof typeof translations.es) => translations[language][key]
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const clients = [
    { name: "Brooke Ligertwood", image: "/images/clients/brooke-ligertwood.jpg" },
    { name: "Hillsong United", image: "/images/clients/hillsong-united.jpg" },
    { name: "Hillsong Worship", image: "/images/clients/hillsong-worship.jpg" },
    { name: "Elevation Worship", image: "/images/clients/elevation-worship.webp" },
    { name: "Christine D'Clario", image: "/images/clients/christine-dclario.png" },
    { name: "Evan Craft", image: "/images/clients/evan-craft.jpg" },
    { name: "CeCe Winans", image: "/images/clients/cece-winans.jpg" },
    { name: "Jesus Culture", image: "/images/clients/jesus-culture.jpeg" },
    { name: "Life.Church Worship", image: "/images/clients/life-church-worship.avif" },
    { name: "Integrity Music", image: "/images/clients/integrity-music.jpg" },
    { name: "Universal Music", image: "/images/clients/universal-music.jpg" },
    { name: "Essential Worship", image: "/images/clients/essential-worship.jpg" },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="translations" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/design-mode/_G1A0979.jpeg" alt="Worship atmosphere" fill className="object-cover" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 border border-white/20">
              <Globe className="h-4 w-4" />
              {t("translations.badge")}
            </div>
            <h2 className="mt-8 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {t("translations.title")}
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-white/90 md:text-lg">
              <p>{t("translations.p1")}</p>
              <p>{t("translations.p2")}</p>
              <p>{t("translations.p3")}</p>
            </div>

            <p className="mt-16 mb-8 text-sm font-medium uppercase tracking-wider text-white/70">
              {t("translations.clients")}
            </p>
          </div>
        </div>

        <div className="relative group mx-auto max-w-7xl px-6">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-6 top-2/5 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-6 top-2/5 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Carousel Container - Full Width */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {clients.map((client, index) => (
              <div key={index} className="flex-none w-48 snap-start">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-colors duration-300">
                    <Image src={client.image || "/placeholder.svg"} alt={client.name} fill className="object-cover" />
                  </div>
                  <p className="text-center text-sm font-medium text-white/90">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
