import { useState } from 'react'
import Landing from './components/landingPage/landing.jsx'
import Login from './components/Auth/login.jsx'
import Register from './components/Auth/register.jsx'
import Home from './components/Home/home.jsx'
import Dashboard from './components/Dashboard/dashboard.jsx'
import './App.css'
import  {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
