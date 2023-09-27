'use client';
import DetailMenu from '@/app/components/DetailMenu/page';
import useProductStore from '@/store/productStore';
import React from 'react';

const SingleProduct = ({ params }) => {
  const { productList } = useProductStore();
  const product = productList?.data.filter(
    (item) => item._id === params.productId
  );

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
    </div>
  );
};

export default SingleProduct;
