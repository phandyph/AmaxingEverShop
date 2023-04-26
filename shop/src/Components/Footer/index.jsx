import "./Footer.css";
import VisaIcon from "../../Assets/Icons/VisaIcon";
import MastercardIcon from "../../Assets/Icons/MastercardIcon";
import PaypalIcon from "../../Assets/Icons/PaypalIcon";

const SYMBOLS = [
  { symbol: <VisaIcon /> },
  { symbol: <MastercardIcon /> },
  { symbol: <PaypalIcon /> },
];
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="symbols">
          {SYMBOLS.map((eachSymbol) => {
            return <div>{eachSymbol.symbol}</div>;
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
