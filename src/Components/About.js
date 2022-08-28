import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <div className="about">
      <div className="about_container">
        <div className="about_container_inner">
          <p className="about_title wow animate__fadeInUp">HELLO THERE</p>
          <h1 className="about_second_title wow animate__fadeInUp">
            We Are Glint
          </h1>
          <div className="about_line wow animate__fadeInUp"></div>
          <div className="lorem_text wow animate__fadeInUp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </div>
          <div className="counter_container wow animate__fadeInUp">
            <div className="Awards_Received">
              <div className="counter_div">
                <CountUp end={127}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall={true}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Awards Received</p>
              </div>
            </div>

            <div className="Cups_of_Coffee">
              <div className="counter_div">
                <CountUp end={1505}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall={true}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Cups of Coffee</p>
              </div>
            </div>
            <div className="Projects_Completed">
              <div className="counter_div">
                <CountUp end={109}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="Happy_Clients">
              <div className="counter_div">
                <CountUp end={102}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
