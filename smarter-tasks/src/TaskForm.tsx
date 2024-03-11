import React from "react";
interface TaskFormProps {
  
}
interface TaskFormState {
  title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: ""
    }
  }
  inputRef = React.createRef<HTMLInputElement>();
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with ${this.inputRef.current?.value}`);
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
        <input className="border-2 border-slate-500 rounded-lg w-1/6" type="text" ref={this.inputRef} />
        <button className="border-4 border-purple-700 rounded-lg mx-auto w-1/5" type="submit">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;