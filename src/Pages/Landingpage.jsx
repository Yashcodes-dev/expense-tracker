import React from 'react'
import Navbar from '../Components/Navbar'
import { NavLink,Link } from 'react-router'

const Landingpage = () => {
  return (
      <div>


        {/* This is the outer most div */}
        <div className='flex flex-col gap-4'>  
        <Navbar/>

         {/* heor section */}
      <div className=' min-h-[58vh] w-full flex justify-center gap-3 flex-col items-center'>
        <h1 className='capitalize text-4xl font-extrabold leading-[0.9] text-[#261e18]'> Take control of your money.</h1>
        <h1 className='capitalize text-4xl font-extrabold  text-[#e26d3a]'> Magage your expenses </h1>
        <p className='capitalize mt-3 text-lg text-gray-500 '>Start Creating your budget and save ton of money</p>

        <NavLink
        to={'/login'}
         className='bg-[#e26d3a] mt-3 text-white px-7 py-2 outline-none flex justify-center items-center rounded-lg cursor-pointer text-sm h-10 hover:opacity-85 transition-all duration-300 ease-in-out hover:scale-95'>Get Started</NavLink>
      </div>

      {/* This is for preview */}
      <div className=' h-[900px] w-full flex justify-center '>
        <div className='border-2 h-3/4 w-2/3 border-gray-300  rounded-xl'></div>
      </div>

      </div>

    </div>
  )
}

export default Landingpage
