import React from "react";
import { TaskItem } from "./types";
import './TaskCard.css';

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  DescriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
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
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="TaskItem flexbox w-32">
          <input id="todoTitle" className="flex border-2 border-slate-500 rounded-lg w-1/6" type="text" value={this.state.title} onChange={this.titleChanged} required/>
          <input id="todoDescription" className="flex border-2 border-slate-500 rounded-lg w-1/6" type="text" value={this.state.description} onChange={this.DescriptionChanged} />
          <input id="todoDueDate" className="flex border-2 border-slate-500 rounded-lg w-1/6" type="text" value={this.state.dueDate} onChange={this.dueDateChanged} required/>
        </div>
        <button id="addTaskButton" className="border-4 border-purple-700 rounded-lg mx-auto w-1/5" type="submit">Add item</button>
      </form>
    )
  }
}
export default TaskForm;