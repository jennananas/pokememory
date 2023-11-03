import {css} from '../../styled-system/css'
import { flex, center } from '../../styled-system/patterns'
import BtnLevel from './BtnLevel'
function IntroCard(){
    return(
        <div className={center({
            height:'80vh'
        })}>
            <div className={css({
            width:'49rem',
            height:'20rem',
            bg: '#FBFBFB', 
            borderRadius: '16px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        })}>
            <div className={css({
                    color:'#001A6E',
                    textAlign:'center',
                    p: '2rem 3rem'
                })}>
                <h1 className={css({
                    fontSize:'2rem',
                    fontFamily: 'Bowlby One',
                    mb:'2rem'
                })}>Rules</h1>
                <p className={css({
                    fontSize:'1.5rem',
                    fontFamily:'Merriweather Sans',
                    mb:'2rem'
                })}>Don't click on the same card twice</p>
            </div>
            
            <div className={flex({
                direction:'row',
                gap:'4.75rem',
                justify:'center',
            })}>
                <BtnLevel level='Easy'/>
                <BtnLevel level='Medium'/>
                <BtnLevel level='Hard'/>
            </div>
        </div>
        </div>
        

    )
} export default IntroCard