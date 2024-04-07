/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useReducer } from 'react';

interface Project {
  id: number;
  name: string;
}

interface State{
    projects: Project[];
    isLoading: boolean;
}

interface Action{
    type: string;
    payload?:any;
}

const reducer = (state : State,action : Action):State => {
    //Dispatch actions
    switch (action.type) {
        case "API_CALL_START":
          return {
            ...state,
            isLoading: true
          };   
        case "API_CALL_END":
          return {
            ...state,
            isLoading: false,
            projects: action.payload,
          };      
        case "API_CALL_ERROR":
          return {
            ...state,
            isLoading: true
          };           
        default:
          return state;
    }
}

const ProjectList: React.FC = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

    const [state, dispatch] = useReducer(reducer, {
        projects: [],
        isLoading: false
    });

    //Default effect
    useEffect(()=>{
        //Fetching projects
        fetchProjects()
    },[]);

    const fetchProjects = async () => {
        const token = localStorage.getItem("authToken") ?? "";
        
        try {
            dispatch({type: "API_CALL_START"});
            //   setIsLoading(true);
            const response = await fetch(`${API_ENDPOINT}/projects`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
            });
            const data = await response.json();

            dispatch({type:"API_CALL_END",payload:data})
            //   setProjects(data);
            //   setIsLoading(false);
        } catch (error) {
            console.log('Error fetching projects:', error);
            //   setIsLoading(false);

            dispatch({type:"API_CALL_ERROR"});
        }
    };
    return (
        <div>
          {state.isLoading ? (
            // <div>Loading...</div> // You can replace this with a progress bar component
            <progress value={50} max={100}/>
          ) : (
            <div className="grid gap-4 grid-cols-4 mt-5">
              {state.projects.map(project => (
                <div key={project.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
    );
};
export default ProjectList;