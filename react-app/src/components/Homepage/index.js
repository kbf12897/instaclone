import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../store/posts';
import './Homepage.css'

const Homepage = () => {
    const dispatch = useDispatch();
    const postsObj = useSelector((state) => state?.postReducer);
    const posts = postsObj && Object.values(postsObj);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])


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
                                <div className='three-dots'>
                                    <svg aria-label="More options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                </div>
                            </div>
                            <div className='img-container'>
                                <img className='post-img' src={post?.img_url} alt={post?.caption} />
                            </div>
                            <div className='post-caption-container'>
                                {post.caption && <div className='caption-post-creator'>{post.post_owner}</div>}
                                <div className='post-caption'>{post?.caption}</div>
                            </div>
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
