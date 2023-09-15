import React from "react";
import { useRef, useState, useEffect } from "react";
import { GlobalStyle, Wrap } from "./styles";
import { HomeOutline } from "react-ionicons";
import { PersonOutline } from "react-ionicons";
import { ChatboxOutline } from "react-ionicons";
import { CameraOutline } from "react-ionicons";
import { ConstructOutline } from "react-ionicons";
import { useStore } from "../../store/index";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
      iconType: HomeOutline,
      color: "rgb(255, 153, 200)",
    },
    {
      name: "About",
      path: "/about",
      iconType: PersonOutline,
      color: "rgba(252, 246, 189,0.7)",
    },
    {
      name: "Messages",
      iconType: ChatboxOutline,
      color: "rgba(208, 244, 222,0.8)",
    },
    {
      name: "Photos",
      iconType: CameraOutline,
      color: "rgb(169, 222, 249)",
    },
    {
      name: "Settings",
      iconType: ConstructOutline,
      color: "rgb(228, 193, 249)",
    },
  ];

  const determineActiveLink = () => {
    const activeItem = links.find((link) => link.path === location.pathname);
    return activeItem ? activeItem.name : "Home";
  };

  const { enterSidebar, leaveSidebar } = useStore();

  const [activeLink, setActiveLink] = useState(determineActiveLink);

  useEffect(() => {
    setActiveLink(determineActiveLink());
  }, [location]);

  const navigationRef = useRef(null);

  const toggleHandle = () => {
    navigationRef.current.classList.toggle("active");
  };

  console.log(activeLink);

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
              const IconComponent = val.iconType;
              return (
                <li
                  key={idx}
                  className={`list ${activeLink === val.name ? "active" : ""}`}
                  onClick={() => setActiveLink(val.name)}
                >
                  <Link to={val.path}>
                    <span className="icon">
                      <IconComponent
                        color={activeLink === val.name ? "#fff" : "#000"}
                      />
                    </span>
                  </Link>
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
