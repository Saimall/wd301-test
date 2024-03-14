import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  constructor(props: TaskFormProps) {
    super(props);
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input className="border-2 border-slate-500 rounded-lg w-1/6" type="text" value={this.state.title} onChange={this.titleChanged}/>
        <button className="border-4 border-purple-700 rounded-lg mx-auto w-1/5" type="submit">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;