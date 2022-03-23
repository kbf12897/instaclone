import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp, login } from '../../../store/session';
import './Signup.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUser = { email: 'demo@aa.io', password: 'password' };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords do not match.'])
    }
  };




  const handleDemo = async (demo) => {
    const { email, password } = demo;
    dispatch(login(email, password));
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='main-container-signup'>
      <div className='signup-form-container'>
        <h1 className='signup-instaclone-logo'>Instaclone</h1>
        <p className='signup-sentence'>Sign up to see photos from your friends.</p>
        <div className='demo-button'>
          <button className='demo-signup' onClick={() => handleDemo(demoUser)}>Login as a Demo user</button>
        </div>
        <div>
          <p className='seperator'><span>OR</span></p>
        </div>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input
              className='username-input-signup'
              placeholder='Username'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              required={true}
            ></input>
          </div>
          <div>
            <input
              className='email-input-signup'
              placeholder='Email'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              required={true}
            ></input>
          </div>
          <div>
            <input
              className='password-input-signup'
              placeholder='Password'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              required={true}
            ></input>
          </div>
          <div>
            <input
              className='confirm-password-input'
              placeholder='Confirm Password'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className='signup-button' type='submit'>Sign Up</button>
        </form>
      </div>
      <div className='login-container'>
        <div>Already have an account?</div>
        <div className='login-link'>
          <NavLink to='/login'>Log In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
