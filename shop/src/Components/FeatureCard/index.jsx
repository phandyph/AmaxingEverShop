import "./FeatureCard.scss";
import { dolorFormat } from "../../util/dolarFormat";
const FeatureCard = ({ shoeItems }) => {

  return (
    <>
      {shoeItems.map((shoe, i) => {
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
                {dolorFormat(shoe.retail_price_cents)}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FeatureCard;
