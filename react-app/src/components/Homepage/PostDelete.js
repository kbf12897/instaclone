import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { deletePost } from '../../store/posts';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './PostDelete.css';

const PostDeleteModal = ({ post }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async (postId) => {
        return await dispatch(deletePost(postId))
    }

    return (
        <>
            <div className='three-dots' onClick={e => setShowModal(true)}>
                <svg aria-label="More options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='delete-post-container'>
                        {sessionUser.id === Number(post?.user_id) && <div className='delete-post-button' onClick={() => handleDelete(post?.id)}>Delete</div>}
                        <NavLink to={`/users/${post.user_id}`} className='user-page-link'>User page</NavLink>
                        <div className='cancel-delete-button' onClick={() => setShowModal(false)}>Cancel</div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default PostDeleteModal;
