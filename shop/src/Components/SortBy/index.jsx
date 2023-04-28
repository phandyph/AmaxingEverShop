import "./SortBy.scss";
import DownArrow from "../../Assets/Icons/DownArrow";
const SortBy = ({ sortList }) => {
  return (
    <div className="sortContainer">
      <div className="sort">
        <span>Sort By: </span>
      </div>
      <div className="select">
        <select name="" id="">
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
      </div>
    </div>
  );
};

export default SortBy;
