import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comment';
import EditCommentForm from '../EditComments/EditCommentForm';
import CommentMenu from '../EditComments/CommentMenu';
import ViewPostModal from '../ViewPost/ViewPostModal';
import './comments.css'


const Comments = ({ post }) => {
    const dispatch = useDispatch();
    const commentsObj = useSelector(state => state?.commentReducer);
    const [showCommentEdit, setShowCommentEdit] = useState(false);
    const [commentId, setCommentId] = useState(-1)
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    // const sessionUser = useSelector((state) => state.session.user);

    const postComments = comments.filter(comment => comment?.post_id === postId);
    // console.log('LENGTH', postComments)



    useEffect(() => {
        dispatch(getComments(postId));
    }, [dispatch, postId])

    const setEditComment = (commentId, bool) => {
        setShowCommentEdit(bool);
        setCommentId(commentId);
    };

    return (
        <div className='comments-container'>
            {postComments.length > 4 &&
            <div>
            <ViewPostModal post={post}/>
            {/* <div>{postComments[postComments.length-1].comment_body}</div>
            <div>{postComments[postComments.length-2].comment_body}</div> */}
            </div>}
            {postComments?.map((comment, i) => (
                <div key={i}>
                    {comment?.post_id === post?.id &&
                    <div className='comment-body-owner'>
                        <div className='comment-owner-content'>
                            <div className='comment-owner'>{comment?.comment_owner}</div>
                            <div className='comment-content'>{comment?.comment_body}</div>
                            {(showCommentEdit && comment.id === commentId) && <EditCommentForm setShowCommentEdit={setShowCommentEdit} setCommentId={setCommentId} comment={comment} />}
                        </div>
                        <CommentMenu comment={comment} setEditComment={setEditComment} showCommentEdit={showCommentEdit} setShowCommentEdit={setShowCommentEdit}/>
                    </div>}
                </div>
            ))}
        </div>
    );
}

export default Comments;
