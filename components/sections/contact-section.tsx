"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Contact Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Get in touch for a free inspection, quote, or to ask about our rat and mice control services. Fill out the form below and our team will respond promptly.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <div className="mx-auto max-w-2xl py-12">
          <ScrollReveal>
            <Card className="glassmorphic-card">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form and we’ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                      <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border border-muted bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                      <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border border-muted bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border border-muted bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                    <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border border-muted bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto px-8 py-3">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

