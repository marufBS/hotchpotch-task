import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:max-w-[90%] mx-auto flex flex-col md:flex-row justify-between p-5 rounded-lg my-10 space-y-5'>
                <h1 className='text-lg text-center md:text-left md:text-4xl md:max-w-[50%]'>It will help you improve your writing & bring ideas more c learly.</h1>
                <button className='bg-white text-black p-3 rounded-lg'>Start 14 Days Free Trial</button>
            </div>
            <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
                
                <div>
                    <h2 class="font-semibold text-lg mb-4">Company</h2>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Features</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Works</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Career</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2 class="font-semibold text-lg mb-4">Help</h2>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Customer Support</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Delivery Details</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2 class="font-semibold text-lg mb-4">Resources</h2>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Free eBooks</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Development Tutorial</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">How to - Blog</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Youtube Playlist</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2 class="font-semibold text-lg mb-4">Links</h2>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Free eBooks</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Development Tutorial</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">How to - Blog</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer