//Ver.002 DP
import React from "react";
import moment from "moment";
import { getTraffic } from "../../utils/status";

type Props = {
  task: any,
  onSelectTask: any
};

const TaskRow = ({ task, onSelectTask }: Props) => {
  const minColTarget = {
    minWidth: 100
  };
  const minColChamp = {
    minWidth: 140
  };
  const capa = task.TKCapa === 1 ? "fa fa-product-hunt" : "";
  return (
    <tr
      onClick={onSelectTask.bind(null, {
        id: task._id,
        SourceId: task.SourceId
      })}
    >
      <td>
        {task.SourceId} - {task.TKName} <i className={capa} />
      </td>
      <td style={minColTarget}>{moment(task.TKTarg).format("DD/MM/YYYY")}</td>
      <td style={minColChamp}>{task.TKChamp}</td>
      <td>
        <i className={getTraffic(task.TKTarg, task.TKpcent)} />
      </td>
    </tr>
  );
};

export default TaskRow;
