import React from "react";
import "./styles.css";

type Props = {
  hideSearch: string,
  searchText: string,
  onChange: any
};

const SearchBox = ({ hideSearch, searchText, onChange }: Props) => (
  <div className={hideSearch}>
    <div className="field">
      <p className="control has-icons-left">
        <input
          type="text"
          className="input  "
          value={searchText || ""}
          onChange={onChange}
          placeholder="Enter Search Text"
        />
        <span className="icon is-small is-left">
          <i className="fa fa-search" />
        </span>
      </p>
    </div>
  </div>
);

export default SearchBox;
