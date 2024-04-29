/* eslint-disable react-refresh/only-export-components */
import React ,{ createContext, useContext, useReducer } from "react";
import {commentReducer} from "./reducer";
import {CommentListState,CommentsDispatch, initialStateComment} from "./types";

const CommentsStateContext = createContext<CommentListState>(initialStateComment);
const CommentsDispatchContext = createContext<CommentsDispatch>(() => {});

export const CommentProvider:React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    //State and dispatch..
    const [state, dispatch] = useReducer(commentReducer,initialStateComment);
    return(
        <CommentsStateContext.Provider value={state}>
            <CommentsDispatchContext.Provider value={dispatch}>
                {children}
            </CommentsDispatchContext.Provider> 
        </CommentsStateContext.Provider>
    )
}

//Creating helper hooks..
export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);