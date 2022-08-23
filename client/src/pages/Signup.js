import React, { useEffect, useState } from 'react';
import AuthInput from '../components/AuthInput';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(100vw,400px)',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
  },
  overlay: {
    backgroundColor: '#00000063',
  },
};
const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = ({ currentTarget: input }) => {
    setFormData({
      ...formData,
      [input.name]: input.value,
    });
  };

  return (
    <Modal
      isOpen={true}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form className="bg-red-50s0 flex flex-col items-stretch gap-4">
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
