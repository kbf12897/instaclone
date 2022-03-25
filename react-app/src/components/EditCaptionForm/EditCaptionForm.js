import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePost } from '../../store/posts';
import './EditCaption.css';


const EditCaptionForm = ({ setShowEdit, post }) => {
    const dispatch = useDispatch();
    const [caption, setCaption] = useState(post?.caption)
    const [errors, setErrors] = useState([])
    const postId = post?.id;
    const img_url = post?.img_url;
    const user_id = post?.user_id;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updated = await dispatch(updatePost({ postId, user_id, img_url, caption }))
        if (caption.length > 255) return setErrors(['Caption must be 255 characters or less.'])
        if (updated?.errors) return setErrors(updated?.errors)


        if (updated) {
            setErrors([])
            setShowEdit(false)
            return updated;
        }
    }


    return (
        <div className='edit-caption-container'>
            {errors?.length > 0 && errors?.map((error) => <div key={error} className='edit-caption-errors'>{error}</div>)}
            <form className='edit-caption-form' onSubmit={handleSubmit}>
                <input
                    className='edit-caption-input'
                    type='text'
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    required
                    />
                <button className='submit-caption-edit' type='submit'>Edit</button>
            </form>
        </div>
    );
}

export default EditCaptionForm;
