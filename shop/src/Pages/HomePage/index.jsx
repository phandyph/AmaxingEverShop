import "./HomePage.css";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import FeatureCard from "../../Components/FeatureCard";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="homePageContainer">
        <div className="cardsContainer">
          {/* Just layout, not include with data yet. */}
          <Card />
          <Card />
          <Card />
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
