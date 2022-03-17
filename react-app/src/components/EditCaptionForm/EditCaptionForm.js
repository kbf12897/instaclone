import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePost } from '../../store/posts';


const EditCaptionForm = ({ setShowEdit, post }) => {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState(post.caption)
    const postId = post?.id;

    console.log('AHHHHHHH', postId)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setShowEdit(false)
        return await dispatch(updatePost({ postId, caption }))
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
