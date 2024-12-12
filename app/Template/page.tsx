import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <>
      <div className='flex flex-col pt-40'>
        <div className='flex grid-rows-2 pl-[150px] pr-[150px] gap-[60px]'>
          <Image src='/feature-image.png' height={700} width={600} alt='email signature generator' />
          <div className='flex flex-col'>
            <h1 className='text-[3rem] pt-8 '>Choose Your Favourite Template For Your Email Signature.</h1>
            <Link href='/' className='items-center mt-10 text-center rounded-xl content-center text-[white] text-[17px] font-bold bg-blue-700 w-[230px] h-[60px]'>Email Signature Templates</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default page