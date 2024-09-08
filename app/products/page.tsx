import React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
const page = () => {
  return (
    <>
  <div className='flex flex-col gap-4 dropDownProfile '>
            <div className='grid-cols-2 gap-2'>
            <Link href='/' className='text-[12px] dropDownLink text-black'>Email signatures templates</Link>
              </div>
            <Link href='/' className='text-[12px] dropDownLink text-black'>Professional email signatures</Link>
            </div>
    </>
  )
}

export default page