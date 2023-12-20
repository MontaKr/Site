import { useEffect, useRef} from 'react'
import { gsap, ScrollTrigger } from 'gsap/all';
import Lenis from '@studio-freight/lenis'
import { Gallery, GlobalStyle, Hero, Nav, Wrap } from './styles'

const App = () => {
  const galleryRowsRef = useRef([]);
  const imagesRef = useRef([]);

  const heroRef = useRef(null);

  let lenis = useRef(null);

  // Assign Refs to Images
  const handleImageRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  // Image Ref CleanUp
  useEffect(() => {
    return () => {
      imagesRef.current = [];
    };
  }, []);

  // Run Functions
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initLenis();
  }, []);

  // Lenis Setup
  const initLenis = () => {
    lenis.current = new Lenis({
      smoothWheel: true,
      smoothTouch: true
    });
  
    lenis.current.on("scroll", ScrollTrigger.update);
  
    gsap.ticker.add((time) => {
      lenis.current.raf(time * 1000);
    });
  
    gsap.ticker.lagSmoothing(0);
  
    lenis.current.scrollTo(0, { immediate: true });
    initScrollTrigger();
  };

  // Scroll Animation
  const initScrollTrigger = () => {  
    imagesRef.current.forEach((image,index)=>{
      gsap.set(image, { scale: 1.2 });
  
      const imageRect = image.getBoundingClientRect();
      const heightDifference =
        imageRect.height - image.parentElement.offsetHeight;
  
      gsap.fromTo(
        image,
        {
          y: -heightDifference
        },
        {
          scrollTrigger: {
            trigger: image,
            start: "top center+=30%",
            end: "bottom+=10% top",
            scrub: true,
          },
          y: heightDifference,
          ease: "none"
        }
      );
  
      const tlHero = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "center top",
          scrub: true
        }
      });
  
      tlHero.to(heroRef.current, {
        autoAlpha: 0
      });
    })
  };

  // Nav Animation 1
  const scrollToElement = (index) => (e) => {
    e.preventDefault();
  
    const element = galleryRowsRef.current[index];
    if (element && lenis.current) {
      lenis.current.scrollTo(element, {
        offset: -20,
        lerp: 0.1
      });
    }
  };
  
  // Nav Animation 2
  const handleGoToTopClick = (e) => {
    e.preventDefault();
  
    if (lenis.current) {
      lenis.current.scrollTo(0, { lerp: 0.05 });
    }
  };


  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <Nav>
          <div className="nav_wrapper">
            <div className="nav_item">
              <span>
                (WADM)
              </span>
            </div>
            <div className="nav_item">
              <a href="/" onClick={scrollToElement(0)} className='nav_item_anchor'>
                (2021)
              </a>
              <a href="/" onClick={scrollToElement(1)} className='nav_item_anchor'>
                (Selected)
              </a>
              <a href="/" onClick={scrollToElement(2)} className='nav_item_anchor'>
                (2022)
              </a>
              <a href="/" onClick={scrollToElement(3)} className='nav_item_anchor'>
                (2023)
              </a>
            </div>
          </div>
        </Nav>
        <Hero ref={heroRef}>
          <div className="hero_wrapper">
            <span>(2021)</span>
            <div className="hero_title">
              <h1>Featured</h1>
              <h1>Works</h1>
            </div>
            <span>(2023)</span>
          </div>
        </Hero>
        <Gallery>
          <div className="gallery_wrapper">
            <div className="gallery_row --flex" ref={el => galleryRowsRef.current[0] = el}>
              <div className="gallery_row_media">
                <div className="gallery_row_media_info">
                  <h3>Artemide</h3>
                </div>
                <figure className='gallery_row_media_figure'>
                  <img src="../asset/1.png" alt="bird" className='gallery_row_media_image' ref={handleImageRef}/>
                </figure>
              </div>
              <div className="gallery_row_media">
                <div className="gallery_row_media_info">
                  <h3>TOS Museum</h3>
                </div>
                <figure className='gallery_row_media_figure'>
                  <img src="../asset/2.png" alt="person" className='gallery_row_media_image' ref={handleImageRef}/>
                </figure>
              </div>
            </div>
            <div className="gallery_row" ref={el => galleryRowsRef.current[1] = el}>
              <div className="gallery_row_item">
                <h2 className='gallery_row_item_title'>Selected Case Studies (2.0)</h2>
                <p className="gallery_row_item_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis optio delectus quam laborum nihil veritatis
                voluptatibus nulla corporis consequatur ad qui, sit perspiciatis
                dolore, ab rem sint architecto omnis quaerat?
                </p>
              </div>
              <div className="gallery_row_item">
                <p className="gallery_row_item_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis optio delectus quam laborum nihil veritatis
                  voluptatibus nulla corporis consequatur ad qui, sit perspiciatis
                  dolore, ab rem sint architecto omnis quaerat?
                </p>
                <h3 className="gallery_row_item_title">(Exploration)</h3>
              </div>
            </div>
            <div className="gallery_row --flex" ref={el => galleryRowsRef.current[2] = el}>
              <div className="gallery_row_media">
                <div className="gallery_row_media_info">
                  <h3>Urbano Film</h3>
                </div>
                <figure className="gallery_row_media_figure">
                  <img
                    src="../asset/3.png"
                    alt="mountain"
                    className="gallery_row_media_image"
                    ref={handleImageRef}
                  />
                </figure>
              </div>
            </div>
            <div className="gallery_row --flex" ref={el => galleryRowsRef.current[3] = el}>
              <div className="gallery_row_media">
                <div className="gallery_row_media_info">
                  <h3>Dorian Leen</h3>
                </div>
                <figure className="gallery_row_media_figure">
                  <img
                    src="../asset/4.png"
                    alt="blue chair"
                    className="gallery_row_media_image"
                    ref={handleImageRef}
                  />
                </figure>
              </div>
              <div className="gallery_row_media">
                <div className="gallery_row_media_info">
                  <h3>Pallazo Mura</h3>
                </div>
                <figure className="gallery_row_media_figure">
                  <img
                    src="../asset/5.png"
                    alt="red chair"
                    className="gallery_row_media_image"
                    ref={handleImageRef}
                  />
                </figure>
              </div>
            </div>
            <div className="gallery_row">
              <a onClick={handleGoToTopClick} className='--top' href="/">
                <h3 className="gallery_row_item_title">(TOP)</h3>
              </a>
            </div>
          </div>
        </Gallery>
      </Wrap>
    </>
  )
}

export default App