import "./SortBy.scss";
import DownArrow from "../../Assets/Icons/DownArrow";
import { useState, useEffect } from "react";
import { sortShoesByNameAndPrice } from "../../util/sortShoesByNameAndPrice";

const SortBy = ({ shoeItems, sortList, handleOnSortShoes }) => {
  const [optionChosen, setOptionChosen] = useState("please select");
  const [disItemAfterChosen, setDisItemAfterChosen] = useState(shoeItems);
  sortShoesByNameAndPrice({ optionChosen, disItemAfterChosen });

  // Data update but render late (here is the reason)
  useEffect(() => {
    if (disItemAfterChosen.length > 0) {
      setDisItemAfterChosen(sortShoesByNameAndPrice({ optionChosen, disItemAfterChosen }));
    }
    handleOnSortShoes?.([...disItemAfterChosen]);
  }, []); //any problem happen when I put dependencies

  const handleOnSort = (option) => {
    setOptionChosen(option.target.value);
    handleOnSortShoes?.([...disItemAfterChosen]);
  };

  return (
    <div className="sortContainer">
      <div className="sort">
        <span>Sort By: </span>
      </div>
      <form className="select">
        <select name="" id="" onChange={handleOnSort}>
          {sortList.map((item) => {
            return (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
        <div className="downArrow">
          <DownArrow />
        </div>
      </form>
    </div>
  );
};

export default SortBy;
