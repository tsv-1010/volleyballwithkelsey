"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"

export function WorkshopsSection() {
  const { language } = useLanguage()
  const t = (key: keyof typeof translations.es) => translations[language][key]

  const workshops = [
    {
      title:
        language === "es"
          ? "Cómo Construir un Equipo de Alabanza (o Creativo) Sano"
          : "How to Build a Healthy Worship (or Creative) Team",
      description:
        language === "es"
          ? "Un taller para fortalecer la unidad, el carácter y la cultura espiritual de todo el equipo creativo."
          : "A workshop to strengthen the unity, character, and spiritual culture of the entire creative team.",
    },
    {
      title:
        language === "es"
          ? "Guarda tu Corazón: La Vida Interior del Adorador"
          : "Guard Your Heart: The Inner Life of the Worshiper",
      description:
        language === "es"
          ? "Para todos los que sirven cada domingo: cómo cuidar el corazón y mantener la pureza en medio del ministerio."
          : "For all who serve every Sunday: how to take care of the heart and maintain purity in the midst of ministry.",
    },
    {
      title: language === "es" ? "El Rol del Líder de Alabanza" : "The Role of the Worship Leader",
      description:
        language === "es"
          ? "Una mirada práctica y espiritual al llamado, carácter y responsabilidad del líder de alabanza."
          : "A practical and spiritual look at the calling, character, and responsibility of the worship leader.",
    },
    {
      title:
        language === "es"
          ? "Dinámicas y Transiciones: El Arte de Fluir en la Adoración"
          : "Dynamics and Transitions: The Art of Flowing in Worship",
      description:
        language === "es"
          ? "Un taller para músicos y líderes de alabanza sobre cómo lograr fluidez en las transiciones."
          : "A workshop for musicians and worship leaders on how to achieve fluidity in transitions.",
    },
    {
      title: language === "es" ? "Pruebas de Sonido y Ensayos Efectivos" : "Sound Checks and Effective Rehearsals",
      description:
        language === "es"
          ? "Claves prácticas para lograr ensayos productivos y pruebas de sonido que optimicen tiempo, comunicación y calidad."
          : "Practical keys to achieving productive rehearsals and sound checks that optimize time, communication, and quality.",
    },
    {
      title:
        language === "es"
          ? "Transiciones y Sensibilidad para Apoyar Durante Toda la Reunión"
          : "Transitions and Sensitivity to Support Throughout the Meeting",
      description:
        language === "es"
          ? "Cómo apoyar con sensibilidad cada transición y momento de la reunión, más allá del tiempo de alabanza."
          : "How to sensitively support each transition and moment of the meeting, beyond the worship time.",
    },
  ]

  return (
    <section id="workshops" className="bg-secondary py-24 px-6 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("workshops.title")}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{t("workshops.intro")}</p>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl lg:hidden">
              <Image
                src="/images/design-mode/IMG_0428-Enhanced-NR.jpeg"
                alt="Toni Romero teaching"
                fill
                className="object-cover"
              />
            </div>

            {/* Workshops Accordion */}
            <Accordion type="single" collapsible className="w-full">
              {workshops.map((workshop, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{workshop.title}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{workshop.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdd9qiAns1KH-JugqnkLKwB22NAsFAaofj_U8YQl3_4pijXlQ/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("workshops.cta")}
              </a>
            </Button>
          </div>

          <div className="hidden lg:block relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/design-mode/IMG_0428-Enhanced-NR.jpeg"
              alt="Toni Romero teaching"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
