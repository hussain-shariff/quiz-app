import React, {useState} from 'react'
import { useAppContext } from '../context'

function Choices({choice, answer, index}) {
  const {setSelectedChoice, setSelectedChoicesArray, state} = useAppContext()
  const {selectedChoice, selectedChoices} = state
  const selectedStyle = 'bg-[#134dfd] border-[#134dfd]'

  const handleChoice = () =>{
    setSelectedChoice(choice)
    if(choice === answer){
      setSelectedChoicesArray(index, 1)
    }else{
      setSelectedChoicesArray(index, 0)
    }
  }

  return (
    <div className='bg-[#0b1637] group border border-[#102564] flex p-3 cursor-pointer gap-3
    rounded-md items-center' onClick={ handleChoice}>
        <div className={`w-4 h-4 border-2 ${choice === selectedChoice && selectedStyle} rounded-full group-hover:border-[#134dfd]`}></div>
        <h1>{choice}</h1>
    </div>
  )
}

export default Choices