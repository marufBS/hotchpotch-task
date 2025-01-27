import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Trusted from '../components/Trusted'
import Tools from '../components/Tools'
import Mixland from '../components/Mixland'
import Customer from '../components/Customer'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Landing = () => {
    return (
        <div className='bg-black text-white px-5 md:px-0'>
            <Navbar />
            <Header />
            <Trusted />
            <Tools />
            <Mixland />
            <Customer/>
            <Plan/>
            <Footer/>
        </div>
    )
}

export default Landing