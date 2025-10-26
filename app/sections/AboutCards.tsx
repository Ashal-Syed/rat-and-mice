import Image from "next/image";
import React from "react";

const aboutCardData = [
  {
    icon: "/SVG/shield.svg",
    title: "Certified & Licensed Experts",
    text: "All our technicians are certified and trained to handle rats and mice using government-approved methods. We stay updated with the latest pest control standards to ensure every treatment is safe and compliant."
  },
  {
    icon: "/SVG/dollar.svg",
    title: "Transparent Pricing",
    text: "Up-front quotes with no hidden costs. You know the full cost before we start work. We provide clear explanations of all services so you understand exactly what you’re paying for."
  },
  {
    icon: "/SVG/tick.svg",
    title: "Fast & Reliable Service",
    text: "Quick response and same-day service available for urgent infestations. Our team works efficiently to control the problem and restore your space with minimal disruption."
  },
  {
    icon: "/SVG/home.svg",
    title: "Preventive Solutions",
    text: "Beyond removal, we identify entry points and apply proofing to stop rodents from returning. We focus on long-term prevention, not just short-term fixes."
  }
]


const AboutCards = () => {
  return (
    <section className="w-screen bg-[#FFFFFF] flex flex-col lg:flex-row justify-center items-center gap-10 px-7">
        {aboutCardData.map((card, index) => (
      <div key={index} className="about-cards h-72 flex flex-col justify-start items-center py-7 px-5 gap-7">
        <div className="relative w-9 h-9 ">
          <Image src={card.icon} alt="icon" fill className="object-cover" />
        </div>
        <h1 className="font-bold text-lg">{card.title}</h1>
        <p className="text-sm text-center text-gray-600">{card.text}</p>
      </div>
        ))}
    </section>
  );
};

export default AboutCards;
