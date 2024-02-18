import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#character", {
        xPercent: "100",
        // rotate: 90,
        // delay: 0.3,
        stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      className="bg-gray-950 relative h-screen border flex justify-center text-white"
    >
      <div
        id="main-container"
        className="text-9xl h-[140px] absolute mt-20 border border-red-500 w-fit bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-green-500 font-bold font-spaceGrotesk"
      >
        {"Amazing".split("").map((item, index) => (
          <span id="character" key={index} className="border">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
