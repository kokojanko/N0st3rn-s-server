import React, { useContext } from 'react'
import { AlertContext } from './Now'

function Alert1 (){

    const alert = useContext(AlertContext) 

    if(!alert) return null

    return(
        <div class="alert" role="alert">
            <div></div>
        </div>
    )
}
export default Alert1