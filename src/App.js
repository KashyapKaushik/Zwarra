import './App.css';
import Homepage from './Components/Pages/Homepage';

import Navbarz from './Components/Navbarz';
import Aboutzwaara from './Components/Aboutzwaara';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customereview from './Components/Customereview';
import Newaboutzwara from './Components/Pages/Newaboutzwara';
import Footerzwaara from './Components/Footerzwaara';
import JoinAsProvider from './Components/JoinAsProvider/JoinAsProvider';
import JoinInPage from './Components/JoinAsProvider/JoinInPage/JoinInPage';
import RequestForm from './Components/JoinAsProvider/RequestForm/RequestForm';
import PhoneNumberForm from './Components/Checking/PhoneNumberForm';
function App() {
  return (
    <>

    {/* <Customereview/> */}
    {/* <Newaboutzwara/> */}
    {/* <JoinAsProvider/> */}
    {/* <JoinInPage/> */}
    {/* <RequestForm/> */}
    {/* <PhoneNumberForm/> */}

  
    <Router>
    <Navbarz/>
        <Routes>
            <Route exact path='/' element={<Homepage/>}></Route>
            <Route exact path='/about' element={<Aboutzwaara/>}></Route>
            <Route exact path='/home' element={<Homepage/>}></Route>
            <Route exact path='/newabout' element={<Newaboutzwara/>}></Route>
            <Route exact path='/join' element={<JoinAsProvider/>}></Route>
            <Route exact path='/joinin' element={<JoinInPage/>}></Route>
            <Route exact path='/req' element={<RequestForm/>}></Route>
        </Routes>
    <Footerzwaara/>
    </Router> 
    </>

  );
}

export default App;
