import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Wrap } from "./style";

function App() {
  const archiveRef = useRef<HTMLElement>(null);
  const figureRefs = useRef<(HTMLElement | null)[]>([]);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);
  const circleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const settings = {
      center: window.innerWidth / 2,
      scaleFactor: 1.5,
      lerpFactor: 0.5,
    };

    const figureScales = new Map();

    const initLenis = () => {
      if (!archiveRef.current) return;

      const lenis = new Lenis({
        orientation: "horizontal",
        content: archiveRef.current,
        lerp: 0.05,
        smoothWheel: true,
      });

      let rafId = 0;

      const handleLenisScroll = () => {
        figureRefs.current.forEach((figure, index) => {
          if (!figure) return;

          const image = imageRefs.current[index];
          if (!image) return;

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

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.scrollTo(0);

      return { lenis, rafId };
    };

    const utilityCircle = () => {
      const radius = 35;
      const totalFigures = circleRefs.current.length;

      circleRefs.current.forEach((figure, index) => {
        if (!figure) return;

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

    const lenisInstance = initLenis();
    if (lenisInstance) {
      const { lenis, rafId } = lenisInstance;
      utilityCircle();

      return () => {
        window.removeEventListener("resize", handleResize);
        if (rafId) cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrap>
      <section ref={archiveRef} className="archive">
        <div className="archive_slider">
          {[...Array(8)].map((_, index) => (
            <figure
              className="archive_slider_figure"
              key={index}
              ref={(el) => (figureRefs.current[index] = el)}
            >
              <img
                className="archive_slider_image"
                src={`/${String(index).padStart(2, "0")}.jpeg`}
                alt=""
                ref={(el) => (imageRefs.current[index] = el)}
              />
            </figure>
          ))}
        </div>
      </section>
      <section className="circle">
        <div className="circle_container">
          {[...Array(8)].map((_, index) => (
            <figure
              className="circle_figure"
              key={index}
              ref={(el) => (circleRefs.current[index] = el)}
            >
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
