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
  Calendar, 
  Users, 
  Target, 
  MessageCircle, 
  Phone as PhoneIcon,
  CheckCircle2,
  Volleyball,
  Star
} from "lucide-react"

export function BookingForm() {
  const [formData, setFormData] = useState({
    athleteName: "",
    ageLevel: "",
    parentName: "",
    email: "",
    phone: "",
    goals: "",
    preferredContact: "text",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to a backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 md:py-32 lg:py-40 bg-stone-50 dark:bg-stone-900">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">You're All Set!</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Coach Kelsey will be in touch within 24 hours via your preferred contact method.
              Get ready to elevate your game!
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="font-semibold"
            >
              Submit Another Inquiry
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 md:py-32 lg:py-40 bg-stone-50 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Book Your Training
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-6">
              Start Your Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to take your volleyball game to the next level? Fill out the form and 
              Coach Kelsey will reach out to schedule your first session or answer any questions.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-600/10 flex items-center justify-center flex-shrink-0">
                  <Volleyball className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Personalized Approach</h4>
                  <p className="text-sm text-muted-foreground">Every athlete gets a custom training plan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-600/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">Sessions fit your busy schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky-600/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">Hear back within 24 hours, usually sooner</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <Card className="bg-sky-900 dark:bg-sky-800 border-0">
              <CardContent className="p-6">
                <p className="text-white font-semibold mb-3">Need to reach out directly?</p>
                <div className="space-y-2 text-sky-100">
                  <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                    <PhoneIcon className="w-4 h-4" />
                    (XXX) XXX-XXXX
                  </a>
                  <a href="mailto:kelsey@volleyballwithkelsey.com" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    kelsey@volleyballwithkelsey.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl border-border">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Athlete Name */}
                  <div className="space-y-2">
                    <Label htmlFor="athleteName" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Athlete Name *
                    </Label>
                    <Input
                      id="athleteName"
                      placeholder="Enter athlete's full name"
                      value={formData.athleteName}
                      onChange={(e) => updateField("athleteName", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Age/Level */}
                  <div className="space-y-2">
                    <Label htmlFor="ageLevel" className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-muted-foreground" />
                      Age & Current Level *
                    </Label>
                    <Input
                      id="ageLevel"
                      placeholder="e.g., 14 years old, JV player"
                      value={formData.ageLevel}
                      onChange={(e) => updateField("ageLevel", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Parent Name */}
                  <div className="space-y-2">
                    <Label htmlFor="parentName" className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      Parent/Guardian Name (if under 18)
                    </Label>
                    <Input
                      id="parentName"
                      placeholder="Enter parent or guardian name"
                      value={formData.parentName}
                      onChange={(e) => updateField("parentName", e.target.value)}
                      className="h-12"
                    />
                  </div>

                  {/* Contact Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="space-y-2">
                    <Label htmlFor="goals" className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-muted-foreground" />
                      Goals & What You're Looking For
                    </Label>
                    <Textarea
                      id="goals"
                      placeholder="Tell us about your athlete's goals, areas to improve, or what you're hoping to achieve..."
                      value={formData.goals}
                      onChange={(e) => updateField("goals", e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      Preferred Contact Method *
                    </Label>
                    <RadioGroup
                      value={formData.preferredContact}
                      onValueChange={(value) => updateField("preferredContact", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="text" id="contact-text" />
                        <Label htmlFor="contact-text" className="font-normal cursor-pointer">
                          Text Message
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="call" id="contact-call" />
                        <Label htmlFor="contact-call" className="font-normal cursor-pointer">
                          Phone Call
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email" className="font-normal cursor-pointer">
                          Email
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-6 shadow-lg shadow-sky-600/30"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Start Your Journey
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to be contacted about volleyball training services.
                    We respect your privacy and never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
