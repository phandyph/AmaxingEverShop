import "./FeatureCard.scss";
const FeatureCard = ({ shop }) => {
   // convert from riels to dollar.
  function convertToDolar(price) {
    return price / 4000;
  }

  return (
    <>
      {shop.sneakers.map((shoe, i) => {
        // all shoes will display
        return (
          <div key={i} className="featureCard">
            {i < 4 ? (
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
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
};
export default FeatureCard;
