import React from "react";
import { TaskItem } from "./types";
import './TaskCard.css';

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  tasks: TaskItem[];
  title: string;
  description: string;
  dueDate: Date;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  DescriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.valueAsDate}`);
    this.setState({dueDate: event.target.valueAsDate || new Date()});
  };

  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      tasks: [],
      title: "",
      description: "",
      dueDate: new Date()
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    };
    this.props.addTask(newTask);
    this.setState({ title: "" , dueDate: new Date() ,description: ""});
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="TaskItem flexbox w-64">
          <label className="flex font-bold" form="todoTitle" >Title</label>
          <input id="todoTitle" className="flex border-2 border-slate-500 rounded-lg w-1/10" type="text" value={this.state.title} onChange={this.titleChanged} required />

          <label className="flex font-bold" form="todoDescription" >Description</label>
          <input id="todoDescription" className="flex border-2 border-slate-500 rounded-lg w-1/10" type="text" value={this.state.description} onChange={this.DescriptionChanged} />

          <label className="flex font-bold" form="todoDueDate" >DueDate</label>
          <input id="todoDueDate" className="flex border-2 border-slate-500 rounded-lg w-1/10" type="date" onChange={this.dueDateChanged} required />
        </div>
        <br />
        <button id="addTaskButton" className="border-4 border-purple-700 rounded-lg mx-auto w-1/5" type="submit">Add item</button>
      </form>
    )
  }
}
export default TaskForm;