  import styled, {createGlobalStyle} from "styled-components"

  export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap");

    * {
      box-sizing: border-box;
      user-select: none;
    }

    h2 * {
      will-change: transform;
    }
  `

  export const Wrap = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    color: #fff;
    background-color: #000;
    font-family: "Inter", sans-serif;
    text-transform: uppercase;

    header {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5%;
      width: 100%;
      z-index: 3;
      height: 7em;
      font-family: "Inter", sans-serif;
      font-size: clamp(0.66rem, 2vw, 1rem);
      letter-spacing: 0.5em;
    }
  `

  export const Anchor = styled.a`
    color: #fff;
    text-decoration: none;
    font-family: "Nunito Sans", sans-serif;
    transition: color 0.3s, text-decoration 0.3s;

    &:hover {
      text-shadow: 0 0 10px currentColor;
      color : ${props=>props.color}
    }
  `

  export const Section = styled.section`
    height: 100%;
    width: 100%;
    top: 0;
    position: fixed;
    visibility: hidden;

    .wrapper-outer, .wrapper-inner {
      width: 100%;
      height: 100%;
      overflow-y: hidden;

      .background {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-size: cover;
        background-position: center;
        background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.3) 100%
        ), url(${props => props.img});

        h2 {
          font-size: clamp(1rem, 5vw, 5rem);
          font-family: "Playfair Display", serif;
          font-weight: 400;
          text-align: center;
          letter-spacing: 0.5em;
          margin-right: -0.5em;
          color: #cccccc;
          width: 90vw;
          max-width: 1200px;
          z-index: 2;

          &:hover {
            transform: scale(1.05);
            text-shadow: 0 0 10px #cccccc;
          }
        }
      }
    }
  `