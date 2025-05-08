import SectionHeading from '@/components/Helper/SectonHeading'
import React from 'react'
import HotelCard from './HotelCard'
import { hotelsData } from '@/Data/data'

const Hotel = () => {
  return (
    <div>
        {/* section Heading  */}
        <SectionHeading heading='Recommended Hotels'/>
        <div className='w-[80%] mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16 '>
            {/* Hotel Card  */}
        {
            hotelsData.map((data,i)=>{
                return(
                    <div 
                    key={data.id} 
                    data-aos="fade-right" data-aos-anchor-placement="top-center" 
                    data-aos-delay={`${i * 100}`}>
                    <HotelCard hotel={data}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Hotel