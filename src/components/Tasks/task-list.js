// @flow
import React from "react";
import TaskTable from "./task-table";
import "./styles.css";

type Props = {
  exportTasks: Function,
  onSelectTask: any,
  newTask: any,
  type: string,
  tasksTab: string,
  tasklist: any
};
const TaskList = (props: Props) => {
  let hideButton = "";

  if (props.type === "All") {
    hideButton = "is-hidden";
  }

  return (
    <div className={props.tasksTab}>
      <div>
        <TaskTable
          tasklist={props.tasklist}
          onSelectTask={props.onSelectTask}
        />
      </div>
      <div className={hideButton}>
        <button className="button is-success" onClick={props.newTask}>
          New Task{" "}
        </button>
        <button
          className="button is-info valclient__tasklistbutton-spacing"
          onClick={props.exportTasks}
        >
          Export Tasks{" "}
        </button>
      </div>
    </div>
  );
};

export default TaskList;
