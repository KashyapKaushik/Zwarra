import './App.css';
import Homepage from './Components/Pages/Homepage';

import Navbarz from './Components/Navbarz';
import Aboutzwaara from './Components/Aboutzwaara';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customereview from './Components/Customereview';
function App() {
  return (
    <>

    {/* <Customereview/> */}

  
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
