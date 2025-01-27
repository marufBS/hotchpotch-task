import React from 'react'
import imoji_1 from '../assets/imoji-1.svg'
// import imoji_2 from '../assets/imoji-2.svg'
// import imoji_3 from '../assets/imoji-3.svg'
// import imoji_4 from '../assets/imoji-4.svg'

const data = [
    {
        logo: imoji_1,
        heading: 'Blog Headlines',
        desc: 'Write a better blog title with our A.I tool.'
    },
    {
        logo: imoji_1,
        heading: 'Blog Intros',
        desc: 'Generate a paragraph of blog content using Blog Intros tool'
    },
    {
        logo: imoji_1,
        heading: 'Blog Outline',
        desc: 'Need an attention-grabbing headline for your article?'
    },
    {
        logo: imoji_1,
        heading: 'Blog Conclusions',
        desc: 'Write a better conclusions with AI writing tool.'
    },
    {
        logo: imoji_1,
        heading: 'Content Rewriter',
        desc: 'Get AI writer to rewrite your sentence in a different way.'
    },
    {
        logo: imoji_1,
        heading: 'Product Description',
        desc: 'Need an attention-grabbing headline for your article?'
    },
    {
        logo: imoji_1,
        heading: 'PAS Copywriting Formula',
        desc: 'Get AI writer to rewrite your sentence in a different way.'
    },
    {
        logo: imoji_1,
        heading: 'Company About Us',
        desc: 'Write a better blog title with our AI tool.'
    },
]

const Tools = () => {
    return (
        <>
            <div className='md:max-w-[90%] mx-auto bg-black'>
                <div className='text-center my-10 space-y-5 md:max-w-[30%] mx-auto'>
                    <h1 className='text-white text-3xl'>54 exciting writing tools</h1>
                    <p className='text-gray-100'>AI engines take information from various sources and read them like a human would do.</p>
                </div>
                <div className='grid place-items-center grid-cols-1 md:grid-cols-4 gap-10'>
                    {
                        data.map((d, i) => (
                            <div className='bg-gray-800 w-[300px]  flex flex-row p-4 rounded-md justify-between'>
                                <div className='flex items-start'>
                                    <img src={d.logo} width={30} alt="" />
                                </div>
                                <div className='text-white w-[200px] space-y-2'>
                                    <h1 className='text-sm'>{d.heading}</h1>
                                    <p className='text-xs'>{d.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center my-10'>
                    <a href="#" className="text-sm hover:underline">See all 54 available tools</a>
                </div>
            </div>
            <hr class="h-px  bg-black border-0 dark:bg-gray-700"></hr>
        </>
    )
}

export default Tools