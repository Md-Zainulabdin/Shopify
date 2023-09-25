import Link from 'next/link';
import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const FeaturedProductCard = () => {
  return (
    <div className='relative w-[270px] cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm'>
      <div className='card-overlay absolute right-2 top-2 z-10 h-[30px] w-[30px] overflow-hidden'>
        <BsArrowUpShort
          size={30}
          className='hover:scale[1.05] rotate-[45deg] text-[#777]'
        />
      </div>

      <div className='card-overlay absolute left-0 top-3 z-10 overflow-hidden'>
        <h2 className='bg-indigo-400 px-[6px] py-[2px] text-[12px] font-semibold text-white'>
          FEATUERED
        </h2>
      </div>

      <div className='w-full'>
        <div className='img-box h-[200px] overflow-hidden border-b'>
          <img
            src={'/p12.jpg'}
            alt={'img'}
            className='w-full object-fill transition duration-300 hover:scale-[1.05] '
          />
        </div>

        <div className='desc flex items-center justify-between p-4'>
          <Link href={`Products/123`}>
            <h1 className='text-lg font-medium text-[#555] hover:underline'>
              SmartPhone
            </h1>
          </Link>
          <span className='text-md font-medium text-indigo-500'>$200</span>
        </div>

        <div className='title w-full px-4 pb-4'>
          <h2 className='text-md overflow-hidden text-ellipsis whitespace-nowrap text-[#777]'>
            SOmething about product
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
