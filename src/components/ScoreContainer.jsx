import { flex } from "../../styled-system/patterns"
import {button} from "../../styled-system/recipes"

function ScoreContainer(props){
    const classes = button({size:{
        sm:'sm',
        md:'md', 
        lg:'lg'
    }})
    return(
        <div className={flex({
            justify:'center',
            gap: '8rem',
            sm:{
                gap:'2rem',
                padding:'2rem'
            },
            md:{
                flexDirection: 'column',
                alignItems:'center'

            },
            lg:{
                flexDirection:'row'
            }
          })}>
            <div className={classes.score}>Current Score: {props.currentScore}</div>
            <div className={classes.score}>Best Score: {props.bestScore}</div>
        </div>
    )

}
export default ScoreContainer