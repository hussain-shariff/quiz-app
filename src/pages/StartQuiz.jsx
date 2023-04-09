import React, {useState, useEffect} from 'react'
import Timer from '../components/Timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronRight,
  faChevronLeft
  } from '@fortawesome/free-solid-svg-icons'
import QuizQestion from '../components/QuizQestion'
import { useAppContext } from '../context'
import { useNavigate } from 'react-router-dom';
import { notifyError } from '../Hooks/useNotifications'

function StartQuiz() {
  const navigate = useNavigate()
  const {state, setSelectedChoice} = useAppContext()
  const {quizQuestions, selectedChoice} = state
  const [currentIndex, setCurrentIndex] = useState(0)
 
  
  useEffect(()=>{
    if(quizQuestions.length === 0){
      navigate('/quiz')
    }
  },[])

  const handleClick = (action) =>{
    if(action === 'next'){
      if(selectedChoice === ''){
        notifyError('select answer')
      }else{
        setSelectedChoice('')
        setCurrentIndex(pre=> pre+1)
      }
    }else if(action === 'finish'){
      navigate('/score')
    }else if(action === 'home'){
      navigate('/quiz')
    }
  }


  return (
    <div className='relative'>
        <Timer/>
        <div className='mt-28 px-12 md:px-32'>
            {quizQuestions.length > 0 && <QuizQestion
              data={quizQuestions[currentIndex]}
              index={currentIndex}/>}
            <div className='flex justify-between items-center mt-20 text-sm text-[#4391ff]'>
                <div className='border-2 border-[#3489ff] px-4 cursor-pointer rounded
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'
                onClick={()=>handleClick('home')}>
                    <FontAwesomeIcon icon={faChevronLeft}/> Back to Home
                </div>
                <h1 className={`text-lg`}>{currentIndex+1}/{quizQuestions.length}</h1>
                {currentIndex < quizQuestions.length -1 && <div onClick={()=>handleClick('next')} className='border-2 border-[#3489ff] px-4 cursor-pointer rounded
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'>
                    Next <FontAwesomeIcon icon={faChevronRight}/>
                </div>}
                {currentIndex+1 === quizQuestions.length && <div onClick={()=>handleClick('finish')} className='border-2 border-[#3489ff] px-4 cursor-pointer rounded
                hover:bg-[#3489ff] hover:text-white transition ease-out duration-300'>
                    Submit
                </div>}
            </div>
        </div>
    </div>
  )
}

export default StartQuiz