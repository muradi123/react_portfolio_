import React from 'react'
import Slick from './Slick'
import Comments from './Comments'
const Slider = () => {
    return (
        <div className="slider_container">
            <div className="slider_inner">
                <div className="slider_header">
                <p class="wow animate__fadeInUp" >OUR CLIENTS</p>
                    <h1 className="wow animate__fadeInUp">Glint has been honored to partner up with these clients</h1>
                </div>
                <Slick  />
                <div className="slider_line wow animate__fadeInUp"></div>
                <Comments />
            </div>
        </div>
    )
}

export default Slider
