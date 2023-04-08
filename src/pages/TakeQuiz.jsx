import React from 'react'
import Quiz from '../components/Quiz'
import { useAppContext } from '../context'

function TakeQuiz() {
  const {state} = useAppContext()
  const {quizList} = state

  const quizElements = quizList.map(item=>{
    return (
        <Quiz
        key={item._id}
        id={item._id}
        name={item.quizName}
        description={item.description}
        time={item.timeLimit}
        questions={item.questions}
    />)

  })
  return (
    <div className='md:px-20 px-10 relative'>
      <div className='absolute top-11 left-24 rounded-full w-28 h-1 bg-[#3489ff]'></div>
      <h1 className='text-white mt-10 text-3xl font-bold'>Quiz Menu</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-6'>
          {quizElements}
      </div>
    </div>
    
  )
}

export default TakeQuiz