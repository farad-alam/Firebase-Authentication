import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function Root() {
  return (
    <>
    <Navbar></Navbar>
    <main className='w-10/12 mx-auto'>

    <Outlet></Outlet>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Root