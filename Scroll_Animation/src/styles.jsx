import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #141616;
    background-color: #e6e9ea;
    font-size: 28px;
  }

  @media (max-width: 1000px) {
    body {
      font-size: 24px;
    }

    h1 {
      font-size: 72px;
    }
  }

  :root {
    --scroll: ${(props) => props.scrollValue || 0};
  }
`;

export const Wrap = styled.div`
  h1 {
    font-size: 110px;
    margin-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 72px;
    }
  }
`;

export const Section = styled.section`
  height: 100vh;
  text-align: center;
  padding: 1rem;
  position: relative;
`;

export const TopSection = styled(Section)`
  display: flex;
  text-align: start;
  padding: 0;
  position: sticky;
  top: 0;
  translate: 0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / 75);
  --background-opacity: calc(100% - 1% * (min(var(--scroll), 30)) * 100 / 30);

  .left,
  .right {
    flex-basis: 0;
    flex-grow: 1;
    padding: 1rem;
    padding-left: 3rem;
  }

  .left {
    background-color: rgb(248, 250, 249, var(--background-opacity));
  }

  .right {
    background: linear-gradient(
      201.65deg,
      rgb(152, 157, 157, var(--background-opacity)) 0%,
      rgb(189, 194, 194, var(--background-opacity)) 100%
    );

    @media (max-width: 1000px) {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    .left {
      text-align: center;
    }
  }

  &.first-main-section {
    padding-top: 10vh;
  }
`;

export const Img = styled.img`
  position: fixed;
  width: 100vw;
  bottom: 0;
  z-index: 10;
  translate: 0 100%;
  transition: translate 500ms ease-in-out;

  ${(props) =>
    props.show &&
    `
    translate: 0 0;
  `}

  &.top-section-img {
    --value: min(var(--scroll), 30) * 50 / 30;
    width: calc(50vw + 1vw * var(--value));
    transform: translateY(calc(50% - 1% * var(--value)));
  }
`;
