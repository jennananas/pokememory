import {css} from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'
function Footer(){

    return(
        <div className={flex({
            direction:'row',
            justify:'center',
            align:'center',
            width:'100vw',
            height:'2.5rem',
            bg:'#FBFBFB',
            position:'absolute',
            bottom:'0',
        })}>
            <p className={css({
                color:'#001A6E',
                fontSize:'0.85rem', 
                fontFamily:'Merriweather Sans'
            })}>developped by <a className={css({
                cursor:'pointer'
            })} href="">@jenna_nanas</a></p>
        </div>
    )

} export default Footer