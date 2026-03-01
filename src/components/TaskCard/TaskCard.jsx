import React from "react";
import "./TaskCard.css";
import Tag from "../Tag/tag";
import DeleteIcon from "../../assets/dlete.png";
const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is my sample Text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="Dev" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
          <img src={DeleteIcon} alt="" className="delete_icon"></img>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
