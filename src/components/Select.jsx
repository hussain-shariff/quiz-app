import React from 'react'

function Select({name, }) {
  return (
    <div className=''>
        <label htmlFor="time-limit" className='font-bold text-md'>Set time limit</label>
        <select name='time-limit' id='time-limit' className='w-full py-1 bg-inherit border-b-[2px]' >
            <option className='bg-black/40' value="1">1 min</option>
            <option className='bg-black/40' value="2">2 min</option>
            <option className='bg-black/40' value="5">5 min</option>
            <option className='bg-black/40' value="10">10 min</option>
        </select>
    </div>
  )
}

export default Select