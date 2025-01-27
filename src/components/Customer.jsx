import React from 'react'
import { Twitter } from 'lucide-react'
import twitter from '../assets/logo-twitter.png'
import profile_1 from '../assets/profile_1.png'
import profile_2 from '../assets/profile_2.png'
import profile_3 from '../assets/profile_3.png'
import profile_4 from '../assets/profile_4.png'
import profile_5 from '../assets/profile_5.png'
import profile_6 from '../assets/profile_6.png'
import profile_7 from '../assets/profile_7.png'
import profile_8 from '../assets/profile_8.png'


const data = [
  {
    name: "Darrell Steward",
    image: profile_1,
    handler: "@darrels",
    post: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["another"]
  },
  {
    name: "Leslie Alexander",
    image: profile_2,
    handler: "@lesslie",
    post: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    tags: ["postcrafts"]
  },
  {
    name: "Jenny Wilson",
    image: profile_3,
    handler: "@jennywilson",
    post: "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["make_it_fast"]
  },
  {
    name: "Kristin Watson",
    image: profile_4,
    handler: "@kristinwatson2",
    post: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    tags: ["postcrafts"]
  },
  {
    name: "Guy Hawkins",
    image: profile_5,
    handler: "@jennywilson",
    post: "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["make_it_fast"]
  },
  {
    name: "Marvin McKinney",
    image: profile_6,
    handler: "@jennywilson",
    post: "With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
    tags: ["dev", "tools"]
  },
  {
    name: "Annette Black",
    image: profile_7,
    handler: "@jennywilson",
    post: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["another"]
  },
  {
    name: "Floyd Miles",
    image: profile_8,
    handler: "@jennywilson",
    post: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["postcrafts"]
  },
]

const Customer = () => {
  return (
    <div className=''>
      <div className='text-center my-10 md:w-[25%] mx-auto space-y-5'>
        <h1 className='text-3xl'>What our customers say</h1>
        <p>Read why thousands of marketers, writers, and entrepreneurs love us so much.</p>
      </div>
      <div className='text-black grid place-items-center grid-cols-1 md:grid-cols-4 gap-5 md:gap-1 md:max-w-[70%] mx-auto'>
        {
          data.map((d, i) => (
            <div className='md:w-[250px] bg-white p-4 rounded-md space-y-2'>
              <div className='flex justify-between'>
                <div className='flex space-x-2'>
                  <img src={d.image} alt="" />
                  <div>
                    <h1>{d.name}</h1>
                    <p>{d.handler}</p>
                  </div>
                </div>
                <div><img src={twitter} alt="" /></div>
              </div>
              <p>{d.post}</p>
              <div>{d.tags.map((tag, i) => (<span>#{tag} </span>))}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Customer