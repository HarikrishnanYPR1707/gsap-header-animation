import React from "react";

const Header = () => {
  return (
    <div className="text-9xl h-[140px] border w-fit bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-green-500 font-bold font-spaceGrotesk">
      {"Amazing".split("").map((item, index) => (
        <span className="">{item}</span>
      ))}
    </div>
  );
};

export default Header;
