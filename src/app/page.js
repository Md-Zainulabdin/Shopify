import React from 'react'
import FeaturedProductCard from './components/FeaturedProductCard/page'

const Home = () => {

  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <h1>Home</h1>
      <FeaturedProductCard/>
    </div>
  )
}

export default Home