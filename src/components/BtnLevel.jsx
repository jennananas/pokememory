import { button } from '../../styled-system/recipes'
import { useState } from 'react'

function BtnLevel(props){

    const handleClick = () => {
        props.onLevelSelected(props.level)
        console.log(props.level)
    }
    const classes = button({size:{
        sm:'sm',
        md:'md'
    }})
    return(
        <button onClick={handleClick} className={classes.level} value={props.level}>{props.level}</button>
    )
}
export default BtnLevel