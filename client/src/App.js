import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/authSlice.js';
import { useEffect } from 'react';
import Home from '../pages/Home.js';
import Modal from 'react-modal';
import Signup from './pages/Signup';
Modal.setAppElement('#root');
const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('userProfile'));
  useEffect(() => {
    dispatch(setUser(user));
  });
  return (
    <BrowserRouter>
      <Signup />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
