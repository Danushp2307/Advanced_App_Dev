import react from 'react'
import Navbar from '../component/Navbar'
import Footer  from '../component/Footer'
import { Outlet } from 'react-router-dom'
const Weblayout = () => {
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Weblayout