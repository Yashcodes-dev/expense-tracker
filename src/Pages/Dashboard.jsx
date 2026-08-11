import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen'>

      

      <Sidebar/>

      <main className='flex-1'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Dashboard
