import React from 'react'
import BudgetCard from '../Components/BudgetCard'


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
      <BudgetCard/>
      <BudgetCard/>
      <BudgetCard/>
      </div>
      
      


      {/*Graph and  latest budget side by side  */}

      <div className='h-[500px] w-full flex justify-start py-5 gap-5 '>
        {/* this is for graph  */}
        <div className='border-2  w-2/3 border-gray-300  rounded-xl  '> Graph</div>
        <div className='border-2 flex-1   border-gray-300 rounded-xl'>
        <h3>Latest Budget</h3>

        </div>
      </div>






      </div>

      
    
  )
}

export default DashHome
