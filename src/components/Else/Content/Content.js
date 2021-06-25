import React from 'react'
import WhatKindom from './WhantKindom'
import AdaptiveElse from '../AdaptiveElse/AdaptiveELse'
import Svitok from '../img/svitok.png'

function Content(){
    return(
            <div className='ConteinerNews clearfix'>
                <iframe
                className='discordWidg'
                    src="https://discord.com/widget?id=856643368770732042&theme=dark"
                    width="350" height="500"
                    allowtransparency="true" 
                    frameborder="0" 
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">

                </iframe>
            <WhatKindom />
                <div className='thank SvitokBG'>
                    <div className='context'>
                    <h3><b><i>Бета-тест сервера</i></b></h3>
                    <p className='fs-4'>состоится 05.08.21 на который приглашены все желающие</p>
                    <h3><b><i>Выражается большая благодарность</i></b></h3>
                    <p className='fs-4'>Master и DELETED за помощь в создании сюжета, боссов, мобов и т.д</p>
                    </div>
                </div>
                <AdaptiveElse />
            </div>
    )
}

export default Content