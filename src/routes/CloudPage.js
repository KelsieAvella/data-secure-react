import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Cloud from '../components/cloud/Cloud'
import Footer from '../components/footer/Footer'

const CloudPage = () => {
    return (
        <>
           <Navbar /> 
           <Cloud />
           <Footer />
        </>
    )
}

export default CloudPage


/*
 <Route path="/" exact component={Data} />
                <Route path="/signup" component={SignUp} /> {/* Define a route for the SignUp page */
