import React from 'react'
// import Link from 'next/link'
import Navbar from './index'
import { ImAddressBook } from 'react-icons/im'
import Image from 'next/image'
// import { GoArrowUpRight } from 'react-icons/go'
const page = () => {
  return (
    
    <div className='flex flex-col gap-4 w-[400px] dropDownProfile'>
            <div className='grid-cols-3 gap-2'>
            <ImAddressBook size={45} />
            <Navbar h1ClassName='w-[152px]'  title='For Professional' description='Best for individuals and small teams to enhance your brand.Easy to use' link='/' />
          <Image src='/group.png' height={45} width={45} alt='image' />
            <Navbar h1ClassName='w-[109px]' title='For Teams' description='Perfect for teams of 5+, streamline your email signature process easily.' link='/' />
            {/* <ImAddressBook /> */}
          <Image src='/public-relations.png' height={45} width={45} alt='image' />
            <Navbar h1ClassName='w-[130px]' title='For Agencies' description='Optimized for agencies and resellers looking to expand their capabilities.' link='/' />
              </div>
            </div>
    
  )
}

export default page