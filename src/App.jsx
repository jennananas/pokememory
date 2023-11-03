import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import IntroCard from './components/IntroCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <IntroCard/>
      <Footer/>
    </>
  )
}

export default App
