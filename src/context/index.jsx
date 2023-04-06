import React, {createContext, useState, useContext, useReducer } from 'react'
import quizReducer, {initialState} from './reducer'
const quizContext = createContext()

function QuizProvider({children}) {
    const [state, dispatch] = useReducer(quizReducer, initialState)

    const createJob = async () =>{
        await useCreateJob(
            state.company,
            state.position,
            state.location,
            state.jobType,
            state.status,
        )
    }

    const clearValues = () =>{
        dispatch({ type: 'CLEAR_VALUES' });
    }
    const handleChange = (name, value) => {
        dispatch({ type: 'HANDLE_CHANGE', payload : {name, value} });
    };

    
    const values = {
        state,
        createJob,
        clearValues,
        handleChange
    }
    return (
        <quizContext.Provider value={values}>
            {children}
        </quizContext.Provider>
    )
}

const useAppContext = () =>{
  return useContext(quizContext)
}

export {QuizProvider, useAppContext}