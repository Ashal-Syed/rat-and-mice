"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  colour?: "red" | "dark";
}

const Button = ({ text, href, colour = "red" }: ButtonProps) => {
  const buttonColour = colour === "dark" ? "dark-gradient" : "red-gradient";

  return (
    <Link href={href} className={`button-base ${buttonColour}`}>
      {text}
    </Link>
  );
};

export default Button;
