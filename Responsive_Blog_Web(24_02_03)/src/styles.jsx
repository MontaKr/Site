import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;900&display=swap");

  :root {
    --header-height: 3rem;

    /*========== Colors ==========*/
    --first-color: #fe2d1f;
    --second-color: #f7bc08;
    --first-color-alt: #00bfeb;
    --title-color: #58548d;
    --text-color: #707070;
    --body-color: #FBFEFD;
    --white: #FFFFFF;

    /*========== Font and typography ==========*/
    --body-font: 'Raleway', sans-serif;
    --biggest-font-size: 3.2rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;

    /*========== Font weight ==========*/
    --font-bold: 800;
    --font-medium: 500;
    --font-semi-bold: 600;

    /*========== Margenes ==========*/
    --mb-1: .5rem;
    --mb-2: 1rem;
    --mb-3: 1.5rem;
    --mb-4: 2rem;
    --mb-5: 2.5rem;
    --mb-6: 3rem;

    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
  }

  *,::before,::after{
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  h1,h2,h3,p,ul{
    margin: 0;
  }

  ul{
    padding: 0;
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  img{
    max-width: 100%;
    height: auto;
  }
`

export const Wrap = styled.div`
  //BODY
  height: 100%;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  line-height: 1.4;
  margin: 0;

  /* LAYOUT */
  .container {
    min-width: 960px;
    width: calc(100% - 2rem);
    margin-left: auto;
    margin-right: auto;
  }

  .container-full {
    width: calc(100% - 2rem );
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .home__title {
    font-size: var(--biggest-font-size);
    color: var(--title-color);
    margin-bottom: var(--mb-1);
    font-weight: var(--font-bold);
    text-transform: capitalize;
  }

  /* NAV */
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    border-color: var(--body-color);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    .nav {
      max-width: 1024px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: calc(var(--header-height) + 1.5rem);

      .nav__logo {
        width: 40px;
      }

      .nav__menu {
        .nav__list {
          display: flex;
          align-items: center;

          .nav__item {
            margin-left: var(--mb-5);
            margin-bottom: 0;

            .nav__link {
              color: var(--title-color);
              font-weight: var(--font-medium);
              text-transform: uppercase;
              font-size: var(--smaller-font-size);

              &:hover {
                transition: 0.3s;
                color: var(--second-color);
              }

              &.button:hover {
                color: var(--first-color);
              }
            }

            .active-link {
              color: var(--second-color);
            }
          }
        }
      }

      .nav__toggle {
        color: var(--title-color);
        font-weight: var(--font-medium);
        text-transform: uppercase;
        font-size: var(--smaller-font-size);
        font-size: 1.3rem;
        cursor: pointer;
        display: none;
      }
    }
  }

  /* SECTION */
  .section {
    padding-top: 8rem;
  }

  .section-subtitle {
    display: block;
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    margin-bottom: var(--mb-1);
    letter-spacing: 10px;
    text-transform: uppercase;
  }

  /* HOME */
  .home {
    background-image: url(../asset/img/banner-1.gif);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    background-position-y: bottom;

    .home__container {
      align-content: center;
      display: flex;
      height: 100vh;
      justify-items: center;
      padding-top: 7rem;

      .home__title {
        font-size: var(--biggest-font-size);
        color: var(--title-color);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-bold);
        text-transform: capitalize;
      }

      .home__subtitle {
        font-size: var(--h3-font-size);
        color: var(--title-color);
        margin-bottom: var(--mb-4);
        border-left: 3px solid var(--first-color-alt);
        padding-left: 1.5rem;
      }
    }
  }

  /* BUTTON */
  .button {
    text-transform: uppercase;
    font-weight: var(--font-semi-bold);
    display: inline-block;
    background-color: var(--white);
    color: var(--title-color);
    padding: 0.7rem 2rem;
    border: 2px solid var(--first-color);
    border-radius: 10rem;
    transition: 0.3s;

    &:hover {
      background-color: var(--second-color);
      color: var(--first-color);
    }
  }

  /* ABOUT */
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 7rem;

    .about__data {
      text-align: initial;

      .home__title {
        font-size: var(--biggest-font-size);
        color: var(--title-color);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-bold);
        text-transform: capitalize;
      }

      .about__description {
        margin-bottom: var(--mb-3);
      }
    }

    .about__cards {
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(2,1fr);
      align-items: center;

      .about__card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1.2rem;
        height: 100%;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(34,33,35,0.15);
        cursor: pointer; 
        transition: 0.3s;

        &:hover {
          box-shadow: none;
        }

        .about__img {
          width: 100px;
        }
      }
    }
  }

  /* MONSTERS */
  .monsters__container {
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    column-gap: 7rem;

    .monsters__data {
      text-align: initial;

      .home__title {
        font-size: var(--biggest-font-size);
        color: var(--title-color);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-bold);
        text-transform: capitalize;
      }

      .monsters__description {
        margin-bottom: var(--mb-5);
      }
    }
  }

  /* CHARACTERS */
  .characters__container {
    margin-top: var(--mb-6);
    grid-template-columns: repeat(3,1fr);
    column-gap: 4rem;

    .characters__content {
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: var(--white);
      border-radius: 0.5rem;
      border: 2px solid #1f202110;
      padding: 1.5rem;
      cursor: pointer; 
      transition: 0.6s ease all;

      &:hover {
        box-shadow: 0 20px 40px rgba(34,33,35,0.15);

        .characters__img {
          transform: 
            perspective(800px) 
            translateY(-50px)
            rotateX(-30deg)
            scale(1.2);
        }
      }
      
      .characters__name {
        font-size: var(--h1-font-size);
        font-weight: var(--font-bold);
        opacity: 0.7;
      }

      .characters__detail {
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-2);
        margin-top: var(--mb-2);
      }

      .nav__link {
        text-transform: capitalize;
        font-weight: var(--font-bold);
        color: var(--first-color);
      }

      .characters__img {
        width: 130px;
        align-self: center;
        margin-bottom: var(--mb-2);
        transition: 0.6s ease all;
      }

      &.c-1 {
        .characters__name {
          color: var(--second-color);
        }
      }

      &.c-2 {
        .characters__name {
          color: var(--first-color);
        }
      }

      &.c-3 {
        .characters__name {
          color: var(--first-color-alt);
        }
      }
    }
  }

  /* CONTACT */
  .contact__container {
    grid-template-columns: 1.75fr 1fr;
    align-items: center;

    .contact__description {
      margin-bottom: var(--mb-3);
    }

    .contact__button {
      justify-self: center;
    }
  }

  /* FOOTER */
  .footer__container {
    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
    row-gap: 2rem;
    padding: 4rem 0 4rem 0;

    .footer__social {
      font-size: 1.5rem;
      color: var(--title-color);
      margin-right: var(--mb-2);
    }

    .footer__title{
      font-size: var(--h2-font-size);
      color: var(--title-color);
      margin-bottom: var(--mb-2);
    }

    .footer__link {
      display: inline-block;
      color: var(--text-color);
      margin-bottom: var(--mb-1);

      &:hover {
        color: var(--first-color);
      }
    }
  }

  /* SCROLLTOP */
  .scrolltop {
    position: fixed;
    right: 1rem;
    bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem; 
    background-color: var(--first-color);
    border-radius: 0.4rem;
    z-index: var(--z-tooltip);
    transition: 0.4s;

    &:hover {
      background-color: var(--second-color);
    }

    .scrolltop__icon {
      font-size: 1.8rem;
      color: var(--body-color);
    }
  }
`