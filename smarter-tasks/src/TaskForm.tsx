import React from "react";
interface TaskFormProps {
  
}
interface TaskFormState {
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Submitted the form!");
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input className="border-2 border-slate-500 rounded-lg w-1/6" type="text" />
        <button className="border-4 border-purple-700 rounded-lg mx-auto w-1/5" type="submit">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;