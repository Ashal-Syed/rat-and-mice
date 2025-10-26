import Image from "next/image";
import React from "react";

const servicesData = [
  {
    image: "/Images/certified.png",
    title: "Monitoring & Maintenance",
  },
  {
    image: "/Images/odour.png",
    title: "Odour Control & Cleaning",
  },
  {
    image: "/Images/assessment.jpg",
    title: "Property Assessment Reports",
  },
  {
    image: "/Images/commercial.png",
    title: "Commercial Rodent Management",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-screen py-20 px-10">
      <div className="w-full h-full flex flex-col items-center gap-10">
        <h1 className="red-gradient-text text-5xl font-bold">Our Services</h1>
        <p>
          We provide targeted and reliable solutions for rat and mice control,
          designed to remove infestations quickly and prevent future problems.
        </p>
        <div className="flex flex-col md:flex-row gap-7 ">
          {servicesData.map((service, index) => (
            <div key={index} className="services-cards">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute bottom-0 w-full h-1/4 flex justify-center items-center">
                <h1>{service.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
