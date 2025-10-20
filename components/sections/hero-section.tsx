"use client";

import { motion, easeInOut } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GradientButton } from "@/components/ui-library/buttons/gradient-button";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full py-24 lg:py-32 xl:py-48 overflow-hidden"
    >
      <AnimatedBackground
        variant="gradient"
        color="rgba(220, 38, 38, 0.08)"
        secondaryColor="rgba(75, 85, 99, 0.08)"
      />

      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                {/* Modern Hero Header with Gradient */}
                <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  <span className="gradient-text">
                    Professional <br /> Rat and Mice
                  </span>
                  <br />
                  <span className="text-foreground">Control Services</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70">
                  We provide safe and effective pest control for rats and mice
                  in homes and businesses. Our licensed technicians identify
                  infestations, block entry points, and apply targeted
                  treatments to stop rodents from returning.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-6 sm:flex-row sm:items-center"
                variants={itemVariants}
              >
                <MagneticButton className="neumorphic-button-dark">
                  <Link href="#about" className="px-6 py-2.5 block">
                    Learn More
                  </Link>
                </MagneticButton>

                <GradientButton
                  glowAmount={5}
                  className="px-6 py-2.5 text-base"
                  gradientFrom="from-red-500"
                  gradientTo="to-red-700"
                  asChild
                >
                  <Link href="#contact" className=" w-full flex items-center">
                    Get a Quote
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                        duration: 1,
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </GradientButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Trusted by 2,000+ houses around Australia
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <SpotlightCard className="hidden lg:flex">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-gray-900/20 z-10"></div> */}
              <Image src='/hero.svg' alt="Hero" height={500} width={500} />
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
