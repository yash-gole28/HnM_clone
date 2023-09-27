// import react from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Mens from './components/Mens';
import Signin from './components/Signin';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path='/mens' element={<Mens />} />
        <Route exact path='/Signin' element={<Signin />}/>
        {/* <Route exact path='/'/> */}
      </Routes>
    </div>
  );
}

export default App;
