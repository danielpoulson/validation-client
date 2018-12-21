import React from "react";
import styled from "styled-components";

const Span = styled.span`
  margin-left: 0.5rem;
  font-weight: bolder;
`;

type Props = {
  tabPostion: number,
  tabName: string,
  tabType: string,
  tabCount: number,
  showTab: Function
};

const TabRow = ({
  tabPostion,
  tabName,
  tabType,
  tabCount,
  showTab,
  activeTab
}: Props) => {
  return (
    <li className={tabType === activeTab ? "tab-is-active" : ""}>
      <span onClick={showTab.bind(null, { tabType })} data-toggle="tab">
        {tabName}
        {tabCount === 0 ? "" : <Span className="">({tabCount})</Span>}
      </span>
    </li>
  );
};

export default TabRow;
