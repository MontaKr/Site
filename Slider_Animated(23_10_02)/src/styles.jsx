import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`;

export const Wrap = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 80px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;

    .logo {
      font-size: 30px;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
    }

    .navbar a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      margin-left: 50px;
    }
  }

  .container {
    position: relative;
    width: 100%;
    height: 100vh;

    .circle-darktransp {
      position: absolute;
      width: 100%;
      height: 100%;
      clip-path: circle(50% at 50% 50%);
      background: rgba(0, 0, 0, 0.1);
      z-index: 11;
    }

    .line {
      position: absolute;
      top: 50.5%;
      width: 500px;
      height: 2px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      z-index: 100;
    }

    .rotate-btn {
      position: absolute;
      bottom: 60px;
      right: 60px;
      width: 60px;
      height: 60px;
      background: #aba72c;
      border: 2px solid #fff;
      border-radius: 50%;
      cursor: pointer;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;

      i.bx {
        font-size: 40px;
        color: #fff;
      }

      &.active {
        transform: rotate(360deg);
        pointer-events: none;
        transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition-delay: 0.2s;
      }
    }
  }
`;

export const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    .circle {
      z-index: 10;

      &.bg img {
        transition-delay: 0.9s;
      }

      &.large img {
        transition-delay: 0.6s;
      }

      &.small img {
        transition-delay: 0.3s;
      }

      img {
        transform: rotate(360deg) scale(2.2);
        opacity: 1;
      }
    }

    .content-text {
      z-index: 101;

      .place h1,
      .country h2 {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }

  &.after-active {
    .circle {
      &.bg img {
        transition-delay: 0.9s;
      }

      &.large img {
        transition-delay: 0.6s;
      }

      &.small img {
        transition-delay: 0.3s;
      }

      img {
        transform: rotate(720deg) scale(4.2);
        opacity: 0;
      }
    }

    .content-text {
      .place h1 {
        opacity: 1;
        transform: translateY(-100%);
      }

      .country h2 {
        opacity: 1;
        transform: translateY(100%);
      }
    }
  }

  .circle {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    user-select: none;
    overflow: hidden;

    &.large {
      clip-path: circle(50% at 50% 50%);
    }

    &.small {
      clip-path: circle(30% at 50% 50%);
      z-index: 12;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: rotate(0deg) scale(4.2);
      opacity: 0;
      transition: transform 1.5s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  .content-text {
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;

    .country,
    .place {
      overflow: hidden;
    }

    .country {
      margin-top: 60px;
    }

    .place h1,
    .country h2 {
      color: #fff;
      text-transform: uppercase;
      line-height: 1;
      opacity: 0;
      transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition-delay: 1s;
    }

    .place h1 {
      font-size: 60px;
      letter-spacing: 80px;
      margin-right: -80px;
      transform: translateY(100%);
    }

    .country h2 {
      font-size: 50px;
      letter-spacing: 30px;
      margin-right: -30px;
      transform: translateY(-100%);
    }
  }
`;
