import React, {useState} from 'react'
import { sliderdata } from './sliderdata';
import {FaArrowAltCircleRight, faArrowAltCircleLeft, FaArrowAltCircleLeft } from 'react-icons/fa'

const imgslider = (slides) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
};

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
};

    console.log(current)

    if (!Array.isArray(slides)) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleLeft className="right-arrow" onClick={nextSlide}/>
            {sliderdata.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="compelling art" className='image' />)}
                    
                    </div>

                )

                
                
            })}
            
        </section >
    )
};

export default imgslider;

