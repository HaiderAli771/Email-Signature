import React from 'react'

interface Props {
    name?: string;
    job?: string;
    companyName?:string;
    email?:string;
    phone?:number;
    websiteName?:string;
   divClassName?:string;
   nameClassName?:string;
   jobClassName?:string;
   companyClassName?:string;
   emailClassName?:string;
   phoneClassName?:string;
  }
const page = () => {
  return (
    <>
         <div className="font-sans p-4 border border-gray-300 max-w-md">
        <h1 className="text-xl font-bold">John Doe</h1>
        <p className="text-gray-600">Software Engineer</p>
        <p className="text-gray-600">ABC Company</p>
        <div className="mt-4">
          <p className="text-gray-600">Email: john.doe@example.com</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
          <p className="text-gray-600">Website: www.example.com</p>
        </div>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/johndoe" className="text-blue-600">LinkedIn</a>
          <span className="mx-2">|</span>
          <a href="https://twitter.com/johndoe" className="text-blue-600">Twitter</a>
        </div>
      </div>
    </>
  )
}

export default page