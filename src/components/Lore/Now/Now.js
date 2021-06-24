import React, {useState} from 'react'
import StoryNow from './StoryNow'

    export const AlertContext = React.createContext()

function Now(){
    return(
            <div className='wrapper'>
            <div className='chooseTheme mt'>
                    <a href='/darkNow'><div className='theme'></div></a>
                    <a href='/past'><div className='theme whiteTheme'></div></a>
                </div>
                <StoryNow />
            </div>
    )
}

export default Now