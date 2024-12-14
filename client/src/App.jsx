import { useState } from 'react'
import './App.css'
import Navbar from './shared/Navbar'
import Home from './pages/Home'
import Footer from './shared/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
