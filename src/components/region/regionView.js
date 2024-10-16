 import React, { useState, useEffect } from "react";
import Dashboard from "src/views/default";
import video from "src/video/video.mp4"
import 'src/components/region/regionView.css'
import map1 from '../region/images/map6.png'
const Slides = ({activeSlide,setActiveSlide,isFullscreen}) => {
 

  const slides = [
    {
      title: "Dedicated",
   
      component: (
        <Dashboard
          Iframe="https://gwcteq-partner.domo.com/app-studio/186226194/pages/1033949323"   
          isFullscreen={isFullscreen}
         
            
        
        />
      ),

    },
    {
      title: "Central South",
      background:map1,
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/2004300864/pages/670184805" 
      isFullscreen={isFullscreen}    
      />,
    },
    {
      title: "Central North",
      background:map1,
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/1440025003/pages/1092454469"
      isFullscreen={isFullscreen}
      />,
    },
    {
      title: "South East",
      background:map1,
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/1666970591/pages/1261279747"
      isFullscreen={isFullscreen}
      />,
    },
    {
      title: "North East",
      background:map1,
      component: <Dashboard
      Iframe= "https://gwcteq-partner.domo.com/app-studio/1439503876/pages/1320394140"
      isFullscreen={isFullscreen}
      />,

    },
    ,
    {
      title: "West",
      background:map1,
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/156351525/pages/2016707196"
      isFullscreen={isFullscreen}
      />,

    }
  ];

  return (
    <div className="w-full bg-gray-900 h-screen relative overflow-hidden " >
      
      <div className="overflow-hidden h-screen relative z-10 ">
        <ul className="flex h-screen">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`list-none bg-gray-700 transition-all duration-500 ease-linear overflow-hidden h-full relative font-poppins ${activeSlide === index ? "w-[100%]" : "w-[3%]"} rounded-none`}
            >
              {activeSlide !== index && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  href="#"
                  className="block h-full relative border-2 border-gray-700  bg-gradient-to-r from-gray-600 to-[#7a7e83] "
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSlide(index);
                  }}
                 
                >
                  <span className="text-white custom-font absolute top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center text-lg whitespace-nowrap w-full">
                    {slide.title}
                  </span>
                </a>
              )}
              {activeSlide === index && (
                <div className="block text-white h-full overflow-auto no-scrollbar" >
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
