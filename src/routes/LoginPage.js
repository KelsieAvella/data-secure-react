import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Login from '../components/login/FormSignup'

const LoginPage = () => {
    return (
        <>
           <Navbar/>
           <Login />
           <Footer />
       
        </>
    )
}

export default LoginPage