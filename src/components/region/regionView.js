/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import DashboardLayout1 from "../dashboard/layout";
const Slides = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Logging active title when slide changes
  useEffect(() => {
    console.log(`Active Slide: ${slides[activeSlide].title}`);
  }, [activeSlide]);

  const slides = [
    {
      title: "ASIA",
      component: <DashboardLayout1 />,
    },
    {
      title: "EUROPE",
      component: <DashboardLayout1 />,
    },
    {
      title: "North America",
      component: <DashboardLayout1 />,
    },
    {
      title: "South Asia",
      component: <DashboardLayout1 />,
    },
    {
      title: "Middle East and North Africa",
      component: <DashboardLayout1 />,
    },
  ];

  return (
    <div className="w-full h-screen">
      <div className="overflow-hidden h-full">
        <ul className="flex h-full">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`list-none transition-all duration-500 ease-linear overflow-hidden h-full relative ${
                activeSlide === index ? "w-[100%]" : "w-[3%]"
              } ${`bg-gradient-to-r ${
                index === 0
                  ? "from-cyan-500 to-blue-500"
                  : index === 1
                  ? "from-yellow-400 to-orange-500"
                  : index === 2
                  ? "from-pink-400 to-red-500"
                  : index === 3
                  ? "from-purple-500 to-indigo-500"
                  : "from-green-400 to-lime-500"
              }`} rounded-none`}
            >
              {activeSlide !== index && (
                <a
                  href="#"
                  className="block h-full relative"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSlide(index);
                  }}
                >
                  <span className="text-white font-bold absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center text-lg whitespace-nowrap w-full">
                    {slide.title}
                  </span>
                </a>
              )}
              {activeSlide === index && (
                <div className="block text-white h-full overflow-auto no-scrollbar">
                  {/* <h2 className="text-5xl font-extrabold mb-4">
                    {slide.title}
                  </h2> */}
                  {slide.component}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slides;
