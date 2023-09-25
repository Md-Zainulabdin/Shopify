"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <button className='border p-3' onClick={() => signIn("google")}>Login</button>
    </div>
  )
}

export default LoginPage