import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200'>
        <div className='w-[90%] mx-auto items-start grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* colum 1  */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>About Us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Blogs</p>
            </div>
             {/* colum 2  */}
             <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Contact</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Legal Notice</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Privacy Policy</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Terms & Condition</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Magazine</p>
            </div>
             {/* colum 3  */}
             <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Car hire</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Activity Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Tour List</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Fligh Agents</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950 '>Travel </p>
            </div>
            {/* colum 4  */}
            <div>
                <h1 className='text-lg font-bold'>Contact us</h1>
               <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>+012 345 6789</h1>
               </div>
               <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Email</h1>
                    <h1 className='text-base font-bold text-blue-950 mt-1'>Example@gmail.com</h1>
               </div>

            </div>
        </div>
        {/* bottom section  */}
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600  text-sm'>
          <p className='text-center md:text-left'>  Copyright @ 2025 M_Imran . All rights reversed</p>
          <div className='flex items-center space-x-4 md:mt-0'>
                <span>Social :</span>
                <Link href="#" className="text-gray-500 hover:text-gray-800 flex gap-2">
                <FaTwitter />
                <FaFacebook />
                <FaYoutube />
                </Link>
          </div>
        </div>
    </div>
  )
}

export default Footer