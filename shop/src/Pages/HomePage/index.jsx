import "./HomePage.css";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import FeatureCard from "../../Components/FeatureCard";
import homePageCardContent from "../../Data/homePageCardContent.json";
import shop from "../../Data/shop.json";
import { useState, useEffect } from "react";
const myShop = shop.sneakers;
const HomePage = () => {
  const [fourDatasInHomePage, setFourDatasHomePage] = useState([]);

  const getFourDatasForHomePage = () => {
    myShop.forEach((sneaker, i)=>{
      if (i < 5) {
        console.log(sneaker);
        setFourDatasHomePage([...fourDatasInHomePage, sneaker])
      }
    })
  };

  useEffect(()=>{
    getFourDatasForHomePage();
  },[fourDatasInHomePage.length < 5])

  console.log(fourDatasInHomePage);

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
          <FeatureCard shoeItems={fourDatasInHomePage} />
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
