import React from 'react'

const BudgetCard = () => {
  return (
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
  )
}

export default BudgetCard
