import React from 'react'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
const Review = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b] '>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* text content  */}
            <div>
                <h1 className='text-2xl font-semibold text-white '>
                    What our Customers are saying us?
                </h1>
                <p className='mt-6 text-gray-200'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore nam quos impedit soluta qui temporibus officia perspiciatis doloribus illum eveniet unde pariatur tempore, facere, similique dolorem quae! Cum, quo.
                </p>
                {/* Rating  */}
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>4.88</p>
                        <p className='text-white mb-2'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-white' />
                            <FaStar className='text-white' />
                            <FaStar className='text-white' />
                            <FaStar className='text-white' />
                            <FaStar className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider  */}
            <div className='overflow-hidden'>
                 {/* <ReviewSlider /> */}
                 <Image src={'/images/review-img.PNG'} alt="review"width={500} height={500} className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110" />
                       
            </div>
        </div>
    </div>
  )
}

export default Review