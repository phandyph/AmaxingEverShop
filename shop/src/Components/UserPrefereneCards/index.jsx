import FeatureCard from "../FeatureCard";
const UserPreferenceCards = ({shoeItems}) => {
  return (
    <div className="userPreCardsContainer">
      <FeatureCard shoeItems={shoeItems} />
    </div>
  );
};

export default UserPreferenceCards;
