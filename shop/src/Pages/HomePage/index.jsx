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
          {homePageCardContent.length > 0 ? (
            <Card imgAndPathOfHomeCard={homePageCardContent} />
          ) : (
            <div className="errorInfo">
              <span>
                Opps! No Data Available! Let's double check. Thank You!
              </span>
            </div>
          )}
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
