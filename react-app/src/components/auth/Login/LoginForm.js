import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import './Login.css'

const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUser = { email: 'demo@aa.io', password: 'password' };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const handleDemo = (demo) => {
    const { email, password } = demo
    dispatch(login(email, password));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='main-container'>
      <div className='img-form-container'>
        <div className='img-container'>
          <img className='iphones' alt='iphone' src='https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png'/>
          <img className='iphone-img' alt='iphone-img' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png' />
        </div>
        <div className='right-side-container'></div>
          <div className='form-container'>
            <h1 className='instaclone-logo'>Instaclone</h1>
            <form className='login-form' onSubmit={onLogin}>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <div>
                <input
                  className='email-input'
                  name='email'
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div>
                <input
                  className='password-input'
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={updatePassword}
                />
              </div>
              <div>
                <button className='login-button' type='submit'>Log In</button>
              </div>
            </form>
            <div>
              <p className='seperator'><span>OR</span></p>
            </div>
            <div className='demo-button'>
              <div className='demo-sentence'>Explore without an account</div>
              <button className='demo' onClick={() => handleDemo(demoUser)}>Demo</button>
            </div>
          <div className='sign-up-link'>
              Don't have an account? <NavLink to='/sign-up'>Sign up</NavLink>
          </div>
          </div>
      </div>
    </div>
  );
};

export default LoginForm;
