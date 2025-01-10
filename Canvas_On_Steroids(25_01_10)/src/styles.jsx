import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
    height: 800vh;
    font-family: "PP Neue Montreal";
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    text-transform: uppercase;
    font-family: "FK Screamer";
    font-weight: lighter;
    font-size: 64px;
    line-height: 1;

    span {
      color: #ff6b00;
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }

  section {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Wrap = styled.div`
  .hero,
  .outro {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;

    h1 {
      text-align: center;
      font-size: 80px;
    }
  }

  .sticky {
    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 150% !important;
      height: 150% !important;

      &.outline-layer {
        z-index: 1;
      }

      &.fill-layer {
        z-index: 3;
      }
    }

    .cards {
      position: absolute;
      top: 0;
      left: 0;
      width: 300%;
      height: 100vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      will-change: transform;
      z-index: 2;

      .card {
        position: relative;
        width: 10%;
        height: 75%;
        background-color: #000;
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1.5em;

        .card-img,
        .card-title {
          flex: 1;
          overflow: hidden;
        }

        .card-title {
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .card {
      width: 25%;
    }
  }
`;
