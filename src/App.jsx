import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <div className=''>
        <div>
          <div className='bg-blue-100 py-5'>
            <Navbar></Navbar>
          </div>
          <Outlet />
          <div className='  bg-[#1A1919] flex flex-col justify-center items-center '>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
