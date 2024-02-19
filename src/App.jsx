import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      // .from("#main-container", {
      //   top: "50%",
      //   opacity: 0,
      //   duration: 1,
      // })

      timeline
        // .from("#main-container", {
        //   top: "50%",
        //   opacity: 0,
        //   duration: 1,
        // })
        .from("#character", {
          top: "150%",
          duration: 1,
          stagger: 0.19,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={comp}
      className="bg-gray-950 relative h-screen flex justify-center text-white"
    >
      <div
        id="main-container"
        className="text-9xl h-[140px] mt-20 relative font-rubikMonoOne w-[761px] overflow-hidden [&>*:nth-child(1)]:left-0 [&>*:nth-child(2)]:left-[109px] [&>*:nth-child(3)]:left-[218px] [&>*:nth-child(4)]:left-[326px] [&>*:nth-child(5)]:left-[435px] [&>*:nth-child(6)]:left-[544px] [&>*:nth-child(7)]:left-[653px]"
      >
        {"Amazing".split("").map((item, index) => {
          return (
            <span id="character" key={index} className="absolute">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default App;
