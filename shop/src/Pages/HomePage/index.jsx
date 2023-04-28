import "./HomePage.css";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import FeatureCard from "../../Components/FeatureCard";
import homePageCardContent from "../../Data/homePageCardContent.json";
import shop from "../../Data/shop.json";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="homePageContainer">
        <div className="cardsContainer">
          <Card imgAndPathOfHomeCard={homePageCardContent} />
        </div>

        <div className="featureProducts">
          <p>FEATURE PRODUCTS</p>
        </div>

        <div className="featureCardsContainer">
          <FeatureCard shop={shop} />
        </div>

        <div>
          {shop.sneakers.map((s) => {
            return <div></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
