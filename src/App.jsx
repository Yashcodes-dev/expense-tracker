import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router'
import Landingpage from './Pages/Landingpage'
import Loginpage from './Pages/Loginpage'
import Dashboard from './Pages/Dashboard'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </div>
  )
}

export default App
