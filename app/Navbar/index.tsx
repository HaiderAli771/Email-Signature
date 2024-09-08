import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { ImAddressBook } from "react-icons/im";
// import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  className?: string;
  descritionClassName?: string;
  h1?: string;
  h1ClassName?: string;
  ImgSrc?: any;
  link?: any
}

const index = ({
  title,
  description,
  className,
  descritionClassName,
  h1ClassName,
  // ImgSrc,
  link
}: Props) => {
  return (
       <div className='flex flex-row items-center gap-[20px]'>
        <div className={`${className} mt-[20px] mb-[20px] `}>
          <Link href={link} className={`flex flex-row items-center gap-2 dropDownLink ${h1ClassName}`}>{title}
          <GoArrowUpRight />
          </Link>
         <p className={`${descritionClassName} pb-5 text-[14px] text-[#7485a3] `}>{description}</p>
        <div className="border-b-2 border-[#e6edf5] items-center" ></div>
        </div>
        </div>
  );
};

export default index;