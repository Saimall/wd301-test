import "./TaskCard.css";
const TaskCard = (props) => {
    //(stacic) 
    console.log(props);
    return (
      <div className="Pending">
        <div className="TaskItem">
          <h2 className="text-xl font-bold text-red-500">{props.title}</h2>
          <p>Due on: {props.dueDate}</p>
          <p>Assignee: {props.assigneeName}</p>
        </div>
      </div>,
      <div className="Done">
        <div className="TaskItem">
          <h2 className="text-xl font-bold text-red-500">{props.title}</h2>
          <p>Completed on: {props.completedAtDate}</p>
          <p>Assignee: {props.assigneeName}</p>
        </div>
      </div>
    )
};

export default TaskCard