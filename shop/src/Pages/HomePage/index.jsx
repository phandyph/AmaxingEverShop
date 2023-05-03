import "./HomePage.css";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import FeatureCard from "../../Components/FeatureCard";
import homePageCardContent from "../../Data/homePageCardContent.json";
import shop from "../../Data/shop.json";
const shoesForHomePage = shop.sneakers.slice(0, 4);

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
          <FeatureCard shoeItems={shoesForHomePage} />
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
