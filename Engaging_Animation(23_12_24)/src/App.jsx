// import React, { useEffect, useRef, useState } from 'react'
// import { GlobalStyle, Wrap, Anchor, Section } from './styles'
// import gsap from "gsap";
// import img1 from "../asset/1.jpg"
// import img2 from "../asset/2.jpg"
// import img3 from "../asset/3.jpg"
// import img4 from "../asset/4.jpg"
// import img5 from "../asset/5.jpg"
// const App = () => {

//   const navBtn = [
//     {color : "#e57373",id : "first", text : "One", title : "City Skyline" , img : img1}, 
//     {color : "#81c784", id : "second",text : "Two", title : "Flowers of friendship", img : img2}, 
//     {color : "#64b5f6", id : "third",text : "Three", title : "Waves in the ocean", img : img3}, 
//     {color : "#ffb74d", id : "fourth",text : "Four", title : "New York City", img : img4}, 
//     {color : "#ba68c8", id : "fifth",text : "Five", title : "Dark side of the moon", img : img5}
//   ]

//   // Accessing DOM
//   const sectionRefs = useRef([])
//   const outerRefs = useRef([])
//   const innerRefs = useRef([])
//   const imageRefs = useRef([])
//   const headRefs = useRef([])

//   const handleSectionRefs = (el) => {
//     if(el && !sectionRefs.current.includes(el)) {
//       sectionRefs.current.push(el)
//     }
//   }

//   const handleOuterRefs = (el) => {
//     if(el && !outerRefs.current.includes(el)) {
//       outerRefs.current.push(el)
//     }
//   }

//   const handleInnerRefs = (el) => {
//     if(el && !innerRefs.current.includes(el)) {
//       innerRefs.current.push(el)
//     }
//   }

//   const handleImageRefs = (el) => {
//     if(el && !imageRefs.current.includes(el)) {
//       imageRefs.current.push(el)
//     }
//   }

//   const handleHeadRefs = (el) => {
//     if(el && !headRefs.current.includes(el)) {
//       headRefs.current.push(el)
//     }
//   }  

//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [animating, setAnimating] = useState(false);


//   const wrap = (index, max) => (index + max) % max;


//   useEffect(()=>{
//     gsap.set(outerRefs.current, {
//       yPercent: 100
//     });

//     gsap.set(innerRefs.current, {
//       yPercent: -100
//     });

//     const goToSection = (index,direction) => {
//       index = wrap(index, sectionRefs.current.length);
  
//       setAnimating(true);
  
//       let fromTop = direction === -1;
//       let dFactor = fromTop ? -1 : 1;
  
//       let tl = gsap.timeline({
//         defaults: { duration: 1.25, ease: "power1.inOut" },
//         onComplete: () => (setAnimating(false))
//       });
  
//       if (currentIndex >= 0) {
//         gsap.set(sectionRefs.current[currentIndex], {
//           zIndex: 0
//         });
  
//         tl.to(imageRefs.current[currentIndex], {
//           yPercent: -15 * dFactor
//         }).set(sectionRefs.current[currentIndex], {
//           autoAlpha: 0
//         });
//       }
  
//       gsap.set(sectionRefs.current[index], {
//         autoAlpha: 1,
//         zIndex: 1
//       });
  
//       tl.fromTo(
//         [outerRefs.current[index], innerRefs.current[index]],
//         { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
//         { yPercent: 0 },
//         0
//       )
//         .fromTo(imageRefs.current[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
//         .fromTo(
//           headRefs.current[index],
//           { autoAlpha: 0, yPercent: 150 * dFactor },
//           {
//             autoAlpha: 1,
//             yPercent: 0,
//             duration: 1,
//             ease: "power2",
//             stagger: { each: 0.02, from: "random" }
//           },
//           0.2
//         );
  
//         setCurrentIndex(index)
//     }

//     const navigateSectionBy = (id) => {
//       let targetIndex = Array.from(sectionRefs.current).findIndex(
//         (section) => section.id === id
//       );
    
//       if (targetIndex !== -1 && targetIndex !== currentIndex) {
//         let direction = targetIndex > currentIndex ? 1 : -1;
//         goToSection(targetIndex, direction);
//       }
//     };

//     let lastTap = 0;

//     const handleWheelEvent = () => {
//       if (event.deltaY < 0 && !animating) {
//         goToSection(currentIndex - 1, -1);
//       } else if (event.deltaY > 0 && !animating) {
//         goToSection(currentIndex + 1, 1);
//       }
//     }

//     const handleTouchEnd = (event) => {
//       let currentTime = new Date().getTime();
//       let tapLength = currentTime - lastTap;
  
//       if (tapLength < 500 && tapLength > 0) {
//         goToSection(currentIndex + 1, 1);
//         event.preventDefault();
//       }
  
//       lastTap = currentTime;
//     }

//     document.querySelectorAll("nav a").forEach((a) => {
//       a.addEventListener("click", (e) => {
//         e.preventDefault();
//         let targetId = e.currentTarget.getAttribute("href").slice(1);
//         navigateSectionBy(targetId);
//       });
//     });

//     goToSection(0, 1);


//     window.addEventListener('wheel', handleWheelEvent);
//     document.addEventListener('touchend', handleTouchEnd);

//     // CleanUp
//     return () => {
//       window.removeEventListener('wheel', handleWheelEvent);
//       document.removeEventListener('touchend', handleTouchEnd);
//     };
//   },[])

//   return (
//     <>
//       <GlobalStyle/>
//       <Wrap>
//         <header className="header">
//           <nav>
//             {
//               navBtn.map((val,idx)=>{
//                 return (
//                   <Anchor href={`#${val.id}`} key={idx} color={val.color}>{val.text}</Anchor>
//                 )
//               })
//             }
//           </nav>
//         </header>
//         {
//           navBtn.map((val,idx)=>{
//             return(
//               <Section 
//                 ref={handleSectionRefs} 
//                 id={val.id} 
//                 className={`section ${val.id}`} 
//                 img={val.img}>
//                 <div ref={handleOuterRefs} className="wrapper-outer">
//                   <div ref={handleInnerRefs} className="wrapper-inner">
//                     <div ref={handleImageRefs} className="background">
//                       <h2 ref={handleHeadRefs} className="section-title">{val.title}</h2>
//                     </div>
//                   </div>
//                 </div>
//               </Section>
//             )
//           })
//         }
//       </Wrap>
//     </>
//   )
// }

// export default App

import React, { useEffect, useRef } from 'react';
import { GlobalStyle, Wrap, Anchor, Section } from './styles'
import gsap from "gsap";
import img1 from "../asset/1.jpg"
import img2 from "../asset/2.jpg"
import img3 from "../asset/3.jpg"
import img4 from "../asset/4.jpg"
import img5 from "../asset/5.jpg"


const App = () => {

  const navBtn = [
    {color : "#e57373",id : "first", text : "One", title : "City Skyline" , img : img1}, 
    {color : "#81c784", id : "second",text : "Two", title : "Flowers of friendship", img : img2}, 
    {color : "#64b5f6", id : "third",text : "Three", title : "Waves in the ocean", img : img3}, 
    {color : "#ffb74d", id : "fourth",text : "Four", title : "New York City", img : img4}, 
    {color : "#ba68c8", id : "fifth",text : "Five", title : "Dark side of the moon", img : img5}
  ]

  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);
  const headingRefs = useRef([]);
  const outerWrapperRefs = useRef([]);
  const innerWrapperRefs = useRef([]);

  let currentIndex = -1;
  let animating = false;

  const wrap = (index, max) => (index + max) % max;

  useEffect(()=>{
  gsap.set(outerWrapperRefs.current, { yPercent: 100 });
  gsap.set(innerWrapperRefs.current, { yPercent: -100 });

  
  const gotoSection = (index, direction) => {
    if (animating) return;
    animating = true;
    index = wrap(index, sectionRefs.current.length);

    let fromTop = direction === -1;
    let dFactor = fromTop ? -1 : 1;

    
    let tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => (animating = false)
    });

    if (currentIndex >= 0) {
      tl.to(imageRefs.current[currentIndex], {
        yPercent: -15 * dFactor
      })
      .set(sectionRefs.current[currentIndex], {
        autoAlpha: 0
      });
    }

    tl.set(sectionRefs.current[index], {
      autoAlpha: 1,
      zIndex: 1
    })
    .fromTo(
      [outerWrapperRefs.current[index], innerWrapperRefs.current[index]],
      { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    )
    .fromTo(
      imageRefs.current[index],
      { yPercent: 15 * dFactor },
      { yPercent: 0 },
      0
    )
    .fromTo(
      headingRefs.current[index],
      { autoAlpha: 0, yPercent: 150 * dFactor },
      { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power2" },
      0.2
    );

    currentIndex = index;
  };

  const handleClick = (index) => {
    gotoSection(index, index > currentIndex ? 1 : -1);
  };


  gotoSection(0, 1);
  },[])

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <header className="header">
          <nav>
            {
              navBtn.map((val,idx)=>{
                return (
                  <Anchor 
                  href={`#${val.id}`} 
                  key={idx} 
                  color={val.color}
                  onClick={() => handleClick(idx)}>{val.text}</Anchor>
                )
              })
            }
          </nav>
        </header>
        {
          navBtn.map((val,idx)=>{
            return(
              <Section 
                id={val.id} 
                className={`section ${val.id}`} 
                img={val.img}
                ref={el => sectionRefs.current[idx] = el}
                >
                <div  
                className="wrapper-outer" 
                ref={el => outerWrapperRefs.current[idx] = el}>
                  <div 
                    className="wrapper-inner" 
                    ref={el => innerWrapperRefs.current[idx] = el}>
                    <div  className="background">
                      <h2 
                        className="section-title" 
                        ref={el => headingRefs.current[idx] = el}>
                        {val.title}</h2>
                    </div>
                  </div>
                </div>
              </Section>
            )
          })
        }
      </Wrap>
    </>
  )
}

export default App