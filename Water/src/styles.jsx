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

export const Wrap = styled.div``;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

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

  @media (max-width: 992px) {
    padding: 1.3rem 5%;
  }
`;

export const Logo = styled.a`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
`;

export const Input = styled.input`
  display: none;
`;

export const Icons = styled.label`
  position: absolute;
  right: 5%;
  font-size: 2.8rem;
  color: #fff;
  cursor: pointer;
  display: none;

  #menu-icon {
    display: ${(props) => (props.navOpen ? "none" : "inline-flex")};
  }

  #close-icon {
    display: ${(props) => (props.navOpen ? "inline-flex" : "none")};
  }

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

export const NavBar = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: ${(props) => (props.navOpen ? "17.7rem" : "0")};
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: 0.3s ease;
  }
`;

export const Link = styled.a`
  font-size: 1.15rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 2.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.1rem;
    margin: 1.5rem 0;
    text-align: center;
    transform: ${(props) =>
      props.navOpen ? "translateY(0)" : "translateY(-50px)"};
    opacity: ${(props) => (props.navOpen ? 1 : 0)};
    transition: 0.3s ease;
    transition-delay: ${(props) =>
      props.navOpen ? `${props.delay * 0.15}s` : "0s"};
  }
`;
