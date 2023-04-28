import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
const MobileMenu = ({ isMenuOpen, mobileMenu }) => {
  return (
    <div className={isMenuOpen ? "showHumbergerMenu" : "hideHumbergerMenu"}>
      <ul className="mobileMenu">
        {mobileMenu.map((menu) => {
          return (
            <li className="mobileMenuLink">
              <NavLink reloadDocument activeclassname="active" to={menu.path}>
                {menu.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
