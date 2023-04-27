import Price from "../Price";
import CheckboxComponent from "../CheckboxComponent";
import colors from "../../Data/colors.json";
import sizes from "../../Data/sizes.json";
import brands from "../../Data/brands.json";
import "./ShopBy.scss";
const ShopBy = () => {
  return (
    <div className="shopBy">
      <div className="sortBy">
        <h3>Shop By</h3>
      </div>
      <div>
        <Price />
        <div className="titleAction">COLOR</div>
        <CheckboxComponent checkboxItems={colors} />
        <div className="titleAction">SIZE</div>
        <CheckboxComponent checkboxItems={sizes} />
        <div className="titleAction">BRAND</div>
        <CheckboxComponent checkboxItems={brands} />
      </div>
    </div>
  );
};

export default ShopBy;
