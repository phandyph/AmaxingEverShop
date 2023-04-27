import LogoIcon from "../../Assets/Icons/LogoIcon";
import StoreIcon from "../../Assets/Icons/StoreIcon";
import LoginIcon from "../../Assets/Icons/LoginIcon";
import HumbergerIcon from "../../Assets/Icons/HumbergerIcon";
import MobileMenu from "../MobileMenu";

import "./Navbar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import useIsOnMobile from "../../hooks/useIsOnMobile";
import { useState } from "react";
import { useEffect } from "react";
const USER_MAIN_MENU = [
  { path: "/kids", label: "kids" },
  { path: "/women", label: "women" },
  { path: "/men", label: "men" },
];
const ICONS = [
  { path: "/store", icon: <StoreIcon /> },
  { path: "/login", icon: <LoginIcon /> },
];

const Navbar = () => {
  const onMobile = useIsOnMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!onMobile) {
      setIsMenuOpen(false);
    }
  }, [onMobile]);

  const onHumbergerHandle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <Router>
        <div className="navbar">
          <NavLink reloadDocument activeclassname="active" to="/">
            <LogoIcon />
          </NavLink>

          <ul className={onMobile ? "hideMobileMenu" : "showMobileMenu"}>
            {USER_MAIN_MENU.map((menu) => {
              return (
                <li>
                  <NavLink
                    reloadDocument
                    activeclassname="active"
                    className="navlink"
                    to={menu.path}
                  >
                    {menu.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="icons">
            <>
              {ICONS.map((menu) => {
                return (
                  <NavLink
                    reloadDocument
                    activeclassname="active"
                    to={menu.path}
                  >
                    {menu.icon}
                  </NavLink>
                );
              })}

              <NavLink
                onClick={onHumbergerHandle}
                className={onMobile ? "showHumbergerIcon" : ""}
              >
                <HumbergerIcon />
              </NavLink>
              <MobileMenu isMenuOpen={isMenuOpen} mobileMenu={USER_MAIN_MENU} />
            </>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
