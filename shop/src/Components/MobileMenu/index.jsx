import { NavLink } from "react-router-dom";
import "./MobileMenu.css"
const MobileMenu = ({isMenuOpen, USER_MAIN_MENU}) => {
  return (
    <div className={isMenuOpen ? "showHumbergerMenu" : "hide"}>
      <ul className="mobileMenu">
        {USER_MAIN_MENU.map((menu) => {
          return (
            <li className="mobileMenuLink">
              <NavLink reloadDocument activeclassname="active" to={menu.path}>
                {menu.link}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
