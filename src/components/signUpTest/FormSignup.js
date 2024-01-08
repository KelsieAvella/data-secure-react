
import React from 'react';
import { useNavigate } from 'react-router-dom';
import validate from './validateInfo';
import useForm from './useForm';
import './formTest.css';

const FormSignup = ({ submitForm }) => {
  const navigate = useNavigate();

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const navigateToLoginPage = () => {
    navigate('/contact'); // Replace '/login' with the actual path of your login page
  };

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Start blogging with us today! Create an account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account?{' '}
          <button className='form-login-btn' onClick={navigateToLoginPage}> Login Here
          </button>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;

