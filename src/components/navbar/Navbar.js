import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

import customIcon from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/ICON-2.png';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                <img src={customIcon} alt="Custom Icon" className="custom-icon" />
                    
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
<<<<<<< HEAD
                    <li><Link to='/recovery'>Recovery</Link> </li>
                    <li><Link to='/cloud'>Gallery</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button>Sign in</button>
=======
                    <li><Link to='/recovery'>Feed</Link> </li>
                    <li><Link to='/cloud'>My Profile</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/contact'>Log In</Link></li>
                    
>>>>>>> a297036c6af62728a93760ad625688209c054eca
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
