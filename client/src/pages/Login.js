import React, { useEffect, useState } from "react"
import AuthInput from "../components/AuthInput"
import Modal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import customStyles from "../herlpers/modalStyles"
import { login } from "../redux/features/authSlice"

const Login = ({ setWich }) => {
  const { userConnected, error, loading } = useSelector((state) => ({
    ...state.auth,
  }))
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(error)
  }, [error])

  const handleChange = ({ currentTarget: input }) => {
    setFormData({
      ...formData,
      [input.name]: input.value,
    })
  }
  const handleSubmit = (e) => {
    try {
      e.preventDefault()
      dispatch(login(formData))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal isOpen={true} style={customStyles} contentLabel="Example Modal">
      <form className="bg-red-50s0 flex flex-col items-stretch gap-4" onSubmit={handleSubmit}>
        <AuthInput type={"email"} name="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
        <AuthInput type={"password"} placeholder="Your password" value={formData.password} onChange={handleChange} name="password" />
        <button type="submit" className="bg-accent-500 text-white rounded-xl p-3">
          Login
        </button>
        <div onClick={() => setWich(true)}>Register</div>
      </form>
    </Modal>
  )
}

export default Login
