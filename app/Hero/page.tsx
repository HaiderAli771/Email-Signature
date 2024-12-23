import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center md:pl-2 md:pr-2 justify-center h-screen bg-blue-600 text-white">
        <div className="relative text-center md:text-left max-w-lg md:mr-10 px-6 md:px-0">
          <h1 className="text-3xl mt-16 md:text-5xl font-semibold mb-3 bg-gradient-to-r from-white via-cyan-300 to-teal-400 bg-clip-text text-transparent leading-snug drop-shadow-lg">
            Create Stunning Email Signatures with Ease
          </h1>
          <h2 className='mb-5 bg-gradient-to-r from-white via-cyan-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg'>Looking to make a lasting impression? Our Email Signature Generator lets you create professional and visually appealing signatures with ease. Designed for individuals and businesses, it’s the ultimate tool to elevate your email communication and strengthen your brand identity.</h2>
          <Link href='./Editor' className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition">
            Create Your Signature
          </Link>
        </div>
        <div className="relative w-full md:w-1/2  h-64 md:h-full pt-5 pb-4">
          <img
            src="/hero.jpg"
            alt="Create email signatures online with NextSig's easy-to-use generator"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  )
}

export default page