import React, { useEffect, useRef } from "react";
import { GlobalStyle, Wrap, Rtext } from "./styles";
import { gsap } from "gsap";

const RollingText = ({ text }) => {
  return (
    <Rtext>
      {text.split("").map((letter, index) => (
        <span key={index} className="r-inner">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="r-letter">
              {letter}
            </span>
          ))}
        </span>
      ))}
    </Rtext>
  );
};

const App = () => {
  const rollingTextRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const rollingInners = rollingTextRef.current.querySelectorAll(".r-inner");

    gsap.set(rollingInners, {
      y: "-700%",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
    });

    tl.to(rollingInners, {
      duration: 4,
      y: "0",
      stagger: {
        grid: "auto",
        from: "random",
        amount: 1.2,
      },
    }).fromTo(
      ".r-letter",
      { filter: "brightness(0.5)" },
      {
        duration: 3,
        filter: "brightness(1)",
        stagger: {
          grid: "auto",
          amount: 0.8,
        },
      },
      0
    );

    tlRef.current = tl;

    return () => tlRef.current && tlRef.current.kill();
  }, []);

  const handleRerollClick = () => {
    if (tlRef.current) {
      tlRef.current.reverse().then(() => {
        tlRef.current.play();
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <section className="section">
          <div className="section_wrapper" ref={rollingTextRef}>
            <div className="r-container">
              <RollingText text="Rome↳" />
              <RollingText text="←Osaka" />
              <RollingText text="+London" />
            </div>
            <div className="r-container abs abs-top">
              <span>WADM</span>
              <span>&copy;2023</span>
            </div>
            <div className="r-container abs abs-bottom">
              <span className="re-roll" onClick={handleRerollClick}>
                +re-Roll
              </span>
              <span>Rolling-text</span>
              <span>&darr;&darr;&darr;</span>
            </div>
            <div className="section_media">
              <img className="section_image" src="./asset/1.jpg" alt="img" />
            </div>
          </div>
        </section>
      </Wrap>
    </>
  );
};

export default App;
