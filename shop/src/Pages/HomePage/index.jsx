import "./HomePage.css";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import FeatureCard from "../../Components/FeatureCard";
import homePageCardContent from "../../Data/homePageCardContent.json";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="homePageContainer">
        <div className="cardsContainer">
          <Card imgAndPathOfHomeCard={homePageCardContent} />
          {/* Nothing change on it, that's why just display it and change routes. */}
        </div>

        <div className="featureProducts">
          <p>FEATURE PRODUCTS</p>
        </div>

        <div className="featureCardsContainer">
          {/* Just layout, not include with data yet. */}
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
