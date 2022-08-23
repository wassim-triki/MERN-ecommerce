import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
import Home from "./pages/Home.js"
import Modal from "react-modal"
import Signup from "./pages/Signup"
import { useState } from "react"
import Login from "./pages/Login.js"
Modal.setAppElement("#root")
const App = () => {
  const [Wich, setWich] = useState(true)

  return (
    <BrowserRouter>
      {Wich ? <Signup setWich={setWich} /> : <Login setWich={setWich} />}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
