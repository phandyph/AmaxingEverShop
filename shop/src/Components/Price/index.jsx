import "./Price.scss";
const Price = () => {
  return (
    <div className="priceRangeContainer">
      <div className="price">PRICE</div>
      <div className="priceRanges">
        <input type="range" min="0" max="1000" className="thumb thumbZindex3" />
        <div className="slider">
          <div className="sliderTrack" />
          <div className="sliderRange" />
        </div>

        <input type="range" min="0" max="1000" className="thumb thumbZindex4" />
        <div className="slider">
          <div className="sliderTrack" />
          <div className="sliderRange" />
        </div>
      </div>
    </div>
  );
};

export default Price;
