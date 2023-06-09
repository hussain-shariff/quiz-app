import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTrash
  } from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from '../context'
import {notifySuccess, notifyError} from '../Hooks/useNotifications'

function Question({question}) {
  const {deleteQuestion, state} = useAppContext()
  const {quizQuestions} = state

  const handleDelete = () =>{
    if(quizQuestions.length === 1){
      notifyError('A quiz must have at least one question.')
    }
    else{
      deleteQuestion(question);
      notifySuccess('Question deleted')
    }
  }
  return (
    <div className='bg-[#0f1b40] border-2 border-[#102052] flex justify-between items-center px-7 gap-2 md:px-10 py-3'>
        <p>Q : {question}</p>
        <FontAwesomeIcon onClick={handleDelete} icon={faTrash} className='cursor-pointer hover:text-[#2b5bec]'/>
    </div>
  )
}

export default Question