import React, { useState, useMemo } from 'react'
import StoryNow from './StoryNow'

    export const AlertContext = React.createContext()

function Now(){ 
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'white' : 'black',
      }), [colored])
      const [theme, setTheme] = useState(false)

    const change = useMemo(() => ({
        background: theme ? 'rgb(42, 42, 42)' : 'white',
      }))
    return(
            <div style={styles} className='wrapper posAB'>
                <div style={change} className='posAB'>
                    <button className=' btn btn-light changeBG' onClick={() => setTheme(prev => !prev)}>Изменить задний фон</button>
                    <button className='btn btn-dark changeColor' onClick={() => setColored(prev => !prev)}>Изменить текст</button>
                    <StoryNow />
                </div>
            </div>
    )
}

export default Now