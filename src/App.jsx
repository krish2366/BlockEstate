import './App.css'
import Navbar from './Components/Navbar'
import LoginForm from './pages/LoginForm'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast";
import SignUp from './pages/SignUp'

function App() {

  return (
    <>

      <Router>
        <Toaster />
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='*' element={<Page404/>} />
          <Route path='/signUp' element = {<SignUp/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
