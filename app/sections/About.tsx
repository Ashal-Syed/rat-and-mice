import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#FFFFFF] w-full min-h-screen md:min-h-170 py-7 md:px-16 flex flex-col lg:flex-row justify-center items-center lg:gap-10"
    >
      <div className="relative w-full h-80 md:w-full md:h-[500px]">
        <Image
          src="/Sections/about.svg"
          alt="About Photo"
          fill
          className="object-cover md:object-fill rounded-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="h-full flex flex-col md:justify-start gap-10 py-5 px-3 md:p-10">
        <h1 className="red-gradient-text text-3xl md:text-5xl font-bold">
          Experienced Pest Control Professionals
        </h1>
        <p className="text-lg">
          We are a local pest control company specialising in rodent management.
          With years of experience in residential and commercial pest control,
          we understand rodent behaviour and use proven methods to eliminate
          infestations quickly and safely. Our focus is on prevention. After
          removing rodents, we inspect the property to identify entry points and
          provide recommendations to stop future problems.
        </p>
      </div>
    </section>
  );
};

export default About;
