import React from 'react'
import InputForm from '../components/InputForm'
import { useAppContext } from '../context'
import { notifySuccess } from '../Hooks/useNotifications'

function AddQuestion() {
    const { clearValues, handleChange, state } = useAppContext()
    const { question, optionA, optionB, optionC, optionD, correctAnswer } = state
    console.log(question, optionA, optionB, optionC, optionD, correctAnswer);
  const handleSubmit = (e) =>{
    e.preventDefault()
    notifySuccess('Question added')
    clearValues()
  }

  const handleData = (e) =>{
    const name = e.target.name
    const value = e.target.value
    handleChange(name, value)
  }
  return (
    <form className='h-screen relative' onSubmit={handleSubmit}>
        <div className='border border-gray-700 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4
            flex flex-col bg-[#0b1124] z-30 backdrop-blur-3xl p-10 rounded-md w-[400px]'>
            <h1 className='text-center font-bold text-[#5942e9] text-3xl z-40'>Add Question</h1>
            <InputForm 
                name="question"
                placeholder="Question"
                type="text"
                value = {question}
                setformData = { handleData }/>
            <h1 className='mt-3'>Set Choices for the question</h1>
            <InputForm 
                name="optionA"
                type="text"
                value = {optionA}
                placeholder="Option A"
                setformData = { handleData }
                />
            <InputForm 
                name="optionB"
                type="text"
                value = {optionB}
                placeholder="Option B"
                setformData = { handleData }
                />
            <InputForm 
                name="optionC"
                type="text"
                value = {optionC}
                placeholder="Option C"
                setformData = { handleData }
                />
            <InputForm 
                name="optionD"
                type="text"
                value = {optionD}
                placeholder="Option D"
                setformData = { handleData }
                />
            <div>
                <label htmlFor="time-limit" className='font-semibold text-md'>Set Answer</label>
                <select name='correctAnswer' id='time-limit' onChange={handleData}
                className='w-full py-1 bg-inherit border-b-[2px]' >
                    <option className='bg-[#5942e9]' value='A'>Option A</option>
                    <option className='bg-[#5942e9]' value='B'>Option B</option>
                    <option className='bg-[#5942e9]' value='C'>Option C</option>
                    <option className='bg-[#5942e9]' value='D'>Option D</option>
                </select>
            </div>
            <button className={`bg-gradient-to-r from-[#4327f9] to-[#6551ea] py-1 rounded-sm 
            text-lg font-semibold hover:scale-105 transition ease-out duration-500 w-full text-[#070417]`}
            type='submit'>
                Create
            </button>
        </div>
        {/* <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[340px] h-[550px] bg-[#2527a7] blur-xl"></div> */}
    </form>
  )
}

export default AddQuestion