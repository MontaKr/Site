import React from "react";
import { useRef, useState, useEffect } from "react";
import { GlobalStyle, Wrap } from "./styles";
import { HomeOutline } from "react-ionicons";
import { PersonOutline } from "react-ionicons";
import { ChatboxOutline } from "react-ionicons";
import { CameraOutline } from "react-ionicons";
import { ConstructOutline } from "react-ionicons";
import { useStore } from "../../store/index";

const Sidebar = () => {
  useEffect(() => {
    console.log("Sidebar rerendered");
  });

  const { enterSidebar, leaveSidebar } = useStore();

  const [activeLink, setActiveLink] = useState("Home");

  const navigationRef = useRef(null);

  const toggleHandle = () => {
    navigationRef.current.classList.toggle("active");
  };

  console.log(activeLink);

  const links = [
    {
      name: "Home",
      icon: <HomeOutline color={activeLink === "Home" ? "#fff" : "#000"} />,
      color: "rgb(255, 153, 200)",
    },
    {
      name: "About",
      icon: <PersonOutline color={activeLink === "About" ? "#fff" : "#000"} />,
      color: "rgba(252, 246, 189,0.7)",
    },
    {
      name: "Messages",
      icon: (
        <ChatboxOutline color={activeLink === "Messages" ? "#fff" : "#000"} />
      ),
      color: "rgba(208, 244, 222,0.8)",
    },
    {
      name: "Photos",
      icon: <CameraOutline color={activeLink === "Photos" ? "#fff" : "#000"} />,
      color: "rgb(169, 222, 249)",
    },
    {
      name: "Settings",
      icon: (
        <ConstructOutline color={activeLink === "Settings" ? "#fff" : "#000"} />
      ),
      color: "rgb(228, 193, 249)",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Wrap
        activeColor={links.find((link) => link.name === activeLink).color}
        onMouseEnter={enterSidebar}
        onMouseLeave={leaveSidebar}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div ref={navigationRef} className="navigation">
          <ul>
            {links.map((val, idx) => {
              return (
                <li
                  key={idx}
                  className={`list ${activeLink === val.name ? "active" : ""}`}
                  onClick={() => setActiveLink(val.name)}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="icon">{val.icon}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrap>
    </>
  );
};

export default Sidebar;
