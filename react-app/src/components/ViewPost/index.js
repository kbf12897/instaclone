import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditCaptionForm from "../EditCaptionForm/EditCaptionForm";
import PostDeleteModal from "../Homepage/PostDelete";
import CommentForm from "../NewComment/CommentForm";
import ViewComment from "../Comments/ViewComment";
import "./ViewPost.css";

function ViewPost({ post }) {
    // const user = useSelector((state) => state?.session?.user)
    const commentsObj = useSelector(state => state?.commentReducer);
    const comments = Object.values(commentsObj);
    const postId = post?.id;
    const postComments = comments.filter(comment => comment?.post_id === postId);
    const sessionUser = useSelector((state) => state.session.user)
    const [showEdit, setShowEdit] = useState(false)
    const [functionPostId, setFunctionPostId] = useState()


    const setEditPost = (postId, bool) => {
        setShowEdit(bool);
        setFunctionPostId(postId)
    }

    return (
        <>
            <div className="modal-post-container">
                <div className="view-post-container">
                    <div className="modal-img-container">
                        <img className="single-post-image" src={post?.img_url} alt='one-post'/>
                    </div>
                    <div className="right-side-post">
                        <div className="top-right-side-post">
                            <div className="profile-pic-and-img">
                                <img className="modal-profile-img" src={post.post_owner_profile_img} alt='profile-pic' />
                                <div className="modal-post-owner">{post?.post_owner}</div>
                            </div>
                            <PostDeleteModal post={post}/>
                        </div>
                        <div className="caption-comments-container">
                            <div>
                                <div className="modal-caption-and-owner">
                                    <div className='caption-and-owner'>
                                        {post.caption && <div className='caption-post-creator'>{post?.post_owner}</div>}
                                        {!showEdit && <div className='post-caption'>{post?.caption}</div>}
                                        {(showEdit && post?.id === postId) && <EditCaptionForm post={post} setShowEdit={setShowEdit}/>}
                                    </div>
                                    {sessionUser?.id === Number(post?.user_id) && <div className='caption-three-dots' onClick={() => setEditPost(post?.id, !showEdit)}><svg aria-label="More options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></div>}
                                </div>
                                <div className="modal-comment-container">
                                {postComments?.map((comment) => (
                                    <ViewComment comment={comment} />
                                ))}
                                </div>
                            </div>
                            <div className="view-post-add-comment">
                                <CommentForm post={post}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewPost;
