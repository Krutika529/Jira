import React from "react";
import "./task-column.css";
import TaskCard from "../TaskCard/TaskCard";
const TaskColumn = (props) => {
  return (
    <>
      <section className="task_column">
        <h2 className="column_heading">{props.title} </h2>
        <TaskCard />
      </section>
    </>
  );
};

export default TaskColumn;
