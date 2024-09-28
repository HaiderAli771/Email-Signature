"use client"
import React, { useState } from 'react'

interface Props {
  title?: string;
  description?: string;
  className?: string;
  descritionClassName?: string;
  h1?: string;
  h1ClassName?: string;
  ImgSrc?: any;
  link?: any
  inputId?: string;
  inputType?: string;
  inputPlaceHolder?: string;
}

const index = (
  {

    title,

    inputId,
    inputType,
    inputPlaceHolder,
  }: Props) => {
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