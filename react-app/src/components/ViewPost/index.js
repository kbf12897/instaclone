import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./ViewPost.css";

function ViewPost({ post }) {
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector((state) => state?.session?.user)

    const commentsObj = useSelector(state => state?.commentReducer);
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    const postComments = comments.filter(comment => comment?.post_id === postId);

    return (
        <>
            <div className="modal-post-container">
                {showMenu && (
                    <div className="view-post-container">
                        <div className="modal-img-container">
                            <img className="single-post-image" src={post?.image_url} alt='one-post'/>
                        </div>
                        <div className="right-side-post">
                            <div>
                                <div>{post?.post_owner}</div>
                            </div>
                            <div>
                                <div>{post?.post_owner}</div>
                                <div>{post?.caption}</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ViewPost;
