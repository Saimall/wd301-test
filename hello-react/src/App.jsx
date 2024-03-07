import { useState } from 'react'
import TaskCard from './TaskCard';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <html>
      <h1 className="Title">Smarter Tasks</h1>
      <p className="Sub"><strong className='Subtitle'>Project:</strong> Final Year Project(Revamp College Website)</p>
      <br/>
      <div className='side'>

        <div className="mr-8 border-2 border-slate-800 rounded-lg px-4 py-4 w-1/2">
          <h1 className="text-2xl text-center font-bold text-red-500">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="22-02-2024" assigneeName="Manager"/>
          <TaskCard title="Add Blog" dueDate="22-03-2024" assigneeName="Manager"/>
          <p className="bg-gray-400 font-bold text-left">+ New Task</p>
        </div>
      
        <div className="mr-8 border-2 border-slate-800 rounded-lg px-4 py-4 w-1/2">
          <h1 className="text-2xl text-center font-bold text-red-500">Done</h1>
          <TaskCard title="Design the mockup" completedAtDate="20-07-2023" assigneeName="Manager"/>
          <TaskCard title="Get approval from principal" completedAtDate="20-05-2023" assigneeName="Manager"/>
        </div>
      </div>

    </html>
  );
}

export default App;
