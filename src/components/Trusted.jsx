import React from 'react'
import Trusted_1 from '../assets/Trusted 1.png'
import Trusted_2 from '../assets/Trusted 2.png'
import Trusted_3 from '../assets/Trusted 3.png'
import Trusted_4 from '../assets/Trusted 4.png'
import Trusted_5 from '../assets/Trusted 5.png'
import Trusted_6 from '../assets/Trusted 6.png'
import Trusted_7 from '../assets/Trusted 7.png'
import Trusted_8 from '../assets/Trusted 8.png'
import Trusted_card_1 from '../assets/Trusted_card_1_copy.png'
import Trusted_card_2 from '../assets/Trusted_card_2_copy.png'

const images = [Trusted_1, Trusted_2, Trusted_3, Trusted_4, Trusted_5, Trusted_6, Trusted_7, Trusted_8]

const Trusted = () => {
    return (
        <div className='flex flex-col  md:max-w-[65%] mx-auto space-y-20 mt-10 mb-5 md:mb-10'>
            <div className=' flex flex-col md:max-w-[90%] mx-auto '>
                <h1 className='text-white text-center text-xl md:text-2xl mb-15'>Trusted by nearly 5000+ paying customers</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center'>
                    {
                        images.map((img, idx) => (
                            <div key={idx}><img src={img} alt="" /></div>
                        ))
                    }
                </div>
            </div>
            <div className=' mx-auto md:my-10 space-y-15 md:space-y-30'>
                <div className='md:flex flex-row justify-between items-center space-y-10'>
                    <div className=''>
                        <img src={Trusted_card_1} alt="" />
                    </div>
                    <div className='text-white space-y-5 md:space-y-10 md:max-w-[40%]'>
                        <h1 className='text-xl md:text-4xl text-center md:text-left'>Create content efficiently  and quickly with great AI  writing tools</h1>
                        <p className='text-sm font-inter text-gray-400'>150k+ users. No Credit Card Required. Pro designs and  writing at no cost. Start for free. Ai Writer Tool | Generate  text for ecom, social media, website, sales, blogs etc.</p>
                        <div className='text-center md:text-left'>
                            <button className=' bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] px-3 py-2 rounded-sm text-sm font-medium hover:scale-105 transition-transform'>Start 14 Days Free Trial</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex md:flex-row justify-center items-center space-y-10 md:space-y-20 '>
                    <div className='text-white space-y-5 md:space-y-10 md:max-w-[40%]'>
                        <h1 className='text-xl md:text-4xl text-center md:text-left'>Write what you want to convey through clear, & authentic writing</h1>
                        <p className='text-sm font-inter text-gray-400'>AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.</p>
                        <div className='text-center md:text-left'>
                            <button className=' bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] px-3 py-2 rounded-sm text-sm font-medium hover:scale-105 transition-transform'>Start 14 Days Free Trial</button>
                        </div>
                    </div>
                    <div className='mb-10 md:w-[90%] md:flex justify-end'>
                        <img src={Trusted_card_2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trusted