import "./FeatureCard.css";
const IMG =
  "https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-list.png";
const FeatureCard = () => {
  return (
    <div className="featureCard">
      <img
        className="featureImg"
        src={IMG}
        alt="ImageOnCard"
      />
      <div className="featureTextContainer">
        <p className="featurePrimaryText">Nike air zoom pegasus 35</p>
        <p className="featurePrimaryText">$411.00</p>
      </div>
    </div>
  );
};
export default FeatureCard;
