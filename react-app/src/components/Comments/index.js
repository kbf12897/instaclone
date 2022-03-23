import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comment';
import EditCommentForm from '../EditComments/EditCommentForm';
import CommentMenu from '../EditComments/CommentMenu';
import ViewComment from './ViewComment';
import ViewPostModal from '../ViewPost/ViewPostModal';
import './comments.css'


const Comments = ({ post }) => {
    const dispatch = useDispatch();
    const commentsObj = useSelector(state => state?.commentReducer);
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    // const sessionUser = useSelector((state) => state.session.user);

    const postComments = comments.filter(comment => comment?.post_id === postId);
    const lastTwoComments = postComments.slice(postComments.length - 2)



    useEffect(() => {
        dispatch(getComments(postId));
    }, [dispatch, postId])


    return (
        <div className='comments-container'>
            {postComments.length > 4 &&
            <div>
            <ViewPostModal post={post} />
            {lastTwoComments.map((comment) => (
                <ViewComment comment={comment} />
            ))}
            </div>}
            {postComments.length < 5 && postComments?.map((comment) => (
                <ViewComment comment={comment} />
            ))}
        </div>
    );
}

export default Comments;
