import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomeRoot = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    {/* <Navbar /> */}
    <Outlet/>
    </>
  )
}

export default HomeRoot