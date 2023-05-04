import Price from "../Price";
import "./ShopBy.scss";
import colors from "../../Data/colors.json";
import { sizes } from "../../Data/sizeAndSortList.js";
import brands from "../../Data/brands.json";
import CheckboxComponent from "../CheckboxComponent";
import { useState } from "react";

const ShopBy = ({
  shoeItems,
  handleOnPriceRange,
  handleOnGetItemFromCheckbox,
}) => {
  // store all value of checkbox you have been checked.
  const [allCheckedItems, setAllCheckedItems] = useState([]);

  const checkboxResult = shoeItems.filter((shoe) => {
    if (allCheckedItems.length === 0) return shoeItems;
    return allCheckedItems.find(
      (col) =>
        shoe.color === col ||
        allCheckedItems.find((designer) => shoe.designer === designer)
    );
  });

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;
    let itemsChecked = [...allCheckedItems];
    if (checked) {
      itemsChecked = [...allCheckedItems, value];
    } else {
      itemsChecked.splice(allCheckedItems.indexOf(value), 1);
    }
    setAllCheckedItems(itemsChecked);
    // Get data from child to parent component (shopBy.jsx)
    handleOnGetItemFromCheckbox?.([...checkboxResult]);
  };

  return (
    <div className="shopBy">
      <div className="sortBy">
        <h3>Shop By</h3>
      </div>
      <div>
        <Price handleOnPriceRange={handleOnPriceRange} shoeItems={shoeItems} />
        <div className="titleAction">COLOR</div>
        <CheckboxComponent
          handleOnCheck={handleOnCheck}
          checkboxItems={colors}
        />
        <div className="titleAction">SIZE</div>
        <CheckboxComponent
          handleOnCheck={handleOnCheck}
          checkboxItems={sizes}
        />
        <div className="titleAction">BRAND</div>
        <CheckboxComponent
          handleOnCheck={handleOnCheck}
          checkboxItems={brands}
        />
      </div>
    </div>
  );
};

export default ShopBy;
