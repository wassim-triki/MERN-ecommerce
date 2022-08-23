import React, { useEffect, useState } from 'react';
import AuthInput from '../components/AuthInput';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/features/authSlice';
import customStyles from '../herlpers/modalStyles';

const Signup = () => {
  const { userConnected, error, loading } = useSelector((state) => ({
    ...state.auth,
  }));
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleChange = ({ currentTarget: input }) => {
    setFormData({
      ...formData,
      [input.name]: input.value,
    });
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(signup(formData));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      isOpen={true}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form
        className="bg-red-50s0 flex flex-col items-stretch gap-4"
        onSubmit={handleSubmit}
      >
        <AuthInput
          type={'text'}
          name="username"
          placeholder="Your username"
          value={formData.username}
          onChange={handleChange}
        />
        <AuthInput
          type={'email'}
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <AuthInput
          type={'password'}
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <AuthInput
          type={'password'}
          placeholder="Repeat password"
          value={formData.repeatPassword}
          onChange={handleChange}
          name="repeatPassword"
        />
        <button
          type="submit"
          className="bg-accent-500 text-white rounded-xl p-3"
        >
          Signup
        </button>
      </form>
    </Modal>
  );
};

export default Signup;
