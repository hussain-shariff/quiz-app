import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHourglassStart
    } from '@fortawesome/free-solid-svg-icons'

function Timer() {
  return (
    <div className='bg-[#0b1637] w-28 flex justify-center items-center text-white text-center p-3 rounded-md
        absolute top-10 right-10 border-2 border-gray-500'>
            <p><FontAwesomeIcon icon={faHourglassStart} className='h-4 mr-2'/>02 : 00</p>
    </div>
  )
}

export default Timer