import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 1000vh;
    font-family: 'PP Neue Montreal', sans-serif;
  }

  img  {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-family: 'PP Acma', sans-serif;
    font-size: 12vw;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.025em;
  }

  p {
    font-size: 17px;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #e1dedc;
    padding: 2em;
  }
`;

export const Wrap = styled.div`
  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    background-color: #000;
    overflow: hidden;

    .gallery-wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 160vw;
      height: 100vh;
      display: flex;
      gap: 4em;

      .col {
        position: relative;
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 4em;
        will-change: transform;

        .img {
          flex: 1;
          overflow: hidden;
          background-color: #fff;

          &.main img {
            position: relative;
            transform: scale(2);
            will-change: transform;
          }
        }
      }
    }
  }

  .container {
    width: 100%;
    height: 100%;

    .hero {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .hero-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .header {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #fff;
      }
    }

    .intro {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: 4em 0;
      background-color: #e1dedc;
      color: #05364c;

      .divider {
        width: 1.5px;
        height: 30%;
        background-color: #05364c;
      }
    }

    .ws {
      width: 100vw;
      height: 600vh;
      background-color: transparent;
    }

    .outro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #e1dedc;
      color: #05364c;
    }

    .footer {
      .footer-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;