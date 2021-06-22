import React, {useState, useEffect} from 'react'
import Contact from './contact'
import Test from '../img/test2.png'

function Calls(){

    const img = [
        <img key={Test} src={Test} />,
        <img key={Test} src={Test} />,
        <img key={Test} src={Test} />,
        <img key={Test} src={Test} />,
        <img key={Test} src={Test} />,
    ]
    
    const [activeIndex, setActiveIndex] = useState(0);
     
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 3000)
        return () => clearInterval()
        }, [])
     
            const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
            const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return(
        <div className='wrapper clearfix'>
        
            <div className="slider fl">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
        <div className='miniDiscription'>
            <div className='disc fr '>
            <h1 className='titleCall'>Обратная связь 
            <br /> &#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;
            </h1>
                <div className='Caller'>
                    <h2>Как с нами связаться?</h2>
                    <ul>
                        <li>discord: <a href='https://discord.gg/2ryT66Srja'>https://discord.gg/2ryT66Srja</a></li>
                        <li>VK:..............</li>
                        <li>Что то ещё</li>
                        <li>Служба поддержки прямо справа от этого текста 	&#128736;</li>
                    </ul>
                </div>
                <Contact />
            </div>  
        </div>
        </div>
    )
}

export default Calls