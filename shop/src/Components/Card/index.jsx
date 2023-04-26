import { NavLink } from "react-router-dom";
import "./Card.css";
const IMG_CARD =
  "https://demo.evershop.io/assets/homepage/banner/men-shoes.jpeg";
const Card = () => {
  return (
    <div className="cardContainer">
      <img src={IMG_CARD} alt="" />

      <div className="textContainer">
        <p className="primaryText">MEN SHOES COLLECTION</p>
        <p className="secondaryText">
          Constructed from luxury nylons, leathers, and custom hardware,
          featuring sport details such as hidden breathing vents, waterproof +
          antimicrobial linings, and more.
        </p>
      </div>
      <button className="cardBtn">
        <NavLink className="btnLink" to="/kids">
          Shop Kids
        </NavLink>
      </button>
    </div>
  );
};
export default Card;
