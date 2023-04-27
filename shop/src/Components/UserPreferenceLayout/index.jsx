import UserBanner from "../UserBanner";
import ShopBy from "../ShopBy";
import SortBy from "../SortBy";
import sortList from "../../Data/sortList.json";
import UserPreferenceCards from "../UserPrefereneCards";
import "./UserPrefereneLayout.scss";

const UserPreferenceLayout = ({ bannerTitle }) => {
  return (
    <div className="userPreferenceContainer">
      <div className="userPreference">
        <UserBanner bannerTitle={bannerTitle} />
        <div className="contentContainer">
          <div className="actionContainer">
            <ShopBy />
          </div>
          <div className="displayCardContainer">
            <div className="sortContainer">
              <SortBy sortList={sortList} />
            </div>
            <UserPreferenceCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreferenceLayout;
