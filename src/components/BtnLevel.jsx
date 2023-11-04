import { css } from "../../styled-system/css"
import button from "./button"

function BtnLevel(props){
    return(
        <button className={button({
            visual:'solid', size:'lg'
        })}>{props.level}</button>
    )
}
export default BtnLevel