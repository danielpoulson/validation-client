import React from "react";
import DatePicker from "react-date-picker";
import "./new-date-picker.css";

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

  //   const DAY_FORMAT = 'DD/MM/YYYY';
  //   const formattedDay = selectedDay ? moment(selectedDay).format(DAY_FORMAT) : '';

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <DatePicker
              className="dpDatePicker"
              onChange={onChange}
              value={selectedDay}
              locale="en-AU"
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
