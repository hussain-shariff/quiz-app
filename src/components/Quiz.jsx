import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function Quiz() {
  return (
    <div className='bg-[#0b1637] p-6 rounded-md text-white flex flex-col gap-2 
    border-2 border-[#0e1c45] hover:border-pink-600'>
        <div className='flex items-start gap-5'>
            <FontAwesomeIcon icon={faPenToSquare} className='h-8 text-white'/>
            <div>
              <h1 className='text-xl font-bold'>Full stack</h1>
              <div className='flex items-center gap-2 text-gray-500'>
                <FontAwesomeIcon icon={faClock} className='h-3'/>
                <p className='text-sm'>2 min</p>
              </div>
            </div>
        </div>
        <p>A nest.js full stack project</p>
        <div className='flex gap-3 text-sm text-[#3489ff]'>
            <h1 className='cursor-pointer'>Start quiz <FontAwesomeIcon className='h-3' icon={faAnglesRight}/></h1>
            <h1 className='cursor-pointer'>Add question <FontAwesomeIcon className='h-3' icon={faAnglesRight}/></h1>
            <h1 className='cursor-pointer'>Edit <FontAwesomeIcon className='h-3' icon={faAnglesRight}/></h1>
        </div>
    </div>
  )
}

export default Quiz