import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./new-date-picker.css";

type Props = {
  error: boolean,
  inputdiv: string,
  label: string,
  labelstyle: string,
  onChange: Function,
  selectedDay: string
};

const ReactDatePicker = ({
  error,
  inputdiv,
  label,
  labelstyle,
  onChange,
  outerDivClass,
  selectedDay
}: Props) => {
  const spanStyle = { color: "red" };

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              onChange={onChange}
              selected={selectedDay && new Date(selectedDay)}
            />
            {error && (
              <div style={spanStyle} className="input">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactDatePicker;
