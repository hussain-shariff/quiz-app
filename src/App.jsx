import CreateQuizForm from "./components/CreateQuizForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className=" min-h-screen bg-gradient-to-tl from-[#14155d] via-[#101229] to-black">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/create" element={<CreateQuizForm/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
