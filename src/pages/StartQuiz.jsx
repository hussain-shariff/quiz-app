import React from 'react'
import Timer from '../components/Timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronRight,
  faChevronLeft
  } from '@fortawesome/free-solid-svg-icons'
import QuizQestion from '../components/QuizQestion'


function StartQuiz() {
  return (
    <div className='min-h-screen relative'>
        <Timer/>
        <div className='mt-28 px-12 md:px-32'>
            <QuizQestion/>
            <div className='flex justify-between items-center mt-20 text-sm text-[#4391ff]'>
                <div className='border-2 border-[#3489ff] px-4 cursor-pointer rounded
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'>
                    <FontAwesomeIcon icon={faChevronLeft}/> Previous
                </div>
                <h1 className='text-lg'>1/4</h1>
                <div className='border-2 border-[#3489ff] px-4 cursor-pointer rounded
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'>
                    Next <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartQuiz