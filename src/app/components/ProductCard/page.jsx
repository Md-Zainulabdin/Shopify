import { ProductList } from '@/libs/ProductList';
import Link from 'next/link';
import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';

const ProductCard = async () => {
  const productList = await ProductList();
  return (
    <div className='w-full flex gap-6 flex-wrap'>
      {productList &&
        productList.map((item) => (
          <div
            key={item._id}
            className='relative w-[270px] cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm'
          >
            <div className='w-full'>
              <div className='img-box flex h-[200px] w-full items-center justify-center overflow-hidden border-b object-cover'>
                <img
                  src={item.image[0].imageUrl}
                  alt={item.title}
                  className='w-full h-full object-cover transition duration-300 hover:scale-[1.05] '
                />
              </div>

              <div className='desc flex items-center justify-between px-4 py-2'>
                <Link href={`/Products/${item._id}`}>
                  <h1 className='text-lg font-medium text-[#555] hover:underline'>
                    {item.title}
                  </h1>
                </Link>
                <span className='text-md font-medium text-indigo-500'>
                  ${item.price}
                </span>
              </div>

              <div className='title w-full px-4'>
                <h2 className='text-md overflow-hidden text-ellipsis whitespace-nowrap text-[#777]'>
                  {item.description}
                </h2>
              </div>

              <div className='product-btn w-full p-3'>
                <div className='flex w-full items-center justify-center rounded-md  border p-3 text-center text-[#333] transition duration-300 hover:bg-[#111] hover:text-white'>
                  <BiShoppingBag />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
