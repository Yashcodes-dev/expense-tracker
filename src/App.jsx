import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router'
import Landingpage from './Pages/Landingpage'
import Loginpage from './Pages/Loginpage'
import Dashboard from './Pages/Dashboard'
import Budget from './Pages/Budget'
import Notfound from './Pages/Notfound'
import Expenses from './Pages/Expenses'
import DashHome from './Pages/DashHome'
import Upgrade from './Pages/Upgrade'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        
       <Route path="/dashboard" element={<Dashboard />}>

          <Route path="dashome" element={<DashHome />} />  
          <Route path="budget" element={<Budget />} />  

      <Route path="expenses" element={<Expenses />} />
      <Route path="upgrade" element={<Upgrade />} />

  </Route>


              <Route path='*' element={<Notfound/>}  />
      </Routes>

    </div>
  )
}

export default App
