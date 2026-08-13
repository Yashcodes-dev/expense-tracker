import React from 'react'
import BudgetCard from '../Components/BudgetCard'

const Budget = () => {
  return (
    <div className='flex gap-8 flex-col px-7 py-7'>
      <h1 className='capitalize font-extrabold text-3xl '>My budget</h1>

      <div className='flex flex-row flex-wrap gap-8  '>
              <BudgetCard/>
              <BudgetCard/>
              <BudgetCard/>
              <BudgetCard/>
              <BudgetCard/>
              <BudgetCard/>
              <BudgetCard/>

      </div>
    </div>
  )
}

export default Budget
