import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "./redux/features/authSlice.js"
import { useEffect } from "react"
import Home from "../pages/Home.js"
const App = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("userProfile"))
  useEffect(() => {
    dispatch(setUser(user))
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
