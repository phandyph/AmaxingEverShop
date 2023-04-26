import "./Footer.css";
import VisaIcon from "../../Assets/Icons/VisaIcon";
import MastercardIcon from "../../Assets/Icons/MastercardIcon";
import PaypalIcon from "../../Assets/Icons/PaypalIcon";

const ICONS = [<VisaIcon />, <MastercardIcon />, <PaypalIcon />];
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="symbols">
          {ICONS.map((icon) => {
            return <div>{icon}</div>;
          })}
        </div>

        <div>
          <span>Copyright © 2020 EverShop</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
