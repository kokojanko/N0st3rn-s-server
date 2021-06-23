import React from 'react'
import WhatKindom from './WhantKindom'
import Blank from './img/Old_paper4.png'

function Plans(){
    return(
        <div className='wrapper clearfix BGelse h1200'>
            <div className='ConteinerNews'>
                <iframe 
                className='discordWidg clearfix'
                    src="https://discord.com/widget?id=856643368770732042&theme=dark"
                    width="350" height="500"
                    allowtransparency="true" 
                    frameborder="0" 
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">

                </iframe>
            <WhatKindom />
                <div className='news clearfix paperBG'>
                    <div>
                        <h2><i><b>Тестирование сервера 01.07.21</b></i></h2>
                        <p className='fs-3'> <i> Будут созданы и проверены первые датапаки и ивенты.</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans
