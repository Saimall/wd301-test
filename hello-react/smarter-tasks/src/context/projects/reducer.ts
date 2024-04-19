interface Project {
    id: number;
    name: string;
  }
  // Now, I'll rename the interface in the `ProjectList` component from `State`
  // to `ProjectsState`. And I'll also export the interface. 
  
  export interface ProjectsState {
    projects: Project[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }

  export const initialState: ProjectsState = {
    projects: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
  };
  // Next, I'll comment the `Action` interface
  
  // interface Action {
  //   type: string;
  //   payload?: any;
  // }
  
  // Then I'll define a new type called `ProjectsActions` 
  // for all possible combimations of action objects.

  export type ProjectsActions = 
  | { type: 'FETCH_PROJECTS_REQUEST' }
  | { type: 'API_CALL_START' }
  | { type: 'API_CALL_END'; payload: Project[] }
  | { type: 'API_CALL_ERROR'; payload: string }
  | { type: 'FETCH_PROJECTS_SUCCESS'; payload: Project[] }
  | { type: 'FETCH_PROJECTS_FAILURE'; payload: string }
  | { type: 'ADD_PROJECT_SUCCESS'; payload: Project }
  // | { type: 'DELETE_PROJECT_SUCCESS'; payload: Project}
  // | { type: 'DELETE_PROJECT_FAILURE'; payload: string}
  
  // Next, I'll update reducer function accordingly with newly defined types
  
  // export const reducer = (state: State, action: Action): State => {
  
  export const reducer = (state: ProjectsState = initialState, action: ProjectsActions): ProjectsState => {
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
          isLoading: false,
          isError: true, 
          errorMessage: action.payload
        };
      case 'ADD_PROJECT_SUCCESS':
        return{...state,projects: [...state.projects, action.payload]};

      case "FETCH_PROJECTS_REQUEST":
        return {
          ...state,
          isLoading: true
        };

      case "FETCH_PROJECTS_SUCCESS":
        return {
          ...state,
          isLoading: false,
          projects: action.payload,
        };
      case "FETCH_PROJECTS_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload
        }
      // case "DELETE_PROJECT_SUCCESS":
      //   return{
      //     ...state,
      //     projects: state.projects.filter((item) => item.id !== action.payload.id)
      //   }
      // case "DELETE_PROJECT_FAILURE":
      //   return{
      //     ...state,
      //     isLoading: false,
      //     isError: true,
      //     errorMessage: action.payload
      //   }
      default:
        return state;
    }
}