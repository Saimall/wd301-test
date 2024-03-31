import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[],
  deleteTask: (id: string) => void;
}

const TaskList = (props: Props) => {

  const list = props.tasks.map((task, idx) => (
    <Task
      item = {task}
      key={idx}
      id={task.id}
      todoTitle={task.todoTitle}
      todoDescription={task.todoDescription}
      tododueDate={task.tododueDate}
      removeTask={() => props.deleteTask(task.id)}
    />
  ));
  return <ul>{list}</ul>;
}

export default TaskList;