import React, {useState} from 'react'
import Choices from './Choices'

function QuizQestion({data, index}) {


  return (
    <div className='text-white'>
        <p className='text-2xl md:text-4xl font-semibold'>Q : {data.question}</p>
        <div className='mt-10 flex flex-col gap-3'>
            <Choices
              choice={data.optionA}
              answer={data.correctAnswer}
              index={index}/>
            <Choices
              choice={data.optionB}
              answer={data.correctAnswer}
              index={index}/>
            <Choices
              choice={data.optionC}
              answer={data.correctAnswer}
              index={index}/>
            <Choices
              choice={data.optionD}
              answer={data.correctAnswer}
              index={index}/>
        </div>
    </div>
  )
}

export default QuizQestion