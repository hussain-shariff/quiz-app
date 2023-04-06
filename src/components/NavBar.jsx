import React from 'react'

function NavBar() {
  return (
    <div className='sticky top-0 bg-black/30 drop-shadow-xl text-white flex items-center
    px-10 py-3 md:px-20'>
        <h1 className='text-3xl font-bold font-mono flex-grow'>quiz app.</h1>
        <p className='font-bold cursor-pointer'>Take quiz</p>
        <p className='font-bold cursor-pointer ml-10'>Create quiz</p>
    </div>
  )
}

export default NavBar