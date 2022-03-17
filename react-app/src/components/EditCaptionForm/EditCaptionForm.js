import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePost } from '../../store/posts';


const EditCaptionForm = ({ setShowEdit, post }) => {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState(post.caption)
    const postId = post?.id;
    const img_url = post.img_url;
    const user_id = post.user_id;

    console.log('AHHHHHHH', postId, caption)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setShowEdit(false)
        return await dispatch(updatePost({ postId, user_id, img_url, caption }))
    }

    return (
        <div className='edit-caption-container'>
            <form className='edit-caption-form' onSubmit={handleSubmit}>
                <input
                    className='edit-caption-input'
                    type='text'
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <button type='submit'>Edit</button>
            </form>
        </div>
    );
}

export default EditCaptionForm;
