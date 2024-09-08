"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { ImAddressBook } from "react-icons/im";
import Image from "next/image";

interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;
    ImgSrc?: any;
    link?: any
    inputId?:string;
    inputType?:string;
    inputPlaceHolder?:string;
}

const index = (
  {
  
    title,
    description,
    className,
    descritionClassName,
    inputId,
    h1ClassName,
    // ImgSrc,
    inputType,
    inputPlaceHolder,
    link
  }: Props) => 
    {
      const [name, setName] = useState('')
  return (
    
    <div>

          <div className="mt-4">

          <label className="flex text-sm font-medium text-gray-700" >
           {title}
          </label>
          <input
          
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            id={inputId}
            type={inputType}
            placeholder={inputPlaceHolder}
          />
        </div>
        
    </div>
    
  )
}

export default index