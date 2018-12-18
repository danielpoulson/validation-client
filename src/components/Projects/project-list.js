import React from "react";
import classNames from "classnames";
import ProjectRow from "./project-row";

import "./styles.css";

type Props = {
  colSelected: string,
  projectlist: any,
  getProject: any,
  sortByClick: any
};

const ProjectList = ({
  colSelected,
  projectlist,
  getProject,
  sortByClick
}: Props) => {
  const _projects = projectlist;
  let projects = [];

  const th1Class = classNames({
    "fa fa-sort-asc": colSelected === "pj_no"
  });

  const th2Class = classNames({
    "fa fa-sort-asc": colSelected === "pj_champ"
  });

  const th3Class = classNames({
    "fa fa-sort-asc": colSelected === "pj_target"
  });

  const th4Class = classNames({
    "fa fa-sort-asc": colSelected === "pj_pry"
  });

  if (_projects !== undefined) {
    projects = _projects.map(project => (
      <ProjectRow
        key={project.pj_no}
        project={project}
        getProject={getProject}
      />
    ));
  }

  return (
    <div>
      <table className="table is-hoverable is-fullwidth dp_point dpHand">
        <thead className="print-table-head">
          <tr className="dpHand">
            <th className="col-sm-8" onClick={sortByClick.bind(null, "pj_no")}>
              Project Number and Title <span className={th1Class} />
            </th>
            <th
              className="col-sm-2 has-text-centered"
              onClick={sortByClick.bind(null, "pj_pry")}
            >
              Pry <span className={th4Class} />
            </th>
            <th
              className="col-sm-2"
              onClick={sortByClick.bind(null, "pj_champ")}
            >
              Owner <span className={th2Class} />
            </th>
            <th
              className="col-sm-1 has-text-centered"
              onClick={sortByClick.bind(null, "pj_target")}
            >
              Target <span className={th3Class} />
            </th>
            <th className="col-sm-1">Status</th>
          </tr>
        </thead>
        <tbody>{projects}</tbody>
      </table>
    </div>
  );
};

export default ProjectList;
