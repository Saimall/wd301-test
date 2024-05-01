/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { addComments } from "../../context/comment/actions";
import { useCommentsDispatch } from "../../context/comment/context";
import { CommentDetailsPayload } from "../../context/comment/types";

const NewComment = () => {
    const dispatch = useCommentsDispatch();
    const { projectID = "", taskID = "" } = useParams<{
        projectID?: string;
        taskID?: string;
      }>();
    let [inputComment, setInputComment] = useState("");

    const {
        register,
        handleSubmit,
        formState: {},
      } = useForm<CommentDetailsPayload>({
        defaultValues: {
          description: ""
        },
    });

    const onSubmitComment: SubmitHandler<CommentDetailsPayload> = async () => {
        try {
          await addComments(dispatch, projectID ?? "", taskID ?? "", {
            description: inputComment,
          });
      
          setInputComment("");
        } catch (error) {
          console.error("Failed to add comment:", error);
        }
    };

    return (
        <>
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
            >
                Create new comment
            </Dialog.Title>
            <div className="mt-2">
                <form onSubmit={handleSubmit(onSubmitComment)} className="mt-5">
                    <h3 className="mb-3 mx-auto text-xl font-semibold">
                        Comment Details
                    </h3>

                    <input
                        type="text"
                        placeholder="Write comment here"
                        id="commentBox"
                        required
                        {...register("description",{required:true})}
                        onChange={(e) => setInputComment(e.target.value)}
                        value={inputComment}
                        className="w-full px-3 py-2 my-4 leading-tight text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                    />
                    <button
                        type="submit"
                        id="addCommentBtn"
                        className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Add comment
                    </button>
                </form>
            </div>           
            </Dialog.Panel>
        </>
    );
};
export default NewComment;