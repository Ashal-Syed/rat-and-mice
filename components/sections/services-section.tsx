"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { ImageCard } from "@/components/ui-library/cards/image-card";
import { CtaCard } from "@/components/ui-library/cards/cta-card";
import { ProgressCard } from "@/components/ui-library/cards/progress-card";
import { GradientButton } from "@/components/ui-library/buttons/gradient-button";
import {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
} from "@/components/ui-library/buttons/button-variants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui-library/animations/scroll-animations";
import {
  AlertTriangle,
  Bug,
  Shield,
} from "lucide-react";

export function Services() {
  const [activeTab, setActiveTab] = useState("cards");

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Our Pest Control Services"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="We provide targeted and reliable solutions for rat and mice control, designed to remove infestations quickly and prevent future problems."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Tabs
              defaultValue={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsContent value="cards" className="space-y-12">
                <div className="space-y-4 pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <CtaCard
                        title="Rat Control"
                        description="We identify nesting areas and apply safe, effective treatments to eliminate rats. Our technicians seal entry points and advise on sanitation to stop them from returning."
                        primaryAction={{ text: "Learn More" }}
                        variant="gradient"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<AlertTriangle className="h-6 w-6 text-red-500" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <CtaCard
                        title="Mice Control"
                        description="We locate sources of mouse activity, use proven baiting or trapping methods, and close all small gaps around doors and pipes to prevent re-entry of mice."
                        primaryAction={{ text: "Learn More" }}
                        variant="gradient"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<Bug className="h-6 w-6 text-yellow-500" />}
                        className="border-glow-yellow"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <CtaCard
                        title="Rodent Proofing & Prevention"
                        description="After treatment, we reinforce your property with mesh barriers, door seals, and preventive checks to ensure long-term protection. Maintenance visits to monitor any new rodent activity"
                        primaryAction={{ text: "Contact Us"}}
                        variant="glass"
                        alignment="right"
                        buttonVariant="magnetic"
                        icon={<Shield className="h-6 w-6 text-green-600" />}
                        className="border-glow-orange"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
