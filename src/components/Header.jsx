import React from 'react'
import { CirclePlay } from 'lucide-react';

const Header = () => {
    return (
        <>
            <div class=" text-white flex items-center justify-center my-15 md:my-30">
                {/* <div className='hidden md:block'
                    style={{
                        width: "200px",            // Set a width for the div
                        height: "200px",           // Set a height for the div
                        backgroundColor: "rgba(242, 54, 144, 0.2)",  // Set a background color to see the shadow clearly
                        boxShadow: "10px 110px 385px 100px rgba(245, 40, 145, 0.2)", // Your custom shadow
                        borderRadius: "100px",      // Optional: rounded corners to make the div more aesthetic,
                        position:'absolute',
                        bottom:300,
                        right:-200
                    }}
                ></div> */}

                <div class="text-center">
                    <h1 className="text-4xl md:text-6xl mb-10">
                        Write better <br />
                        content for your <br />
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                            Facebook Ads
                            <span
                                className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-orange-500 to-pink-500"
                                style={{ borderRadius: "2px" }}
                            ></span>
                        </span>
                    </h1>

                    <p class=" text-md md:text-lg mb-8 font-[Inter] text-gray-400">
                        Artificial intelligence writting tool helps you create blogs,<br /> social media websites and much more.
                    </p>

                    <div class="flex flex-col md:flex-col items-center justify-center gap-4 font-[Inter]">
                        <a href="#" class="bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white py-3 px-8 rounded-lg shadow-md text-lg font-semibold hover:scale-105 transition-transform">
                            Start 14 Days Free Trial
                        </a>
                        <a href="#" class="flex items-center text-gray-300 hover:text-white text-lg font-medium gap-2">
                            <CirclePlay /> Watch A Demo
                        </a>
                    </div>
                </div>
            </div >
            <hr class="h-px mx-8 bg-black border-0 dark:bg-gray-700"></hr>
        </>
    )
}

export default Header