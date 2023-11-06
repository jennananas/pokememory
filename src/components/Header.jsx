import {css} from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'


function Header(){

    return (
        <div className={flex({
            direction:'row',
            align:'center',
            justify:'center',
            gap:'1rem',
            bg: '#FBFBFB',
            p: '2rem 3rem',
            mb: '0',
            })}>
                <img src="../src/assets/pokememory_logo.svg" alt="logo" className={css({
                    height: 'auto',
                    width: {lg:'4.5rem', md:'4rem', sm:'3.5rem'}
                })}/>
                <h1 className={css({
                    fontSize: {lg:'4rem', md:'3rem', sm:'2rem'},
                    color: '#001A6E',
                    fontFamily:'Bowlby One',
                    textTransform:'uppercase'
                })}>Pokememory</h1>
        </div>
    )
}

export default Header