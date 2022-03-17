import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/comment";
import './commentForm.css';

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();

    const user_id = useSelector((state) => state?.session?.user?.id);
    const [comment_body, setComment_body] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id,
            post_id: post?.id,
            comment_body
        }

        await dispatch(createComment(payload));
        setComment_body('')
    }



    return (
        <div className="comment-form-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="comment-input"
                    placeholder="Add a comment..."
                    type='text'
                    onChange={(e) => setComment_body(e.target.value)}
                />
                <button className="comment-submit-button" type="submit">Post</button>
            </form>
        </div>
    );
}

export default CommentForm;
