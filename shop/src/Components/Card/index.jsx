import "./Card.css";

const Card = () => {
  return (
    <div className="cardContainer">
      <img
        src="https://demo.evershop.io/assets/homepage/banner/men-shoes.jpeg"
        alt=""
      />

      <div className="textContainer">
        <p className="primaryText">MEN SHOES COLLECTION</p>
        <p className="secondaryText">
          Constructed from luxury nylons, leathers, and custom hardware,
          featuring sport details such as hidden breathing vents, waterproof +
          antimicrobial linings, and more.
        </p>
      </div>
      <button className="cardBtn">SHOP KIDS</button>
    </div>
  );
};
export default Card;
