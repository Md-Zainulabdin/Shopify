"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"

const Home = () => {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <h1>Home</h1>
    </div>
  )
}

export default Home