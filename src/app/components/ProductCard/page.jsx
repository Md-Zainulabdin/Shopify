import Link from 'next/link'
import React from 'react'
import {BiShoppingBag} from 'react-icons/bi'

const ProductCard = () => {
  return (
    <div
          className="w-[270px] border rounded-lg overflow-hidden cursor-pointer bg-white shadow-sm relative"
        >
          <div className="w-full">
            <div className="img-box w-full h-[200px] object-cover flex justify-center items-center border-b overflow-hidden">
              <img
                src={'/p12.jpg'}
                alt={'product'}
                className="w-full hover:scale-[1.05] transition duration-300 "
              />
            </div>

            <div className="desc py-2 px-4 flex items-center justify-between">
              <Link href={`/products/123`}>
                <h1 className="text-lg font-medium text-[#555] hover:underline">
                  Mobile
                </h1>
              </Link>
              <span className="text-md font-medium text-indigo-500">
                500
              </span>
            </div>

            <div className="w-full title px-4">
              <h2 className="text-md text-[#444] overflow-hidden whitespace-nowrap text-ellipsis">
                Hello wolrd
              </h2>
            </div>

            <div className="product-btn w-full p-3">
              <div
                className="border hover:text-white hover:bg-[#111] transition duration-300  text-[#333] w-full rounded-md text-center flex items-center justify-center p-3"
              >
                <BiShoppingBag />
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProductCard