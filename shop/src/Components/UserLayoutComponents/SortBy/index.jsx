import "./SortBy.css";
import SelectIcon from "../../../Assets/Icons/SelectIcon";
const SortBy = ({ sortList }) => {
  return (
    <div className="sortAction">
      <div className="sortContainer">
        <span className="sortBy">Sort By: </span>
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
    </div>
  );
};

export default SortBy;
