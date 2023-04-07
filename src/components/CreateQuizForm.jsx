import React, {useState} from 'react'
import InputForm from './InputForm'
import { useAppContext } from '../context'

function CreateQuizForm() {
    const {clearValues, handleChange, state} = useAppContext()
    const {quizName, description, gradingSystem, timeLimit} = state

    const handleData = (e) =>{
        const name = e.target.name
        const value = e.target.value       
        handleChange(name, value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        clearValues()
    }
  return (
    <form className='h-screen relative' onSubmit={handleSubmit}>
        <div className='border border-gray-700 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4
            flex flex-col bg-[#0b1124] z-30 backdrop-blur-3xl p-10 rounded-md w-[340px]'>
            <h1 className='text-center font-bold text-[#5942e9] text-3xl z-40'>Create a quiz</h1>
            <InputForm 
                name="quizName"
                placeholder="Quiz Name"
                type="text"
                value = {quizName}
                setformData = { handleData }/>
            <InputForm 
                name="description"
                type="text"
                value = {description}
                placeholder="Description"
                setformData = { handleData }
                />
            <div>
                <label htmlFor="grading" className='font-semibold text-md'>Points system</label>
                <select name='gradingSystem' id='grading' onChange={handleData} value={gradingSystem}
                className='w-full py-1 bg-inherit border-b-[2px]' >
                    <option className='bg-[#5942e9]' value="simple">Simple Scoring</option>
                    <option className='bg-[#5942e9]' value="weighted">Weighted Scoring</option>
                </select>
            </div>
            <div>
                <label htmlFor="time-limit" className='font-semibold text-md'>Set time limit</label>
                <select name='timeLimit' id='time-limit' onChange={handleData} value={timeLimit} 
                className='w-full py-1 bg-inherit border-b-[2px]' >
                    <option className='bg-[#5942e9]' value="1">1 min</option>
                    <option className='bg-[#5942e9]' value="2">2 min</option>
                    <option className='bg-[#5942e9]' value="5">5 min</option>
                    <option className='bg-[#5942e9]' value="10">10 min</option>
                </select>
            </div>
            <button className={`bg-gradient-to-r from-[#4327f9] to-[#412fb9] py-1 rounded-sm 
            text-lg font-semibold hover:scale-105 transition ease-out duration-500 w-full text-[#070417]`}
            type='submit'>
                Create
            </button>
        </div>
    </form>
  )
}

export default CreateQuizForm