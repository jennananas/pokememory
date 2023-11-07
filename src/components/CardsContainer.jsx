import PokeCard from "./PokeCard"
import { Flipper, Flipped } from "react-flip-toolkit"
import { wrap } from "../../styled-system/patterns"


function CardsContainer(props) {
    
    return (
        <Flipper flipKey={props.cardsData.map((card) => card.id).join(",")}>
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
                    <Flipped key={card.id} flipId={card.id}>
                        <div>
                            <PokeCard id={card.id} key={card.id} onCardClick={props.onCardClick} name={card.name} spriteUrl={card.image}/>
                        </div>
                    </Flipped>
                ))}
            </div>
        </Flipper>
    )
}
export default CardsContainer