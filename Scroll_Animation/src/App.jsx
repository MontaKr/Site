import React, { useEffect, useState } from "react";
import { GlobalStyle, TopSection, Wrap, Section, Img } from "./styles";
import { useInView } from "react-intersection-observer";
import img_1 from "./img-1.png";
import img_2 from "./img-2.png";
import img_3 from "./img-3.png";

const App = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [visibleImage, setVisibleImage] = useState("img-1");

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    // Step 2
    if (inView1) setVisibleImage("img-1");
    if (inView2) setVisibleImage("img-2");
    if (inView3) setVisibleImage("img-3");
  }, [inView1, inView2, inView3]);

  // calculating scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const percentOfScreenHeightScrolled = window.scrollY / window.innerHeight;
      // preventing overscrolling value
      setScrollValue(Math.min(percentOfScreenHeightScrolled * 100, 100));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle scrollValue={scrollValue} />
      <Wrap>
        <div className="imgs">
          <Img
            className="top-section-img"
            id="img-1"
            src={img_1}
            show={visibleImage === "img-1"}
          />
          <Img id="img-2" src={img_2} show={visibleImage === "img-2"} />
          <Img id="img-3" src={img_3} show={visibleImage === "img-3"} />
        </div>
        <TopSection>
          <div className="left">
            <h1>Build Better Backends</h1>
            <p>
              The only platform that gives AI the ability to autonomously build
              web services.
            </p>
          </div>
          <div className="right" />
        </TopSection>
        <Section ref={ref1}>
          <h1>Completely Visual</h1>
          <p>Never touch the command line, from provision to production.</p>
        </Section>
        <Section ref={ref2}>
          <h1>Full Stack</h1>
          <p>
            Never manage infrastructure again. One click gets you: a database,
            APIs, deployments, hosting, etc.
          </p>
        </Section>
        <Section ref={ref3}>
          <h1>Launch Faster</h1>
          <p>Logical can get systems to market in minutes instead of weeks.</p>
        </Section>
      </Wrap>
    </>
  );
};

export default App;
