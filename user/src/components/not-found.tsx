import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <h2 className='text-center font-semibold text-gray-800 text-2xl'>404 - Page not available!</h2>
      <Link className='text-blue-500 underline' to='/home'>Home</Link>
    </div>
  )
}

export default NotFound
