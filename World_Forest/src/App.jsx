import React, { useState, useEffect, useRef } from "react";
import { Wrap } from "./styles";
import "boxicons";
import chinaImg from "./image/china.jpg";
import japanImg from "./image/japan.jpg";
import serbiaImg from "./image/serbia.jpg";
import africaImg from "./image/africa.jpg";
import brazilImg from "./image/brazil.jpg";

const App = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const slidesRef = useRef(null);

  useEffect(() => {
    slidesRef.current = document.querySelectorAll(".slide");
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.forEach((slide) => {
        slide.classList.remove("active");
        if (slidesRef.current[slideNumber]) {
          slidesRef.current[slideNumber].classList.add("active");
        }
      });
    }
  }, [slideNumber]);

  const prevBtnClick = () => {
    setSlideNumber((nextSlideNumber) => {
      let prevSlideNumber = nextSlideNumber - 1;
      return prevSlideNumber < 0
        ? slidesRef.current.length - 1
        : prevSlideNumber;
    });
  };

  const nextBtnClick = () => {
    setSlideNumber((prevSlideNumber) => {
      let nextSlideNumber = prevSlideNumber + 1;
      return nextSlideNumber >= slidesRef.current.length ? 0 : nextSlideNumber;
    });
  };

  return (
    <Wrap>
      <header className="header">
        <a href="#" className="logo">
          Tours.
        </a>
        <div className="social-media">
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
        <nav className="navbar">
          <a href="#">Destinations</a>
          <a href="#">Booking</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="banner">
        <div className="slider">
          <div className="slide">
            <img src={chinaImg} alt="" />
            <div className="left-info">
              <div className="penetrate-blur">
                <h1>Chi</h1>
              </div>
              <div className="content">
                <h3>01. China Forest Tour</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores rerum sequi fugiat voluptas saepe laborum impedit,
                  amet assumenda facilis, voluptates cumque blanditiis quod eum
                  corrupti neque expedita placeat, ad repellat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Rem ipsam iusto
                  accusamus nam nobis facilis repudiandae necessitatibus
                  dignissimos, assumenda et repellat minus, earum aperiam eius?
                  Nostrum porro nesciunt amet velit!
                </p>
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
            <div className="right-info">
              <h1>na</h1>
              <h3>Forest</h3>
            </div>
          </div>
          <div className="slide">
            <img src={japanImg} alt="" />
            <div className="left-info">
              <div className="penetrate-blur">
                <h1>Jap</h1>
              </div>
              <div className="content">
                <h3>02. Japan Forest Tour</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores rerum sequi fugiat voluptas saepe laborum impedit,
                  amet assumenda facilis, voluptates cumque blanditiis quod eum
                  corrupti neque expedita placeat, ad repellat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Rem ipsam iusto
                  accusamus nam nobis facilis repudiandae necessitatibus
                  dignissimos, assumenda et repellat minus, earum aperiam eius?
                  Nostrum porro nesciunt amet velit!
                </p>
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
            <div className="right-info">
              <h1>an</h1>
              <h3>Forest</h3>
            </div>
          </div>
          <div className="slide">
            <img src={africaImg} alt="" />
            <div className="left-info">
              <div className="penetrate-blur">
                <h1>Afr</h1>
              </div>
              <div className="content">
                <h3>03. Africa Forest Tour</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores rerum sequi fugiat voluptas saepe laborum impedit,
                  amet assumenda facilis, voluptates cumque blanditiis quod eum
                  corrupti neque expedita placeat, ad repellat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Rem ipsam iusto
                  accusamus nam nobis facilis repudiandae necessitatibus
                  dignissimos, assumenda et repellat minus, earum aperiam eius?
                  Nostrum porro nesciunt amet velit!
                </p>
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
            <div className="right-info">
              <h1>ica</h1>
              <h3>Forest</h3>
            </div>
          </div>
          <div className="slide">
            <img src={brazilImg} alt="" />
            <div className="left-info">
              <div className="penetrate-blur">
                <h1>Bra</h1>
              </div>
              <div className="content">
                <h3>04. Brazil Forest Tour</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores rerum sequi fugiat voluptas saepe laborum impedit,
                  amet assumenda facilis, voluptates cumque blanditiis quod eum
                  corrupti neque expedita placeat, ad repellat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Rem ipsam iusto
                  accusamus nam nobis facilis repudiandae necessitatibus
                  dignissimos, assumenda et repellat minus, earum aperiam eius?
                  Nostrum porro nesciunt amet velit!
                </p>
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
            <div className="right-info">
              <h1>zil</h1>
              <h3>Forest</h3>
            </div>
          </div>
          <div className="slide">
            <img src={serbiaImg} alt="" />
            <div className="left-info">
              <div className="penetrate-blur">
                <h1>Ser</h1>
              </div>
              <div className="content">
                <h3>05. Serbia Forest Tour</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores rerum sequi fugiat voluptas saepe laborum impedit,
                  amet assumenda facilis, voluptates cumque blanditiis quod eum
                  corrupti neque expedita placeat, ad repellat. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Rem ipsam iusto
                  accusamus nam nobis facilis repudiandae necessitatibus
                  dignissimos, assumenda et repellat minus, earum aperiam eius?
                  Nostrum porro nesciunt amet velit!
                </p>
                <a href="#" className="btn">
                  More Details
                </a>
              </div>
            </div>
            <div className="right-info">
              <h1>bia</h1>
              <h3>Forest</h3>
            </div>
          </div>
        </div>
        <div className="navigation">
          <span
            onClick={() => {
              prevBtnClick();
            }}
            className="prev-btn"
          >
            <i className="bx bx-chevron-left"></i>
          </span>
          <span
            onClick={() => {
              nextBtnClick();
            }}
            className="next-btn"
          >
            <i className="bx bx-chevron-right"></i>
          </span>
        </div>
      </section>
    </Wrap>
  );
};

export default App;
