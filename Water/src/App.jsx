import React, { useState } from "react";
import { Wrap, Anchor, Nav, GlobalStyle } from "./styles";

const links = [
  { href: "#", text: "Home", delay: 0 },
  { href: "#", text: "About", delay: 1 },
  { href: "#", text: "Gallery", delay: 2 },
  { href: "#", text: "Services", delay: 3 },
  { href: "#", text: "Contact", delay: 4 },
];

const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <GlobalStyle />
      <Wrap id="body">
        <header className="header">
          <a href="#" className="logo">
            Logo
          </a>
          <label htmlFor="" className="icons">
            {!isOpened && (
              <i
                onClick={toggleIsOpened}
                className="bx bx-menu"
                id="menu-icon"
              />
            )}
            {isOpened && (
              <i onClick={toggleIsOpened} className="bx bx-x" id="close-icon" />
            )}
          </label>
          <Nav isOpened={isOpened}>
            {links.map((val, index) => {
              return (
                <Anchor
                  isOpened={isOpened}
                  delay={index}
                  href={val.href}
                  key={index}
                >
                  {val.text}
                </Anchor>
              );
            })}
          </Nav>
        </header>
      </Wrap>
    </>
  );
};

export default App;
