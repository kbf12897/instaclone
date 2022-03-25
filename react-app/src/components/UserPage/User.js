import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Post from './Post';
import { getPosts } from '../../store/posts'
import './UserPage.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch();
  const postsObj = useSelector((state) => state?.postReducer);
  const posts = postsObj && Object.values(postsObj);
  const orderedPosts = posts.reverse();



  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className='user-page-container'>
      <div className='user-info-container'>
        <div className='user-page-profile-img'>
          <img className='profile-page-img' alt='profile' src={user.profile_img} />
        </div>
        <div>
          <h1 className='username'>{user.username}</h1>
        </div>
      </div>
      <div className='user-photos-container'>
        {orderedPosts.map((post, i) => (
          <div key={i}>
            {post?.user_id === Number(userId) && <Post post={post}/>}
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
