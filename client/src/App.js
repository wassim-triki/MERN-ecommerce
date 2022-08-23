import Modal from 'react-modal';
import Signup from './pages/Signup';
Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
