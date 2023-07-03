import React from 'react'
import {TimeSvg}  from './time'
import ALICT from '../Assets/ALICT.png'
import Math from '../Assets/Math.png'
import Commerce from '../Assets/commerce.png'

const Data = [
  {
    id:1,
    image: ALICT.src,
    title: 'A/L ICT',
    time: 'Now',
    location: 'Sri Lanka',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium neque sit odit quasi.',
    company: 'Advanced Level ICT'
  },
  {
    id:2,
    image: Math.src,
    title: 'A/L Combined Maths',
    time: 'Now',
    location: 'Sri Lanka',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium neque sit odit quasi.',
    company: 'Advanced Level Mathematics'
  },
  {
    id:3,
    image: Commerce.src,
    title: 'A/L Business Studies',
    time: 'Now',
    location: 'Sri Lanka',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium neque sit odit quasi.',
    company: 'Advanced Level business Studies'
  },
  

]

export function Categories(){
  return (
    <div>
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
            {Data.map(({id, image, title, time, location, desc, company})=>{
              return (
                <div className='group group/item singleJob w-[350px] p-[20px] bg-white rounded-[10px] hover:bg-blue-700 shadow-lg shadow-[#f1f4f8]-400/700 hover:shadow-lg'>
            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <TimeSvg/>{time}
                </span>
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] mb-[20px] group-hover:text-white'>
                {desc}
              </p>

              <div className='flex items-center gap-2 mb-[20px]'>
                <img src={image} alt="ict logo" className='w-[30%]'/>
                <span className='text-[14px] py-[1rem] block group-hover:text-white font-bold'>{company}</span>
              </div>

              <button className='border-[2px] rounded-[10px] p-[10px] w-full text-[14px] font-semibold text-black hover:bg-white group-hover/item:text-black group-hover:text-black'>
                Apply Now
              </button>
            </div>
              )
            })}
        </div>
    </div>
  )
}

export default Categories