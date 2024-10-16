import React from "react";
import Header from "./header";

const AppLayout = ({activeSlide, children,isFullscreen, setIsFullscreen }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeSlide={activeSlide} isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen}/>

      <main className=" ">
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
