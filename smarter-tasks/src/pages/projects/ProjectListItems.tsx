<<<<<<< Updated upstream

import { useProjectsState } from "../../context/projects/context";
export default function ProjectListItems() {

  let state: any = useProjectsState();

  const { projects, isLoading, isError, errorMessage } = state
=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useProjectsState } from "../../context/projects/context";
import { Link } from "react-router-dom";

export default function ProjectListItems() {
  const state : any = useProjectsState();
  const { projects, isLoading, isError, errorMessage } = state;
>>>>>>> Stashed changes
  console.log(projects);

  if (projects.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
<<<<<<< Updated upstream
  
  //show the error message.
=======

>>>>>>> Stashed changes
  if (isError) {
    return <span className="block p-6 bg-red border border-gray-200 rounded-lg">{errorMessage}</span>;
  }

  return (
    <>

      {projects.map((project: any) => (
<<<<<<< Updated upstream
        <div key={project.id} className="block p-4 bg-blue-100 border border-gray-300 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-medium text-black dark:text-white">{project.name}</h5>
        </div>
      ))} 

=======
        <Link
          key={project.id}
          to={`${project.id}`}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
        </Link>
      ))}
>>>>>>> Stashed changes
    </>
  );
}