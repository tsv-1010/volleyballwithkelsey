"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Check, Sparkles, Users, Star, Clock, Target, TrendingUp } from "lucide-react"

export function PricingSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  const packages = [
    {
      name: "Single Session",
      price: "$120",
      period: "per hour",
      description: "High-intensity 1-on-1 focus",
      featured: false,
      features: [
        "60-minute private session",
        "Personalized skill assessment",
        "Video analysis feedback",
        "Take-home practice drills",
        "Flexible scheduling",
      ],
      icon: Target,
      cta: "Book Session",
    },
    {
      name: "5-Session Package",
      price: "$550",
      period: "save $50",
      description: "Ideal for fundamental shifts",
      featured: false,
      features: [
        "5 x 60-minute sessions",
        "Progress tracking report",
        "Custom training plan",
        "Priority scheduling",
        "Text support between sessions",
        "Video review included",
      ],
      icon: TrendingUp,
      cta: "Get Started",
    },
    {
      name: "10-Session Package",
      price: "$1,000",
      period: "best value - save $200",
      description: "Full seasonal development",
      featured: true,
      badge: "Pro Choice",
      features: [
        "10 x 60-minute sessions",
        "Comprehensive assessment",
        "Personalized periodization",
        "Weekly check-ins",
        "Unlimited text support",
        "Game film analysis",
        "College recruiting guidance",
        "Mental performance tips",
      ],
      icon: Star,
      cta: "Commit to Excellence",
    },
  ]

  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Investment in Excellence
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Training Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your goals. Every session is designed to push your 
            limits and accelerate your volleyball development.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-sky-600 to-sky-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-sky-600/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    {pkg.badge}
                  </div>
                </div>
              )}

              <Card className={`h-full flex flex-col transition-shadow duration-300 ${
                pkg.featured 
                  ? "border-sky-600 border-2 shadow-xl shadow-sky-600/10 bg-gradient-to-b from-sky-50/50 to-white dark:from-sky-950/20 dark:to-stone-900" 
                  : "border-border hover:shadow-xl"
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    pkg.featured 
                      ? "bg-sky-600 text-white" 
                      : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                  }`}>
                    <pkg.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-5xl font-extrabold text-foreground">{pkg.price}</span>
                    <span className={`block text-sm mt-1 ${
                      pkg.featured ? "text-sky-600 font-semibold" : "text-muted-foreground"
                    }`}>
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.featured ? "text-sky-600" : "text-emerald-600"
                        }`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    className={`w-full font-bold py-6 ${
                      pkg.featured 
                        ? "bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/30" 
                        : "bg-stone-800 hover:bg-stone-700 dark:bg-white dark:hover:bg-stone-100 dark:text-stone-900"
                    }`}
                    onClick={scrollToBooking}
                  >
                    {pkg.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Group Training Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="border-border bg-gradient-to-r from-stone-50 to-stone-100 dark:from-stone-800/50 dark:to-stone-900/50 overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-600/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Group & Team Training</h3>
                    <p className="text-muted-foreground">Custom pricing available</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Perfect for 3+ athletes or full team clinics. Whether you're a group of friends 
                  looking to level up together or a team needing specialized position training, 
                  Coach Kelsey designs custom programs for your group's specific needs.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm text-muted-foreground border border-border">
                    <Clock className="w-3.5 h-3.5" /> Flexible Duration
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm text-muted-foreground border border-border">
                    <Users className="w-3.5 h-3.5" /> 3+ Athletes
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm text-muted-foreground border border-border">
                    <Target className="w-3.5 h-3.5" /> Team Clinics
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white font-semibold"
                  onClick={scrollToBooking}
                >
                  Book a Consult for Details
                </Button>
              </CardContent>
              
              <div className="hidden md:block relative h-full min-h-[300px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-20 h-20 mx-auto text-slate-400 dark:text-slate-500 mb-4" />
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Team Training Photo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
