import React, {useState, useEffect} from 'react'
import Timer from '../components/Timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronRight,
  faChevronLeft
  } from '@fortawesome/free-solid-svg-icons'
import QuizQestion from '../components/QuizQestion'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'
import { useNavigate } from 'react-router-dom';

function StartQuiz() {
  // const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const {state} = useAppContext()
  const {quizQuestions} = state


  const handleClick = (action) =>{
    // if(action === 'prev'){
    //   setCurrentIndex(prev=> prev-1)
    // }else if(action === 'next'){
    //   setCurrentIndex(pre=> pre+1)
    // }
    console.log(action);
  }

  return (
    <div className='relative'>
        <Timer/>
        <div className='mt-28 px-12 md:px-32'>
            <QuizQestion
              data={quizQuestions[currentIndex]}/>
            <div className='flex justify-between items-center mt-20 text-sm text-[#4391ff]'>
                {currentIndex > 0 && <div className='border-2 border-[#3489ff] px-4 cursor-pointer rounded
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'
                onClick={handleClick('prev')}>
                    <FontAwesomeIcon icon={faChevronLeft}/> Previous
                </div>}
                <h1 className={`text-lg ${currentIndex === 0 && 'ml-[50%]'}`}>{currentIndex+1}/{quizQuestions.length}</h1>
                <div className='border-2 border-[#3489ff] px-4 cursor-pointer rounded
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'
                onClick={handleClick('next')}>
                    Next <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartQuiz