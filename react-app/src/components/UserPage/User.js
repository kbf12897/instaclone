import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPosts } from '../../store/posts'
import './UserPage.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch();

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
    <div>
      <div className='user-info-container'>
        <div className='user-page-profile-img'>
          <img className='profile-page-img' src={user.profile_img} />
        </div>
        <div>
          <h1 className='username'>{user.username}</h1>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
export default User;
