

import React, { useState } from 'react';
import './formTest.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess.js';

const FormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="page-container">
      {/* Your existing content */}
      <div className='form-container'>
        <div className='form-content-left'></div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
  );
};

export default FormPage;
