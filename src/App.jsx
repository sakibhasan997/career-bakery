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
          <Navbar></Navbar>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
