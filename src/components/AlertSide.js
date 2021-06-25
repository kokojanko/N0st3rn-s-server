import React, { useContext } from 'react'
import { AlertContext } from './Sidebar'

function Alert1 (){

    const alert = useContext(AlertContext) 

    if(!alert) return null

    return(
        <div class="sideAlert alert" role="alert">
            <a href='/main' className='nav-item nodec'>Main</a>
            <a href='/features' className='nav-item nodec'>Features</a>
            <a href='/else' className='nav-item nodec'>Else</a>
        <div class="dropdown ">
            <button class="dropbtn Nbg">Lore &darr;</button>
            <div class="dropdown-content">
            <a href="/past">The age of ancient</a>
            <a href="/Now">Age of finding</a>
        </div>
        </div>
        </div>
    )
}
export default Alert1