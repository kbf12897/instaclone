import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../store/posts';
import './Post.css';

const PostForm = ({ closeModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageLoading, setImageLoading] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])

    const user_id = useSelector((state) => state?.session?.user?.id);

    const [img_url, setImg_url] = useState('');
    const [caption, setCaption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('user_id', user_id);
        formData.append('img_url', img_url);
        formData.append('caption', caption);

        const newPost = await dispatch(createPost(formData));
        if (newPost?.errors) setValidationErrors(newPost?.errors);

        if (caption.length > 255) setValidationErrors(['Caption must be 255 characters or less'])

        if (newPost?.id) {
            setImageLoading(false);
            history.push('/')
            return closeModal();
        }
        return 'Failed to Create'
    }

    const updateMedia_url = (e) => {
        const file = e.target.files[ 0 ];
        setImg_url(file);
      }



    return (
        <div className='create-post-form'>
            <div className='form-name'><h2>Create Post</h2></div>
            <div className='post-form-container'>
                <div className='errors'>
                    {validationErrors?.length > 0 && validationErrors?.filter(error => error !== 'Invalid value').map(error => (
                        <div key={error}>{error}</div>
                    ))}
                </div>
                <form className='new-post-form' onSubmit={handleSubmit}>
                    <input
                        className='image-input'
                        type='file'
                        accept='image/*'
                        placeholder='Imgage URL'
                        onChange={updateMedia_url}
                        required
                    />
                    <input
                        className='caption-input'
                        type='text'
                        placeholder='Caption'
                        onChange={(e) => setCaption(e.target.value)}
                    />
                    <button className='add-post-button' type='submit'>Upload</button>
                </form>
                {(imageLoading) && <p>Publishing...</p>}
            </div>
        </div>
    );
}

export default PostForm;
