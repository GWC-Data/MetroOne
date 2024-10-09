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
    <header className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="flex items-center">
          <img
            src="https://metroonelpsg.tovuti.io/images/HYeLmS721yumpCn1EWYt2sMTM2NTc1NjA4MzU1MA/Images/Logos/M1_Logo_-_Gray_on_Clear.png"
            alt="Logo"
            className="h-14 w-auto rounded-full"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">METRO ONE</h1>
          {/* <p className="text-sm text-white">
            Loss Prevention Services Group
          </p> */}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleFullScreen}
            className="text-white hover:text-gray-300 transition-all duration-200"
          >
            {isFullscreen ? (
              <FaCompress className="h-5 w-5" />
            ) : (
              <FaExpand className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm font-bold">
              {currentUser[0]?.toUpperCase()}
            </div>
            <span className="text-white font-medium">{currentUser}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
