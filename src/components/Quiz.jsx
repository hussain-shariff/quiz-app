import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPenToSquare,
  faClock,
  faAnglesRight,
  faBrain,
  faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {notifySuccess} from '../Hooks/useNotifications'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context'

function Quiz({name, description, time, questions, id }) {
  const navigate = useNavigate()
  const {setEditBy} = useAppContext()

  const handleAddQuestion = () => {
    setEditBy(id)
    navigate('/AddQuestion')
  }
  
  const handleEditQuestion = () => {
    setEditBy(id)
    navigate('/Edit')
  }

  return (  
    <div className='bg-[#0b1637] p-6 rounded-md text-white flex flex-col gap-2 
    border-2 border-[#0e1c45] hover:border-pink-600'>
        <div className='flex items-center gap-5'>
            <FontAwesomeIcon icon={faBrain} className='h-8 text-white'/>
            <div>
              <h1 className='text-xl font-bold'>{name}</h1>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1 text-gray-500'>
                  <FontAwesomeIcon icon={faQuestionCircle} className='h-3'/>
                  <p className='text-sm'>10 questions</p>
                </div>
                <div className='flex items-center gap-1 text-gray-500'>
                  <FontAwesomeIcon icon={faClock} className='h-3'/>
                  <p className='text-sm'>{time} min</p>
                </div>
              </div>
            </div>
        </div>
        <p>{description}</p>
        <div className='flex gap-3 text-sm text-[#3489ff]'>
          <Link to={'/startQuiz'}>
            <h1 className='cursor-pointer'>Start quiz <FontAwesomeIcon className='h-3' icon={faAnglesRight}/></h1>
          </Link>
          <h1 className='cursor-pointer' onClick={handleAddQuestion}>Add question 
            <FontAwesomeIcon className='h-3' icon={faAnglesRight}/>
          </h1>
          <h1 className='cursor-pointer' onClick={handleEditQuestion}>Edit 
            <FontAwesomeIcon className='h-3' icon={faAnglesRight}/>
          </h1>
        </div>
    </div>
  )
}

export default Quiz