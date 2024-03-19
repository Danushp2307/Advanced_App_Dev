import { useState } from 'react'
import './App.css'
import Weblayout from './layout/Weblayout'
import { BrowserRouter ,Route ,Routes} from 'react-router-dom'
// import Weblayout from './Layout/Weblayout'
import Login from './pages/Login'
import Contact from './pages/Contact'
import SignupPage from './pages/SignupPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Userlayout from './layout/Userlayout'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Weblayout/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element ={<SignupPage/>}/>
        <Route path='/terms' element={<TermsAndConditionsPage/>}/>
        <Route path='/home' element={<Home/>}/>
      
        </Route>
        <Route element={<Userlayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
    
      </Route>
        </Routes>
        </BrowserRouter>
  </>
  )
}

export default App