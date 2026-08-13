import React from 'react'
import { NavLink } from 'react-router'
import Budget from './Budget'

const Sidebar = () => {
  return (
     <aside className="w-64 min-h-screen border-r min-w- border-gray-300 text-black flex flex-col  gap-5 bg-[#EFE9E3]">
       <NavLink 
       to={'/'}
       className='font-extrabold text-2xl leading-[0.9] tracking-wider px-10 py-9'> <span className='text-[#e26d3a]'>Ex</span>pensease</NavLink>

      <nav className='flex flex-col gap-5 py-10 px-2'>

        <NavLink 
        to='dashome'
         className= {({isActive})=> ` px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:text-[#efe9e3]  hover:cursor-pointer rounded-2xl hover:bg-[#14100c] active:opacity-50 transition-all duration-300 ease-in-out active:scale-97 ${isActive ? "text-lg text-[#e26d3a]": ""}`
         }>Dashboard</NavLink>
        
        <NavLink 
        to='budget'
         className= {({isActive})=> ` px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:text-[#efe9e3]  hover:cursor-pointer rounded-2xl hover:bg-[#14100c] active:opacity-50 transition-all duration-300 ease-in-out active:scale-97 ${isActive ? "text-lg text-[#e26d3a]": ""}`
         }>Budgets</NavLink>

        <NavLink 
        to='expenses'
         className= {({isActive})=> ` px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:text-[#efe9e3]  hover:cursor-pointer rounded-2xl hover:bg-[#14100c] active:opacity-50 transition-all duration-300 ease-in-out active:scale-97 ${isActive ? "text-lg text-[#e26d3a]": ""}`
         }>Expenses</NavLink>

        <NavLink 
        to='upgrade'
         className= {({isActive})=> ` px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:text-[#efe9e3]  hover:cursor-pointer rounded-2xl hover:bg-[#14100c] active:opacity-50 transition-all duration-300 ease-in-out active:scale-97 ${isActive ? "text-lg text-[#e26d3a]": ""}`
         }>Upgrade</NavLink>
      </nav>


      <div className="mt-auto p-5  px-10 py-7 w-full items-center justify-center flex text-[#14100c] hover:cursor-pointer ">  
            <h2>Profile</h2>
      </div>
    </aside>
  )
}

export default Sidebar
