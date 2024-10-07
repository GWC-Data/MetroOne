"use client";

import PieArcLabel from "./Chart/Pie4/pie4";
import RetroGrid from "./ui/retro-grid";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center bg-gradient-to-r from-purple-500 to-purple-900 justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent"> */}
      {/* <PieArcLabel/> */}
      <PieArcLabel/>
      {/* </span> */}

      <RetroGrid />
    </div>
  );
}
