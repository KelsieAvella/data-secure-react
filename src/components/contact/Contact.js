/*import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container div">
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Enter your message'/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
*/
import React from 'react';
import './ContactStyles.css';

const LoginForm = () => {
  return (
    <div className='contact'>
      <div className='contact-holder'>
        <div className='contact-form'>
          <form>
            <h1><span>Login </span></h1>
            <div>
              <label>Username     </label>
              <input type='text' placeholder='Enter your username' />
            </div>
            <div>
              <label>Password     </label>
              <input type='password' placeholder='Enter your password' />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;


