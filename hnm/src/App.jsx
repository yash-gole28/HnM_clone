// import react from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Mens from './components/Mens';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path='/Mens' element={<Mens />} />
        {/* <Route exact path='/'/> */}
      </Routes>
    </div>
  );
}

export default App;
