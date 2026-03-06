"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Check, Users } from "lucide-react"

export function PricingSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  const packages = [
    {
      name: "Single Session",
      price: "$120",
      period: "per hour",
      features: [
        "60-minute private session",
        "Skill assessment",
        "Take-home drills",
      ],
    },
    {
      name: "5 Sessions",
      price: "$550",
      period: "save $50",
      features: [
        "5 x 60-minute sessions",
        "Progress tracking",
        "Custom training plan",
        "Priority scheduling",
      ],
    },
    {
      name: "10 Sessions",
      price: "$1,000",
      period: "save $200",
      featured: true,
      features: [
        "10 x 60-minute sessions",
        "Full assessment",
        "Weekly check-ins",
        "Text support",
        "Video analysis",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-21 md:py-34 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 13 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-13"
        >
          <p className="text-[#185FAD] font-medium text-[13px] uppercase tracking-wider mb-2">
            Investment
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[34px] md:text-[44px] font-medium tracking-tight text-foreground leading-[1.1]">
            Training Packages
          </h2>
          <p className="mt-3 text-[15px] text-muted-foreground max-w-xl mx-auto">
            Choose the package that fits your goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-5 md:grid-cols-3 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 21 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <Card className={`h-full flex flex-col ${
                pkg.featured 
                  ? "border-[#185FAD] border-2" 
                  : "border-border"
              }`}>
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-[16px] font-medium">{pkg.name}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="text-center mb-5">
                    <span className="text-[34px] font-medium text-foreground">{pkg.price}</span>
                    <span className="block text-[13px] text-muted-foreground mt-1">
                      {pkg.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#185FAD]" />
                        <span className="text-[13px] text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-5">
                  <Button
                    variant="outline"
                    className={`w-full py-5 ${
                      pkg.featured 
                        ? "border-2 border-[#185FAD] text-[#185FAD] hover:bg-[#185FAD] hover:text-white" 
                        : "border-border text-foreground hover:bg-foreground hover:text-background"
                    }`}
                    onClick={scrollToBooking}
                  >
                    Select
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Group Training */}
        <motion.div
          initial={{ opacity: 0, y: 13 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-13 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border">
            <Users className="w-5 h-5 text-[#185FAD]" />
            <span className="text-[14px] text-muted-foreground">
              Group & team training available — <button onClick={scrollToBooking} className="text-[#185FAD] hover:underline">contact for pricing</button>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
