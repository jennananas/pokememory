import PokeCard from "./PokeCard"
import { css } from "../../styled-system/css"
import { grid, wrap } from "../../styled-system/patterns"


function CardsContainer() {
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
            <PokeCard name='Pokemon Name' spriteUrl='./src/assets/spriteTest.svg'/>
            <PokeCard name='Pokemon Name' spriteUrl='./src/assets/spriteTest.svg'/>
            <PokeCard name='Pokemon Name' spriteUrl='./src/assets/spriteTest.svg'/>
            <PokeCard name='Pokemon Name' spriteUrl='./src/assets/spriteTest.svg'/>
            <PokeCard name='Pokemon Name' spriteUrl='./src/assets/spriteTest.svg'/>
            <PokeCard name='Pokemon Name' spriteUrl='./src/assets/spriteTest.svg'/>
            <PokeCard name='Pokemon Name' spriteUrl='./src/assets/spriteTest.svg'/>
        </div>
    
    )
} export default CardsContainer