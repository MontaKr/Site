import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
      --primary: #bdbfbe;
      --secondary: #181818;
      --text-h1: 3.2rem;
      --text-paragraph: 2rem;
    }

  * {
    &::-webkit-scrollbar {
      display: none; 
    }
  }

  html {
    font-size: calc(100vw / 1920 * 10);
  }

  body {
    font-family: "Primary";
    background-color: var(--primary);
    color: var(--secondary);
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-size: max(100vw / 1920 * 10);
    
    @media screen and (min-width: 1920px) {
      font-size: 9px;
    }
    
    @media screen and (max-width: 768px) {
      font-size: calc(100vw / 768 * 10);
    }
  }

  .app {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  input, textarea {
    width: 100%;
    height: 8rem;
    padding: 1rem;
    background: rgba(249, 250, 250, 0.5);
    border: 1px solid #21212144;
    border-radius: 1rem;
    outline-color: var(--color-blue);
  }

  textarea {
    min-height: 16rem;
    height: auto;
    resize: vertical;
  }

  input::placeholder {
    vertical-align: middle;
  }

 
`;

export const Wrap = styled.div`
  .archive {
    position: relative;
    width: max-content;
    height: 100vh;
    display: flex;
    overflow: hidden;

    .archive_slider {
      display: flex;
      height: inherit;

      .archive_slider_figure {
        position: relative;
        width: 50vw;
        height: inherit;
        overflow: hidden;

        .archive_slider_image {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .circle {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    .circle_container {
      position: relative;
      width: 100rem;
      height: 100rem;
      margin: 0 auto;

      .circle_figure {
        position: relative;
        width: 4rem;
        height: 6rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: calc(100vw / 768 * 10);
    }
  }
`;
