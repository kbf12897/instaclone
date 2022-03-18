import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment } from '../../store/comment';
import './EditComment.css';

const EditCommentForm = ({ setShowCommentEdit, setCommentId, comment }) => {
    const dispatch = useDispatch();
    const [comment_body, setComment_body] = useState(comment?.comment_body);
    // const user_id = comment?.user_id;
    // const post_id = comment?.post_id;
    let commentId = comment?.id;


    const handleSubmit = async (e) => {
        e.preventDefault();

        setShowCommentEdit(false);
        setCommentId(-1)
        return await dispatch(editComment({ commentId, comment_body }))
    }

    return (
        <div className='edit-comment-container'>
            <form className='edit-comment-form' onSubmit={handleSubmit}>
                <input
                    className='edit-comment-input'
                    type='text'
                    value={comment_body}
                    onChange={(e) => setComment_body(e.target.value)}
                />
                <button className='submit-comment-edit' type='submit'>Edit</button>
            </form>
        </div>
    );
}

export default EditCommentForm;
