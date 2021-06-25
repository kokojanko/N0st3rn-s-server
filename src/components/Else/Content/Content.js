import React from 'react'
import WhatKindom from './WhantKindom'
import AdaptiveElse from '../AdaptiveElse/AdaptiveELse'

function Content(){
    return(
            <div className='ConteinerNews clearfix'>
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
                <div className='news clearfix paperBG thank'>
                    <div>
                        <h1><b><i>Выражается огромная благодарность</i></b></h1>
                        <p className='fs-3'><i>Master и DELETED за помощь в создании боссов, мобов, дропа, сюжета и предметов</i></p>
                    </div>
                </div>
                <AdaptiveElse />
            </div>
    )
}

export default Content