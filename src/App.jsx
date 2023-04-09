import React, {useEffect} from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import StartQuiz from "./pages/StartQuiz";
import AddQuestion from "./pages/AddQuestion";
import EditQuestions from "./pages/EditQuestions";
import Score from "./pages/Score";
import { ToastContainer } from 'react-toastify';
import { useAppContext } from './context'

let isInitial = true;
function App() {
  const {getData, postData, state} = useAppContext()
  const {quizList, isChange} = state

  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    if(isInitial){
      isInitial = false
      return
    }
    if(isChange){
      postData()
    }
  }, [quizList])

  return (
    <div className=" min-h-screen bg-gradient-to-tl from-[#121351] via-[#101229] to-black">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/create" element={<CreateQuiz/>}></Route>
          <Route path="/quiz" element={<TakeQuiz/>}></Route>
          <Route path="/startQuiz" element={<StartQuiz/>}></Route>
          <Route path="/AddQuestion" element={<AddQuestion/>}></Route>
          <Route path="/Edit" element={<EditQuestions/>}></Route>
          <Route path="/score" element={<Score/>}></Route>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  )
}

export default App
