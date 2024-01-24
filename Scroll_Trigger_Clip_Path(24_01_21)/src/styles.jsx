import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Primary";
    src: url("../asset/font/eiko.otf") format("otf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
  font-family: "Secondary";
    src: url("../asset/font/redhat.ttf") format("ttf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --primary: #000000;
    --secondary: #ffffff;
    --padding: 4rem;
  }

  html {
    font-size: calc(100vw / 1920 * 10);
  }

  body {
    font-family: "Primary";
    background-color: var(--primary);
    color: var(--secondary);
  }

  h1 {
    font-size: 12rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 8rem;
    line-height: 1.3;
  }

  p,
  span {
    font-family: "Secondary";
    font-size: 3.2rem;
    line-height: 1.2;
  }

  .app {
    overflow: hidden;
  }

  /* Lenis Setting */
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

  /* responsive */
  @media screen and (max-width: 768px) {
    :root {
      --padding: 3.2rem;
    }

    html {
      font-size: calc(100vw / 768 * 10);
    }

    h1 {
      font-size: 8rem;
    }

    h2 {
      font-size: 6rem;
    }

    .content_media_figure:nth-child(1) {
      left: 8rem;
    }

    .content_media_figure:nth-child(2) {
      right: 4rem;
    }
  }
`

export const Wrap = styled.div`

  /* intro */
  .intro {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;

    .intro__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6.4rem;
      width: inherit;
      height: inherit;
      padding: var(--padding);

      .intro__title {
        text-align: center; 

        .intro__title--info {
          display: inline-flex;
          justify-content: space-between;
          width: 100%;
        }
      }

      .intro__scroll {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: var(--padding);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;

        span {
          display: block;
          font-size: 4rem;
          font-family: "Primary";
        }
      }

      .intro__media {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        .intro__media--image {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  /* content */
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;

    .content__wrapper {
      position: relative;
      width: inherit;
      height: inherit;
      padding: var(--padding);

      .content__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: inherit;
        height: inherit;
        text-align: center;

        .content__item-row {
          overflow: hidden;

          &:nth-child(2) {
            padding: 4rem 0;
            text-transform: uppercase;
          }

          .content__item-row-text {
            transform-origin: top left;
          }
        }
      }

      .content__media {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;

        .content__media-figure {
          position: absolute;
          width: 20rem;
          height: 30rem;

          &:nth-child(1) {
            top: 10rem;
            left: 25rem;
          }

          &:nth-child(2) {
            bottom: 12rem;
            right: 24rem;
            width: 30rem;
            height: 16rem;
          }

          .content__media-image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
          }
        }
      }
    }
  }

  /* next */
  .next {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 20;

    .next__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: inherit;
      height: inherit;
      padding: var(--padding);

      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--primary) 75%);

      .next__item {
        overflow: hidden;
        text-align: center;
      }
    }
  }

  /* media */
  .media {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200vh;
    z-index: 10;

    clip-path: polygon(40% 100%, 60% 100%, 60% 100%, 40% 100%);
    overflow: hidden;

    figure.media__figure {
      position: relative;
      width: 100%;
      height: inherit;
      overflow: hidden;
      
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.6;
        background-color: var(--primary);
      }

      .media__image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`