"use client"

import { Music, Youtube, Music2, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"

export function ArtistSection() {
  const { language } = useLanguage()
  const t = (key: keyof typeof translations.es) => translations[language][key]

  return (
    <section
      id="artist"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--artist-gradient-start) 0%, var(--artist-gradient-middle) 50%, var(--artist-gradient-end) 100%)",
      }}
    >
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Text Content with padding */}
        <div className="flex items-center pt-24 px-6 md:py-32 lg:py-40 lg:pl-[max(3rem,calc((100vw-80rem)/2))]">
          <div className="space-y-8 max-w-2xl">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("artist.title")}
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{t("artist.p1")}</p>
              <p>{t("artist.p2")}</p>
              <p>{t("artist.p3")}</p>
              <p>{t("artist.p4")}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://open.spotify.com/artist/69BWizWNZTCdBWLb1zllgw?si=lKCRXiQESoKOg9rN7u32WQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
              >
                <Music className="h-5 w-5" />
                Spotify
              </a>
              <a
                href="https://www.youtube.com/@ToniRomeroworship"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
              >
                <Youtube className="h-5 w-5" />
                YouTube
              </a>
              <a
                href="https://music.apple.com/us/artist/toni-romero/1119605025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
              >
                <Music2 className="h-5 w-5" />
                Apple Music
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdd9qiAns1KH-JugqnkLKwB22NAsFAaofj_U8YQl3_4pijXlQ/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
              >
                <Calendar className="h-5 w-5" />
                {t("artist.invitation")}
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[600px] lg:min-h-screen">
          <Image
            src="/images/design-mode/toni-o.png"
            alt="Toni Romero - Artist Portrait"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  )
}
