import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'


const Dashboard = () => {
  return (
    <div className='flex min-h-screen'>

      

      <Sidebar/>

       <div className='flex-1 '>
        <nav className="h-16 flex items-center justify-end px-8 border-b border-gray-300 w-full bg-[#EFE9E3]">
          <div className='text-[#14100c]'>
            Profile
          </div>
        </nav>

      <main className=''>
        <Outlet/>
      </main>
       </div>
    </div>
  )
}

export default Dashboard
