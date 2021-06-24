import React from 'react'
import StoryPast from './StoryPst'

function Past(){
    return(
        <div className='wrapper'>
            <div className='chooseTheme mt'>
                <a href='/DarkTheme'><div className='theme'></div></a>
                <a href='/past'><div className='theme whiteTheme'></div></a>
            </div>
            <StoryPast />
        </div>
    )
}

export default Past 