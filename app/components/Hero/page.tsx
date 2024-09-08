import Link from "next/link";
import React from "react";
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
}

const page = ({
  title,
  description,
  className,
  descritionClassName,
  h1ClassName,
  // ImgSrc,
  link
}: Props) => {
  return (
    <div className='flex flex-col'>
    <div className='flex grid-rows-2 pl-[150px] pr-[150px] gap-[60px]'>
        <div className='flex flex-col'>
    <h1 className='text-[3rem] pt-8 '>{title}</h1>
   <Link href='/Editor' className='items-center mt-10 text-center rounded-xl content-center text-[white] text-[17px] font-bold bg-blue-700 w-[150px] h-[50px]'>{description}</Link>
        </div>
   <Image src='/feature-image.png' height={700} width={600} alt='image' />
    </div>

    </div>
  );
};

export default page;