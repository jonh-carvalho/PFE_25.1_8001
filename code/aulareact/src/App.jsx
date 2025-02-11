import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MyButton from './components/Header/MyButton.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    /*<>
      <h1>Bem-vindo ao meu aplicativo</h1>
      <MyButton />

    </>*/

  )
}

export default App
