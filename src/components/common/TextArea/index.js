import React from "react";

type Props = {
  name: string,
  label: string,
  onChange: any,
  placeholder: string,
  value: string,
  error: string,
  inputdiv: string,
  inputfield: string,
  labelstyle: string,
  rows: string
};

const TextArea = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  inputdiv,
  inputfield,
  labelstyle,
  rows
}: Props) => {
  // let wrapperClass = 'form-group';
  // const _inputstyle = 'form-control' || inputstyle;
  // const _inputdiv = inputdiv;
  // const _labelstyle = labelstyle;

  // if (error && error.length > 0) {
  //   wrapperClass += " has-error";
  // }
  const _inputfield = `field ${inputfield}`;

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className={_inputfield}>
          <div className="control">
            <textarea
              className="textarea"
              name={name}
              type="text"
              placeholder={placeholder}
              value={value || ""}
              onChange={onChange}
            />
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
