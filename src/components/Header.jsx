import React from 'react'
import GradualSpacing from "./ui/gradual-spacing";

export function Header() {
  return (
    <GradualSpacing
      className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Metro One"
    />
  );
}
