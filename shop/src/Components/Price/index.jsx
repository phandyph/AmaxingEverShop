import "./Price.scss";
import { useState, useEffect } from "react";
import { dolorFormat } from "../../util/dolarFormat";

const Price = ({ shoeItems, step, handleOnPriceRange }) => {
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30000);

  const getMinPrice = () => {
    setMinPrice(Math.min(...shoeItems.map((shoe) => shoe.retail_price_cents)));
  };

  const getMaxPrice = () => {
    setMaxPrice(Math.max(...shoeItems.map((shoe) => shoe.retail_price_cents)));
  };

  const priceRangeResult = shoeItems.filter((shoe) => {
    return (
      shoe.retail_price_cents >= minValue && shoe.retail_price_cents <= maxValue
    );
  });

  const handleOnMinChange = (e) => {
    e.preventDefault();
    let minRangeValue = +e.target.value - step;
    if (minRangeValue >= 0) setMinValue(minRangeValue);
    handleOnPriceRange?.([...priceRangeResult])
  };

  const handleOnMaxChange = (e) => {
    e.preventDefault();
    let maxRangeValue = +e.target.value + step;
    setMaxValue(maxRangeValue);
    handleOnPriceRange?.([...priceRangeResult])
  };


  useEffect(() => {
    getMinPrice();
    getMaxPrice();
  }, []);


  return (
    <div className="priceRangeContainer">
      <div className="priceRanges">
        <input
          className="thumb thumbZindex3"
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          step={step}
          onChange={handleOnMinChange}
        />

        <input
          type="range"
          className="thumb thumbZindex4"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          step={step}
          onChange={handleOnMaxChange}
        />
      </div>

      <div className="slider">
        <div className="sliderTrack" />
        <div className="sliderRange" />
      </div>

      <div className="tooltips">
        <output className="tooltipText">{dolorFormat(minValue)}</output>
        <output className="tooltipText">{dolorFormat(maxValue)}</output>
      </div>
    </div>
  );
};

export default Price;
