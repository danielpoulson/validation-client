import React from "react";

type Props = {
  name: string,
  label: string,
  onChange: any,
  defaultOption: string,
  error: boolean,
  inputdiv: string,
  labelstyle: string,
  options: mixed[],
  outerDivClass: string,
  override: boolean,
  value: any
};
// TODO: (5) @easy error box refine formatting
const SelectInput = ({
  name,
  label,
  inputdiv,
  labelstyle,
  onChange,
  override,
  outerDivClass,
  defaultOption,
  value,
  error,
  options
}: Props) => {
  // let wrapperClass = 'form-control';
  // let selectClass = `${inputdiv} styled`;

  // if (error) {
  //   wrapperClass += ' has-error';
  // }

  // if (override) {
  //   selectClass = inputdiv;
  // }

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>

      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select is-fullwidth">
              {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
              <select name={name} value={value} onChange={onChange}>
                <option value="">{defaultOption.text}</option>
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
