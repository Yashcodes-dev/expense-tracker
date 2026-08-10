import React from 'react'
import { NavLink, Link } from 'react-router'

const Navbar =   () => {
  return (
    <div className=' h-22 text-black flex justify-between px-5 py-8 items-center bg-[EFE9E3]'>
      <div className='flex text-[#14100c] - px-5 py-2 rounded justify-center items-center'>
        <h1 className='font-extrabold text-2xl leading-[0.9] tracking-wider'> <span className='text-[#e26d3a]'>Ex</span>pensease</h1>
      </div>
      <div className='flex gap-3'>
        <NavLink
        to={'/dashboard'}
        className=' rounded-lg text-[#14100c] px-3 py-2 outline-none flex justify-center items-center border-gray-200 border-1 cursor-pointer h-10 text-sm hover:bg-gray-100 transition-all duration-300 ease-in-out active:scale-95'>Dashboard</NavLink>

        <NavLink
        to={'/login'}
         className='border-gray-200 border-1  text-[#14100c] px-3 py-2 outline-none flex justify-center items-center rounded-lg cursor-pointer text-sm h-10 hover:opacity-85 transition-all duration-300 ease-in-out active:scale-95 hover:text-[#EFE9E3] hover:bg-[#14100c]'>Get Started</NavLink>
        
      </div>
    </div>
  )
}

export default Navbar
