import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className=' z-20 sticky top-0 bg-black/30 drop-shadow-xl text-white flex items-center
    px-10 py-3 md:px-20'>
        <h1 className='text-2xl md:text-3xl font-bold font-mono flex-grow cursor-pointer'>quiz app.</h1>
        <Link to={'/'}>
            <p className='font-bold cursor-pointer hover:text-[#5942e9] transition ease-out duration-300'>Take quiz</p>
        </Link>
        <Link to={'/create'}>
            <p className='font-bold cursor-pointer ml-5 hover:text-[#5942e9] md:ml-10 transition ease-out duration-300'>Create quiz</p>
        </Link>
    </div>
  )
}

export default NavBar