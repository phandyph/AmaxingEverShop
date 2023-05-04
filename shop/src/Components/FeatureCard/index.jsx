import "./FeatureCard.scss";
import { toDolorFormat } from "../../util/toDolarFormat";
const FeatureCard = ({ shoeItems }) => {
  return (
    <>
      {shoeItems.length > 0 ? (
        <>
          {shoeItems.map((shoe, i) => {
            return (
              <div key={i}>
                <img
                  className="featureImg"
                  src={shoe.main_picture_url}
                  alt="ImageOnCard"
                />
                <div className="featureTextContainer">
                  <p className="featurePrimaryText">{shoe.name}</p>
                  <p className="featurePrimaryText">
                    {toDolorFormat(shoe.retail_price_cents)}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div>No Data Available</div>
      )}
    </>
  );
};
export default FeatureCard;
