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
  const [allCheckedItem, setAllCheckedItem] = useState([]);

  const checkboxResult = shoeItems.filter((shoe) => {
    if (allCheckedItem.length === 0) return shoeItems;
    return allCheckedItem.find(
      (col) =>
        shoe.color === col ||
        allCheckedItem.find(
          (designer) =>
            shoe.designer === designer ||
            allCheckedItem.find(() => shoe.size_range.includes(20))
        )
    );
  });

  const handleOnCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    let itemsChecked = [...allCheckedItem];
    if (checked) {
      itemsChecked = [...allCheckedItem, value];
    } else {
      itemsChecked.splice(allCheckedItem.indexOf(value), 1);
    }
    setAllCheckedItem(itemsChecked);

    handleOnGetItemFromCheckbox?.([...checkboxResult]);
  };

  console.log("Hello what I have selected: ", allCheckedItem);
  console.log("Hello result ", checkboxResult);

  return (
    <div className="shopBy">
      <div className="sortBy">
        <h3>Shop By</h3>
      </div>
      <div>
        <Price
          handleOnPriceRange={handleOnPriceRange}
          shoeItems={shoeItems}
          step={1}
        />
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
