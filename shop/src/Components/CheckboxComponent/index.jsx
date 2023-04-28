import "./CheckboxComponent.css";
const CheckboxComponent = ({ checkboxItems }) => {
  return (
    <div className="colorContainer">
      {checkboxItems.map((item) => {
        return (
          <div key={item.id}>
            <label>
              <input className="checkboxInput" type="checkbox" />
              <span className="checkboxLabel">{item.label}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxComponent;
