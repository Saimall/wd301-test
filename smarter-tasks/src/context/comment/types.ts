export const initialStateComment: CommentListState = {
    data: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};


  export interface CommentListState {
    data: CommentDetails[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export type CommentDetails = {
    id: number;
    description: string;
    createdAt: Date;
    User: {
      name: string;
    };
  };
  
  export type CommentDetailsPayload = {
    description: string;
  };

//Actions
export enum CommentListAvailableAction {
    FETCH_COMMENT_REQUEST = "FETCH_COMMENT_REQUEST",
    FETCH_COMMENT_FAILURE = "FETCH_COMMENT_FAILURE",
    FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS",

    CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
    CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
    CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",

    REORDER_COMMENTS = "REORDER_COMMENTS",
}

export type CommentActions = 
 | {type:CommentListAvailableAction.FETCH_COMMENT_FAILURE ; payload: string}
 | {type:CommentListAvailableAction.FETCH_COMMENT_REQUEST}
 | {type: CommentListAvailableAction.FETCH_COMMENT_SUCCESS; payload: CommentDetails[]}
 | {type: CommentListAvailableAction.CREATE_COMMENT_REQUEST}
 | {type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string}
 | {type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS; payload: CommentDetails}
 | {type: CommentListAvailableAction.REORDER_COMMENTS ; payload: CommentDetails};

//A type to hold dispatch in context..
export type CommentsDispatch = React.Dispatch<CommentActions>;
