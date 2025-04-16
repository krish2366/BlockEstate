import './App.css'
import Navbar from './Components/Navbar'
import LoginForm from './pages/LoginForm'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast";
import SignUp from './pages/SignUp'
import LandDetails from './pages/LandDetails'
import RegisterLandForm from './pages/RegisterLandForm'
import TransferLandForm from './pages/TransferLandForm'

function App() {

  return (
    <>

      <Router>
        <Toaster />
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/signUp' element = {<SignUp/>}/>
          <Route path='/landdetails' element = {<LandDetails/>}/>

          <Route path='*' element={<Page404/>} />
          <Route path='/registerland' element={<RegisterLandForm/>}/>
          <Route path='/userDetails' element={<div>hi</div>} />
          <Route path='/transferland' element={<TransferLandForm/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
