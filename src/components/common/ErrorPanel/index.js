import React from "react";
import "./styles.css";

type Props = {
  errors: any,
  sourcepanel: string
};

const ErrorPanel = ({ errors, sourcepanel }: Props) => {
  const errorlist = errors.map((e, i) => (
    <li key={i}>
      <span className="fa fa-exclamation-triangle" /> - {e}
    </li>
  )); // eslint-disable-line react/no-array-index-key

  return (
    <div className={`${sourcepanel}`}>
      <ul className="cc-common-error-panel-error-list-image">{errorlist}</ul>
    </div>
  );
};

export default ErrorPanel;
