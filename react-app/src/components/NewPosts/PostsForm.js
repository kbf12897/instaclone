import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../store/posts';
import './Post.css';

const PostForm = ({ closeModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const [ error, setErrors ] = useState([]);

    const user_id = useSelector((state) => state?.session?.user?.id);

    const [img_url, setImg_url] = useState('');
    const [caption, setCaption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id,
            img_url,
            caption
        }

        const newPost = await dispatch(createPost(payload));

        if (newPost) {
            closeModal();
            return history.push('/');
        }
    }

    return (
        <div className='create-post-form'>
            <div className='form-name'><h2>Create Post</h2></div>
            <div className='post-form-container'>
                <form className='new-post-form' onSubmit={handleSubmit}>
                    <input
                        className='image-input'
                        type='text'
                        placeholder='Imgage URL'
                        onChange={(e) => setImg_url(e.target.value)}
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
            </div>
        </div>
    );
}

export default PostForm;
