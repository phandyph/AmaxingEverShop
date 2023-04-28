import "./FeatureCard.scss";
const FeatureCard = ({ shoeItems }) => {

  function convertToDolar(price) {
    return price / 4000;
  }

  console.log(shoeItems);

  return (
    <>
      {shoeItems.map((shoe, i) => {
        // all shoes will display
        return (
          <div>
            <img
              className="featureImg"
              src={shoe.main_picture_url}
              alt="ImageOnCard"
            />
            <div className="featureTextContainer">
              <p className="featurePrimaryText">{shoe.name}</p>
              <p className="featurePrimaryText">
                {convertToDolar(shoe.retail_price_cents)}$
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FeatureCard;
