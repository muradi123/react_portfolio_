import React from 'react'
import BackToTop from "react-back-to-top-button";
import Top from '../images/top.png'
const BackTop = () => {
    return (
        <div >
          <BackToTop
             showOnScrollDown
             showAt={10}
             speed={2000}
             easing="easeInOutQuint"
            >
            <div className="back_icon"><img src={Top}/></div>
          </BackToTop>
        </div>
    )
}

export default BackTop
