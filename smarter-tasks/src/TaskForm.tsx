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
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.valueAsDate}`);
    this.setState({dueDate: event.target.value});
  };

  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: ""
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
    this.setState({ title: "" , dueDate: "" ,description: ""});
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="flexbox w-64">
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

// import React from "react";
// import { TaskItem } from "./types";
// import './TaskCard.css';

// interface TaskFormProps {
//   addTask: (task: TaskItem) => void;
// }
// interface TaskFormState {
//   title: string;
//   description?: string;
//   dueDate: string;
// }

// const TaskForm = (props: TaskFormProps) => {

//   const [formState, setFormState] = React.useState<TaskFormState>({
//     title: "",
//     description: "",
//     dueDate: "",
//   });

//   const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     setFormState({ ...formState, title: event.target.value })
//   }

//   const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.value}`);
//     setFormState({ ...formState, description: event.target.value });
//   };

//   const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
//     console.log(`${event.target.valueAsDate}`);
//     setFormState({ ...formState, dueDate: event.target.value });
//   };

//   const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     console.log("Submitted the form with: ");
//     if (formState.title.length === 0 && formState.dueDate === null) {
//       return;
//     }
//     props.addTask(formState);
//     setFormState({ title: "", dueDate: "", description: "" });
//   };
//   return (
//     <form onSubmit={addTask}>
//       <div className="grid md:grid-cols-4 md:gap-3">
//         <div className="relative z-0 w-full mb-6 group">
//           <input
//             id="todoTitle"
//             name="todoTitle"
//             type="text"
//             value={formState.title}
//             onChange={titleChanged}
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//           />
//           <label
//             htmlFor="todoTitle"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Todo Title
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-6 group">
//           <input
//             id="todoDescription"
//             name="todoDescription"
//             type="text"
//             value={formState.description}
//             onChange={descriptionChanged}
//             placeholder=" "
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           />
//           <label
//             htmlFor="todoDescription"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Description
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-6 group">
//           <input
//             id="todoDueDate"
//             name="todoDueDate"
//             type="date"
//             value={formState.dueDate}
//             onChange={dueDateChanged}
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="todoDueDate"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Due Date
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-6 group">
//           <button
//             id="addTaskButton"
//             type="submit"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Add item
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default TaskForm;