import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comment';
import './comments.css'


const Comments = ({ post }) => {
    const dispatch = useDispatch();
    const commentsObj = useSelector(state => state?.commentReducer);
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    // const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getComments(postId));
    }, [dispatch, postId])

    // console.log('AJDFHAFH', commentsObj)


    return (
        <div className='comments-container'>
            {comments?.map(comment => (
                <>
                    {comment?.post_id === post?.id &&
                    <div className='comment-body-owner' key={comment.id}>
                        <div className='comment-owner'>{comment?.comment_owner}</div>
                        <div className='comment-content'>{comment?.comment_body}</div>
                    </div>}
                </>
            ))}
        </div>
    );
}

export default Comments;
