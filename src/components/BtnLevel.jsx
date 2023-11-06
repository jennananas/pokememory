import { button } from '../../styled-system/recipes'

function BtnLevel(props){
    const classes = button({size:{
        sm:'sm',
        md:'md'
    }})
    return(
        <button className={classes.level}>{props.level}</button>
    )
}
export default BtnLevel