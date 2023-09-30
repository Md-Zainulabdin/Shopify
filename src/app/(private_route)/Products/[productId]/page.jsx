'use client';
import DetailMenu from '@/app/components/DetailMenu/page';
import useProductStore from '@/store/productStore';
import Image from 'next/image';
import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import useCartStore from '@/store/cartStore';

const SingleProduct = ({ params }) => {
  const addItem = useCartStore((state) => state.addItem);
  const { productList } = useProductStore();
  const product = productList?.data.filter(
    (item) => item._id === params.productId
  );

  console.log('product', product);

  if (product.length === 0) {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <DetailMenu />
      <div className='flex w-full flex-col items-center justify-between py-12 md:flex-row'>
        <Image
          width={500}
          height={500}
          src={product[0].image[0].imageUrl}
          alt='product image'
          priority
        />
        <div className='flex w-full flex-col items-start gap-3 self-start md:w-[50%]'>
          <h1 className='text-2xl font-semibold text-[#333]'>
            {product[0].title}
          </h1>
          <p className='text-xl font-light text-[#999]'>
            {product[0].description}
          </p>
          {/* <span>Category: {product[0].category}</span> */}
          <h2 className='text-xl font-bold text-indigo-500'>
            ${product[0].price}
          </h2>

          <div className='product-btn mt-4 cursor-pointer'>
            <div
              onClick={() => addItem(product[0])}
              className='flex w-full items-center justify-center rounded-md  border px-6 py-3 text-center text-[#333] transition duration-300 hover:bg-[#111] hover:text-white'
            >
              <BiShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
