import React from 'react'
import { CirclePlay } from 'lucide-react';

const Header = () => {
    return (
        <>
            <div class="bg-black text-white flex items-center justify-center h-150">
                <div class="text-center">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">
                        Write better <br />
                        content for your <br />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Facebook Ads</span>
                    </h1>

                    <p class="text-gray-300 text-lg md:text-xl mb-8">
                        Artificial intelligence writting tool helps you create blogs,<br /> social media websites and much more.
                    </p>

                    <div class="flex flex-col md:flex-col items-center justify-center gap-4">
                        <a href="#" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg shadow-md text-lg font-semibold hover:scale-105 transition-transform">
                            Start 14 Days Free Trial
                        </a>
                        <a href="#" class="flex items-center text-gray-300 hover:text-white text-lg font-medium gap-2">
                            <CirclePlay /> Watch A Demo
                        </a>
                    </div>
                </div>
            </div>
            <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"></hr>
        </>
    )
}

export default Header