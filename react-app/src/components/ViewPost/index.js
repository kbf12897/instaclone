import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CommentMenu from "../EditComments/CommentMenu";
import EditCommentForm from "../EditComments/EditCommentForm";
import "./ViewPost.css";

function ViewPost({ post, showCommentEdit, setShowCommentEdit, setCommentId, commentId }) {
    // const user = useSelector((state) => state?.session?.user)
    const commentsObj = useSelector(state => state?.commentReducer);
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    const postComments = comments.filter(comment => comment?.post_id === postId);

    const setEditComment = (commentId, bool) => {
        setShowCommentEdit(bool);
        setCommentId(commentId);
    };

    return (
        <>
            <div className="modal-post-container">
                <div className="view-post-container">
                    <div className="modal-img-container">
                        <img className="single-post-image" src={post?.img_url} alt='one-post'/>
                    </div>
                    <div className="right-side-post">
                        <div className="top-right-side-post">
                            <img className="modal-profile-img" src={post.post_owner_profile_img} alt='profile-pic' />
                            <div className="modal-post-owner">{post?.post_owner}</div>
                        </div>
                        <div className="modal-caption-and-owner">
                            <div className="modal-caption-post-creator">{post?.post_owner}</div>
                            <div className="modal-post-caption">{post?.caption}</div>
                        </div>
                        <div className="modal-comment-container">
                        {postComments?.map((comment, i) => (
                            <div key={i}>
                                {comment?.post_id === post?.id &&
                                <div className='modal-comment-body-owner'>
                                    <div className='modal-comment-owner-content'>
                                        <div className='modal-comment-owner'>{comment?.comment_owner}</div>
                                        <div className='modal-comment-content'>{comment?.comment_body}</div>
                                        {(showCommentEdit && comment.id === commentId) && <EditCommentForm setShowCommentEdit={setShowCommentEdit} setCommentId={setCommentId} comment={comment} />}
                                    </div>
                                    <CommentMenu comment={comment} setEditComment={setEditComment} showCommentEdit={showCommentEdit} />
                                </div>}
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewPost;
