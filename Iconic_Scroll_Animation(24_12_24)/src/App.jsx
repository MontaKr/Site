import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wrap } from "./styles";

function App() {
  const galleryImages = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [1, 2, 3],
  ];

  const galleryWrapperRef = useRef(null);
  const sideColsRef = useRef([]);
  const mainImgRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // ScrollTrigger animation setup
    ScrollTrigger.create({
      trigger: ".ws",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      markers: true,
      onUpdate: (self) => {
        if (!galleryWrapperRef.current) return;

        const screenWidth = window.innerWidth;
        const maxScale = screenWidth < 900 ? 4 : 2.65;

        const scale = 1 + self.progress * maxScale;
        const yTranslate = self.progress * 300;
        const mainImgScale = 2 - self.progress * 0.85;

        galleryWrapperRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;

        sideColsRef.current.forEach((col) => {
          if (col) col.style.transform = `translateY(${yTranslate}px)`;
        });

        if (mainImgRef.current) {
          mainImgRef.current.style.transform = `scale(${mainImgScale})`;
        }
      },
    });

    // Lenis와 GSAP ScrollTrigger 연동
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker 설정
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 컴포넌트 언마운트 시 정리
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Wrap>
      <section className="sticky">
        <div ref={galleryWrapperRef} className="gallery-wrapper">
          {galleryImages.map((column, colIdx) => (
            <div
              key={colIdx}
              ref={(el) => {
                if (colIdx !== 2) {
                  sideColsRef.current[colIdx] = el;
                }
              }}
              className={`col ${colIdx === 2 ? "main" : "side"}`}
            >
              {column.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  className={`img ${
                    colIdx === 2 && imgIdx === 1 ? "main" : "side"
                  }`}
                >
                  <img
                    src={`../public/img${img}.jpg`}
                    alt="img"
                    ref={colIdx === 2 && imgIdx === 1 ? mainImgRef : null}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <section className="hero">
          <div className="hero-img">
            <img src="../public/hero.jpg" alt="hero" />
          </div>
          <div className="header">
            <h1>serene</h1>
            <h1>drift</h1>
          </div>
        </section>
        <section className="intro">
          <div className="tagline">
            <p>Inspired visuals for creators of calm and beauty</p>
          </div>
          <div className="divider" />
          <div className="intro-header">
            <h1>elevating</h1>
            <h1>senenity</h1>
          </div>
        </section>
        <section className="ws" />
        <section className="outro">
          <h1>crafted calm</h1>
          <h1>and beauty</h1>
        </section>
        <section className="footer">
          <div className="footer-bg">
            <img src="../public/footer.jpg" alt="footer" />
          </div>
        </section>
      </div>
    </Wrap>
  );
}

export default App;
