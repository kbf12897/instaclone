import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment } from '../../store/comment';
import './EditComment.css';

const EditCommentForm = ({ setDisplayEdit, setCommentId, comment }) => {
    const dispatch = useDispatch();
    const [comment_body, setComment_body] = useState(comment?.comment_body);
    const [errors, setErrors] = useState([]);
    let commentId = comment?.id;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedComment = await dispatch(editComment({ commentId, comment_body }));
        if (comment_body.length > 255) {
            return setErrors(['Comment must be 255 characters or less.'])
        }


        if (updatedComment) {
            setDisplayEdit(false);
            setCommentId(-1);
            return updatedComment;
        }

    }

    return (
        <div className='edit-comment-container'>
            {errors?.length > 0 && errors?.map((error) => <div key={error} className='edit-comment-errors'>{error}</div>)}
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
