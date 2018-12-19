//SYNC Ver.002 DP
import React from "react";
import TaskRow from "./task-row";

type Props = {
  tasklist: any,
  onSelectTask: any
};

const TaskTable = ({ tasklist, onSelectTask }: Props) => {
  const _tasks = tasklist;
  let tasks = [];

  if (_tasks !== undefined) {
    tasks = _tasks.map(task => (
      <TaskRow key={task._id} task={task} onSelectTask={onSelectTask} />
    ));
  }

  return (
    <table className="table is-hoverable is-fullwidth dp_point">
      <thead className="">
        <tr>
          <th> Project Id and Task Name </th>
          <th> Target Date </th>
          <th> Champion </th>
          <th> Status </th>
        </tr>
      </thead>
      <tbody className="panel-body dpHand">{tasks}</tbody>
    </table>
  );
};

export default TaskTable;
