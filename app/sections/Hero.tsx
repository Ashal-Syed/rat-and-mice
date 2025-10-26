import Image from "next/image";
import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen bg-linear-to-b from-white to-[#FFF5F5] flex items-center justify-center pt-5 md:pt-30 lg:px-30 gap-10"
    >
      <div className="w-full h-full p-10 flex justify-center items-center gap-5">
        <div className="h-full md:p-10 flex flex-col justify-center gap-5">
          <div>
            <h1 className="red-gradient-text text-5xl md:text-7xl font-bold">
              Professional <br /> Rat and Mice
            </h1>
            <h1 className="text-black text-5xl md:text-7xl font-bold">Control Services</h1>
          </div>
          <div>
            <p className="text-lg">
              We provide safe and effective pest control for rats and mice in
              homes and businesses. Our licensed technicians identify
              infestations, block entry points, and apply targeted treatments to
              stop rodents from returning.
            </p>
          </div>
          <div className="inline-flex justify-start gap-5 w-auto">
            <Button text="Learn More" href="#about" colour="dark" />
            <Button text="Get a Quote" href="#contact" />
          </div>
        </div>
        <div className="hidden w-1/2 h-full lg:flex items-center justify-center">
          <div className="rounded-2xl h-100 w-160 flex items-end justify-center relative overflow-hidden">
            <div className="red-gradient backdrop-blur-lg border border-white/20 shadow-lg w-3/4 h-3/4 rounded-2xl"></div>
            <Image
              src="/Images/Hero-Image.png"
              alt="Rodent control example"
              width={350}
              height={200}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
