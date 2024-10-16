import DomoApi from "../../helpers/DomoAPI";
import React, { useEffect, useState } from "react";
import { FaExpand, FaCompress } from "react-icons/fa";

const Header = ({activeSlide,isFullscreen,setIsFullscreen}) => {
  const [currentUser, setCurrentUser] = useState("");

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    DomoApi.GetCurrentUser().then((data) => {
      console.log(data);
      setCurrentUser((prevUser) => {
        if (!prevUser) {
          return data?.displayName;
        }
        return prevUser;
      });
    });
  }, []);

  const slides = [
    {
      title: "Dedicated",
     
    },
    {
      title: "Central South",
    
    },
    {
      title: "Central North",
    },
    {
      title: "South East",
    },
    {
      title: "North East",
    },
    ,
    {
      title: "West",
    }
  ];

  return (
    <header className="bg-gray-800 hover:bg-white  hover:text-black text-white z-7 cursor-pointer">
      <div className="container mx-auto flex justify-between items-center h-16">
        
        <div className="flex items-center">
          <img
            src="https://metroonelpsg.tovuti.io/images/HYeLmS721yumpCn1EWYt2sMTM2NTc1NjA4MzU1MA/Images/Logos/M1_Logo_-_Gray_on_Clear.png"
            alt="Logo"
            className="h-14 w-auto rounded-full"
          />
        </div>
       
         <div className="text-center ">
          <h1 className="text-3xl font-semibold ">METRO ONE - {(slides[activeSlide]).title}</h1>
          {/* <p className="text-sm text-white">
            Loss Prevention Services Group
          </p> */}
        </div>

       

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleFullScreen}
            className="hover:text-gray-300 transition-all duration-200"
          >
            {isFullscreen ? (
              <FaCompress className="h-5 w-5" />
            ) : (
              <FaExpand className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold">
              {currentUser[0]?.toUpperCase()}
            </div>
            <span className=" font-medium ">{currentUser}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
