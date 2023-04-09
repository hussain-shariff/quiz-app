import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='h-[90vh] flex items-center justify-center'>
      <div className=' text-center p-5'>
          <h1 className='text-4xl md:text-6xl text-[#5942e9] font-bold'> Unleash Your Inner Quizmaster.</h1>
          <p className='text-white md:font-bold mt-5'>Join the Fun and Test Your Knowledge with Our Wide Range of Quizzes</p>
          <Link to={'/quiz'}>
            <div className='bg-[#5942e9] w-60 group cursor-pointer flex justify-center items-center
            text-white mt-5 mx-auto py-2 rounded-full hover:bg-[#432ecb]'>
              <p>Get Started </p>
              <h1 className='group-hover:translate-x-2 text-xl ml-2 transition font-bold ease-out duration-500'> ➙</h1>
            </div>
          </Link>
      </div>
    </div>
    
  )
}

export default Home