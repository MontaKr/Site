import React, { useEffect, useRef, useState } from "react";
import { GlobalStyle, Wrap } from "./styles";
import LocomotiveScroll from "locomotive-scroll";
import { gsap, ScrollTrigger } from "gsap/all";

const App = () => {
  const refCurosr = useRef(null);
  const refMain = useRef(null);

  const mouseMoveFn = (e) => {
    refCurosr.current.style.left = e.clientX + 20 + "px";
    refCurosr.current.style.top = e.clientY + 20 + "px";
  };

  //locomotive and gsap
  useEffect(() => {
    const init = () => {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
      });

      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },

        pinType: document.querySelector(".main").style.transform
          ? "transform"
          : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      ScrollTrigger.refresh();
    };

    init();

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: "3",
      },
    });

    tl.to(
      ".page1 h1",
      {
        x: -100,
      },
      "anim"
    );

    tl.to(
      ".page1 h2",
      {
        x: 100,
      },
      "anim"
    );

    tl.to(
      ".page1 video",
      {
        width: "90%",
      },
      "anim"
    );

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top -45%",
        end: "top -50%",
        scrub: 3,
      },
    });

    tl2.to(".main", {
      backgroundColor: "#fff",
      color: "#111",
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top -140%",
        end: "top -160%",
        scrub: 3,
      },
    });

    tl3.to(".main", {
      backgroundColor: "#0f0d0d",
    });

    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        let att = box.getAttribute("data-image");
        refCurosr.current.style.width = "470px";
        refCurosr.current.style.height = "370px";
        refCurosr.current.style.borderRadius = "0";
        refCurosr.current.style.backgroundImage = `url(${att})`;
      });

      box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "transparent";
        refCurosr.current.style.width = "20px";
        refCurosr.current.style.height = "20px";
        refCurosr.current.style.borderRadius = "50%";
        refCurosr.current.style.backgroundImage = `none`;
      });
    });

    let h4 = document.querySelectorAll("#nav h4");
    let purple = document.querySelector("#purple");

    h4.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        purple.style.display = "block";
        purple.style.opacity = "1";
      });

      elem.addEventListener("mouseleave", () => {
        purple.style.display = "none";
        purple.style.opacity = "0";
      });
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap onMouseMove={mouseMoveFn}>
        <div className="cursor" ref={refCurosr}></div>
        <div id="nav">
          <img src="https://d33wubrfki0l68.cloudfront.net/439bf938233c24af021ffe6d206cd42f546e1143/ff4ed/assets/logo.svg" />
          <div id="nav-part2">
            <h4>Home</h4>
            <h4>Work</h4>
            <h4>Studio</h4>
            <h4>Contact</h4>
          </div>
          <div id="nav-part3">
            <div id="circle"></div>
          </div>
        </div>
        <div id="purple"></div>
        <div className="main" ref={refMain}>
          <div className="page1">
            <h1>Digitally crafted</h1>
            <h2>brand experiences</h2>
            <video
              autoPlay
              muted
              loop
              src="https://duo-studio.co/assets/home/Duo%20Reel--Desktop-reduced.mp4"
            ></video>
          </div>
          <div className="page2">
            <h1>We are Duo Studio,</h1>
            <div className="page2-container">
              <div className="page2-left">
                <h2>
                  A CREATIVE COLLECTIVE MADE TO UNLOCK YOUR BRAND’S POTENTIAL
                </h2>
              </div>
              <div className="page2-right">
                <p>
                  We weave together bold strategy and creative execution to
                  produce thought-provoking digital experiences. We take a
                  highly personalized approach to delivering branding, web
                  design, and content marketing solutions. Born in the DC area -
                  now serving clients worldwide.
                </p>
                <button>About us</button>
              </div>
            </div>
          </div>
          <div className="page3">
            <h1>Selected Works</h1>
            <div class="page3-part1">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/aa3d2ff66de5f16336bd94fd68c3c2ce61e29f68/d5064/assets/home/home-casestudy-mgny.webp"
                alt=""
              />
              <video
                autoPlay
                loop
                muted
                src="https://d33wubrfki0l68.cloudfront.net/a13ea7c2ca2f38134748966280e54af4340ce821/f976d/assets/home/projects_madegood-reduced.mp4"
              ></video>
            </div>
          </div>
          <div className="page4">
            <div className="elem">
              <img src="https://d33wubrfki0l68.cloudfront.net/3401770635e95968e300d88f8b9479ecbc008eeb/be2e5/assets/home/home-experience-1.webp" />
              <div className="text-div">
                <h1>Strategy</h1>
                <h1>Strategy</h1>
              </div>
              <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" />
            </div>
            <div className="elem">
              <img src="https://images.unsplash.com/photo-1692190787199-faeef3313972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              <div className="text-div">
                <h1>Identity</h1>
                <h1>Identity</h1>
              </div>
              <img src="https://images.unsplash.com/photo-1690973385397-0ed3be2e5ce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="elem">
              <img src="https://images.unsplash.com/photo-1664914854985-8411fe60cf26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
              <div className="text-div">
                <h1>Experience</h1>
                <h1>Experience</h1>
              </div>
              <img src="https://images.unsplash.com/photo-1692367764006-f940d670a235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
          </div>
          <div className="page5">
            <h2>Mentions Clients</h2>
            <div
              className="box"
              data-image="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            >
              <h3>Verizon</h3>
              <h4>2021</h4>
            </div>
            <div
              className="box"
              data-image="https://images.unsplash.com/photo-1692159563214-273be54dcdd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            >
              <h3>Verizon</h3>
              <h4>2021</h4>
            </div>
            <div
              className="box"
              data-image="https://images.unsplash.com/photo-1692485296299-7f57c027d491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            >
              <h3>Verizon</h3>
              <h4>2021</h4>
            </div>
            <div
              className="box"
              data-image="https://images.unsplash.com/photo-1692647452435-46e87dd58a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            >
              <h3>Verizon</h3>
              <h4>2021</h4>
            </div>
            <div
              className="box"
              data-image="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            >
              <h3>Verizon</h3>
              <h4>2021</h4>
            </div>
          </div>
          <footer></footer>
        </div>
      </Wrap>
    </>
  );
};

export default App;
