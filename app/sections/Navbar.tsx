"use client";

import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden w-screen h-32 fixed top-0 right-0 z-10 md:flex items-center justify-center px-5">
        <div className="h-20 w-250 flex items-center justify-between p-3 glass-effect">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Image src="/Logo/logo.svg" alt="Logo" height={50} width={50} />
            <div className="flex flex-col justify-center items-center">
              <h1 className="red-gradient-text text-sm font-bold">
                RAT AND MICE
              </h1>
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

          <Button text="Call Us Now" href="tel:+61422383777" />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 w-full h-20 bg-white/10 backdrop-blur-xl border-t border-white/20 flex items-center justify-around z-20 md:hidden">
        <ScrollLink
          to="hero"
          smooth={false}
          duration={600}
          offset={-80}
          className="text-black text-sm cursor-pointer"
        >
          {/* <Image src='/SVG/home.svg' alt="Home" height={30} width={30}/> */}
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={false}
          duration={600}
          offset={-80}
          className="text-black text-sm cursor-pointer"
        >
          {/* <Image src='/SVG/home.svg' alt="Home" height={30} width={30}/> */}
          About
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={false}
          duration={600}
          offset={-80}
          className="text-black text-sm cursor-pointer"
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="pricing"
          smooth={false}
          duration={600}
          offset={-80}
          className="text-black text-sm cursor-pointer"
        >
          Pricing
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={false}
          duration={600}
          offset={-80}
          className="text-black text-sm cursor-pointer"
        >
          Contact
        </ScrollLink>
      </nav>
    </>
  );
};

export default Navbar;
