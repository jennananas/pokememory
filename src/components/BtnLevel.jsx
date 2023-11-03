import { css } from "../../styled-system/css"

function BtnLevel(props){
    return(
        <button className={css({
            bg:'#F5B617',
            color:'#FBFBFB',
            fontFamily:'Bowlby One',
            fontSize:'1.25rem',
            w:'12rem',
            h:'3.5rem',
            borderRadius:'1rem', 
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            cursor:'pointer'
        })}>{props.level}</button>
    )
}
export default BtnLevel