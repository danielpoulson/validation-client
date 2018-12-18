import React from "react";
import SearchBox from "../SearchBox";
import "./styles.css";

type Props = {
  colSize: string,
  headerSize: stirng,
  hideSearch: string,
  onSearchText: any,
  searchText: string,
  title: string
};

const SectionHeader = ({
  colSize,
  headerSize,
  hideSearch,
  onSearchText,
  searchText,
  title
}: Props) => (
  <div className="section-header-main section-header-other">
    <div className="columns">
      <div className="column is-three-quarters">
        <p className={`section-header-text-${headerSize}`}>{title}</p>
      </div>
      <div className="column">
        <SearchBox
          hideSearch={hideSearch}
          searchText={searchText}
          onChange={onSearchText}
        />
      </div>
    </div>
  </div>
);

export default SectionHeader;
