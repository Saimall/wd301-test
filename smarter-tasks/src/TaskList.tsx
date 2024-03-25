import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (idx: number) => void;
}

const TaskList = (props: Props) => {
  const handle = (idx: number) => {
    props.onDelete(idx);
  }
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTask={() => handle(idx)}
      />
      <button onClick={() => handle(idx)} className="deleteTaskButton bg-red-400 mx-auto rounded-m hover:bg-red-800">
        Delete
      </button>
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;