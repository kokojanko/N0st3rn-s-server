import React from 'react'
import Test from '../Main/img/test2.png'

function Features(){
    return(
        <div className='wrapper'>
            <h1 className='WhatIsGoingOnNow'> What will you find on this server
                    <br />
            &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;
                    <br />
                 Что вы найдёте на этом сервере
            </h1>
            <h2 className='mt'>
                Вас приветсвует Лаборотория Zaga_81
            </h2>
            <p className='fs1'>
                Мы проводим эксперементы создавая виртульное пространство которое переносит вас в прошло
                    <br />
                Вы получите незабываемые <b>приключения</b>, а мы - чуть чуть <b>информации</b>
            </p>
            <div className='containerMobs'>
                <h3>
                    С кем вы встретитесь
                </h3>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
                <div className='containerMobsOne'>
                     <img src={Test} width='190px' height='250px'></img>
                     LUL
                </div>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
                <h3>
                    Что вы найдёте
                </h3>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
                <div className='containerMobsOne'>
                     <img src={Test} width='190px' height='250px'></img>
                     LUL
                </div>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
                <div className='containerMobsOne'>
                    <img src={Test} width='190px' height='250px'></img>
                    LUL
                </div>
            </div>
        </div>
    )
}

export default Features