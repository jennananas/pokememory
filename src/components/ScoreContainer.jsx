import { flex } from "../../styled-system/patterns"
import button from "./button"

function ScoreContainer(props){
    return(
        <div className={flex({
            justify:'center',
            gap: '8rem'
          })}>
            <div className={button({
              visual:'score'
            })}>Current Score: {props.currentScore}</div>
            <div className={button({
              visual:'score'
            })}>Best Score: {props.bestScore}</div>
        </div>
    )

}
export default ScoreContainer