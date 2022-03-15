import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Homepage.css'

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <div className='posts-users'>
                <div className='user-story-scrollbar'>
                    <h2>user story placeholder</h2>
                </div>
                <div className='all-posts'>
                    <h2>posts placeholder</h2>
                </div>
            </div>
            <div className='right-side-user-panel'>
                <h2>suggested user placeholder</h2>
            </div>
        </div>
     );
}

export default Homepage;
