import './App.css';
import Homepage from './Components/Homepage';

import Navbarz from './Components/Navbarz';
import Aboutzwaara from './Components/Aboutzwaara';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

  
    <Router>
    <Navbarz/>
        <Routes>
            <Route exact path='/' element={<Homepage/>}></Route>
            <Route exact path='/about' element={<Aboutzwaara/>}></Route>
            <Route exact path='/home' element={<Homepage/>}></Route>
        </Routes>
    </Router>
    </>

  );
}

export default App;
