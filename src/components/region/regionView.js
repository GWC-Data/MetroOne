import React, { useState, useEffect } from "react";
import ButtonLink from "./buttonLink";
import DashboardLayout1 from "../dashboard/layout";

const Region = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sections = [
    {
      id: 0,
      title: "Asia",
      content: "A diverse continent with rich cultures.",
      component: <DashboardLayout1 />,
    },
    {
      id: 1,
      title: "Europe",
      content: "Known for its art, architecture, and history.",
      component: <DashboardLayout1 />,
    },
    {
      id: 2,
      title: "Japan",
      content: "Famous for its technology and traditional culture.",
      component: <DashboardLayout1 />,
    },
    {
      id: 3,
      title: "Australia",
      content: "Home to unique wildlife and stunning landscapes.",
      component: <DashboardLayout1 />,
    },
    {
      id: 4,
      title: "Austria",
      content: "Renowned for its classical music and beautiful Alps.",
      component: <DashboardLayout1 />,
    },
  ];

  const handleSlideClick = (id) => {
    setActiveSlide(id);
  };

  useEffect(() => {
    const handleResize = () => {
      const slides = document.querySelectorAll(".slide-content");
      slides.forEach((slide) => {
        slide.style.width = `${
          window.innerWidth > 480 ? slide.offsetWidth : "100%"
        }`;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [activeSlide]);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex overflow-hidden rounded-lg shadow-lg w-full h-screen">
        <ul className="flex transition-transform duration-500 w-full">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`relative list-none transition-all duration-500 ${
                activeSlide === section.id ? "w-full" : "w-[40px]"
              } h-full bg-gradient-to-b from-purple-200 to-purple-300 text-white overflow-hidden border-2 border-white flex items-center justify-center`}
              onClick={() => handleSlideClick(section.id)}
            >
              <ButtonLink onClick={() => handleSlideClick(section.id)}>
                <div className="transform rotate-90 origin-left whitespace-nowrap">
                  {section.title}
                </div>
              </ButtonLink>
            </li>
          ))}
        </ul>
        {/* Render the active section's content */}
        <div className="flex-grow">{sections[activeSlide].component}</div>
      </div>
    </div>
  );
};

export default Region;
