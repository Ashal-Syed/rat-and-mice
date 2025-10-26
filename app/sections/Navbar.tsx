"use client";

import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="hidden w-screen h-32 fixed top-0 right-0 z-10 md:flex items-center justify-center px-5">
      <div className="h-20 w-250 flex items-center justify-between p-3 glass-effect">

        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <Image src="/Logo/logo.svg" alt="Logo" height={50} width={50} />
          <div className="flex flex-col justify-center items-center">
            <h1 className="red-gradient-text text-sm font-bold">RAT AND MICE</h1>
            <h1 className="font-bold text-sm">CONTROL</h1>
          </div>
        </div>


        <ul className="flex items-center gap-6 justify-center w-2/5">
          <div className="w-15 h-full flex items-center justify-center">
            <ScrollLink
              to="hero"
              smooth={false}
              duration={900}
              offset={-100}
              className="navbar-tab cursor-pointer"
            >
              Home
            </ScrollLink>
          </div>
          <div className="w-15 h-full flex items-center justify-center">
            <ScrollLink
              to="about"
              smooth={false}
              duration={900}
              offset={-100}
              className="navbar-tab cursor-pointer"
            >
              About
            </ScrollLink>
          </div>
          <div className="w-15 h-full flex items-center justify-center">
            <ScrollLink
              to="services"
              smooth={false}
              duration={600}
              offset={-100}
              className="navbar-tab cursor-pointer"
            >
              Services
            </ScrollLink>
          </div>
          <div className="w-15 h-full flex items-center justify-center">
            <ScrollLink
              to="pricing"
              smooth={false}
              duration={600}
              offset={-100}
              className="navbar-tab cursor-pointer"
            >
              Pricing
            </ScrollLink>
          </div>
          <div className="w-15 h-full flex items-center justify-center">
            <ScrollLink
              to="contact"
              smooth={false}
              duration={600}
              offset={-100}
              className="navbar-tab cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
        </ul>

        {/* Call button */}
        <Button text="Call Us Now" href="tel:+61422383777" />
      </div>
    </nav>
  );
};

export default Navbar;
