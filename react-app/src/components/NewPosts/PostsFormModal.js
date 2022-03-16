import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import PostForm from "./PostsForm";

function PostFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="post-form-modal-button-container">
            <button className="post-form-modal-button" onClick={e => setShowModal(true)}></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostForm closeModal={() => setShowModal(false)} />
                </Modal>
            )}
        </div>
    )
}

export default PostFormModal;
