import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Primary';
    src: url('./fonts/PPMori-Regular.otf') format('otf');
    font-weight: 100;
    letter-style: normal;
    letter-display: swap;
  }

  html {
    font-size: max(100vw / 1920 * 10, 10px);
  }

  :root {
    --primary: #000000;
    --secondary: #ffffff;
    --letter-size: 20rem;
  }
`;

export const Wrap = styled.div`
  font-size: max(100vw / 1920 * 10);
  font-family: "Primary";
  background-color: var(--primary);
  color: var(--secondary);
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  span {
    font-size: 3rem;
  }

  .section {
    position: relative;
    width: 100%;
    height: 100vh;

    .section_wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: inherit;
      height: inherit;

      .r-container {
        position: relative;
        width: 100%;
        z-index: 10;

        &.abs {
          position: absolute;
          padding: 4rem;
          display: flex;
          justify-content: space-between;
          width: 100%;
          z-index: 2;
        }

        &.abs-top {
          left: 0;
          top: 0;
        }

        &.abs-bottom {
          left: 0;
          bottom: 0;

          .re-roll {
            color: orangered;
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }

      .section_media {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.75;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  @media screen and (max-width: 769px) {
    :root {
      --letter-size: 24rem;
    }

    span {
      font-size: 6rem;
    }
  }
`;

export const Rtext = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  height: var(--letter-size);

  .r-letter {
    display: block;
    font-size: var(--letter-size);
  }

  &:nth-child(1)::before {
    position: relative;
    content: "";
    padding-left: 48rem;
  }

  &:nth-child(2)::before {
    position: relative;
    content: "";
    padding-left: 24rem;
  }

  &:nth-child(3)::before {
    position: relative;
    content: "";
    padding-left: 64rem;
  }
`;
