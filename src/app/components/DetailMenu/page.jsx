'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoChevronBackSharp } from 'react-icons/io5';
import { CgChevronRightR} from 'react-icons/cg';

const DetailMenu = () => {
  const { back } = useRouter();
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='back-icon cursor-pointer' onClick={() => back()}>
        <IoChevronBackSharp size={26} className={`text-[#555]`} />
      </div>
      <div className='detail'>
        <h1 className='text-2xl font-bold text-[#444]'>Details</h1>
      </div>

      <div className='back-icon'>
        {/* <CgChevronRightR size={26} className={`text-[#555]`} /> */}
      </div>
    </div>
  );
};

export default DetailMenu;
