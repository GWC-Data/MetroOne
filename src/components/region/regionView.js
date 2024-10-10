import React, { useState, useEffect } from "react";
import DashboardLayout1 from "../dashboard/layout";
import Dashboard from "src/views/default";
const Slides = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Logging active title when slide changes
  useEffect(() => {
    console.log(`Active Slide: ${slides[activeSlide].title}`);
  }, [activeSlide]);

  const slides = [
    {
      title: "Asia",
      component: <Dashboard 
        HPW={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/mO8OG" width="194" height="97" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        total_customers={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/jZ5ZP" width="194" height="97" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        MU_wOT={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/k8B8N" width="194" height="97" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        MU_Dedicated={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/lxXxg" width="194" height="97" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        Fill_Rate={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/q767p" width="403" height="197" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        NBOT={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/nx7x7" width="403" height="197" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        PR={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/nx7xW" width="403" height="197" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        Gross={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/p8B8V" width="403" height="197" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        total_payroll={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/oV8VB" width="403" height="147" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        Revenue={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/q7670" width="403" height="147" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        COST_of_OT={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/r8B84" width="403" height="147" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        gross_profit={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/vlRl0" width="403" height="122" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        Region_Dedicated={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/wV2V1" width="1242" height="334" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        LOCATION_by_REVENUE={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/zvQvZ" width="613" height="359" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        GP_vs_GP={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/ANWN3" width="613" height="359" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        Dark_Hours={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/BNONk" width="613" height="359" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        HPW_by_STATE={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/D161y" width="613" height="359" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        PL_Dedicated={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/E818Y" width="1242" height="359" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        TOTAL_PAYROLL_vs_TOTAL_BILLED={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/GvzvL" width="1242" height="359" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
        Region_wise_dedicated_summary={<iframe src="https://gwcteq-partner.domo.com/embed/card/private/K1z1M" width="1242" height="359" marginheight="0" marginwidth="0" frameborder="0"></iframe>}
      />,
    },
    {
      title: "Europe",
      component: <Dashboard />,
    },
    {
      title: "North America",
      component: <Dashboard />,
    },
    {
      title: "South Asia",
      component: <Dashboard />,
    },
    {
      title: "Middle East and North Africa",
      component: <Dashboard />,
    },
  ];

  return (
    <div className="w-full h-screen " >
      <div className="overflow-hidden h-full">
        <ul className="flex h-full">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`list-none  transition-all duration-500 ease-linear overflow-hidden h-full  relative ${activeSlide === index ? "w-[100%]" : "w-[3%]"
                } 
           bg-gray-900
              
              rounded-none`}
              style={{
                backgroundImage: "url('https://secure4.saashr.com/ta/images/uploaded/67120050/JobSearchCoverImage68101633_67120050.jpg?jobCoverImg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                
              }}
            >
              {activeSlide !== index && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  href="#"
                  className="block h-full relative border bg-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSlide(index);
                  }}
                >
                  <span className="text-white font-bold absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center text-lg whitespace-nowrap w-full ">
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
