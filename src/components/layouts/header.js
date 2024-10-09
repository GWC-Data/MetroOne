import DomoApi from "../../helpers/DomoAPI";
import React, { useEffect, useState } from "react";
import { FaExpand, FaCompress } from "react-icons/fa";

const Header = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="flex items-center">
          <img
            src="https://images.crunchbase.com/image/upload/c_pad,h_45,w_45,f_auto,b_white,q_auto:eco,dpr_1/rg3azp5wvh2emrrxrski"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-800">MetroOne</h1>
          <p className="text-sm text-gray-600">
            Loss Prevention Services Group
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleFullScreen}
            className="text-gray-700 hover:text-gray-900 transition-all duration-200"
          >
            {isFullscreen ? (
              <FaCompress className="h-5 w-5" />
            ) : (
              <FaExpand className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-sm font-bold">
              {currentUser[0]?.toUpperCase()}
            </div>
            <span className="text-gray-700 font-medium">{currentUser}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
