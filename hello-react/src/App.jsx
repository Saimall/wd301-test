import { useState } from 'react'
import TaskCard from './TaskCard';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <html>
        <h1 className="Title">Smarter Tasks</h1>
        <h2 className="Subtitle">Project: </h2><p className="Sub">Final Year Project(Revamp College Website)</p>
      <div>
        <div>
          <h1>Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="22-02-2024" completedAtDate="20-10-2023" assigneeName="Manager"/>
          <TaskCard title="Add Blog" dueDate="22-03-2024" completedAtDate="20-11-2023" assigneeName="Manager"/>
        </div>
      
        <div>
          <h1>Done</h1>
          <TaskCard title="Design the mockup" dueDate="22-06-2024" completedAtDate="20-07-2023" assigneeName="Manager"/>
          <TaskCard title="Get approval from principal" dueDate="22-03-2024" completedAtDate="20-05-2023" assigneeName="Manager"/>
        </div>
      </div>
    </html>
  );
}

export default App;
