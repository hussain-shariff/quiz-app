import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTrash
  } from '@fortawesome/free-solid-svg-icons'

function Question() {
  return (
    <div className='bg-[#0f1b40] border-2 border-[#102052] flex justify-between items-center px-10 py-3'>
        <p>Sample Question</p>
        <FontAwesomeIcon icon={faTrash} className='cursor-pointer hover:text-[#2b5bec]'/>
    </div>
  )
}

export default Question