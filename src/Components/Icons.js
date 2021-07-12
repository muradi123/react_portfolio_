import React from 'react'

const Icons = () => {
    return (
        <div className="icon_container">
          <div className="icon_inner">
            <div>
            <span className="share_text">facebook</span>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div>
            <span  className="share_text">twitter</span>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div>
            <span className="share_text">instagram</span>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div>
            <span className="share_text">behance</span>
              <i className="fa fa-behance" aria-hidden="true"></i>
            </div>
            <div>
            <span  className="share_text">dribbble</span>
              <i className="fa fa-dribbble" aria-hidden="true"></i>
            </div>
           
          </div>
        </div>
    )
}

export default Icons
