import React, { useEffect } from 'react'
import { GlobalStyle, Wrap } from './styles'
import ScrollReveal from 'scrollreveal'
import 'boxicons';

const App = () => {

  // SCROLL ANIMATION
  useEffect(()=>{
    const sr = ScrollReveal({
      origin : "left",
      distance : "20px",
      duration : 2000,
      reset : true,
    })

    sr.reveal(`.home__data, .about__data, .about__card, 
    .characters__content, .monsters__data, .monsters__img, 
    .contact__data, .contact__button, .footer__content`, {
      interval : 200
    });
  },[])

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        {/* header */}
        <header className='header' id='header'>
          <nav className='nav container'>
            <a href="#" className='nav__logo'>
              <img src="../asset/img/developing.PNG" alt="" />
            </a>

            <div className="nav__menu" id='nav-menu'>
              <ul className="nav__list">
                <li className="nav__item">
                  <a className='nav__link active-link' href="#home">Home</a>
                </li>
                <li className="nav__item">
                  <a className='nav__link' href="#about">About Us</a>
                </li>
                <li className="nav__item">
                  <a className='nav__link' href="#characters">characters</a>
                </li>
                <li className="nav__item">
                  <a className='nav__link' href="#contact">Contact us</a>
                </li>
                <li className="nav__item">
                  <a className='nav__link button' href="#contact">Log in</a>
                </li>
              </ul>
            </div>

            <div className="nav__toggle">
              <box-icon name='menu'></box-icon>
            </div>
          </nav>
        </header>

        <main>
          {/* HOME */}
          <section className='home' id='home'>
            <div className="home__container container">
              <div className="home__data">
                <h1 className="home__title">
                  Choose your own <br/> adventure monster
                </h1>
                <h3 className='home__subtitle'>
                  Lorem ipsum, dolor sit amet consectetur <br/>
                  adipisicing elit. Dicta similique laborum <br/>
                </h3>
                <a href="#" className='button'>learn more</a>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section className='section container' id='about'>
            <div className="about__container grid">
              <div className="about__data">
                <span className="section-subtitle">Discover</span>
                <h2 className='home__title'>
                  Exclusive <br/> approach
                </h2>
                <p className="about__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima facere, fuga quibusdam ipsam numquam minus laboriosam porro labore magnam!
                </p>
                <a className='button' href="#">learn more</a>
              </div>
              <div className="about__cards grid">
                <div className="about__card">
                  <img 
                    className='about__img'
                    src="../asset/img/illustrations.PNG" alt="illustration" />
                  <a className='nav__link' href="#">illustrations</a>
                </div>
                <div className="about__card">
                  <img 
                    className='about__img'
                    src="../asset/img/developing.PNG" alt="developing" />
                  <a className='nav__link' href="#">developing</a>
                </div>
                <div className="about__card">
                  <img 
                    className='about__img'
                    src="../asset/img/design.PNG" 
                    alt="design" />
                  <a className='nav__link' href="#">design</a>
                </div>
                <div className="about__card">
                  <img 
                    className='about__img'
                    src="../asset/img/creative.PNG" 
                    alt="creative" />
                  <a className='nav__link' href="#">creative</a>
                </div>
              </div>
            </div>
          </section>

          {/* MOSTERS */}
          <section className='section container-full'>
            <div className="monsters__container grid">
              <img 
                className='monsters__img'
                src="../asset/img/monster-bg.PNG" 
                alt="monster" />
              <div className="monsters__data">
                <span className="section-subtitle">Monsters</span>
                <h2 className="home__title">
                  More than <br/> characters
                </h2>
                <p className="monsters__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, corporis. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, facilis?
                </p>
                <a className='button' href="#">learn more</a>
              </div>
            </div>
          </section>

          {/* CHARACTERS */}
          <section className='section container' id='characters'>
            <span className="section-subtitle">characters</span>
            <h2 className="home__title">
              Unique characters and backgrounds
            </h2>
            <div className="characters__container grid">
              <div className="characters__content c-1">
                <img 
                  className='characters__img'
                  src="../asset/img/zippo.gif" 
                  alt="zippo" />
                <h3 className='characters__name'>Zippo</h3>
                <span className="characters__detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem nihil sequi illum quas! Labore?
                </span>
                <a className='nav__link' href="#">Read more</a>
              </div>

              <div className="characters__content c-2">
                <img 
                  className='characters__img'
                  src="../asset/img/tokko.gif" 
                  alt="tokko" />
                <h3 className='characters__name'>Tokko</h3>
                <span className="characters__detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem nihil sequi illum quas! Labore?
                </span>
                <a className='nav__link' href="#">Read more</a>
              </div>

              <div className="characters__content c-3">
                <img 
                  className='characters__img'
                  src="../asset/img/ellize.gif" 
                  alt="ellize" />
                <h3 className='characters__name'>Ellize</h3>
                <span className="characters__detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem nihil sequi illum quas! Labore?
                </span>
                <a className='nav__link' href="#">Read more</a>
              </div>
            </div>
          </section>

          {/* CONTACT US */}
          <section className="section container" id='contact'>
            <div className="contact__container grid">
              <div className="contact__data">
                <div className="section-subtitle">Let's talk</div>
                <h2 className='home__title'>Contact us</h2>
                <p className='contact__description'>
                  If you want to more details about our blog, contact us and we will go back to you quickly, with our 24/7 chat service.
                </p>
              </div>
              <div className="contact__button">
                <a className='button' href="#">Contact us now</a>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className='footer container'>
          <div className="footer__container grid">
            <div className="footer__content">
              <a href="#">
                <img src="../asset/img/developing.PNG" alt="developing" />
              </a>
              <div>
                <a href="#" className="footer__social">
                  <box-icon style={{fill : "#58548d"}} type='logo' name='facebook'></box-icon>
                </a>
                <a class="footer__social" href="#">
                  <box-icon style={{fill : "#58548d"}} name='instagram' type='logo' ></box-icon>
                </a>
                <a class="footer__social" href="#">
                  <box-icon style={{fill : "#58548d"}} name='twitter' type='logo' ></box-icon>
                </a>
              </div>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Services</h3>
              <ul>
                <li>
                  <a className='footer__link' href="#">Home</a>
                </li>
                <li>
                  <a className='footer__link' href="#">About Us</a>
                </li>
                <li>
                  <a className='footer__link' href="#">characters</a>
                </li>
                <li>
                  <a className='footer__link' href="#">Contact us</a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Information</h3>
              <ul>
                <li>
                  <a className='footer__link' href="#">Event</a>
                </li>
                <li>
                  <a className='footer__link' href="#">Privact Policy</a>
                </li>
                <li>
                  <a className='footer__link' href="#">Terms of services</a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className='footer__title'>Address</h3>
              <ul>
                <li>City - Country</li>
                <li>Street #000</li>
                <li>111 - 222 - 333</li>
                <li>monsters@email.com</li>
              </ul>
            </div>
          </div>
        </footer>

        {/* SCROLL TOP */}
        <a className='scrolltop' href="#home">
          <box-icon className="scrolltop__icon" name='chevron-up'></box-icon>
        </a>
      </Wrap>
    </>
  )
}

export default App