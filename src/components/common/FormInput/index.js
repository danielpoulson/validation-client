import React from "react";

class FormInput extends React.Component {
  props: {
    name: string,
    label: string,
    onChange: any,
    placeholder: string,
    value: string,
    error: boolean,
    inputbox: string,
    inputdiv: string,
    inputfield: string,
    labelstyle: string,
    outerDivClass: string,
    type: string
  };
  render() {
    // let wrapperClass = 'form-group';
    const _inputfield = `field ${this.props.inputfield}`;
    const _inputbox = `input ${this.props.inputbox}`;
    // const _inputdiv = this.props.inputdiv;
    // const _labelstyle = this.props.labelstyle;

    // if (this.props.error) {
    //   wrapperClass += ' has-error';
    // }

    return (
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">{this.props.label}</label>
        </div>
        <div className="field-body">
          <div className={_inputfield}>
            <div className="control">
              <input
                className={_inputbox}
                name={this.props.name}
                type="text"
                ref={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value || ""}
                onChange={this.props.onChange}
              />
              {this.props.error && (
                <div className="alert alert-danger">{this.props.error}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormInput;
