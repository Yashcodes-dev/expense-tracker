import React from 'react'
import BudgetCard from '../Components/BudgetCard'
import LatestBudgetCard from '../Components/LatestBudgetCard'


const DashHome = () => {
  return (
    <div className='px-7 flex flex-col gap-8  '>
      <div className='bg-amber-200'></div>

      {/* Welcome text  */}
      <div className=''>
        <h1 className='text-3xl font-extrabold'>Hi, Yash 👋</h1>
        <p className='text-gray-500 py-2'>Here what's happening with your money here's an overview of your finances.</p>

      </div>





      {/* Budget Cards */}
      <div className='flex gap-5'>


      <div className='flex  h-28 w-full gap-5 border-2 border-gray-300 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out     cursor-pointer'>
        <div className=' flex-1 flex justify-between items-center'>

         <div className='flex justify-center items-center flex-col text-[#14100c]'>
             <p className='capitalize px-10'>total budget</p>
          <h1 className='font-extrabold text-2xl'>$1540</h1>
         </div>

         <div className='h-full w-1/3 flex items-center justify-center '>
            <p>logo</p>         </div>

        </div>

      </div>

      <div className='flex  h-28 w-full gap-5 border-2 border-gray-300 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out     cursor-pointer'>
        <div className=' flex-1 flex justify-between items-center'>

         <div className='flex justify-center items-center flex-col text-[#14100c]'>
             <p className='capitalize px-10'>total Spend</p>
          <h1 className='font-extrabold text-2xl'>$4300</h1>
         </div>

         <div className='h-full w-1/3 flex items-center justify-center '>
            <p>logo</p>         </div>

        </div>

      </div>

      <div className='flex  h-28 w-full gap-5 border-2 border-gray-300 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out     cursor-pointer'>
        <div className=' flex-1 flex justify-between items-center'>

         <div className='flex justify-center items-center flex-col text-[#14100c]'>
             <p className='capitalize px-10'>no. of budgets</p>
          <h1 className='font-extrabold text-2xl'>5</h1>
         </div>

         <div className='h-full w-1/3 flex items-center justify-center '>
            <p>logo</p>         </div>

        </div>

      
      </div>
      </div>
      
      


      {/*Graph and  latest budget side by side  */}

      <div className='h-[500px] w-full flex justify-start py-5 gap-5 '>
        {/* this is for graph  */}
        <div className='border-2  w-2/3 border-gray-300  rounded-xl  '> Graph</div>

        
        <div className=' flex-1 flex flex-col gap-6 text-[#14100c] '>
        <h3 className='font-bold text-lg mb-4'>Latest Budgets</h3>

        <LatestBudgetCard/>
        <LatestBudgetCard/>
        <LatestBudgetCard/>

        </div>
      </div>






      </div>

      
    
  )
}

export default DashHome
