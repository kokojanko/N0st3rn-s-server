import React from 'react'

function Buttons({toogle}){
    return(
        <div>
            <button onClick={toogle} className='button btn-primary' >Подробнее</button>
        </div>
    )
}
export default Buttons 