import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Router, Routes } from 'react-router'
import Home from './Components/Home'
import AddBlog from './Components/AddBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'Component={Home}/>
        <Route path='/add' Component={AddBlog}/>
      </Routes>
    </>
  )
}

export default App
