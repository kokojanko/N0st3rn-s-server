import React, {useState, useEffect} from 'react'
import Test from './img/test2.png'

function Discription(){

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
        <div className='wrapper'>
            <div className='miniDiscription'>
            <div className='disc'>
                <h1>Что такое server N0st3rn
                    <br />
                    &#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;&#8254;

                </h1>
                <ul>
                    <li>
                        N0st3rn(не забыть вставить название сервера) это RP сервер,
                         где есть (написать amount эр) эр
                        <ol>
                            <li>(не зыбать название эры)</li>
                            <li>(не зыбать название эры)</li>
                            <li>(не зыбать название эры)</li>
                        </ol>
                    </li>
                    <li>
                        Оригинальные предметы, события, лор, датапакии, задания
                    </li>
                    <li>
                        Королевста где ты можешь быть обычным гражданином (ну или паладином) или же стать самим королём что даже боги вздрогнут. Хотя может вы предпочтёте более мирную жизнь торговца
                    </li>
                </ul>
            </div>
            <div className="slider">
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
            </div>
        </div>
    )
}

export default Discription