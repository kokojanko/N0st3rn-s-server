import React, {useState} from 'react'
import Test from '../../Main/img/test2.png'
import Buttons from './Buttons1'
import Alert1 from './Alert1'
import Triangle from './img/Triangle.png'
import Search from './img/Seacrch.gif'
import StoryNow from './StoryNow'


function Now(){

    return(
            <div className='wrapper BGblack'>
            <div className='sidebarblack BGblack'></div>
            <div className='chooseTheme mt'>
                    <a href='/darkNow'><div className='theme'></div></a>
                    <a href='/now'><div className='theme whiteTheme'></div></a>
                </div>
                <StoryNow />
            </div>
    )
}

export default Now