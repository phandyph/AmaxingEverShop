import { NavLink } from "react-router-dom";
import "./Button.scss";
const Button = () => {
  return (
    <NavLink
      reloadDocument
      activeclassname="active"
      className="btnLink"
      to="/kids"
    >
      <button className="btnCard ">Shop Kids</button>
    </NavLink>
  );
};

export default Button;
