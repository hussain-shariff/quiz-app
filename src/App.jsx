import CreateQuizForm from "./components/CreateQuizForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import StartQuiz from "./pages/StartQuiz";
import AddQuestion from "./pages/AddQuestion";
import EditQuestions from "./pages/EditQuestions";
import Score from "./pages/Score";

function App() {

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
    </div>
  )
}

export default App
