import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
}

const page = ({
  title,
  description,
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