import React, { useEffect, useRef } from "react";
import { Wrap, Box } from "./styles";

const MainPage = () => {
  const textRef = useRef(null);

  const boxes = [
    { id: 1, color: "0077b6" },
    { id: 5, color: "90e0ef" },
  ];

  useEffect(() => {
    const wrap = textRef.current;
    const boxesEls = wrap.querySelectorAll(".boxClass");

    const getActive = () => document.body.dataset.active === "true";

    const setActiveTo = (active) => {
      document.body.dataset.active = active;
    };

    const shift = (text, index, rangeX, rangeY) => {
      const active = getActive();

      const translationIntensity = active ? 24 : 4,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslationX = `${maxTranslation * rangeX}%`,
        currentTranslationY = `${maxTranslation * rangeY}%`;

      const scale = active ? 1 + index * 0.4 : 1;

      text.animate(
        {
          transform: `translate(${currentTranslationX}, ${currentTranslationY}) scale(${scale})`,
        },
        {
          duration: 750,
          fill: "forwards",
          easing: "ease",
        }
      );
    };

    const shiftAll = (texts, rangeX, rangeY) => {
      texts.forEach((text, index) => {
        shift(text, index, rangeX, rangeY);
      });
    };

    const shiftText = (e) => {
      boxesEls.forEach((box, index) => {
        const rect = box.getBoundingClientRect(),
          radius = 1000;

        const centerX = rect.left + rect.width / 2,
          centerY = rect.top + rect.height / 2;

        const rangeX = (e.clientX - centerX) / radius,
          rangeY = (e.clientY - centerY) / radius;

        shift(box, index, rangeX, rangeY);
      });
    };

    const resetText = () => {
      setActiveTo(false);
      boxesEls.forEach((box, index) => {
        shift(box, index, 0.4, -0.7);
      });
    };

    window.addEventListener("mousemove", shiftText);
    window.addEventListener("mousedown", (e) => {
      setActiveTo(true);
      shiftText(e);
    });
    window.addEventListener("mouseup", resetText);

    const handleMouseLeave = () => {
      if (!getActive()) {
        resetText();
      }
    };

    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", shiftText);
      window.removeEventListener("mousedown", shiftText);
      window.removeEventListener("mouseup", resetText);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Wrap ref={textRef}>
      {boxes.map((box) => (
        <Box key={box.id} color={box.color} className="boxClass">
          <h1>Hi I'm MontaKr</h1>
          <h2>Frontend Developer</h2>
        </Box>
      ))}
    </Wrap>
  );
};

export default MainPage;
