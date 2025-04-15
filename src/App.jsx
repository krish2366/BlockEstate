import './App.css'
import Navbar from './Components/Navbar'
import LoginForm from './pages/LoginForm'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast";

function App() {

  return (
    <>
      <Navbar/>

      <Toaster />
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='*' element={<Page404/>} />
        </Routes>
      </Router>

      {/* <LoginForm/> */}
    </>
  )
}

export default App
