import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Category from './Components/Category/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Carousel/>
  <Category/>
    </>
  )
}

export default App
