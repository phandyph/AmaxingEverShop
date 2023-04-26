import "./KidsPage.css";
import FeatureCard from "../../Components/FeatureCard";
import ShopBy from "../../Components/UserLayoutComponents/ShopBy";
import UserBanner from "../../Components/UserLayoutComponents/UserBanner";
import SortBy from "../../Components/UserLayoutComponents/SortBy";
import sortList from "../../Data/sortList.json"
const KidsPage = () => {
  return (
    <div className="userPreferenceContainer">
      <div className="userPreference">
        <UserBanner />

        <div className="contentContainer">
          <div className="actionContainer">
            <ShopBy />
          </div>

          <div className="displayCardContainer">
            <div className="sortContainer">
              <SortBy sortList={sortList}/>
            </div>
            <div className="userPreCardsContainer">
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KidsPage;
