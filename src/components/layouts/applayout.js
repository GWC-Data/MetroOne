import React from "react";
import Header from "./header";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className=" ">
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
