import UserBanner from "../UserBanner";
import ShopBy from "../ShopBy";
import SortBy from "../SortBy";
import { sortList } from "../../Data/sizeAndSortList.js";
import shop from "../../Data/shop.json";
import UserPreferenceCards from "../UserPrefereneCards";
import "./UserPrefereneLayout.scss";
import { useState } from "react";
const myShoes = shop.sneakers;
const UserPreferenceLayout = ({ bannerTitle }) => {
  const [listShoesToDisplay, setListShoesToDisplay] = useState([...myShoes]);

  const handleOnSortShoes = (itemsAfterDoAction) => {
    setListShoesToDisplay(itemsAfterDoAction);
  };

  const handleOnPriceRange = (items) => {
    setListShoesToDisplay(items);
  };

  const handleOnGetItemFromCheckbox = (itemsFromCheckbox) => {
    setListShoesToDisplay(itemsFromCheckbox);
  };

  return (
    <div className="userPreferenceContainer">
      <div className="userPreference">
        <UserBanner bannerTitle={bannerTitle} />

        <div className="contentContainer">
          <div className="actionContainer">
            <ShopBy
              handleOnPriceRange={handleOnPriceRange}
              handleOnGetItemFromCheckbox={handleOnGetItemFromCheckbox}
              shoeItems={myShoes}
            />
          </div>

          {/* Focus here. name and retail_price_cents (price)*/}
          <div className="displayCardContainer">
            <div className="sortContainer">
              <SortBy
                shoeItems={myShoes}
                handleOnSortShoes={handleOnSortShoes}
                sortList={sortList}
              />
            </div>
            <UserPreferenceCards shoeItems={listShoesToDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreferenceLayout;
