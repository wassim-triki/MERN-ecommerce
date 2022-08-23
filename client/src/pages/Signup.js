import React from 'react';
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
  return (
    <Modal
      isOpen={true}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form className="bg-red-50s0 flex flex-col items-stretch gap-4">
        <AuthInput type={'email'} placeholder="Your email" />
        <AuthInput type={'password'} placeholder="Your password" />
        <AuthInput type={'password'} placeholder="Repeat password" />
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
