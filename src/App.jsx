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
  const [level, setLevel] = useState('Easy')
  const [nbOfCard, setNbOfCard] = useState(0)
  const [isLevelSelected, setIsLevelSelected] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [isGameOver, setGameOver] = useState(false)

  const [clickedIds, setClickedIds] = useState([])
  const [cardsData, setCardsData] = useState([])
  const [displayedCardIds, setDisplayedCardIds] = useState([])

  const handleSelectLevel = (selectedLevel) => {
    setLevel(selectedLevel)
    setIsLevelSelected(true)
    const num = setNbCardToDisplay(selectedLevel)
    setNbOfCard(num)
  }
  
  const handleCardClick = (clickedId) => {
    clickedIds.includes(clickedId) ? (
        setBestScore(Math.max(score, bestScore)),
        setGameOver(true),
        resetGame()
        ):(
        setClickedIds([...clickedIds, clickedId]),
        setScore(score+1),
        addCards(),
        shuffle(cardsData)
        )
  }
  const addCards = async () => {
    if (score+1 === displayedCardIds.length) {
      const oldIds = cardsData.map((card) => card.id)
      const newIds = generateUniqueIds(2, 1017, oldIds)
      const newCards = await getCardsData(newIds);
      setCardsData([...cardsData, ...newCards]);
      setDisplayedCardIds([...displayedCardIds, ...newIds])
    }
  };
  
  const setNbCardToDisplay = (level) => {
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

  const generateUniqueIds = (quantity, max, existingData) => {
    const uniqueIds = new Set();
    while (uniqueIds.size < quantity) {
      const newId = Math.floor(Math.random() * max) + 1;
      if (!existingData.some(data => data.id === newId)) {
        uniqueIds.add(newId);
      }
    }
  
    return Array.from(uniqueIds);
  };
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
        const newIds = generateUniqueIds(nbOfCard, 1017, displayedCardIds);
        const newData = await getCardsData(newIds);
        const uniqueNewData = newData.filter((newCard) => {
          return !cardsData.some((card) => card.id === newCard.id);
        });
    
        setCardsData([...cardsData, ...uniqueNewData]);
        setDisplayedCardIds([...displayedCardIds, ...newIds]);
      }
    }
    fetchCardsData();
  }, [isLevelSelected]);

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
    setDisplayedCardIds([])
    setNbOfCard(0)
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
