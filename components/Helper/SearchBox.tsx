import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'

const SearchBox = () => {
  return (
    <div className='bg-white opacity-80 rounded-md  p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center gap-8 mt-4 sm:mt-12 w-[80%] sm:w-[80%] xl:w-[70%]'>
        {/* ist Search Input  */}
        <div className='flex items-center space-x-6 '>
            <FaMap className='w-6 h-6 text-blue-600 ' />
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
                <input type="text" placeholder='Where are you going' className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
         {/* 2nd Search Input  */}
         <div className='flex items-center space-x-6 '>
            <FaCalendarWeek className='w-6 h-6 text-blue-600 ' />
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                <input type="Date" placeholder='Where are you going' className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
          {/* 3rd Search Input  */}
          <div className='flex items-center space-x-6 '>
            <FaCalendarWeek className='w-6 h-6 text-blue-600 ' />
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                <input type="Date" placeholder='Where are you going' className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
         
        
    </div>
  )
}

export default SearchBox