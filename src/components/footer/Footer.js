import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import './FooterStyles.css'

import { Link } from 'react-scroll'
import customIcon from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/ICON-2.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={customIcon} alt="Custom Icon" className="custom-icon" />
                        
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Feed</p>
                        <p>My Profile</p>
                        <p>Sign Up</p>
                        <p>Log In</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>Reset Password</p>
                        <p>Delete Account</p>
                       
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>News</p>
                       
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Terms of Service</p>
                        
                    </div>
                    <form>
                        <h3>Sign Up for our mailing list</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
