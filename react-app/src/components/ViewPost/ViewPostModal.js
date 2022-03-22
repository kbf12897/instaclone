import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import ViewPost from ".";
import './ViewPost.css';

function ViewPostModal({ post, setEditComment, showCommentEdit, setShowCommentEdit, setCommentId, commentId }) {
    const [showModal, setShowModal] = useState(false);
    const commentsObj = useSelector(state => state?.commentReducer);
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    const postComments = comments.filter(comment => comment?.post_id === postId);

    return (
        <div className="post-form-modal-button-container">
             <div className="view-comments-button" onClick={() => setShowModal(!showModal)}>
                View all {postComments.length} comments
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ViewPost closeModal={() => setShowModal(false)} post={post} showCommentEdit={showCommentEdit} setShowCommentEdit={setShowCommentEdit} setCommentId={setCommentId} commentId={commentId} />
                </Modal>
            )}
        </div>
    )
}

export default ViewPostModal;
