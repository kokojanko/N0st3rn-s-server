import React from 'react'

function Buttons({toogle}){
    return(
        <div>
            <button onClick={toogle} className='button btn-primary ADbutton' >Navigation</button>
        </div>
    ) 
}
export default Buttons 