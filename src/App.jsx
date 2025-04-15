import './App.css'
import Navbar from './Components/Navbar'
import LoginForm from './pages/LoginForm'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import {Toaster} from "react-hot-toast";

function App() {

  return (
    <>
      <Navbar/>

      <Toaster />
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </Router>

      {/* <LoginForm/> */}
    </>
  )
}

export default App
