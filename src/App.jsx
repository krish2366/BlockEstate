import './App.css'
import Navbar from './Components/Navbar'
import LoginForm from './pages/LoginForm'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>

      <LoginForm/>
    </>
  )
}

export default App
