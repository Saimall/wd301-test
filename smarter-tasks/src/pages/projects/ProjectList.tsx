import { fetchProjects } from "../../context/projects/actions";
import { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import ProjectListItems from './ProjectListItems';
const ProjectList: React.FC = () => {

  const dispatchProjects = useProjectsDispatch();
  
  useEffect(() => {
    fetchProjects(dispatchProjects)
  }, [])
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      <ProjectListItems />
    </div>
  );
};
export default ProjectList;



// import React, { useEffect, useReducer } from 'react';
// import { API_ENDPOINT } from '../../config/constants';

// interface Project {
//   id: number;
//   name: string;
// }

// interface State {
//     projects: Project[];
//     isLoading: boolean;
//   }
// interface Action {
//   type: string;
//   payload?: any;
// }

// // type Action =
// //   | { type: 'FETCH_PROJECTS_REQUEST' }
// //   | { type: 'FETCH_PROJECTS_SUCCESS'; payload: Project[] }
// //   | { type: 'FETCH_PROJECTS_FAILURE' };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'FETCH_PROJECTS_REQUEST':
//       return { ...state, isLoading: true };
//     case 'FETCH_PROJECTS_SUCCESS':
//       return { ...state, projects: action.payload, isLoading: false };
//     case 'FETCH_PROJECTS_FAILURE':
//       return { ...state, isLoading: false };
//     default:
//       return state;
//   }
// };

// const ProjectList: React.FC = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     projects: [],
//     isLoading: false,
//   });

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     dispatch({ type: 'FETCH_PROJECTS_REQUEST' });

//     const token = localStorage.getItem('authToken') ?? '';

//     try {
//       const response = await fetch(`${API_ENDPOINT}/projects`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//       });

//       if (response.ok) {
//         const data: Project[] = await response.json();
//         dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: data });
//       } else {
//         dispatch({ type: 'FETCH_PROJECTS_FAILURE' });
//       }
//     } catch (error) {
//       console.log('Error fetching projects:', error);
//       dispatch({ type: 'FETCH_PROJECTS_FAILURE' });
//     }
//   };

//   return (
//     <div>
//       {state.isLoading ? (
//         <div>Loading...</div> // You can replace this with a progress bar component
//       ) : (
//         <div className="grid gap-4 grid-cols-4 mt-5">
//           {state.projects.map(project => (
//             <div key={project.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//               <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectList;
