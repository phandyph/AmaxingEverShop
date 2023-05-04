// import { useState } from "react";
import "./CheckboxComponent.css";
const CheckboxComponent = ({ checkboxItems, handleOnCheck }) => {
  return (
    <div className="colorContainer">
      {checkboxItems.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="checkbox"
              onChange={handleOnCheck}
              className="checkboxInput"
              value={item.value}
            />
            <span className="checkboxLabel">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxComponent;
