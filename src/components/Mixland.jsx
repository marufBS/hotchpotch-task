import React from 'react'
import Mixland_card from '../assets/Mixland_card.png'

const Mixland = () => {
    return (
        <div className='md:max-w-[62%] mx-auto space-y-10 md:space-y-20 my-10'>
            <h1 className='text-center text-xl md:text-4xl md:max-w-[50%] mx-auto'>Mixland helps you build beautiful website</h1>
            <div className='flex flex-col-reverse md:flex-row md:justify-between md:gap-5'>
                <div className='flex flex-col space-y-3 md:min-w-[280px]'>
                    <a href="#" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-700 px-5 py-4 rounded-sm text-md font-medium">Blog Headlines</a>
                    <a href="#" className="outline-custom hover:bg-blue-700 hover:outline-0 px-4 py-3 rounded-sm text-md font-medium">Blog Intros</a>
                    <a href="#" className="outline-custom hover:bg-blue-700 hover:outline-0 px-4 py-3 rounded-sm text-md font-medium">Content Rewriter</a>
                    <a href="#" className="outline-custom hover:bg-blue-700 hover:outline-0 px-4 py-3 rounded-sm text-md font-medium">Facebook Ads</a>
                    <a href="#" className="outline-custom hover:bg-blue-700 hover:outline-0 px-4 py-3 rounded-sm text-md font-medium">Product Description</a>
                    <a href="#" className="outline-custom hover:bg-blue-700 hover:outline-0 px-4 py-3 rounded-sm text-md font-medium">PAS Copywriting Formula</a>
                </div>
                <div className='mb-10'><img src={Mixland_card} alt="" /></div>
            </div>
        </div>
    )
}

export default Mixland