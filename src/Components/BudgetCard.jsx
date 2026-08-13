import React from 'react'

const BudgetCard = () => {
  return (
   <div className='flex  h-28 w-full  border-2 border-gray-300 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out     cursor-pointer flex-col'>
        <div className=' h-2/3 flex rounded-2xl'>
        <div className='w-2/3 flex items-center justify-center'>Category</div>
        <div className='w-1/3 flex items-center justify-center border-gray-300 border-l-2'>$2300</div>
         </div>


        <div className='h-1/3  flex items-center justify-center  border-gray-300 border-t-2'>bar</div>

      </div>
  )
}

export default BudgetCard
