import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center md:pl-2 md:pr-2 justify-center h-screen bg-blue-600 text-white">
        <div className="relative text-center md:text-left max-w-lg md:mr-10 px-6 md:px-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Effortless <span className="text-yellow-400">Digital Signatures</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Secure, fast, and easy-to-use signature solutions for modern businesses.
          </p>
          <Link href='./Editor' className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition">
            Create Your Signature
          </Link>
        </div>
        <div className="relative w-full md:w-1/2  h-64 md:h-full pt-5 pb-4">
          <img
            src="/hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  )
}

export default page