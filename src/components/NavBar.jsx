import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className=' z-20 sticky top-0 bg-black/30 backdrop-blur-lg text-white flex items-center
    px-10 py-3 md:px-20 border-b-[1px] border-gray-700'>
        <Link to={'/'}className='flex-grow'>
          <h1 className='text-2xl md:text-3xl font-bold font-mono cursor-pointer'>quiz app.</h1>
        </Link>
        <Link to={'/quiz'}>
            <p className='cursor-pointer text-[#3489ff] hover:text-[#61adff] transition ease-out duration-300'>Take quiz</p>
        </Link>
        <Link to={'/create'}>
            <p className=' text-[#3489ff] cursor-pointer ml-5 hover:text-[#61adff] md:ml-10 transition ease-out duration-300'>Create quiz</p>
        </Link>
    </div>
  )
}

export default NavBar