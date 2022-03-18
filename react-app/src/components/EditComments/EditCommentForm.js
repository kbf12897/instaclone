import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment } from '../../store/comment';
import './EditComment.css';

const EditCommentForm = ({ setShowCommentEdit, comment }) => {
    const dispatch = useDispatch();
    const [commentValue, setCommentValue] = useState(comment?.comment_body);
    const user_id = comment?.user_id;
    const post_id = comment?.post_id;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setShowCommentEdit(false);
        return await dispatch(editComment({ user_id, post_id, commentValue }))
    }

    return (
        <div className='edit-comment-container'>
            <form className='edit-comment-form' onSubmit={handleSubmit}>
                <input
                    className='edit-comment-input'
                    type='text'
                    value={commentValue}
                    onChange={(e) => setCommentValue(e.target.value)}
                />
                <button className='submit-comment-edit' type='submit'>Edit</button>
            </form>
        </div>
    );
}

export default EditCommentForm;
