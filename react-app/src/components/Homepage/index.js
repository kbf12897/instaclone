import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
    const orderedPosts = posts.reverse();
    const [showEdit, setShowEdit] = useState(false)
    const [postId, setPostId] = useState()

    // USERS
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
        }
        fetchData();
    }, []);

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
                    {orderedPosts?.map((post) => (
                        <div key={post.id} className='post-container'>
                            <div className='post-user-container'>
                                <div className='post-profile-img-container'>
                                    <img className='post-profile-img' src={post?.post_owner_profile_img} alt='profile-img' />
                                    <NavLink to={`/users/${post.user_id}`} className={'post-user'}>{post?.post_owner}</NavLink>
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
                                {sessionUser?.id === Number(post?.user_id) && <div className='caption-three-dots' onClick={() => setEditPost(post?.id, !showEdit)}><svg aria-label="More options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></div>}
                            </div>
                            <Comments post={post}/>
                            <CommentForm post={post} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='right-side-user-panel'>
                <div className='suggested-users-container'>
                    <div className='session-user-info-container'>
                        <img className='session-user-profile-img' src={sessionUser.profile_img} />
                        <div className='suggested-users-user'>{sessionUser.username}</div>
                    </div>
                    <div className='suggested-users-sentence'>Suggestions For You</div>
                    <div className='suggested-users'>
                        {users.map((user) => (
                            <>
                                {user.id !== sessionUser.id && <div className='suggested-user-and-profile-img'>
                                    <NavLink to={`/users/${user.id}`}>
                                        <img className='suggested-profile-img' src={user.profile_img} alt='profile-picture' />
                                        <div className='suggested-user'>{user.username}</div>
                                    </NavLink>
                                </div>}
                            </>
                        ))}
                        <div className='technologies-about-me-contaner'>
                            <div className='technologies'>Javascript | Python | React | Flask | Redux <br/> SQLAlchemy | Postgres | Docker | Git</div>
                            <div className='about-me-links'>
                                <a href='https://github.com/kbf12897' target='_blank'><img className='github-link' src='https://cdn3.iconfinder.com/data/icons/inficons/512/github.png' alt='github' /></a>
                                <a href='https://www.linkedin.com/in/karl-felter-678249215/' target='_blank'><img className='linkedin-link' src='https://cdn-icons-png.flaticon.com/512/61/61109.png' alt='linkedin' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Homepage;
