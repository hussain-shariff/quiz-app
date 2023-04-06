import React, {useState} from 'react'
import InputForm from './InputForm'


function CreateQuizForm() {
    const [formData, setformData] = useState({
        quizName : "",
        description : "",
        gradingSystem : "simple",
        timeLimit : "2"
    })

    const handleChange = (e) =>{
        setformData(prev=>{
            return{
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setformData({
            quizName : "",
            description : "",
            gradingSystem : "simple",
            timeLimit : "2"
        })
    }
  return (
    <form className='h-screen relative' onSubmit={handleSubmit}>
        <div className='border-[1px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4
            flex flex-col bg-black/70 z-30 backdrop-blur-3xl p-10 rounded-md w-[340px]'>
            <h1 className='text-center font-bold text-[#5942e9] text-3xl z-40'>Create a quiz</h1>
            <InputForm 
                name="quizName"
                placeholder="Quiz Name"
                type="text"
                value = {formData.quizName}
                setformData = { setformData }/>
            <InputForm 
                name="description"
                type="text"
                value = {formData.description}
                placeholder="Description"
                setformData = { setformData }
                />
            <div>
                <label htmlFor="grading" className='font-semibold text-md'>Points system</label>
                <select name='gradingSystem' id='grading' onChange={handleChange} value={formData.gradingSystem}
                className='w-full py-1 bg-inherit border-b-[2px]' >
                    <option className='bg-[#5942e9]' value="simple">Simple Scoring</option>
                    <option className='bg-[#5942e9]' value="weighted">Weighted Scoring</option>
                </select>
            </div>
            <div>
                <label htmlFor="time-limit" className='font-semibold text-md'>Set time limit</label>
                <select name='timeLimit' id='time-limit' onChange={handleChange} value={formData.timeLimit} 
                className='w-full py-1 bg-inherit border-b-[2px]' >
                    <option className='bg-[#5942e9]' value="1">1 min</option>
                    <option className='bg-[#5942e9]' value="2">2 min</option>
                    <option className='bg-[#5942e9]' value="5">5 min</option>
                    <option className='bg-[#5942e9]' value="10">10 min</option>
                </select>
            </div>
            <button className={`bg-gradient-to-r from-[#4327f9] to-[#7f6cff] py-1 rounded-sm 
            font-bold text-lg hover:scale-105 transition ease-out duration-500 w-full text-[#070417]`}
            type='submit'>
                Create Quiz
            </button>
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[300px] h-[400px] bg-[#2527a7] blur-xl"></div>
    </form>
  )
}

export default CreateQuizForm