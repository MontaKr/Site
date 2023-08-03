import React, { useState } from "react";
import {
  Wrap,
  GlobalStyle,
  Header,
  Logo,
  Input,
  Icons,
  NavBar,
  Link,
} from "./styles";

const links = [
  { href: "#", text: "Home", delay: 0 },
  { href: "#", text: "About", delay: 1 },
  { href: "#", text: "Gallery", delay: 2 },
  { href: "#", text: "Services", delay: 3 },
  { href: "#", text: "Contact", delay: 4 },
];

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Header>
          <Logo href="#">Logo</Logo>
          <Input
            type="checkbox"
            id="check"
            checked={navOpen}
            onChange={() => setNavOpen(!navOpen)}
          />
          <Icons htmlFor="check" navOpen={navOpen}>
            <i className="bx bx-menu" id="menu-icon"></i>
            <i className="bx bx-x" id="close-icon"></i>
          </Icons>
          <NavBar navOpen={navOpen}>
            {links.map((link, index) => (
              <Link
                href={link.href}
                delay={link.delay}
                key={index}
                navOpen={navOpen}
              >
                {link.text}
              </Link>
            ))}
          </NavBar>
        </Header>
      </Wrap>
    </>
  );
};

export default App;
