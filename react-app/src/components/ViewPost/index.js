import React, { useState } from "react";
import { useSelector } from "react-redux";
import ViewPostCommentMenu from "./ViewPostEditComment";
import EditCommentForm from "../EditComments/EditCommentForm";
import ViewComment from "../Comments/ViewComment";
import "./ViewPost.css";

function ViewPost({ post }) {
    // const user = useSelector((state) => state?.session?.user)
    const commentsObj = useSelector(state => state?.commentReducer);
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    const postComments = comments.filter(comment => comment?.post_id === postId);


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
                        {postComments?.map((comment) => (
                            <ViewComment comment={comment} />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewPost;
