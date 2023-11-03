import {css} from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'


function Header(){

    return (
        <div className={flex({
            direction:'row',
            align:'center',
            justify:'center',
            gap:'1rem',
            bg: '#FBFBFB'
            })}>
                <img src="../src/assets/pokememory_logo.svg" alt="logo" className={css({
                    height:'4rem',
                    width: '4rem'
                })}/>
                <h1 className={css({
                    fontSize:'4rem',
                    color: '#001A6E',
                    fontFamily:'Bowlby One',
                    textTransform:'uppercase'
                })}>Pokememory</h1>
        </div>
    )
}

export default Header