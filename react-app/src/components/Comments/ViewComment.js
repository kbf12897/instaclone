import { useState } from "react";
import EditCommentForm from "../EditComments/EditCommentForm";
import ViewPostCommentMenu from "../ViewPost/ViewPostEditComment";
import '../ViewPost/ViewPost.css';

const ViewComment = ({ comment }) => {
    const [displayEdit, setDisplayEdit] = useState(false);
    const [commentId, setCommentId] = useState(-1)

    const setEditComment = (commentId, bool) => {
        setDisplayEdit(bool);
        setCommentId(commentId);
    };

    return (
        <div key={comment?.id}>
            <div className='modal-comment-body-owner'>
                <div className='modal-comment-owner-content'>
                    <div className='modal-comment-owner'>{comment?.comment_owner}</div>
                    <div className='comment-content'>{comment?.comment_body}</div>
                    {(displayEdit && comment?.id === commentId) && <EditCommentForm setDisplayEdit={setDisplayEdit} setCommentId={setCommentId} comment={comment} />}
                </div>
                <ViewPostCommentMenu comment={comment} setEditComment={setEditComment} displayEdit={displayEdit} setDisplayEdit={setDisplayEdit} />
            </div>
        </div>
    );
}

export default ViewComment;
