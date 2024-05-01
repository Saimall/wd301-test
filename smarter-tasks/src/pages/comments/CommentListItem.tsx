/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { useCommentsDispatch, useCommentsState } from "../../context/comment/context";
import { useParams } from "react-router-dom";
import { fetchComment } from "../../context/comment/actions";


const CommentListItem:React.FC =() => {
    const dispatch = useCommentsDispatch();
    let { projectID, taskID } = useParams();
    let commentsState = useCommentsState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (projectID && taskID) {
              console.log("Fetching comments...");
              await fetchComment(dispatch, projectID, taskID);
    
              //Reorder them at site
              // await reorderComments(dispatch,commentsState);
            }
          } catch (error) {
            console.error("Error fetching comments:", error);
          }
        };
    
        fetchData();
      }, [projectID, taskID]);

    return(
        <div className="comment my-3 bg-white-200 rounded p-3">
        {commentsState.isLoading ? (
            <p>Loading comments...</p>
        ) : commentsState.isError ? (
            <p>Error: {commentsState.errorMessage}</p>
        ) : (
            <div className="comment rounded-lg mt-2 space-y-4">
                {commentsState.data.slice().map((comment) => (
                <div
                    key={comment.id}
                    className="p-3 bg-gray-100 rounded-lg shadow-md comment"
                >
                    <div className="text-gray-600">
                        {comment.User && (
                            <>
                                <p className="m-2">
                                    <strong>Name:</strong> {comment.User.name}
                                </p>
                                <p className="m-2">
                                    <strong>Timestamp:</strong>{" "}
                                    {comment.createdAt &&
                                    comment.createdAt.toLocaleString()}
                                </p>
                                
                                <p className="m-2">
                                    <strong>Comment:</strong> {comment.description}
                                </p>
                            </>
                        )}
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
    )
}
                    

export default CommentListItem;
