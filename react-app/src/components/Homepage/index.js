import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../store/posts';
import PostDeleteModal from './PostDelete';
import EditCaptionForm from '../EditCaptionForm/EditCaptionForm';
import Comments from '../Comments';
import CommentForm from '../NewComment/CommentForm';
import './Homepage.css'

const Homepage = () => {
    const dispatch = useDispatch();
    const postsObj = useSelector((state) => state?.postReducer);
    const sessionUser = useSelector((state) => state.session.user)
    const posts = postsObj && Object.values(postsObj);
    const [showEdit, setShowEdit] = useState(false)
    const [postId, setPostId] = useState()

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])


    const setEditPost = (postId, bool) => {
        setShowEdit(bool);
        setPostId(postId)
    }

    return (
        <div className='homepage-container'>
            <div className='posts-users'>
                <div className='user-story-scrollbar'>
                    <h2>user story placeholder</h2>
                </div>
                <div className='all-posts'>
                    {posts?.map((post) => (
                        <div key={post.id} className='post-container'>
                            <div className='post-user-container'>
                                <div className='post-profile-img-container'>
                                    <img className='post-profile-img' src={post?.post_owner_profile_img} alt='profile-img' />
                                    <div className='post-user'>{post?.post_owner}</div>
                                </div>
                                <PostDeleteModal post={post}/>
                            </div>
                            <div className='img-container'>
                                <img className='post-img' src={post?.img_url} alt={post?.caption} />
                            </div>
                            <div className='post-caption-container'>
                                <div className='caption-and-owner'>
                                    {post.caption && <div className='caption-post-creator'>{post?.post_owner}</div>}
                                    {!showEdit && <div className='post-caption'>{post?.caption}</div>}
                                    {(showEdit && post?.id === postId) && <EditCaptionForm post={post} setShowEdit={setShowEdit}/>}
                                </div>
                                {sessionUser.id === Number(post?.id) && <div className='caption-three-dots' onClick={() => setEditPost(post?.id, !showEdit)}><svg aria-label="More options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></div>}
                            </div>
                            <Comments post={post}/>
                            <CommentForm post={post} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='right-side-user-panel'>
                <h2>suggested user placeholder</h2>
            </div>
        </div>
     );
}

export default Homepage;
