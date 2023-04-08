import React from 'react'
import { Link } from 'react-router-dom'

function Score() {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
      <div className='border border-[#1a2958] px-10 py-7 text-white bg-[#0b1124]
      flex flex-col gap-3 rounded-md'>
        <h1 className='text-3xl font-bold text-center text-[#0543fc] mb-3'>Quiz Result</h1>
        <p>Your Score - 50%</p>
        <p>Total number of questions - 10</p>
        <p>Number of correct answers - 5</p>
        <p>Number of wrong answers - 5</p>
        <p>Time taken - 2:00 mins</p>
        <Link to={'/quiz'}>
        <button className='border border-[#0543fc] py-1 w-full rounded hover:bg-[#0543fc]
        transition ease-out duration-300 mt-2'>Back to Home</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Score