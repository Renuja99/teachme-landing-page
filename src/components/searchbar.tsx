import React from 'react'
import { XCircle }  from './x-circle'
import { SearchIcon } from './searchIcon'

export function Search(){
  return (
  <div className='searchDiv grid gp-10 bg-[#f1f4f8] rounded-[10px] p-[3rem] '>
    <form action="">
        <div className='firstDiv flex lg:flex-row flex-col justify-between items-center rounded-[8px] bg-white p-5 shadow-lg shadow-[#f1f4f8]-700 '>
            <div className='flex gap-2 lg:pt-0 pt-3 items-center'>
                <SearchIcon/>
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search subject here' />
                <XCircle/>
            </div>

            <div className='flex gap-2 lg:pt-0 pt-3 items-center'>
                <SearchIcon/>
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search instructor name here' />
                <XCircle/>
            </div>

            <div className='flex gap-2 lg:pt-0 pt-3 items-center'>
                <SearchIcon/>
                <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search location here' />
                <XCircle/>
            </div>

            <button className='bg-blue-700 h-full lg:mt-0 mt-5 p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
              Search
            </button>
        </div>
    </form>

    <div className='secDiv flex items-center gap-10 justify-center mt-10'>
      <div className='singleSearch flex items-center gap-2 '>
        <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>

        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
          <option value="">Relevance</option>
          <option value="">Inclusive</option>
          <option value="">Starts with</option>
          <option value="">Contains</option>
        </select>
      </div>
      <div className='singleSearch flex items-center gap-2 '>
        <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>

        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
          <option value="">Relevance</option>
          <option value="">Inclusive</option>
          <option value="">Starts with</option>
          <option value="">Contains</option>
        </select>
      </div>
      <div className='singleSearch flex items-center gap-2 '>
        <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>

        <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
          <option value="">Full-time</option>
          <option value="">Remote</option>
          <option value="">Contract</option>
          <option value="">Part-time</option>
        </select>
        
      </div>
      <div>

      </div>
    </div>
  </div>
  )
}

