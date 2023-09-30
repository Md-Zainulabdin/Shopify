import React from 'react'
import ProductCard from './components/ProductCard/page'

const Home = () => {

  return (
    <div className='w-full h-[90vh]'>
      <h1 className='py-8 text-2xl font-semibold text-[#333]'>Products</h1>
      <ProductCard/>
    </div>
  )
}

export default Home