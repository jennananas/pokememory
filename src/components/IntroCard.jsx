import {css} from '../../styled-system/css'
import { flex, center } from '../../styled-system/patterns'
import BtnLevel from './BtnLevel'

function IntroCard(props){
    const handleLevelSelect = (selectedLevel) => {
        props.onLevelSelected(selectedLevel);
        console.log(selectedLevel)
    };
    return(
        <div className={center({
            height:'80vh',
        })}>
            <div className={css({
            width:{lg:'49rem', md:'49rem', sm:'70%'},
            height:{lg:'20rem', md:'20rem',sm:'40rem'},
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
                    mb:'1rem'
                })}>Rules</h1>
                <p className={css({
                    fontSize:'1.5rem',
                    fontFamily:'Merriweather Sans',
                    mb:'1rem'
                })}>Don't click on the same card twice</p>
            </div>
            
            <div className={flex({
                direction:{lg:'row', md:'row', sm:'column'},
                gap:'4.75rem',
                justify:'center',
                align:{sm:'center'}
            })}>
                <BtnLevel onLevelSelected={handleLevelSelect} level='Easy'/>
                <BtnLevel onLevelSelected={handleLevelSelect} level='Medium'/>
                <BtnLevel onLevelSelected={handleLevelSelect} level='Hard'/>
            </div>
        </div>
        </div>
        

    )
} export default IntroCard