import React from 'react'
import StoryPast from './StoryPst'

function DarkPast(){
    return(
        <div className='wrapper BGblack'>
            <div className='sidebarblack BGblack'></div>
            <div className='chooseTheme mt'>
                    <a href='/DarkTheme'><div className='theme'></div></a>
                    <a href='/past'><div className='theme whiteTheme'></div></a> 
                </div>
            <StoryPast />
        </div>
    )
}

export default DarkPast