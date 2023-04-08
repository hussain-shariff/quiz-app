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

function Quiz() {
  return (
    <div className='bg-[#0b1637] p-6 rounded-md text-white flex flex-col gap-2 
    border-2 border-[#0e1c45] hover:border-pink-600'>
        <div className='flex items-center gap-5'>
            <FontAwesomeIcon icon={faBrain} className='h-8 text-white'/>
            <div>
              <h1 className='text-xl font-bold'>Full stack</h1>
              <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1 text-gray-500'>
                  <FontAwesomeIcon icon={faQuestionCircle} className='h-3'/>
                  <p className='text-sm'>10 questions</p>
                </div>
                <div className='flex items-center gap-1 text-gray-500'>
                  <FontAwesomeIcon icon={faClock} className='h-3'/>
                  <p className='text-sm'>2 min</p>
                </div>
              </div>
            </div>
        </div>
        <p>A nest.js full stack project</p>
        <div className='flex gap-3 text-sm text-[#3489ff]'>
          <Link to={'/startQuiz'}>
            <h1 className='cursor-pointer'>Start quiz <FontAwesomeIcon className='h-3' icon={faAnglesRight}/></h1>
          </Link>
          <Link to={'/AddQuestion'}>
            <h1 className='cursor-pointer'>Add question <FontAwesomeIcon className='h-3' icon={faAnglesRight}/></h1>
          </Link>
          <Link to={'/Edit'}>
            <h1 className='cursor-pointer'>Edit <FontAwesomeIcon className='h-3' icon={faAnglesRight}/></h1>
          </Link>
        </div>
    </div>
  )
}

export default Quiz