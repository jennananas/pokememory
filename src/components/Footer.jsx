import {css} from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'
function Footer(){

    return(
        <div className={flex({
            direction:'row',
            justify:'center',
            align:'center',
            width:'100vw',
            height:{sm:'2rem', md:'2rem', lg:'3rem', xl:'4rem'},
            bg:'#FBFBFB',
            position:'fixed',
            bottom:'0',
            left:'0'
        })}>
            <p className={css({
                color:'#001A6E',
                fontSize:{sm:'0.8rem', md:'1rem', lg:'1.5rem', xl:'1.5rem'}, 
                fontFamily:'Merriweather Sans'
            })}>developped by <a className={css({
                cursor:'pointer'
            })} href="">@jenna_nanas</a></p>
        </div>
    )

} export default Footer