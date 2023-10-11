import React, { useState } from "react";
import { GlobalStyle, Wrap, Slide } from "./styles";
import "boxicons/css/boxicons.min.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

const App = () => {
  const slideArray = [
    { img: img1, place: "pyramids", country: "egypt" },
    { img: img2, place: "denali", country: "usa" },
    { img: img3, place: "sahara", country: "africa" },
    { img: img4, place: "sindoro", country: "indonesia" },
    { img: img5, place: "marmolada", country: "italy" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotateActive, setRotateActive] = useState(false);
  const [prevActiveIndex, setPrevActiveIndex] = useState(null);

  const handleRotate = () => {
    setRotateActive(true);
    setPrevActiveIndex(activeIndex);

    setTimeout(() => {
      setRotateActive(false);
    }, 2100);

    setActiveIndex((prevIndex) => (prevIndex + 1) % slideArray.length);
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="header">
          <a href="#" className="logo">
            Logo
          </a>
          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="container">
          {slideArray.map((val, idx) => {
            return (
              <Slide
                key={idx}
                className={
                  idx === activeIndex
                    ? "active"
                    : idx === prevActiveIndex
                    ? "after-active"
                    : ""
                }
              >
                <div className="circle bg">
                  <img src={val.img} />
                </div>
                <div className="circle large">
                  <img src={val.img} />
                </div>
                <div className="circle small">
                  <img src={val.img} />
                </div>
                <div className="content-text">
                  <div className="place">
                    <h1>{val.place}</h1>
                  </div>
                  <div className="country">
                    <h2>{val.country}</h2>
                  </div>
                </div>
              </Slide>
            );
          })}
          <div className="circle-darktransp" />
          <span className="line" />
          <span
            className={`rotate-btn ${rotateActive ? "active" : ""}`}
            onClick={handleRotate}
          >
            <i className="bx bx-rotate-right"></i>
          </span>
        </div>
      </Wrap>
    </>
  );
};

export default App;
