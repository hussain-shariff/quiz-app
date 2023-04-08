import React, {useState} from 'react'
import Choices from './Choices'

function QuizQestion({data}) {

  return (
    <div className='text-white'>
        <p className='text-2xl md:text-4xl font-semibold'>{data.question}</p>
        <div className='mt-10 flex flex-col gap-3'>
            <Choices
              choice={data.optionA}/>
            <Choices
              choice={data.optionB}/>
            <Choices
              choice={data.optionC}/>
            <Choices
              choice={data.optionD}/>
        </div>
    </div>
  )
}

export default QuizQestion