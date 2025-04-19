import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './components/Top'
import About from './components/About'
import Contactus from './components/Contactus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Top />
    <About />
    <Contactus/>
    </>
  )
}

export default App
