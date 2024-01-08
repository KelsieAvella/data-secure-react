import React from 'react';
import './formTest.css';
import image from '../../assets/camtag.gif';
import { Link } from 'react-router-dom'; 

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Congrats! You are now a Squishapedia Member!</h1>
      <img src={image} alt="description" className= 'form-success-img'/>
      <Link to="/contact">
      <button className='form-success-button'>Log In</button>
      </Link>
      
    </div>
  );
};

export default FormSuccess;







/*import React from 'react';
import './Form.css';




 <Link to="/signup">
                            <button>Sign Up</button>
                        </Link>
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;



/*

maybe once signed up this will then prompt them to login with credentials
once logged in they will see a dashboard 

*/