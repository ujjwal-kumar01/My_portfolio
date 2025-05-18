import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Top from './components/Top'
import About from './components/About'
import Contactus from './components/Contactus'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top />
    <About />
    <Skills/>
    <Contactus/>
    </>
  )
}

export default App
