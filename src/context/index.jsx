import React, {createContext, useState, useContext, useReducer } from 'react'
import quizReducer, {initialState} from './reducer'
import useGetData from '../Hooks/useGetData'

const quizContext = createContext()

function QuizProvider({children}) {
    const [state, dispatch] = useReducer(quizReducer, initialState)

    const createQuiz = async () =>{
        dispatch({ type: 'CREATE_QUIZ' });
    }
    
    const addQuestion = async () =>{
        dispatch({ type: 'ADD_QUESTION'});
    }
    
    const deleteQuestion = async (question) =>{
        dispatch({ type: 'DELETE_QUESTION', question});
    }
    
    const setQuestions = async (questions) =>{
        dispatch({ type: 'SET_QUESTIONS', questions});
    }
    
    const getData = async () =>{
        const res = await useGetData()
        dispatch({ type: 'REPLACE_DATA', res});
    }
    const setSelectedChoice = async (choice) =>{
        dispatch({ type: 'SET_SELECTED_CHOICE', choice});
    }
    
    const setSelectedChoicesArray = async (idx, val) =>{
        dispatch({ type: 'SET_SELECTED_CHOICE_ARRAY', payload:{idx, val}});
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
        handleChange,
        setQuestions,
        setSelectedChoice,
        setSelectedChoicesArray,
        deleteQuestion,
        getData
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