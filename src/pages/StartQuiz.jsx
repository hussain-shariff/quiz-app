import React from 'react'
import Timer from '../components/Timer'
import QuizQestion from '../components/QuizQestion'


function StartQuiz() {
  return (
    <div className='min-h-screen relative'>
        <Timer/>
        <div className='absolute top-[20%] left-[10%]'>
            <QuizQestion/>
        </div>
    </div>
  )
}

export default StartQuiz