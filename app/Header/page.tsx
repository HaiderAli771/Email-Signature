"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../Navbar/page'
import Product from '../products/page'

const page = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const [openResources, setOpenResources] = useState(false)


  return (
    <>
    <div className='flex flex-row justify-around pt-5'>
      <Link href="/" className='text-[20px] font-bold'>Signature</Link>
      <div className='flex flex-row gap-20 items-center'>
      <div>
      <button className='dropDownLink' onClick={() => setOpenNavbar((prev) => !prev)}>Pricing</button>
      {
        openNavbar && (
          <Navbar />
        )
      } 
      </div>
      <div>

      <button className='dropDownLink' onClick={() => setOpenResources((prev) => !prev)}>Resource</button>
      {
        openResources && (
          <Product />
        )
      } 
      </div>
      </div>
      <Link href='/' className='flex w-[100px] h-[40px] bg-black text-white items-center justify-center rounded-lg border-transparent border-1'>Login</Link>
    </div>
    </>
  )
}

export default page