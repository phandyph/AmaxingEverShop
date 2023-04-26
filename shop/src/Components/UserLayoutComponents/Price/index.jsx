import "./Price.css";
const Price = () => {
  return (
    <div className="priceRangeContainer">
      <span className="titleAction">PRICE</span>
      <div className="priceRanges">
        <input className="minPriceRange" type="range" min="0" max="904" />
        <input className="maxPriceRange" type="range" min="0" max="904" />
      </div>
    </div>
  );
};

export default Price;
