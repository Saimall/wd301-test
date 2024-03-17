import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
}
interface State {
  tasks: TaskItem[];
}
class TaskList extends React.Component<Props, State> {

  render() {
    return this.state.tasks.map((task, idx) => (
      <Task key={idx} title={task.title} dueDate={task.dueDate || "17-03-2004"} description={task.description || ""} />
    ));
  }
}
export default TaskList;