import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import ViewPost from '../ViewPost'
import './UserPage.css';

function ViewPostModal({ post }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <div className="post-form-modal-button-container">
              <div className='grid' onClick={() => setShowModal(!showModal)}>
                <img className='user-page-img' alt='user-posts' src={post?.img_url} />
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ViewPost closeModal={() => setShowModal(false)} post={post} />
                </Modal>
            )}
        </div>
    )
}

export default ViewPostModal;
