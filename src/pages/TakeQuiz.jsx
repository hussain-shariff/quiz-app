import React from 'react'
import Quiz from '../components/Quiz'


function TakeQuiz() {
  return (
    <div className='md:px-20 px-10 grid grid-cols-1 md:grid-cols-3 mt-10 gap-6'>
        <Quiz/>
        <Quiz/>
        <Quiz/>
        <Quiz/>
        <Quiz/>
    </div>
  )
}

export default TakeQuiz