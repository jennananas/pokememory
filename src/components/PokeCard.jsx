import { css } from "../../styled-system/css"
import { flex } from "../../styled-system/patterns"

function PokeCard(props){

    return(
        <div className={flex({
            direction:'column',
            bg:'white',
            borderRadius:'1.5rem',
            w:'18rem',
            h: '18rem',
        })}>
            <img className={css({
                p:'2rem',
                h:'70%',
                borderBottom: '1px solid rgba(20, 18, 4, 0.12)'
            })} src={props.spriteUrl} alt="pokemon sprite" />
            <h3 className={css({
                p:'2rem',
                fontFamily: 'Bowlby One',
                color:'#141204',
                fontSize:'1.25rem',
                textAlign:'center'
            })}>{props.name}</h3>
        </div>
    )



} export default PokeCard