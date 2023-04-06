import CreateQuizForm from "./components/CreateQuizForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";

function App() {

  return (
    <div className=" min-h-screen bg-gradient-to-tl from-[#121351] via-[#101229] to-black">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/create" element={<CreateQuiz/>}></Route>
          <Route path="/quiz" element={<TakeQuiz/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
