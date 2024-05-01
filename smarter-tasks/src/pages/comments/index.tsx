import CommentListItem from "./CommentListItem"
import NewComment from "./NewComment"

const CommentIndex:React.FC = () => {
    return(
        <>
            <div className="flex justify-between items-center">
                <NewComment/>
            </div>
            <CommentListItem/>
        </>
    )
}

export default CommentIndex;