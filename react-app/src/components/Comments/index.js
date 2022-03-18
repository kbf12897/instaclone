import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comment';
import EditCommentForm from '../EditComments/EditCommentForm';
import CommentMenu from '../EditComments/CommentMenu';
import './comments.css'


const Comments = ({ post }) => {
    const dispatch = useDispatch();
    const commentsObj = useSelector(state => state?.commentReducer);
    // const [showCommentEdit, setShowCommentEdit] = useState(false);
    // const [commentId, setCommentId] = useState(-1)
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getComments(postId));
    }, [dispatch, postId])

    // const setEditComment = (commentId, bool) => {
    //     setShowCommentEdit(bool);
    //     setCommentId(commentId)
    // }

    return (
        <div className='comments-container'>
            {comments?.map(comment => (
                <>
                    {comment?.post_id === post?.id &&
                    <div className='comment-body-owner' key={comment.id}>
                        <div className='comment-owner-content'>
                            <div className='comment-owner'>{comment?.comment_owner}</div>
                            <div className='comment-content'>{comment?.comment_body}</div>
                            {/* <EditCommentForm setShowCommentEdit={setShowCommentEdit} setCommentId={setCommentId} comment={comment} /> */}
                        </div>
                        {/* {sessionUser?.id === comment?.user_id && <div className='comment-three-dots' onClick={() => setEditComment(comment?.id, !showCommentEdit)}><svg aria-label="More options" className="three-dots-comments" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></div>} */}
                        <CommentMenu comment={comment} />
                    </div>}
                </>
            ))}
        </div>
    );
}

export default Comments;
