import React from 'react'

const Plan = () => {

    const data = [
        {
            planTitle: 'Starter',
            price: 29,
            title: 'This package is suitable for teams 1-15 people.',
            planDescription: "10 GB Dedicated Hosting Free Best for Developers, Freelancers 1 Year Support"
        },
        {
            planTitle: 'Basic',
            price: 79,
            title: 'This package is suitable for teams 1-50 people.',
            planDescription: "15 GB Dedicated Hosting Free Best for Developers, Freelancers 5 Year Support Free Custom Domain Basic Statistics"
        },
        {
            planTitle: 'Premium',
            price: 129,
            title: 'This package is suitable for teams 1-100 people.',
            planDescription: '20 GB Dedicated Hosting Free Best for Developers, Freelancers Unlimited Support Free Custom Domain Full Statistics'
        },
    ]
    return (
        <div className='bg-black md:max-w-[70%] mx-auto my-10'>
            <div className='text-center my-10 md:w-[30%] mx-auto space-y-5'>
                <h1 className='text-xl md:text-3xl'>Make the wise decision for your business</h1>
                <p className='text-md'>Choose from our affordable 3 packages</p>
            </div>
            
            <div className="grid place-items-center grid-cols md:grid-cols-3 gap-10 items-stretch">
                {data.map((d, i) => (
                    <div className="bg-gray-600 p-5 rounded-lg flex flex-col space-y-5">
                        <p>{d.planTitle} Plan</p>
                        <p>
                            <span className="text-4xl">${d.price}</span>/month
                        </p>
                        <p>{d.title}</p>
                        <p>What's included:</p>
                        <p>{d.planDescription}</p>

                        {/* Push button to the bottom */}
                        <div className="mt-auto text-center">
                            <a
                                href="#"
                                className={`${d.planTitle === "Basic"
                                        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-700 px-5 py-4 rounded-sm text-md font-medium"
                                        : "ring-0.5 hover:bg-blue-700 hover:outline-0 px-5 py-4 rounded-sm text-md font-medium"
                                    }`}
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Plan