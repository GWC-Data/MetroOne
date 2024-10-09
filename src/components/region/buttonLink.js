import React from "react";

const ButtonLink = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1 transform text-white font-bold text-2xl"
    >
      {children}
    </button>
  );
};

export default ButtonLink;
