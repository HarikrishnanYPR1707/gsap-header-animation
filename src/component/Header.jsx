import React from "react";

const Header = () => {
  return (
    <div className="uppercase font-bold font-spaceGrotesk">
      {"Harikrishnan".split("").map((item, index) => (
        <span className="border border-purple-500">{item}</span>
      ))}
    </div>
  );
};

export default Header;
