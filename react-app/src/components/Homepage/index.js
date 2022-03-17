import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../store/posts';
import PostDeleteModal from './PostDelete';
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
                                <PostDeleteModal postId={post?.id}/>
                            </div>
                            <div className='img-container'>
                                <img className='post-img' src={post?.img_url} alt={post?.caption} />
                            </div>
                            <div className='post-caption-container'>
                                {post.caption && <div className='caption-post-creator'>{post?.post_owner}</div>}
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
