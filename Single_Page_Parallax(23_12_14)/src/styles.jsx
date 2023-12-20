import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Primary";
    src: url(./fonts/PPNeueWorld-Regular.otf) format("opentype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


  :root {
    --primary: #bdbfbe;
    --secondary: #d60000;
    --alternate: #1b1b1b;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: calc(100vw / 1920 * 10);
  }

  body {
    font-family: "Primary";
    background-color: var(--primary);
    color: var(--secondary);
  }

  // Lenis
  html.lenis {
    height: auto;
  }
  
  .lenis.lenis-smooth {
    scroll-behavior: auto;
  }
  
  .lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
  }
  
  .lenis.lenis-stopped {
    overflow: hidden;
  }
  
  .lenis.lenis-scrolling iframe {
    pointer-events: none;
  }

  h1 {
    font-size: 24rem;
    text-transform: uppercase;
  }
  
  h2 {
    font-size: 14rem;
    text-transform: uppercase;
  }
  
  h3 {
    font-size: 8rem;
    text-transform: uppercase;
  }
  
  p,
  span {
    font-size: 3.2rem;
  }
  
  a {
    font-size: 3.2rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--alternate);
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: calc(100vw / 768 * 10);
    }
  
    h1 {
      font-size: 12rem;
    }
  
    h2 {
      font-size: 10rem;
    }
  
    p,
    span {
      font-size: 2rem;
    }
  }
  
`

export const Wrap = styled.div``

export const Nav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 2rem;
  width: 100%;
  z-index: 100;
  color: var(--secondary);

  .nav_wrapper {
    display: flex;
    justify-content: space-between;
    width: inherit;

    .nav_item {
      a {
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        margin-bottom: 0.8rem;
        text-align: right;
        transition: color 0.32s ease-out;

        &:hover {
          color: var(--secondary);
          transition: color 0.32s ease-out;
        }
      }
    } 
  }
`

export const Hero = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 12.8rem;
  width: 100%;
  height: 100vh;
  padding: 5rem;

  .hero_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: inherit;

    .hero_title {
      text-align: center;
    }
  }
`

export const Gallery = styled.div`
  position: relative;
  margin-top: 80vh;

  .gallery_wrapper {
    padding: 2rem;

    .gallery_row {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      &.--flex {
        display: flex;
        gap: 2rem;
      }

      .gallery_row_media {
        position: relative;
        width: 100%;
        height: auto;

        .gallery_row_media_info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          color: var(--secondary);
          z-index: 10;
        }

        figure.gallery_row_media_figure {
          position: relative;
          width: inherit;
          height: calc(100vh - 4rem);
          background-color: var(--secondary);
          border-radius: 2rem;
          overflow: hidden;

          img.gallery_row_media_image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin: auto;
          }
        }
      }

      .gallery_row_item {
        position: relative;
        width: 100%;
        padding-top: 8rem;

        .gallery_row_item_title {
          text-align: center;
          padding: 16rem;
        }

        .gallery_row_item_text {
          text-align: justify;
          width: 40rem;
          margin: 0 auto;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {  
    .gallery_row.--flex {
      display: flex;
      flex-direction: column;
    }
  
    .gallery_row_item_title {
      padding: 8rem;
    }
  
    figure.gallery_row_media_figure {
      height: calc(70vh - 4rem);
    }
  }
  
`
