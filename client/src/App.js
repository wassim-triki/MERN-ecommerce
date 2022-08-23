import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
import Home from "./pages/Home.js"
import Modal from "react-modal"
import Signup from "./pages/Signup"
Modal.setAppElement("#root")
const App = () => {
  return (
    <BrowserRouter>
      <Signup />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
