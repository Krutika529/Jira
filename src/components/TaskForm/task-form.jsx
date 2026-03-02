import React, { useState } from "react";
import "./task-form.css";
import Tag from "../Tag/tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for Development",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => [...prev, taskData]);

    // reset form
    setTaskData({
      task: "",
      status: "Ready for Development",
      tags: [],
    });
  };

  const selectedTag = (tag) => {
    if (taskData.tags.includes(tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);

      setTaskData((prev) => ({
        ...prev,
        tags: filteredTags,
      }));
    } else {
      setTaskData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  return (
    <header className="app_header">
      <h1 className="head">Jira Board</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          className="text_input"
          placeholder="Enter Text Here"
          value={taskData.task}
          onChange={handleChange}
        />

        <div className="task_form_bottom">
          <div>
            <Tag tagName="DEV" selectedTag={selectedTag} />
            <Tag tagName="QA" selectedTag={selectedTag} />
            <Tag tagName="Product Owner" selectedTag={selectedTag} />
          </div>

          <div>
            <select
              name="status"
              className="task_status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Testing">Ready for Testing</option>
              <option value="Closed">Closed</option>
            </select>

            <button className="task_submit" type="submit">
              +Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
