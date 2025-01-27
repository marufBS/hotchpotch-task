import React from 'react'

const Plan = () => {

    const data = [
        {
            planTitle: 'Starter',
            price: 29,
            title: 'This package is suitable for teams 1-15 people.',
            planDescriptions: ['10 GB Dedicated Hosting Free', 'Best for Developers, Freelancers', '1 Year Support']
        },
        {
            planTitle: 'Basic',
            price: 79,
            title: 'This package is suitable for teams 1-50 people.',
            planDescriptions: ["15 GB Dedicated Hosting Free", "Best for Developers, Freelancers", "5 Year Support", "Free Custom Domain", "Basic Statistics"]
        },
        {
            planTitle: 'Premium',
            price: 129,
            title: 'This package is suitable for teams 1-100 people.',
            planDescriptions: ['20 GB Dedicated Hosting Free', 'Best for Developers, Freelancers', 'Unlimited Support', 'Free Custom Domain', 'Full Statistics']
        },
    ]
    return (
        <div className=' md:max-w-[70%] mx-auto my-10'>
            <div className='text-center my-10 md:w-[30%] mx-auto space-y-5'>
                <h1 className='text-xl md:text-3xl'>Make the wise decision for your business</h1>
                <p className='text-md text-gray-400'>Choose from our affordable 3 packages</p>
            </div>

            <div className="grid place-items-center grid-cols md:grid-cols-3 gap-10 md:gap-1 items-stretch">
                {data.map((d, i) => (
                    <div key={i} className="bg-[#282A37] p-5 rounded-lg flex flex-col hover:scale-105 transition-transform">
                        <p className='font-inter text-sm mb-8 text-gray-200'>{d.planTitle} Plan</p>
                        <p className='font-outfit mb-5'>
                            <span className="text-4xl">${d.price}</span>/month
                        </p>
                        <p className='font-inter text-xs mb-8 text-gray-400'>{d.title}</p>
                        <p className='font-inter text-sm mb-5'>What's included:</p>
                        <div className='mb-10 text-gray-400'>
                            {
                                d.planDescriptions.map((offer,idx) => (
                                    <p key={idx} className='font-inter text-sm mb-3'>{offer}</p>
                                ))
                            }
                        </div>

                        <div className="mt-auto text-center">
                            <button className={`${d.planTitle === "Basic"
                                ? "w-full bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] hover:bg-blue-700 px-5 py-4 rounded-sm text-md font-medium"
                                : "w-full outline-custom hover:bg-white hover:text-black hover:outline-0 px-5 py-4 rounded-sm text-md font-medium"
                                }`}>
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Plan