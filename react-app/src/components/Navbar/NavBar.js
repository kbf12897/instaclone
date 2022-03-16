import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import PostFormModal from '../NewPosts/PostsFormModal';
import './NavBar.css';

const NavBar = () => {

  return (
    <nav className='nav-container'>
      <ul className='navbar'>
        <li className='home'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Instaclone
          </NavLink>
        </li>
        <div className='navbar-right-container'>
          <div className='home-button-right'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <svg aria-label="Home" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
            </NavLink>
          </div>
          <div className='new-post-button'>
            <PostFormModal />
          </div>
          <li className='session-links'>
            <ProfileButton />
          </li>
          </div>
      </ul>
    </nav>
  );
}

export default NavBar;
