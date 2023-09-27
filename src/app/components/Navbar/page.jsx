'use client';
import useCartStore from '@/store/cartStore';
import Link from 'next/link';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineAccountCircle } from 'react-icons/md';

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <nav className='fixed left-0 top-0 flex h-[70px] w-full items-center justify-between border-b px-[20px] md:h-[70px] md:px-[50px]'>
      <div className='logo flex items-center gap-6'>
        <Link href={'/'}>
          <h1 className='text-2xl font-bold text-[#222]'>Shopify</h1>
        </Link>
        <ul className='mt-[3px]'>
          <li>
            <Link
              href={'/Products'}
              className='text-md text-[#333] hover:text-[#555]'
            >
              Products
            </Link>
          </li>
        </ul>
      </div>

      <div className='menu flex items-center gap-6'>
        <Link href={'/Cart'} className='flex items-center gap-2'>
          <FiShoppingBag size={20} className='text-[#333] hover:text-[#555]' />{' '}
          ({cart.length})
        </Link>
        <Link href={'/Profile'}>
          <MdOutlineAccountCircle
            size={24}
            className='text-[#333] hover:text-[#555]'
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
