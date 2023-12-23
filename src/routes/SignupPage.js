import React from 'react'
import SignUp from '../components/signup/SignUp'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'


const SignupPage = () => {
    return (
        <>
            <Navbar/>
            <SignUp />
            <Footer />   
        </>
    )
}

export default SignupPage