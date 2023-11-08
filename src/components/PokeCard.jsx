import { css } from "../../styled-system/css"
import { flex } from "../../styled-system/patterns"

function PokeCard(props){
    const handleClick = () => {
        props.onCardClick(props.id)
    } 

    return(
        <div data-key={props.id} onClick={(e) => handleClick(e.currentTarget)} className={flex({
            direction:'column',
            bg:'#FBFBFB',
            borderRadius:'1.5rem',
            w: {sm:'10rem', md:'15rem', lg:'12rem', xl:'20rem'},
            h: '100%'
        })}>
            <img className={css({
                p:'2rem',
                h:'70%',
                sm:{
                    p:'1rem'
                },
                borderBottom: '1px solid rgba(20, 18, 4, 0.12)'
            })} src={props.spriteUrl} alt="pokemon sprite" />
            <h3 className={css({
                p:{sm:'0.5rem', md:'1rem', lg:'1rem'},
                fontFamily: 'Merriweather Sans',
                textTransform: 'uppercase',
                color:'#141204',
                fontSize:{sm:'1rem', md:'1.5rem', lg:'1.2rem'},
                textAlign:'center',
            })}>{props.name}</h3>
        </div>
    )



} export default PokeCard