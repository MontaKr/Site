import React, { useEffect, useState } from 'react'
import { GlobalStyle, Wrap } from './styles'

const App = () => {

  const itemArray = [{img : "../asset/img1.png", alt : "imageOne", word : "Moonlight"},{img : "../asset/img2.jpg", alt : "imageTwo" , word : "Foreset"},{img : "../asset/img3.jpg", alt : "imageThree", word : "Sunset"},{img : "../asset/img4.jpg", alt : "imageFour", word : "Dust"},{img : "../asset/img5.jpg", alt : "imageFive", word : "New World"}]

  const [itemIndex, setItemIndex] = useState(0)

  // prevButton Function
  const handlePrev = () => {
    setItemIndex(prev => (prev - 1 + itemArray.length) % itemArray.length )
  }

  // nextButton Function
  const handleNext = () => {
    setItemIndex(prev => (prev + 1) % itemArray.length )
  }

  // thunbnail Click Function
  const clickThumbnail = (index) => {
    setItemIndex(index)
  }

  // auto Run
  useEffect(()=>{
    const autoRun = setTimeout(() => {
      setItemIndex(prev => (prev + 1) % itemArray.length )
    }, 3000);

    return ()=>clearTimeout(autoRun)
  },[itemIndex])

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <header>
          <div className="logo">Lundev</div>
          <div className="menu">
            <li>Home</li>
            <li>Blog</li>
            <li>Info</li>
          </div>
          <div className="search">
            <svg 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24">
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-width="2" 
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
        </header>
        <div className="slider">
          <div className="list">
            {
              itemArray.map((item, index)=> {
                return (
                  <div className={`item ${itemIndex === index ? "active" : ""}`}>
                    <img src={item.img} alt={item.alt} />
                    <div className="content">
                      <p>design</p>
                      <h2>Slider{index + 1}</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sed? </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="arrows">
            <button id="prev" onClick={handlePrev}>&lt;</button>
            <button id="next" onClick={handleNext}>&gt;</button>
          </div>
          <div className="thumbnail">
            {
              itemArray.map((item, index)=>{
                return (
                  <div 
                    className={`item ${itemIndex === index ? "active" : ""}`} 
                    onClick={()=>clickThumbnail(index)}>
                    <img src={item.img} alt={item.alt} />
                    <div className="content">
                      {item.word}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default App