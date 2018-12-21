import React from "react";
import "./style.css";

type Props = {
  headerSize: stirng,
  title: string
};

const SectionHeaderDetail = ({ headerSize, title }: Props) => {
  title = title.length > 90 ? `${title.substring(0, 80)} ...` : title;
  return (
    <div className="pmr__HeaderDetail-main">
      <div className="pmr__HeaderDetail-text">
        <p className={`pmr__HeaderDetail-text-${headerSize}`}>{title}</p>
      </div>
    </div>
  );
};

export default SectionHeaderDetail;
