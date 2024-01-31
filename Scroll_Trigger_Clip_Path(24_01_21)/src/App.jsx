import React, { useEffect, useRef,useState } from 'react'
import { GlobalStyle, Wrap } from './styles'
import {gsap, ScrollTrigger} from "gsap/all"
import Lenis from "@studio-freight/lenis";

const App = () => {

  const contentItems = [
    { type: 'p', content: "エステ" },
    { type: 'h2', content: "The ethos of" },
    { type: 'p', content: "Japanese tea culture is deeply rooted in the concept of wabi-sabi" },
    { type: 'p', content: "which celebrates the beauty of imperfection, impermanence, and simplicity." },
    { type: 'p', content: "This ethos extends to the preparation and enjoyment of Japanese tea," },
    { type: 'p', content: "emphasizing mindfulness, ritual, and the appreciation of the present moment." }
  ];

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Accessing DOM
  const textRef = useRef([]);
  const handleTargetRef= (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };
  const imageRef = useRef([]);
  const introImageRef = useRef(null)

  // Checking Ref loaded
  const [isRefsReady, setIsRefsReady] = useState(false);

  useEffect(() => {
    const isReady = textRef.current.length === contentItems.length &&
                    imageRef.current.length === 2 &&
                    introImageRef.current != null;
  
    setIsRefsReady(isReady);
  }, [contentItems]); 
  


  useEffect(()=>{
    let lenis

    console.log("isRefsReady :",isRefsReady)

    // Check Uploading DOM Done
    if (isRefsReady) {

      // Lenis Setting
      lenis = new Lenis({
        lerp: 0.1,
        smoothwheel: true
      });

      // Integrate Lenis & GSAP
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // GSAP Setting
      gsap.set(textRef.current, {
        yPercent: 100,
        autoAlpha: 0,
        rotate: "5deg"
      });
  
      gsap.set(imageRef.current, {
        scale: 0
      });

      // TimeLine Setting
      const tl = gsap.timeline({
        defaults: {
          stagger: 0.08,
          ease: "power1.inOut"
        },
        scrollTrigger: {
          trigger: ".app",
          start: "top top",
          end: "+=8000 bottom",
          scrub: 1.2,
          pin: true,
          markers: true
        }
      });

      //GSAP Animation
      tl.to(introImageRef.current, {
        scale: 0.8,
        transformOrigin: "center bottom"
      }).to(
        ".media",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        0
      );

      tl.to(
        textRef.current,
        {
          yPercent: 0,
          autoAlpha: "1",
          rotate: "0"
        },
        0.2
      )
        .to(textRef.current, {
          yPercent: -100,
          autoAlpha: "0"
        })
        .to(
          imageRef.current,
          {
            scale: 1
          },
          0.5
        )
        .to(
          imageRef.current,
          {
            scale: 0
          },
          1.5
        );
      }

    // CleanUp
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };

  },[isRefsReady])

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <div className="app">
          <div className="chapter">
            <section className="intro">
              <div className="intro__wrapper">
                <div className="intro__title">
                  <div className="intro__title--content">
                    <span>オリジンズ</span>
                    <p>&#8212;</p>
                    <h1>True Origins of Tea</h1>
                  </div>
                  <div className="intro__title--info">
                    <span>Chapter</span>
                    <span>One</span>
                  </div>
                </div>
                <div className="intro__scroll">
                  <div className="intro__scroll intro__scroll--text">
                    <span>&darr;</span>
                    <span>&darr;</span>
                    <span>&darr;</span>
                  </div>
                  <div className="intro__scroll intro__scroll--text">
                    <span>&darr;</span>
                    <span>&darr;</span>
                    <span>&darr;</span>
                  </div>
                </div>
                <div className="intro__media">
                  <img 
                  className='intro__media--image'
                  ref={introImageRef}
                  src="./asset/picture/1.jpg" 
                  alt="teaImage" />
                </div>
              </div>
            </section>

            <section className="content">
              <div className="content__wrapper">
                <div className="content__item">
                  {
                    contentItems.map((item, index)=>{
                      return(
                        <div className="content__item-row" key={index}>
                          {item.type === 'p' && <p 
                          ref={handleTargetRef}className="content__item-row-text">{item.content}</p>}
                          {item.type === 'h2' && <h2 
                          ref={handleTargetRef}className="content__item-row-text">{item.content}</h2>}
                        </div>
                      )
                    })
                  }
                </div>
                <div className="content__media">
                  <figure className="content__media-figure">
                    <img 
                    className='content__media-image' 
                    ref={el => imageRef.current[0] = el}
                    src="../asset/picture/2.jpg"
                    alt="teaImage" />
                  </figure>
                  <figure className="content__media-figure">
                    <img 
                    className='content__media-image'
                    ref={el => imageRef.current[1] = el} 
                    src="../asset/picture/3.jpg" 
                    alt="teaImage" />
                  </figure>
                </div>
              </div>
            </section>

            <section className="next">
              <div className="next__wrapper">
                <div className="next__item">
                  <p className="next__item-title">Next Chapter</p>
                  <p>&#8212;</p>
                  <p className="next__item-title">Beyond Taste</p>
                  <p className="next__item-title">The significance of Japanese Tea</p>
                </div>
              </div>
            </section>

            <section className="media">
              <figure className="media__figure">
                <img className='media__image' src="../asset/picture/4.jpg" alt="teaImage" />
              </figure>
            </section>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default App

