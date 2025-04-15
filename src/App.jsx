import './App.css'
import Navbar from './Components/Navbar'
import LoginForm from './pages/LoginForm'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </Router>

      <LoginForm/>
    </>
  )
}

export default App
