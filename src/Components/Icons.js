import React from "react";

const Icons = () => {
  return (
    <div className="icon_container">
      <div className="icon_inner">
        <div>
          <span className="share_text  ">facebook</span>
          <a href="https://www.facebook.com/muradi.jamburia/">
            <i className="fa fa-facebook hover_icon" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <span className="share_text">twitter</span>
          <a href="https://twitter.com/?lang=en">
            <i className="fa fa-twitter hover_icon" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <span className="share_text">instagram</span>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram hover_icon" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <span className="share_text">behance</span>
          <a href="https://www.behance.net/">
            <i className="fa fa-behance hover_icon" aria-hidden="true"></i>
          </a>
        </div>
        <div>
          <span className="share_text">dribbble</span>
          <a href="https://dribbble.com/">
            <i className="fa fa-dribbble hover_icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Icons;
