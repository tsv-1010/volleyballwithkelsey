"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Send, 
  User, 
  Target, 
  MessageCircle, 
  Phone as PhoneIcon,
  CheckCircle2,
} from "lucide-react"

export function BookingForm() {
  const [formData, setFormData] = useState({
    athleteName: "",
    ageLevel: "",
    email: "",
    phone: "",
    goals: "",
    preferredContact: "text",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-21 md:py-34 bg-stone-50 dark:bg-stone-900">
        <div className="mx-auto max-w-xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-13 h-13 mx-auto rounded-full bg-[#185FAD] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[28px] font-medium text-foreground mb-3">Request Received</h2>
            <p className="text-[15px] text-muted-foreground mb-5">
              Coach Kelsey will be in touch within 24 hours.
            </p>
            <Button 
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="border-[#185FAD] text-[#185FAD] hover:bg-[#185FAD] hover:text-white"
            >
              Submit Another
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-21 md:py-34 bg-stone-50 dark:bg-stone-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-2 gap-13 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -21 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#185FAD] font-medium text-[13px] uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[34px] md:text-[44px] font-medium tracking-tight text-foreground leading-[1.1]">
              Book Training
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground mb-8">
              Fill out the form and Coach Kelsey will reach out to schedule your first session.
            </p>

            {/* Quick Contact */}
            <div className="bg-[#185FAD] rounded-xl p-5">
              <p className="text-white font-medium text-[14px] mb-3">Reach out directly</p>
              <div className="space-y-2 text-white/80">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-[14px] hover:text-white transition-colors">
                  <PhoneIcon className="w-4 h-4" />
                  (XXX) XXX-XXXX
                </a>
                <a href="mailto:kelsey@volleyballwithkelsey.com" className="flex items-center gap-2 text-[14px] hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  kelsey@volleyballwithkelsey.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 21 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border">
              <CardContent className="p-5 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Athlete Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="athleteName" className="text-[13px] flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                      Athlete Name *
                    </Label>
                    <Input
                      id="athleteName"
                      placeholder="Full name"
                      value={formData.athleteName}
                      onChange={(e) => updateField("athleteName", e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>

                  {/* Age/Level */}
                  <div className="space-y-1.5">
                    <Label htmlFor="ageLevel" className="text-[13px] flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-muted-foreground" />
                      Age & Level *
                    </Label>
                    <Input
                      id="ageLevel"
                      placeholder="e.g., 14 years old, JV player"
                      value={formData.ageLevel}
                      onChange={(e) => updateField("ageLevel", e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>

                  {/* Contact Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-[13px]">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-[13px]">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="space-y-1.5">
                    <Label htmlFor="goals" className="text-[13px]">
                      Goals (optional)
                    </Label>
                    <Textarea
                      id="goals"
                      placeholder="What are you hoping to achieve?"
                      value={formData.goals}
                      onChange={(e) => updateField("goals", e.target.value)}
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2">
                    <Label className="text-[13px]">Preferred contact *</Label>
                    <RadioGroup
                      value={formData.preferredContact}
                      onValueChange={(value) => updateField("preferredContact", value)}
                      className="flex gap-5"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="text" id="contact-text" />
                        <Label htmlFor="contact-text" className="text-[13px] font-normal cursor-pointer">Text</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="call" id="contact-call" />
                        <Label htmlFor="contact-call" className="text-[13px] font-normal cursor-pointer">Call</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email" className="text-[13px] font-normal cursor-pointer">Email</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full border-2 border-[#185FAD] text-[#185FAD] hover:bg-[#185FAD] hover:text-white font-medium py-5"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
