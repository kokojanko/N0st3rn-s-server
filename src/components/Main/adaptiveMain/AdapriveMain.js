import React from 'react'
import Test from '../img/test2.png'
import Contact from '../Calls/contact'

function AdapriveMain(){
    return(
        <div className="adaptiveWrapper">
            <div className='ADdisc'>
            <div>
            <ul>
                    <li>
                        N0st3rn server это RP сервер,
                         где есть 2 эры и 3 королевства
                        <ol>
                            <li>The age of ancient</li>
                            <li>Age of finding</li>
                        </ol>
                    </li>
                    <li>
                        Оригинальные предметы, события, лор, датапакии, задания
                    </li>
                    <li>
                        Королевста где ты можешь быть обычным гражданином (ну или паладином) или же стать самим королём что даже боги вздрогнут. Хотя может вы предпочтёте более мирную жизнь в доли от всех этих войн.
                    </li>
                </ul>
            </div>
            </div>
            <div>
                <img src={Test} width='190px' height='250px' className='ADimgDisc'></img>
                <img src={Test} width='190px' height='250px' className='ADimgDisc'></img>
            </div>
            <div className='ADcall'>
            <h1>Как с нами связаться?</h1>
                    <ul className='fs-5'>
                        <li>discord: <a href='https://discord.gg/2ryT66Srja'>https://discord.gg/2ryT66Srja</a></li>
                        <li>VK:..............</li>
                        <li>Служба поддержки прямо снизу от этого текста 	&#128736;</li>
                    </ul>
            </div>
            <Contact />
        </div>
    )
}

export default AdapriveMain