import "./SortBy.scss";
import SelectIcon from "../../Assets/Icons/SelectIcon";
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
        <div className="selectIcon">
          <SelectIcon />
        </div>
      </div>
    </div>
  );
};

export default SortBy;
