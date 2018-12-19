import React from "react";
import TabRow from "./tab-row";
import { tabData } from "../../utils/helpers";
import "./styles.css";

type Props = {
  mode: string,
  showTab: Function,
  showTabBar: boolean,
  taskCount: number,
  fileCount: number,
  projCount: number,
  vmsCount: number,
  activeTab: string
};

const TabBar = ({
  mode,
  showTab,
  showTabBar,
  fileCount,
  taskCount,
  projCount,
  vmsCount,
  activeTab
}: Props) => {
  let tabs = tabData[mode];

  if (mode === "project") {
    tabs[1].tabCount = taskCount;
    tabs[2].tabCount = fileCount;
  } else {
    tabs[1].tabCount = vmsCount;
    tabs[2].tabCount = projCount;
  }

  let tabList = [];

  if (showTabBar !== "new") {
    tabList = tabs.map(t => (
      <TabRow
        key={t.tabPostion}
        tabPostion={t.tabPostion}
        tabName={t.tabName}
        tabType={t.tabType}
        tabCount={t.tabCount}
        showTab={showTab}
        activeTab={activeTab}
      />
    ));
  } else {
    tabList = (
      <TabRow
        key="1"
        tabName="Details - New"
        tabType="DetailTab"
        showTab={showTab}
        tabCount="0"
        activeTab={activeTab}
      />
    );
  }

  return (
    <div className="tabs tab-bar--tabs">
      <ul className="dpHand tab-bar--tab">{tabList}</ul>
    </div>
  );
};

export default TabBar;
