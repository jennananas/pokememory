import Header from './components/Header'
import Footer from './components/Footer'
import IntroCard from './components/IntroCard'
import CardsContainer from './components/CardsContainer'
import ScoreContainer from './components/ScoreContainer'

function App() {

  return (
    <>
      <Header/>
      {/* <IntroCard/> */}
      <ScoreContainer bestScore='0' currentScore='0'/>
      <CardsContainer/>
      
      
      <Footer/>
    </>
  )
}

export default App
