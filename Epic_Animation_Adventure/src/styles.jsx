import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PP Mori Extralight';
    src: url('./asset/fonts/PPMori-Extralight.otf') format('opentype');
  }
  @font-face {
    font-family: 'PP Mori Regular';
    src: url('./asset/fonts/PPMori-ExtralightItalic.otf') format('opentype');
  }
  @font-face {
    font-family: 'PP Mori SemiBold';
    src: url('./asset/fonts/PPMori-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'PP Mori SemiBold';
    src: url('./asset/fonts/PPMori-RegularItalic.otf') format('opentype');
  }
  @font-face {
    font-family: 'PP Mori SemiBold';
    src: url('./asset/fonts/PPMori-SemiBold.otf') format('opentype');
  }
  @font-face {
    font-family: 'PP Mori SemiBold';
    src: url('./asset/fonts/PPMori-SemiBoldItalic.otf') format('opentype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gilroy";
    color: #fff;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
`;

export const Wrap = styled.div`
  .cursor {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: fixed;
    background-color: #edbfff;
    z-index: 8;
    mix-blend-mode: difference;
    transition: background-image ease 0.5s;
    background-position: center;
    background-size: cover;
    transition: left linear 0.1s top linear;
  }

  #purple {
    height: 100vh;
    width: 100vw;
    top: 0;
    position: fixed;
    z-index: 100;
    background-color: #edbfff;
    opacity: 0;
    display: none;
    transition: opacity ease 1s;
  }

  #nav {
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    position: fixed;
    mix-blend-mode: difference;
    z-index: 102;

    img {
      height: 24px;
    }

    #nav-part2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      h4 {
        font-size: 13px;
        font-weight: 500;
        text-transform: uppercase;

        &:nth-child(1) {
          border-bottom: 1.5px solid #fff;
        }
      }
    }

    #nav-part3 {
      #circle {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }

  .main {
    background-color: #0f0d0d;
    cursor: none;

    .page1 {
      width: 100%;
      min-height: 100vh;
      position: relative;
      z-index: 9;
      padding-top: 12vw;

      h1 {
        font-size: 8vw;
        font-weight: 300;
        font-family: "PP Mori SemiBold", Arial, sans-serif;
        margin-left: 6vw;
      }

      h2 {
        font-size: 8vw;
        font-weight: 300;
        font-family: "PP Mori SemiBold", Arial, sans-serif;
        margin-left: 26vw;
      }

      video {
        width: 60%;
        margin-top: 10vw;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    .page2 {
      min-height: 80vh;
      width: 100%;
      padding: 100px 5vw;
      border-bottom: 2px solid #6c6c6c;
      position: relative;
      z-index: 9;

      h1 {
        font-size: 7vw;
        font-weight: 500;
        color: #111;
      }

      .page2-container {
        height: 60vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .page2-left {
          width: 38%;

          h2 {
            font-size: 4vw;
            font-weight: 300;
            color: #111;
            line-height: 4vw;
          }
        }

        .page2-right {
          width: 24%;

          p {
            font-size: 28px;
            color: #111;
          }

          button {
            width: 100%;
            border-radius: 50px;
            border: none;
            padding: 4px 0;
            background-color: #edbfff;
            color: #111;
            margin-top: 20px;
          }
        }
      }
    }

    .page3 {
      min-height: 100vh;
      width: 100%;
      padding-top: 100px;
      position: relative;
      z-index: 9;

      h1 {
        font-size: 6.8vw;
        font-weight: 300;
        color: #111;
        margin-left: 100px;
      }

      .page3-part1 {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        img {
          height: 600px;
          margin-top: 160px;
        }
      }
    }

    .page4 {
      min-height: 100vh;
      width: 100%;
      position: relative;
      z-index: 9;
      padding: 170px 100px;

      .elem {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 10px;

        img {
          position: absolute;
          opacity: 0;
          transition: all ease-out 0.5s;
          transform: translateY(10%) rotate(2deg);

          &:nth-child(1) {
            left: 2%;
          }

          &:nth-child(3) {
            right: 5%;
          }
        }

        .text-div {
          height: 145px;
          overflow: hidden;

          h1 {
            font-size: 7.5vw;
            font-weight: 600;
            transition: all ease-out 0.5s;
          }
        }

        &:hover {
          h1 {
            transform: translateY(-100%);
            color: #edbfff;
          }

          img {
            opacity: 1;
            transform: translateY(0%) rotate(0deg);
          }
        }
      }
    }

    .page5 {
      min-height: 100vh;
      width: 100%;
      position: relative;
      z-index: 9;
      padding: 140px 100px;

      h2 {
        font-size: 4vw;
        text-transform: uppercase;
        font-weight: 400;
        margin-bottom: 50px;
      }

      .box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        padding: 0 20px;
        border-top: 2px solid #dadada;

        &:nth-last-child(1) {
          border-bottom: 2px solid #dadada;
        }
      }
    }

    footer {
      height: 90vh;
      width: 100%;
      background-color: #edbfff;
    }
  }
`;
