 import React, { useState, useEffect } from "react";
import Dashboard from "src/views/default";
import video from "src/video/video.mp4"

const Slides = ({activeSlide,setActiveSlide}) => {
 

  const slides = [
    {
      title: "Dedicated",
      component: (
        <Dashboard
          Iframe="https://gwcteq-partner.domo.com/app-studio/186226194/pages/1033949323"   
            
            
        
        />
      ),
    },
    {
      title: "Central South",
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/1379437992/pages/5034189"     
      />,
    },
    {
      title: "Central North",
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/838568527/pages/1123110764"
      />,
    },
    {
      title: "South East",
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/1406412895/pages/1046802319"
      />,
    },
    {
      title: "North East",
      component: <Dashboard
      Iframe= "https://gwcteq-partner.domo.com/app-studio/1428772770/pages/1617402388"
      />,

    },
    ,
    {
      title: "West",
      component: <Dashboard 
      Iframe="https://gwcteq-partner.domo.com/app-studio/616537776/pages/103325792"
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
                  className="block h-full relative border bg-[url('https://metroonelpsg.com/wp-content/uploads/2022/01/Metro_One_LPSG3.jpg')]"
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
