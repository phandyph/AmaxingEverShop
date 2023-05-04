import "./Price.scss";
import { useState, useEffect } from "react";
import { toDolorFormat } from "../../util/toDolarFormat";
const RANGE_STEP = 1

const Price = ({ shoeItems, handleOnPriceRange }) => {
  const [value, setValue] = useState({ min: 0, max: 30000 });
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const getMinMaxPrice = (min, max) => {
    min = Math.min(...shoeItems.map((shoe) => shoe.retail_price_cents));
    max = Math.max(...shoeItems.map((shoe) => shoe.retail_price_cents));
    setPrice({ min: min, max: max });
  };

  const priceRangeResult = shoeItems.filter((shoe) => {
    return (
      shoe.retail_price_cents >= value.min &&
      shoe.retail_price_cents <= value.max
    );
  });

  const handleOnMinChange = (e) => {
    e.preventDefault();
    let minRangeValue = +e.target.value - RANGE_STEP;
    if (minRangeValue >= 0) setValue({ min: minRangeValue, max: value.max });
    handleOnPriceRange?.([...priceRangeResult]);
  };

  const handleOnMaxChange = (e) => {
    e.preventDefault();
    let maxRangeValue = +e.target.value + RANGE_STEP;
    setValue({ min: value.min, max: maxRangeValue });
    handleOnPriceRange?.([...priceRangeResult]);
  };

  useEffect(() => {
    getMinMaxPrice();
  }, []);

  return (
    <div className="priceRangeContainer">
      <div className="titleAction">PRICE</div>
      <div className="priceRanges">
        <input
          className="rangeInputBar rangeInputBarIndex3"
          type="range"
          min={price.min}
          max={price.max}
          value={value.min}
          step={RANGE_STEP}
          onChange={handleOnMinChange}
        />

        <input
          type="range"
          className="rangeInputBar rangeInputBarIndex4"
          min={price.min}
          max={price.max}
          value={value.max}
          step={RANGE_STEP}
          onChange={handleOnMaxChange}
        />
      </div>

      <div className="slider">
        <div className="sliderTrack" />
        <div className="sliderRange" />
      </div>

      <div className="tooltips">
        <output className="tooltipText">{toDolorFormat(value.min)}</output>
        <output className="tooltipText">{toDolorFormat(value.max)}</output>
      </div>
    </div>
  );
};

export default Price;
