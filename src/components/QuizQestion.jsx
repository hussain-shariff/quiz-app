import React from 'react'
import Choices from './Choices'

function QuizQestion() {
  return (
    <div className='text-white'>
        <p className='text-2xl md:text-4xl font-semibold'>Q: Inside which HTML element do we put the JavaScript?</p>
        <div className='mt-10 flex flex-col gap-3'>
            <Choices/>
            <Choices/>
            <Choices/>
            <Choices/>
        </div>
    </div>
  )
}

export default QuizQestion