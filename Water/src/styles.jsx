import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    min-height: 100vh;
    background: url(${backgroundImage}) no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Wrap = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.3rem 10%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

    .logo {
      font-size: 2rem;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
    }

    .icons {
      position: absolute;
      right: 5%;
      font-size: 2.8rem;
      color: #fff;
      cursor: pointer;
      display: none;

      #menu-icon {
      }

      #close-icon {
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(50px);
      z-index: -1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      transition: 0.5s;
    }

    &:hover::after {
      left: 100%;
    }
  }

  @media (max-width: 992px) {
    .header {
      padding: 1.3rem 5%;
    }
  }

  @media (max-width: 768px) {
    .header {
      .icons {
        display: inline-flex;
      }
    }
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: ${({ isOpened }) => (isOpened ? "17.7rem" : "0")};
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: 0.3s ease;
  }
`;

export const Anchor = styled.a`
  font-size: 1.15rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 2.5rem;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.1rem;
    margin: 1rem 0;
    text-align: center;
    transform: ${({ isOpened }) =>
      isOpened ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${({ isOpened }) => (isOpened ? "1" : "0")};
    transition: ${({ isOpened, delay }) =>
      isOpened ? `0.3s ease ${0.15 * delay}s` : "0.3s ease"};
  }
`;
