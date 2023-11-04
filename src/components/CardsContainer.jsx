import PokeCard from "./PokeCard"
import { css } from "../../styled-system/css"
import { grid, wrap } from "../../styled-system/patterns"


function CardsContainer() {
    return (
        <div className={wrap({
            m: '10rem 10rem',
            gap:'1.25rem',
            align:'center',
            justify:'center'
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