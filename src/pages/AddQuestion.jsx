import React from 'react'
import InputForm from '../components/InputForm'

function AddQuestion() {
  const handleSubmit = () =>{

  }
  const handleData = () =>{

  }
  return (
    <form className='h-screen relative' onSubmit={handleSubmit}>
        <div className='border border-gray-700 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4
            flex flex-col bg-[#0b1124] z-30 backdrop-blur-3xl p-10 rounded-md w-[400px]'>
            <h1 className='text-center font-bold text-[#5942e9] text-3xl z-40'>Add Question</h1>
            <InputForm 
                name="quizName"
                placeholder="Question"
                type="text"
                value = {''}
                setformData = { handleData }/>
            <h1 className='mt-3'>Set Choices for the question</h1>
            <InputForm 
                name="description"
                type="text"
                value = {''}
                placeholder="Option 1"
                setformData = { handleData }
                />
            <InputForm 
                name="description"
                type="text"
                value = {''}
                placeholder="Option 2"
                setformData = { handleData }
                />
            <InputForm 
                name="description"
                type="text"
                value = {''}
                placeholder="Option 3"
                setformData = { handleData }
                />
            <InputForm 
                name="description"
                type="text"
                value = {''}
                placeholder="Option 4"
                setformData = { handleData }
                />
            <div>
                <label htmlFor="time-limit" className='font-semibold text-md'>Set Answer</label>
                <select name='timeLimit' id='time-limit' onChange={handleData} value={''} 
                className='w-full py-1 bg-inherit border-b-[2px]' >
                    <option className='bg-[#5942e9]' value="Option 1">1</option>
                    <option className='bg-[#5942e9]' value="Option 2">2</option>
                    <option className='bg-[#5942e9]' value="Option 3">3</option>
                    <option className='bg-[#5942e9]' value="Option 4">4</option>
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