import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string,
  dueDate?: string,
  completedAtDate?: string,
  assigneeName: string
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    //(stacic) 
    console.log(props);
    return (
        <div className="TaskItem">
          <h2 className="text-xl font-bold text-back-500 text-left padding-5px">{props.title}</h2>
          <br/>
          <p className="text-left">{(props.dueDate) ? `Due on: ${props.dueDate}` : `Completed on: ${props.completedAtDate}`}</p>
          <p className="text-left">Assignee: {props.assigneeName}</p>
        </div>
    )
};

export default TaskCard