import PokeCard from "./PokeCard"
import { css } from "../../styled-system/css"
import { grid, wrap } from "../../styled-system/patterns"


function CardsContainer(props) {
    return (
        <div className={wrap({
            m: '0rem',
            gap:'0.5rem',
            align:'center',
            justify:'center',
            md:{
                m:'2rem',
            },
            lg: {
                m:'2rem'
            }
        })}>
            {props.cardsData.map((card) => (
                <PokeCard id={card.id} key={card.id} onCardClick={props.onCardClick} name={card.name} spriteUrl={card.image}/>
            ))}
            
        </div>
    
    )
} export default CardsContainer