"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Settings, Heart, MessageCircle, Music, Sprout, Cross } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"

export function ConsultingSection() {
  const { language } = useLanguage()
  const t = (key: keyof typeof translations.es) => translations[language][key]

  return (
    <section id="consulting" className="pt-24 px-6 md:pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-6">
            {t("consulting.title")}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{t("consulting.intro")}</p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl mb-20">
          <Image
            src="/images/design-mode/IMG_0878-Enhanced-NR.jpeg"
            alt="Toni Romero consulting"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardContent className="px-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{t("consulting.card1.title")}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t("consulting.card1.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardContent className="px-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{t("consulting.card2.title")}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t("consulting.card2.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardContent className="px-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{t("consulting.card3.title")}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t("consulting.card3.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardContent className="px-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{t("consulting.card4.title")}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t("consulting.card4.desc")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Methodology */}
        <div className="mb-20">
          <h3 className="mb-8 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            {t("consulting.methodology")}
          </h3>
          <div className="relative w-fit mx-auto">
            <div className="absolute left-[15px] md:left-[23px] top-0 h-[calc(100%-2rem)] md:h-[calc(100%-3rem)] w-0.5 bg-border" />

            <div className="space-y-6">
              {[
                { step: "01", title: t("consulting.step1"), description: t("consulting.step1.desc") },
                { step: "02", title: t("consulting.step2"), description: t("consulting.step2.desc") },
                { step: "03", title: t("consulting.step3"), description: t("consulting.step3.desc") },
                { step: "04", title: t("consulting.step4"), description: t("consulting.step4.desc") },
                { step: "05", title: t("consulting.step5"), description: t("consulting.step5.desc") },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 md:gap-6">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="h-8 w-8 md:h-12 md:w-12 rounded-full border-4 border-primary bg-background flex items-center justify-center">
                      <span className="text-xs md:text-sm font-bold text-primary">{item.step}</span>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-lg md:text-xl font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expected Results */}
        <div className="rounded-2xl bg-secondary p-8 md:p-12 lg:p-16">
          <h3 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            {t("consulting.results")}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Music className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-foreground">{t("consulting.result1")}</h4>
                <p className="text-sm text-muted-foreground">{t("consulting.result1.desc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-foreground">{t("consulting.result2")}</h4>
                <p className="text-sm text-muted-foreground">{t("consulting.result2.desc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Sprout className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-foreground">{t("consulting.result3")}</h4>
                <p className="text-sm text-muted-foreground">{t("consulting.result3.desc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Cross className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-foreground">{t("consulting.result4")}</h4>
                <p className="text-sm text-muted-foreground">{t("consulting.result4.desc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 text-center">
          <p className="mb-6 text-lg text-muted-foreground">{t("consulting.cta.question")}</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a
              href="https://docs.google.com/forms/d/1RNtmsULad2zr7owg36Y_K4Tpqqz4fYMCnisnFH8_LQc/preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("consulting.cta.button")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
