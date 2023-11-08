import PokeCard from "./PokeCard"
import { Flipper, Flipped } from "react-flip-toolkit"
import { container, grid, stack } from "../../styled-system/patterns"


function CardsContainer(props) {
    return (
        <Flipper className={stack({
            align:'center', 
            justify:'center',
            margin:{sm:'5rem 0rem'}
        })} flipKey={props.cardsData.map((card) => card.id).join(",")}>
            <div className={grid({
                m: {sm:'0rem', md:'2rem', lg:'2rem 10rem', xl:'3rem 10rem'},
                gap:{sm:'1rem', md:'1rem', lg:'3rem', xl:'3rem'},
                minChildWidth:{sm:'5rem', md:'15rem', lg:'12rem', xl:'20rem'},
                columns:{sm:'2', mdToXl:'4'}
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