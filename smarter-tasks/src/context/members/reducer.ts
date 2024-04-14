interface Member{
    id: number
    name: string
    email:string
    password: string
  }
  // Now, I'll rename the interface in the `MemberList` component from `State`
  // to `MembersState`. And I'll also export the interface. 
  
  export interface MembersState {
    members: Member[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }

  export const initialState: MembersState = {
    members: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
  };
  // Next, I'll comment the `Action` interface
  
  // interface Action {
  //   type: string;
  //   payload?: any;
  // }
  
  // Then I'll define a new type called `MembersActions` 
  // for all possible combimations of action objects.

  export type MembersActions = 
  | { type: 'FETCH_MEMBERS_REQUEST' }
  | { type: 'API_CALL_START' }
  | { type: 'DELETE_MEMBER_SUCCESS',payload: Member}
  | { type: 'ADD_MEMBER_SUCCESS'; payload: Member }
  | { type: 'API_CALL_END'; payload: Member[] }
  | { type: 'API_CALL_ERROR'; payload: string }
  // | { type: 'FETCH_MEMBERS_SUCCESS'; payload: Member[] }
  // | { type: 'FETCH_MEMBERS_FAILURE'; payload: string }
  
  // Next, I'll update reducer function accordingly with newly defined types
  
  // export const reducer = (state: State, action: Action): State => {
  
  export const reducer = (state: MembersState = initialState, action: MembersActions): MembersState => {
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
          members: action.payload,
        };      
      case "API_CALL_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true, 
          errorMessage: action.payload
        };
        
      case 'ADD_MEMBER_SUCCESS':
        return{...state,members: [...state.members, action.payload]};
    

      case 'DELETE_MEMBER_SUCCESS':
        return {
          ...state,
          members: state.members.filter((member) => member.id !== action.payload.id)
        }

      // case "FETCH_MEMBERS_REQUEST":
      //   return {
      //     ...state,
      //     isLoading: true
      //   };

      // case "FETCH_MEMBERS_SUCCESS":
      //   return {
      //     ...state,
      //     isLoading: false,
      //     members: action.payload,
      //   };
      // case "FETCH_MEMBERS_FAILURE":
      //   return {
      //     ...state,
      //     isLoading: false,
      //     isError: true,
      //     errorMessage: action.payload
      //   }

      default:
        return state;
    }
}