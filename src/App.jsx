import Header from './components/Header'
import Footer from './components/Footer'
import IntroCard from './components/IntroCard'
import CardsContainer from './components/CardsContainer'
import ScoreContainer from './components/ScoreContainer'
import { useEffect, useState } from 'react'
import { button } from '../styled-system/recipes'
import ReplayIcon from '@mui/icons-material/Replay';
import {css} from '../styled-system/css'
function App() {
  const [level, setLevel] = useState("")
  const [nbOfCard, setNbOfCard] = useState(0)
  const [isLevelSelected, setIsLevelSelected] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedIds, setClickedIds] = useState([])
  const [cardsData, setCardsData] = useState([])
  const [isGameOver, setGameOver] = useState(false)

  const handleSelectLevel = (selectedLevel) => {
    setLevel(selectedLevel)
    setIsLevelSelected(true)
    const num = renderCards(selectedLevel)
    setNbOfCard(num)
  }
  
  const handleCardClick = (clickedId) => {
    clickedIds.includes(clickedId) ? 
        (
        setBestScore(Math.max(score, bestScore)),
        setGameOver(true),
        resetGame()
        )
        : (
      // rajouter des IDs
        setClickedIds([...clickedIds, clickedId]),
        setScore(score+1),
        shuffle(cardsData)
        // console.log(clickedIds)
    )
  }
  const renderCards = (level) => {
    let numCards = 0;
    if (level === 'Easy') {
      numCards = 4;
    } else if (level === 'Medium') {
      numCards = 6;
    } else if (level === 'Hard') {
      numCards = 8;
    }
    return numCards
  }

  const getRandomIds = (quantity, max) => {
    const set = new Set()
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * max) + 1)
    }
    return Array.from(set)
  }
  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  useEffect(() => {
    const fetchCardsData = async () => {
      if (nbOfCard !== 0) {
        const ids = getRandomIds(nbOfCard, 1017);
        const data = await getCardsData(ids);
        setCardsData(data);
      }
    };

    fetchCardsData();
  }, [nbOfCard]);

  const getCardsData = async (ids) => {
    const results = await Promise.all(
      ids.map(async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        return await res.json()
      }))
    const cardsData = results.map(data => ({
      name: data.name,
      id: data.id,
      image: data.sprites.front_default
    }))
    return cardsData
  }

  const classes = button({size:{
    sm:'sm',
    md:'md', 
    lg:'lg'
}})

  const resetGame = () => {
    setScore(0),
    setCardsData([]),
    setClickedIds([])
  }

  return (

    <>
      <Header/>
      {isLevelSelected ? 
      <>
        <ScoreContainer bestScore={bestScore} currentScore={score} level={level} /> 
        {!isGameOver &&
          <CardsContainer cardsData={cardsData} onCardClick={handleCardClick} /> }
        { isGameOver &&  <button onClick={() => { setGameOver(false); setIsLevelSelected(false); }} className={classes.replay}><ReplayIcon className={css({
          fontSize:'4rem!important'
        })}/>Play Again</button>}
       
        
      </>
      : <IntroCard onLevelSelected={handleSelectLevel} /> }
      
      
      
      <Footer/>
    </>
  )
}

export default App
