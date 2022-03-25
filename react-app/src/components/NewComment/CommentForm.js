import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/comment";
import './commentForm.css';

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();

    const user_id = useSelector((state) => state?.session?.user?.id);
    const [comment_body, setComment_body] = useState('');
    const [errors, setErrors] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id,
            post_id: post?.id,
            comment_body
        }

        if (comment_body.length > 255) {
            return setErrors(['Comment must be 255 characters or less'])
        }


        const newComment = dispatch(createComment(payload));
        if (newComment) {
            setComment_body('');
            setErrors([]);
            return newComment;
        }
    }



    return (
        <div className="comment-form-container">
            {errors?.length > 0 && errors?.map((error) => <div key={error} className='comment-errors'>{error}</div>)}
            <form onSubmit={handleSubmit}>
                <input
                    className="comment-input"
                    placeholder="Add a comment..."
                    type='text'
                    value={comment_body}
                    onChange={(e) => setComment_body(e.target.value)}
                />
                <button className="comment-submit-button" type="submit">Post</button>
            </form>
        </div>
    );
}

export default CommentForm;
