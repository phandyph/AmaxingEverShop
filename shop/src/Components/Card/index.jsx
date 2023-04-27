import { NavLink } from "react-router-dom";
import "./Card.scss";
const Card = ({ imgAndPathOfHomeCard }) => {
  return (
    <>
      {imgAndPathOfHomeCard.map((content) => {
        return (
          <div className="cardContainer" key={content.id}>
            <img src={content.img} alt="" />

            <div className="textContainer">
              <p className="primaryText">{content.title}</p>
              <p className="secondaryText">{content.desc}</p>
            </div>
            <NavLink
              reloadDocument
              activeclassname="active"
              className="btnLink"
              to={content.path}
            >
              <button className="btnCard ">{content.label}</button>
            </NavLink>
          </div>
        );
      })}
    </>
  );
};
export default Card;
