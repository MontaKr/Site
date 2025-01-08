import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Wrap } from "./style";

function App() {
  const archiveRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const settings = {
      center: window.innerWidth / 2,
      scaleFactor: 1.5,
      lerpFactor: 0.5,
    };

    const figureScales = new Map();

    const initLenis = () => {
      const lenis = new Lenis({
        orientation: "horizontal",
        content: archiveRef.current,
        lerp: 0.05,
        smoothWheel: true,
      });

      const handleLenisScroll = () => {
        const figures = document.querySelectorAll(".archive_slider_figure");
        figures.forEach((figure) => {
          const image = figure.querySelector(".archive_slider_image");
          const figureRect = figure.getBoundingClientRect();
          const distanceFromCenter = Math.abs(
            figureRect.left + figureRect.width / 2 - settings.center
          );
          const targetScale =
            settings.scaleFactor -
            ((settings.center - distanceFromCenter) / settings.center) *
              (settings.scaleFactor - 1);
          const clampedScale = Math.max(1, targetScale);
          const previousScale = figureScales.get(figure) || 1;
          const smoothedScale = lerp(previousScale, clampedScale, 0.1);

          if (image) {
            (image as HTMLElement).style.transform = `scale(${smoothedScale})`;
          }
          figureScales.set(figure, smoothedScale);
        });
      };

      lenis.on("scroll", handleLenisScroll);

      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.scrollTo(0, 0);

      return { lenis, rafId };
    };

    const utilityCircle = () => {
      const figures = document.querySelectorAll(".circle_figure");
      const radius = 35;
      const totalFigures = figures.length;

      figures.forEach((figure, index) => {
        const angle = (index / totalFigures) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const figureElement = figure as HTMLElement;
        figureElement.style.position = "absolute";
        figureElement.style.left = `${50 + x}%`;
        figureElement.style.top = `${50 + y}%`;
        figureElement.style.transform = "translate(-50%, -50%)";
      });
    };

    const handleResize = () => {
      settings.center = window.innerWidth / 2;
    };

    window.addEventListener("resize", handleResize);
    const { lenis, rafId } = initLenis();
    utilityCircle();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Wrap>
      <section ref={archiveRef} className="archive">
        <div className="archive_slider">
          {[...Array(9)].map((_, index) => (
            <figure className="archive_slider_figure" key={index}>
              <img
                className="archive_slider_image"
                src={`/${String(index).padStart(2, "0")}.jpeg`}
                alt=""
              />
            </figure>
          ))}
        </div>
      </section>
      <section className="circle">
        <div className="circle_container">
          {[...Array(9)].map((_, index) => (
            <figure className="archive_slider_figure" key={index}>
              <img
                className="circle_figure"
                src={`/${String(index).padStart(2, "0")}.jpeg`}
                alt=""
              />
            </figure>
          ))}
        </div>
      </section>
    </Wrap>
  );
}

function lerp(start: number, end: number, duration: number) {
  return start + (end - start) * duration;
}

export default App;
