import React from "react";
import Brush from "../images/paint-roller.png";
import Ilustration from "../images/ilustration.png";
import Megaphone from "../images/megaphone.png";
import Planet from "../images/planet-earth.png";
import Block from "../images/block.png";
import Lego from "../images/lego.png";

const Work = () => {
  return (
    <div className="what_we_do">
      <div className="what_whe_do_container">
        <div className="what_whe_do_header">
          <p className="wow animate__fadeInUp">WHAT WE DO</p>
          <h1 className="wow animate__fadeInUp">
            We’ve got everything you need to launch and grow your business
          </h1>
          <div className="what_we_do_line wow animate__fadeInUp"></div>
        </div>
        <div className="work_services ">
          <div className="work_services_flex wow animate__fadeInUp">
            <div className="work_icon">
              <img src={Brush} />
            </div>
            <div className="title_text">
              <h1>Brand Identity</h1>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
          <div className="work_services_flex wow animate__fadeInUp">
            <div className="work_icon">
              <img src={Ilustration} />
            </div>
            <div className="title_text">
              <h1>Illustration</h1>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
          <div className="work_services_flex wow animate__fadeInUp">
            <div className="work_icon">
              <img src={Megaphone} />
            </div>
            <div className="title_text">
              <h1>Marketing</h1>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
          <div className="work_services_flex wow animate__fadeInUp">
            <div className="work_icon">
              <img src={Planet} />
            </div>
            <div className="title_text">
              <h1>Web Design</h1>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
          <div className="work_services_flex wow animate__fadeInUp">
            <div className="work_icon">
              <img src={Block} />
            </div>
            <div className="title_text">
              <h1>Packaging Design</h1>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
          <div className="work_services_flex wow animate__fadeInUp">
            <div className="work_icon">
              <img src={Lego} />
            </div>
            <div className="title_text">
              <h1>Web Development</h1>
              <p>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
