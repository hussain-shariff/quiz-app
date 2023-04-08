import React, {createContext, useState, useContext, useReducer } from 'react'
import quizReducer, {initialState} from './reducer'
const quizContext = createContext()

function QuizProvider({children}) {
    const [state, dispatch] = useReducer(quizReducer, initialState)

    const createQuiz = async () =>{
        dispatch({ type: 'CREATE_QUIZ' });
    }
    
    const addQuestion = async () =>{
        dispatch({ type: 'ADD_QUESTION'});
    }
    
    const setEditBy = async (id) =>{
        dispatch({ type: 'SET_EDIT_BY', id });
    }

    const clearValues = () =>{
        dispatch({ type: 'CLEAR_VALUES' });
    }
    const handleChange = (name, value) => {
        dispatch({ type: 'HANDLE_CHANGE', payload : {name, value} });
    };

    
    const values = {
        state,
        createQuiz,
        setEditBy,
        addQuestion,
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