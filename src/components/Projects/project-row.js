import React from "react";
import moment from "moment";
import { getStatCC, getPry } from "../../utils/status";
import "./styles.css";

type Props = {
  project: any,
  getProject: any
};

const ProjectRow = ({ project, getProject }: Props) => {
  const projectTitle = `${project.pj_no} - ${project.pj_title}`;
  return (
    <tr
      onClick={getProject.bind(null, {
        projno: project.pj_no,
        id: project._id
      })}
    >
      <td> {projectTitle}</td>
      <td>
        <p className={getPry(project.pj_pry)}>{project.pj_pry}</p>
      </td>
      <td> {project.pj_champ} </td>
      <td className="has-text-centered">
        {moment(project.pj_target).format("DD/MM/YYYY")}
      </td>
      <td className="colaligncenter">
        <i className={getStatCC(project.pj_stat)} />
      </td>
    </tr>
  );
};

export default ProjectRow;
