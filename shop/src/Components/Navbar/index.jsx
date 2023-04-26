import Logo from "../../Assets/Icons/Logo";
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
  { path: "/men", link: "men" },
  { path: "/kids", link: "kids" },
  { path: "/women", link: "women" },
];
const ICONS = [
  { path: "/store", component: <StoreIcon /> },
  { path: "/login", component: <LoginIcon /> },
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
            <Logo />
          </NavLink>

          <ul className={onMobile ? "hide" : "userPreferencesMenu"}>
            {USER_MAIN_MENU.map((menu) => {
              return (
                <li>
                  <NavLink
                    reloadDocument
                    activeclassname="active"
                    className="navlink"
                    to={menu.path}
                  >
                    {menu.link}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="icons">
            <>
              {ICONS.map((icon) => {
                return (
                  <NavLink
                    reloadDocument
                    activeclassname="active"
                    to={icon.path}
                  >
                    {icon.component}
                  </NavLink>
                );
              })}

              <NavLink
                onClick={onHumbergerHandle}
                className={onMobile ? "show" : "hideElement"}
              >
                <HumbergerIcon />
              </NavLink>
              <MobileMenu
                isMenuOpen={isMenuOpen}
                USER_MAIN_MENU={USER_MAIN_MENU}
              />
            </>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
