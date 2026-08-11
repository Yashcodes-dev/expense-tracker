import React from 'react'
import { NavLink } from 'react-router'
import Budget from './Budget'

const Sidebar = () => {
  return (
     <aside className="w-64 min-h-screen border-r min-w- border-gray-300 text-black flex flex-col  gap-5 bg-[EFE9E3]">
       <NavLink 
       to={'/'}
       className='font-extrabold text-2xl leading-[0.9] tracking-wider px-10 py-9'> <span className='text-[#e26d3a]'>Ex</span>pensease</NavLink>

      <nav className='h-2/3 flex flex-col  gap-20 py-10 items-center justify-center px-2'>

        <NavLink 
        to='dashome'
         className=' px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:text-[#14100c]  hover:cursor-pointer rounded-2xl hover:bg-gray-100 hover:opacity-50 transition-all duration-300 ease-in-out '>Dashboard</NavLink>
        
        <NavLink 
        to='budget'
         className=' px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:text-[#14100c]  hover:cursor-pointer rounded-2xl hover:bg-gray-100 hover:opacity-50 transition-all duration-300 ease-in-out '>Budgets</NavLink>

        <NavLink 
        to='expenses'
         className=' px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:text-[#14100c]  hover:cursor-pointer rounded-2xl hover:bg-gray-100 hover:opacity-50 transition-all duration-300 ease-in-out '>Expenses</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
